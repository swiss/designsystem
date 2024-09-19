import { parse } from 'acorn'
import DataParser from './data'
import MethodParser from './methods'
import PropertiesParser from './props'
import Lifecycle from './lifecycle'

type CallbacksMap = {
  [key: string]: string
}

type lifecycleType =
  | 'created'
  | 'mounted'
  | 'beforeMount'
  | 'beforeUpdate'
  | 'updated'
  | 'beforeDestroy'
  | 'destroyed'

class Parser {
  /**
   * The input string to parse
   */
  input = ''

  /**
   * The AST of the input
   */
  ast: any = {}

  /**
   * Map of callbacks to trigger for each property
   */
  callbacksMap: CallbacksMap = {
    data: 'dataCallback',
    props: 'propsCallback',
    computed: 'computedCallback',
    methods: 'methodsCallback',
    watch: 'watchCallback',
    created: 'lifecycleCallback',
    mounted: 'lifecycleCallback',
    beforeDestroy: 'lifecycleCallback',
    destroyed: 'lifecycleCallback',
    beforeMount: 'lifecycleCallback',
    beforeUpdate: 'lifecycleCallback',
    updated: 'lifecycleCallback',
  }

  /**
   * List of output lines
   */
  output: string[] = []

  /**
   * List of imports (eg: ref, computed, watch ...)
   */
  imports: string[] = []

  /**
   * List of data identifiers (from data object)
   */
  dataIdentifiers: any = {}

  /**
   * List of method identifiers (from methods)
   */
  methodIdentifiers: string[] = []

  /**
   * List of props identifiers (from props object)
   */
  propsIdentifiers: string[] = []

  /**
   * List of computed identifiers (from computed methods)
   */
  computedIdentifiers: string[] = []

  /**
   * Show heading comments for each section (eg: // Data, // Methods .. etc)
   */
  showSectionComment = true

  /**
   * Constructor
   *
   * @param {string} input The input string
   * @param {object} props initial props
   */
  constructor(input: string, constructorProperties: Partial<Parser> = {}) {
    this.input = input
    Object.assign(this, constructorProperties)
  }

  commentInlineSection(comment: string): string | undefined {
    return this.showSectionComment ? `// ${comment}` : undefined
  }

  outputAddLines(...arguments_: any[]) {
    this.output.push(
      ...arguments_.filter((line) => {
        return !(line === null || line === undefined)
      })
    )
  }

  /**
   * Get import declarations from the top of the input
   *
   * @return {string[]} List of import declarations
   */
  getImportDeclaration(): string[] {
    const importDeclarations = this.ast.body.filter((node: any) => {
      return node.type === 'ImportDeclaration'
    })

    const imports: string[] = []

    for (const importDeclaration of importDeclarations) {
      const { start, end } = importDeclaration

      imports.push(this.input.slice(start, end))
    }

    return imports
  }

  /**
   * Get properties from the export default declaration
   *
   * @throws {Error} If no export declaration is found
   * @return {object} The properties
   */
  getProperties() {
    const exportDeclaration = this.ast.body.find((node: any) => {
      return node.type === 'ExportDefaultDeclaration'
    })

    if (!exportDeclaration) {
      throw new Error('No export declaration found')
    }

    const results: { [key: string]: any } = {}
    const propertiesName = Object.keys(this.callbacksMap)

    const { properties } = exportDeclaration.declaration
    for (const propertyName of propertiesName) {
      const property = properties.find((property: any) => {
        const { name } = property.key
        return name === propertyName
      })

      results[propertyName] = property
    }

    return results
  }

  /**
   * Handle lifecycle callback (created, mounted .. etc)
   *
   * @param {any}           data The lifecycle object
   * @param {lifecycleType} key  The lifecycle type (created, mounted .. etc)
   */
  lifecycleCallback(data: any, key: lifecycleType) {
    const lifecycleParser = new Lifecycle(data)
    const convertedData = lifecycleParser
      .setfullInput(this.input)
      .setDataIdentifiers(this.dataIdentifiers)
      .setPropsIdentifiers(this.propsIdentifiers)
      .setMethodIdentifiers(this.methodIdentifiers)
      .setComputedIdentifiers(this.computedIdentifiers)
      .setType(key)
      .convert()

    const title = key.charAt(0).toUpperCase() + key.slice(1)
    this.outputAddLines(
      '',
      this.commentInlineSection(`${title}`),
      convertedData
    )

    const hookImport = lifecycleParser.getImport()
    if (hookImport) {
      this.imports.push(hookImport)
    }
  }

