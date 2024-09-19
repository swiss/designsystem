import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { resolve } from 'node:path'
import Parser from './parser'

console.log(
  'files',
  readdirSync('./pages', { withFileTypes: true, recursive: true })
    .filter((f: any) => f.name.endsWith('.vue'))
    .map((f: any) => f.path + '/' + f.name)
    .forEach(convertFile)
)

function convertFile(filePath: string) {
  if (!filePath) {
    console.error('No file path provided')
    process.exit(1)
  }

  let file = readFileSync(resolve(filePath), 'utf8')

  const scriptCode = file.match(/<script>([\s\S]*?)<\/script>/)?.[1]
  if (!scriptCode) {
    console.error('No script code found', filePath)
    return
  }

  const ParseInput = new Parser(scriptCode, {
    showSectionComment: false,
  })
  const { imports, output, importDeclarations } = ParseInput.parse()

  // Add required imports (e.g. ref, computed, etc.)
  if (imports.length > 0) {
    output.unshift(`import { ${imports.join(', ')} } from 'vue';\n`)
  }

  // Add original import declarations to the top
  if (importDeclarations) {
    output.unshift(...importDeclarations)
  }

  // Update file content
  file = file.replace(
    /<script>([\s\S]*?)<\/script>/,
    `<script setup>\n${output.join('\n')}\n</script>`
  )

  // Output the result
  // console.log(file)

  // Write back to the file
  writeFileSync(resolve(filePath), file, 'utf8')
}
