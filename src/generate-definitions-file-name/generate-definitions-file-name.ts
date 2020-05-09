export function generateDefinitionsFileName(path: string, extension = '.style.ts'): string {
  return path.replace(/\.scss$/, extension);
}