  /**
   * Handle data callback
   *
   * @param {any} data Ast related to data
   */
  dataCallback(data: any) {
    const dataParser = new DataParser(data)
    const convertedData = dataParser.setfullInput(this.input).convert()
    const dataImports = dataParser.getImports()
    this.dataIdentifiers = dataParser.getIdentifiers()

    if (convertedData.length === 0) {
      return
    }

    this.imports.push(...dataImports)
    this.outputAddLines('', this.commentInlineSection('Data'), ...convertedData)
  }

  /**
   * Handle methods callback
   *
   * @param {any} methods Ast related to methods
   */
  methodsCallback(methods: any) {
    const methodParser = new MethodParser(methods)
    const convertedMethods = methodParser
      .setfullInput(this.input)
      .setDataIdentifiers(this.dataIdentifiers)
      .setPropsIdentifiers(this.propsIdentifiers)
      .convert()

    this.methodIdentifiers = methodParser.getMethodIdentifiers()
    this.outputAddLines(
      '',
      this.commentInlineSection('Methods'),
      ...convertedMethods
    )
  }

  /**
   * Handle computed callback
   *
   * @param {any} computed Ast related to computed methods
   */
  computedCallback(computed: any) {
    const methodParser = new MethodParser(computed)
    const convertedMethods = methodParser
      .setfullInput(this.input)
      .setMethodType('computed')
      .setDataIdentifiers(this.dataIdentifiers)
      .setMethodIdentifiers(this.methodIdentifiers)
      .setPropsIdentifiers(this.propsIdentifiers)
      .convert()

    this.computedIdentifiers = methodParser.getComputedIdentifiers()

    this.outputAddLines(
      '',
      this.commentInlineSection('Computed'),
      ...convertedMethods
    )
    this.imports.push('computed')
  }

  /**
   * Handle watch callback
   *
   * @param {any} watch Ast related to watch methods
   */
  watchCallback(watch: any) {
    const methodParser = new MethodParser(watch)
    const convertedMethods = methodParser
      .setfullInput(this.input)
      .setMethodType('watch')
      .setDataIdentifiers(this.dataIdentifiers)
      .setMethodIdentifiers(this.methodIdentifiers)
      .setPropsIdentifiers(this.propsIdentifiers)
      .setComputedIdentifiers(this.computedIdentifiers)
      .convert()

    this.outputAddLines(
      '',
      this.commentInlineSection('Watch'),
      ...convertedMethods
    )
    this.imports.push('watch')
  }

  /**
   * Handle props callback
   *
   * @param {any} props Ast related to props
   */
  propsCallback(properties: any) {
    const dataParser = new PropertiesParser(properties)
    const convertedData = dataParser.setfullInput(this.input).convert()

    this.propsIdentifiers = dataParser.getIdentifiers()
    this.outputAddLines('', this.commentInlineSection('Props'), convertedData)
  }

  /**
   * Entry point
   *
   * @return {object} The parsed data object
   */
  parse() {
    this.ast = parse(this.input, {
      ecmaVersion: 2024,
      sourceType: 'module',
    })

    const properties = this.getProperties()

    // Loop through keys and trigger the related callback
    for (const [key, callbackName] of Object.entries(this.callbacksMap)) {
      if (!properties[key]) {
        continue
      }

      const callbackFunction = this[callbackName as keyof this]

      if (typeof callbackFunction !== 'function') {
        throw new TypeError(
          `Parser class does not have a ${callbackName} method`
        )
      }

      callbackFunction.call(this, properties[key], key)
    }

    return {
      importDeclarations: this.getImportDeclaration(),
      output: this.output,
      imports: this.imports,
    }
  }
}

export default Parser
