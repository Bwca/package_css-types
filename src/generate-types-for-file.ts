import { renderSync } from 'sass';

import { EnumGenerator } from './enum-generator/enum-generator';
import { generateDefinitionsFileName } from './generate-definitions-file-name/generate-definitions-file-name';
import { getCompiledCssClasses } from './get-compiled-classes';
import { NotificationService } from './notification-service';
import { writeCssTypesEnumToFile } from './write-enum-to-file';

export async function generateScssTypesForFile(filePath: string): Promise<void> {
  const scssRenderResult = renderSync({
    file: filePath,
  });
  const cssString = scssRenderResult.css.toString();

  if (!cssString) {
    NotificationService.warning(`File ${filePath} contains no css classes after compilation!`);
  }

  const cssClasses = getCompiledCssClasses(cssString);

  if (!cssClasses) {
    NotificationService.error(`Could not parse css classes from ${filePath}`);
    return;
  }

  const enumName: string = EnumGenerator.generateEnumNameFromPath(filePath);
  const enumBody = EnumGenerator.generateEnumBody(cssClasses);
  const enumDefinition = EnumGenerator.generateEnumStringForWritingToFile(enumName, enumBody);

  const definitionsFileName = generateDefinitionsFileName(filePath);

  try {
    writeCssTypesEnumToFile(definitionsFileName, enumDefinition);
    NotificationService.success(`Successfully wrote ${cssClasses.length} keys length enum from ${filePath}`);
  } catch (e) {
    NotificationService.error(`Error writing types enum for ${filePath}`);
  }
}
