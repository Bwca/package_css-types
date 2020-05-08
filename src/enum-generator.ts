export class EnumGenerator {
  public static generateEnumStringForWritingToFile(
    enumName: string,
    enumBody: string
  ): string {
    return `export enum ${enumName} ${enumBody}`;
  }

  public static generateEnumNameFromPath(path: string): string {
    const fileName = path.match(/([^\/\\]*)\.scss$/);
    const enumName = (fileName && fileName[1]) || 'styles';
    return enumName.charAt(0).toUpperCase() + enumName.slice(1);
  }

  public static generateEnumBody(cssClasses: string[]): string {
    let enumBody = '{\n';

    cssClasses?.forEach((i) => {
      const propName = EnumGenerator.generateEnumPropNameFromCssClass(i);
      const noDotClassName = i.replace(/^\./, '');
      enumBody += `  ${propName} = '${noDotClassName}',\n`;
    });

    enumBody += '}\n';
    return enumBody;
  }

  private static generateEnumPropNameFromCssClass(className: string): string {
    if (!/[-_]/g.test(className)) {
      return className.replace(/^\../, ([, firstLetter]) =>
        firstLetter.toUpperCase()
      );
    }
    return className
      .replace(/(\-){2,}/g, '$1')
      .replace(/(_){2,}/g, '$1')
      .replace(/[\.\-_][a-z]/g, ([, letter]) => letter.toUpperCase());
  }
}
