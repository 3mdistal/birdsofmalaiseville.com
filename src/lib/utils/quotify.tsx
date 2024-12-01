export function smartQuotify(text: string): string {
  let result = text

  // First, convert HTML entities to regular quotes
  result = result.replace(/&quot;/g, '"').replace(/&apos;|&#39;/g, "'")

  // Then handle quotes in the correct order
  result = result
    // Double quotes
    .replace(/"(?=[^"]*"[^"]*(?:"[^"]*"[^"]*)*$)/g, '\u201c') // First quote in pair becomes opening quote
    .replace(/"/g, '\u201d') // All remaining quotes become closing quotes
    // Single quotes/apostrophes
    .replace(/(\w)'(\w)/g, '$1\u2019$2') // Contractions
    .replace(/'(?=[^']*'[^']*(?:'[^']*'[^']*)*$)/g, '\u2018') // First quote in pair becomes opening quote
    .replace(/'/g, '\u2019') // All remaining quotes become closing quotes
  return result
}

export function dumbQuotify(text: string): string {
  return (
    text
      // Convert smart double quotes back to straight quotes
      .replace(/[\u201c\u201d]/g, '"')
      // Convert smart single quotes/apostrophes back to straight quotes
      .replace(/[\u2018\u2019]/g, "'")
  )
}
