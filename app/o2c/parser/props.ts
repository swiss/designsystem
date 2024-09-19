/* eslint-disable unicorn/prevent-abbreviations */
/**
 * Parser for props
 */
class PropsParser {
  /**
   * The full input string, used to slice text directly from the input
   */
  fullInput = ''

  /**
   * List of props
   */
  allProperties: any

  /**
   * List of prop identifiers
   */
  identifiers: string[] = []

  /**
   * constructor
   *
   * @param {any} data Props object
   */
  constructor(data: any) {
    this.allProperties = data
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
   * Get list of prop identifiers
   *
   * @return {string[]} List of prop identifiers
   */
  getIdentifiers(): string[] {
    return this.identifiers
  }

  /**
   * Extract identifiers from props
   */
  extractIdentifiers() {
    const { value } = this.allProperties
    const { properties, elements } = value

    // If properties is defined, it means that the props are defined as an object
    if (properties) {
      for (const property of properties) {
        const { name } = property.key
        this.identifiers.push(name)
      }

      return
    }

    // If elements is defined, it means that the props are defined as an array
    for (const element of elements) {
      const { value } = element
      this.identifiers.push(value)
    }
  }

  /**
   * Convert props
   *
   * @return {string} The converted props
   */
  convert(): string {
    const {
      value: { start, end },
    } = this.allProperties

    this.extractIdentifiers()

    const propsBody = this.fullInput.slice(start, end)

    return `const props = defineProps(${propsBody});`
  }
}

export default PropsParser
