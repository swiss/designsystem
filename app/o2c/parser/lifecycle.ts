type lifecycleType =
  | undefined
  | 'created'
  | 'mounted'
  | 'beforeMount'
  | 'beforeUpdate'
  | 'updated'
  | 'beforeDestroy'
  | 'destroyed'

class Lifecycle {
  /**
   * The full input string, used to slice text directly from the input
   */
  fullInput = ''

  /**
   * List of reactive properties
   */
  dataIdentifiers: any = {}

  /**
   * List of method identifiers
   */
  methodIdentifiers: string[] = []

  /**
   * List of computed identifiers
   */
  computedIdentifiers: string[] = []

  /**
   * List of prop identifiers
   */
  propsIdentifiers: string[] = []

  /**
   * AST of the lifecycle object
   */
  data: any

  /**
   * The lifecycle type (created, mounted .. etc)
   */
  type: lifecycleType = undefined

  /**
   * The import to use (eg: onMounted, onUpdated .. etc)
   */
  import = ''

  /**
   * Constructor
   *
   * @param {any} data The lifecycle object
   */
  constructor(data: any) {
    this.data = data
  }

  /**
   * Set lifecycle type
   *
   * @param  {lifecycleType} type The lifecycle type
   * @return {this}               The current instance
   */
  setType(type: lifecycleType): this {
    this.type = type
    return this
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
   * Set data identifiers to replace `this` keyword
   *
   * @param  {any}  dataIdentifiers List of reactive properties
   * @return {this}                 The current instance
   */
  setDataIdentifiers(dataIdentifiers: any): this {
    this.dataIdentifiers = dataIdentifiers
    return this
  }

  /**
   * Set prop identifiers to replace `this` keyword
   *
   * @param  {string[]} propsIdentifiers List of prop identifiers
   * @return {this}                      The current instance
   */
  setPropsIdentifiers(propertiesIdentifiers: string[]): this {
    this.propsIdentifiers = propertiesIdentifiers
    return this
  }

  /**
   * Set method identifiers to check when isComputed is true
   *
   * @param  {string[]} methodIdentifiers List of method identifiers
   * @return {this}                       The current instance
   */
  setMethodIdentifiers(methodIdentifiers: string[]): this {
    this.methodIdentifiers = methodIdentifiers
    return this
  }

  /**
   * Set computed identifiers to replace `this` keyword inside  functions
   *
   * @param  {string[]} computedIdentifiers The computed identifiers
   * @return {this}                         The current instance
   */
  setComputedIdentifiers(computedIdentifiers: string[]): this {
    this.computedIdentifiers = computedIdentifiers
    return this
  }

  /**
   * Replace `this` keyword inside function body with
   * relevant reactive property. Regex is used instead of
   * AST for simplicity. Maybe this can be improved in the future.
   *
   * @param  {string} functionBody The function body
   * @return {string}              The updated function body
   */
  replaceThisKeyword(functionBody: string): string {
    return functionBody.replaceAll(
      /this.(?<id>[\w$]+)/gu,
      (match, identifier) => {
        const type = this.dataIdentifiers[identifier]
        if (type) {
          return type === 'ref' ? `${identifier}.value` : identifier
        }

        // Check if identifier is a method or computed
        const isMethod = this.methodIdentifiers.includes(identifier)
        const isComputed = this.computedIdentifiers.includes(identifier)
        if (isMethod || isComputed) {
          // if (isMethod && this.methodType === 'computed') {
          return identifier
        }

        // Check if identifier is a prop
        const isProperty = this.propsIdentifiers.includes(identifier)
        if (isProperty) {
          return `props.${identifier}`
        }

        return match
      }
    )
  }

  /**
   * Get the import to use (eg: onMounted, onUpdated .. etc)
   *
   * @return {string} The import to use (eg: onMounted, onUpdated .. etc)
   */
  getImport(): string {
    return this.import
  }

  /**
   * Convert lifecycle object to Vue 3 syntax
   *
   * @return {string} The converted lifecycle string
   */
  convert(): string {
    const { value } = this.data
    const { body } = value

    const bodyString = this.fullInput.slice(body.start, body.end).trim()
    const updatedBody = this.replaceThisKeyword(bodyString)

    const typesMap: {
      [key: string]: string
    } = {
      mounted: 'onMounted',
      updated: 'onUpdated',
      created: 'onCreated',
      beforeMount: 'onBeforeMount',
      beforeUpdate: 'onBeforeUpdate',
      beforeDestroy: 'onBeforeUnmount',
      destroyed: 'onUnmounted',
    }

    if (this.type === undefined) {
      return updatedBody
    }

    if (this.type === 'created') {
      // Remove curly braces from created function
      return updatedBody.slice(1, -1).trim()
    }

    this.import = typesMap[this.type]

    return `${this.import}(() => ${updatedBody})`
  }
}

export default Lifecycle
