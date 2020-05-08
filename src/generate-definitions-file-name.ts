export function generateDefinitionsFileName(path: string): string {
  return path.replace(/\.scss$/, '.style.ts');
}
