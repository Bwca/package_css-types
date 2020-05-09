import { renderSync } from 'sass';

import { EnumGenerator } from './enum-generator/enum-generator';
import { findFilesRecursivelyByExtension } from './find-files-recursively-by-extension';
import { generateDefinitionsFileName } from './generate-definitions-file-name';
import { getCompiledCssClasses } from './get-compiled-classes';
import { writeCssTypesEnumToFile } from './write-enum-to-file';

function generateScssTypesForFile(filePath: string) {
  const scssRenderResult = renderSync({
    file: filePath,
  });

  const cssClasses = getCompiledCssClasses(scssRenderResult);
  if (!cssClasses) {
    throw new Error('WTF DUDE');
  }

  const enumName: string = EnumGenerator.generateEnumNameFromPath(filePath);
  const enumBody = EnumGenerator.generateEnumBody(cssClasses);
  const enumDefinition = EnumGenerator.generateEnumStringForWritingToFile(enumName, enumBody);

  const definitionsFileName = generateDefinitionsFileName(filePath);
  writeCssTypesEnumToFile(definitionsFileName, enumDefinition);
}

const scssFiles = findFilesRecursivelyByExtension(__dirname);
scssFiles.forEach((i) => generateScssTypesForFile(i));
