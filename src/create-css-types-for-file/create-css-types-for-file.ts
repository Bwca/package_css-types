import { writeFileSync } from 'fs';

import { EnumGenerator } from '../enum-generator/enum-generator';
import { extractCssStringFromFile } from '../extract-css-string-from-file/extract-css-string-from-file';
import { generateDefinitionsFileName } from '../generate-definitions-file-name/generate-definitions-file-name';
import { getCssClassesAsArray } from '../get-compiled-classes/get-compiled-classes';
import { NotificationService } from '../notification-service';

export async function createCssTypesForFile(filePath: string): Promise<void> {
  const cssString = await extractCssStringFromFile(filePath);

  if (!cssString) {
    NotificationService.warning(`Could not obtain ${filePath} css from file!`);
    return;
  }

  const cssClasses = getCssClassesAsArray(cssString);

  if (!cssClasses) {
    NotificationService.error(`Could not parse css classes from ${filePath}`);
    return;
  }

  const enumDefinition = EnumGenerator.generateEnumString(filePath, cssClasses);
  const definitionsFileName = generateDefinitionsFileName(filePath);

  try {
    writeFileSync(definitionsFileName, enumDefinition, {
      encoding: 'utf-8',
      flag: 'w+',
    });

    NotificationService.success(`Successfully wrote ${cssClasses.length} keys length enum from ${filePath}`);
  } catch (e) {
    NotificationService.error(`Error writing types enum for ${filePath}`);
  }
}
