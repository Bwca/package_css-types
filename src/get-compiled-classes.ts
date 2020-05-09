import { Result } from 'sass';

export function getCompiledCssClasses({ css }: Result): string[] | undefined {
  try {
    const classes: string[] = css.toString().match(/\.[a-z\d\-_]+/gi) as string[];
    return classes.reduce((a: string[], b) => (a.includes(b) ? a : [...a, b]), []);
  } catch (e) {
    throw new Error('wtf');
  }
}
