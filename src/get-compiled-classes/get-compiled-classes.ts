export function getCssClassesAsArray(css: string): string[] | undefined {
  try {
    const classes: string[] = css.match(/\.[a-z\d\-_]+/gi) as string[];
    return classes.reduce((a: string[], b) => (a.includes(b) ? a : [...a, b]), []);
  } catch (e) {
    return;
  }
}
