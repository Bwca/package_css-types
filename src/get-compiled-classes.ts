import { renderSync, Result } from 'sass';

export function getCompiledClasses({ css }: Result): string[] | undefined {
  try {
    const classes: string[] = css
      .toString()
      .match(/\.[a-z\d\-_]+/gi) as string[];
    return classes.reduce(
      (a: string[], b) => (a.includes(b) ? a : a.concat(b)),
      []
    );
  } catch (e) {
    console.log('lame');
  }
}
