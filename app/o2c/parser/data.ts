class DataParser {
  /**
   * List of vue imports
   */
  imports: {
    [string: string]: boolean
  } = {
    reactive: false,
    ref: false,
  }

  /**
   * The properties of the data object
   */
  properties: any[] = []

  /**
   * The full input string, used to slice text directly from the input
   */
  fullInput = ''

  /**
   * List of identifiers and their reactive type (ref or reactive)
   */
  identifiers: {
    [key: string]: string
  } = {}

  /**
   * Get data properties and parse to return reactive properties
   * `reactive` will be used for complex objects and `ref` for simple values
   *
   * @param {any} data The data property of a Vue component
   */
  constructor(data: any) {
    const { type } = data.value

    /* Get properties from data
     * Data value can be a plain object or a function that returns an object
     * function can be arrow function or regular function
     */
    const isObject = type === 'ObjectExpression'
    const isFunction = type === 'FunctionExpression'
    const isArrowFunction = type === 'ArrowFunctionExpression'

    if (isObject) {
      this.getObjectProperties(data.value)
    } else if (isFunction) {
      this.getFunctionProperties(data.value)
    } else if (isArrowFunction) {
      this.getArrowFunctionProperties(data.value)
    }
  }

  /**
   * Set full input string
   *
   * @param  {string} fullInput The full input string, used to slice text directly from the input
   * @return {this}             The current instance
   */
  setfullInput(fullInput: string): this {
    this.fullInput = fullInput
    return this
  }

  /**
   * Get properties from data object
   *
   * @example:
   * `data: {
   * 	foo: 'bar',
   * }`
   *
   * @param {any} nodeValue The data property of a Vue component
   */
  getObjectProperties(nodeValue: any) {
    this.properties = nodeValue.properties
  }

  /**
   * Get properties from a regular function
   *
   * @example:
   * `data() {
   * 	return {
   * 		foo: 'bar',
   * 	};
   * }`
   *
   * @param {any} nodeValue The data property of a Vue component
   */
  getFunctionProperties(nodeValue: any) {
    const findReturnStatement = nodeValue.body.body.find((node: any) => {
      return node.type === 'ReturnStatement'
    })

    this.properties = findReturnStatement.argument.properties
  }

  /**
   * Get properties from an arrow function
   *
   * @example:
   * `data: () => ({
   * 	foo: 'bar',
   * })`
   *
   * @param nodeValue The data property of a Vue component
   */
  getArrowFunctionProperties(nodeValue: any) {
    let properties: any[] = []

    const { type, properties: nodeProperties } = nodeValue.body
    switch (type) {
      case 'ObjectExpression': {
        properties = nodeProperties
        break
      }

      case 'BlockStatement': {
        this.getFunctionProperties(nodeValue)
        return
      }

      default: {
        properties = []
        break
      }
    }

    this.properties = properties
  }

  /**
   * Get a an array of imports that have been used
   *
   * @return {string[]} The imports list
   */
  getImports(): string[] {
    return Object.keys(this.imports).filter((key: string) => {
      return this.imports[key]
    })
  }

  /**
   * Convert data properties to reactive properties strings
   *
   * @return {string[]} The reactive properties
   */
  convert(): string[] {
    const output: string[] = []
    for (const property of this.properties) {
      const { name: keyName, value: keyValue } = property.key

      const identifier = keyName || keyValue

      // Check if property value is a complex object (object, array, etc.)
      const isObject = property.value.type !== 'Literal'

      if (isObject) {
        // Extract value from input string
        const { start, end } = property.value
        const value = this.fullInput.slice(start, end)

        // Convert to reactive
        output.push(`const ${identifier} = reactive(${value});`)
        this.imports.reactive = true

        this.identifiers[identifier] = 'reactive'
        continue
      }

      // If not, it's a simple value
      output.push(`const ${identifier} = ref(${property.value.raw});`)
      this.imports.ref = true
      this.identifiers[identifier] = 'ref'
    }

    return output
  }

  /**
   * Get the identifiers and their reactive type
   *
   * @return {object} The identifiers and their reactive type
   */
  getIdentifiers() {
    return this.identifiers
  }
}

export default DataParser
