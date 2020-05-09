export class EnumGenerator {
  public static generateEnumStringForWritingToFile(enumName: string, enumBody: string): string {
    return `export enum ${enumName} ${enumBody}`;
  }

  public static generateEnumNameFromPath(path: string): string {
    const fileName = path.match(/([^\/\\]*)\.scss$/);
    const enumName = (fileName && fileName[1]) || 'styles';
    return EnumGenerator.generateCamelCaseName(enumName);
  }

  public static generateEnumBody(cssClasses: string[]): string {
    let enumBody = '{\n';

    cssClasses.forEach((i) => {
      const propName = EnumGenerator.generateCamelCaseName(i);
      const noDotClassName = i.replace(/^\./, '');
      enumBody += `  ${propName} = '${noDotClassName}',\n`;
    });

    enumBody += '}\n';
    return enumBody;
  }

  public static generateCamelCaseName(str: string): string {
    if (!/[-_]/g.test(str)) {
      return str.replace(/^\../, ([, firstLetter]) => firstLetter.toUpperCase());
    }
    return str
      .replace(/(\-){2,}/g, '$1')
      .replace(/(_){2,}/g, '$1')
      .replace(/[\.\-_][a-z]/g, ([, letter]) => letter.toUpperCase());
  }
}
