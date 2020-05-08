import { renderSync } from 'sass';
import { EnumGenerator } from './enum-generator';
import { findFilesRecursivelyByExtension } from './find-files-recursively-by-extension';
import { generateDefinitionsFileName } from './generate-definitions-file-name';
import { writeEnumToFile } from './write-enum-to-file';
import { getCompiledClasses } from './get-compiled-classes';

function generateScssTypesForFile(filePath: string) {
  const scssRenderResult = renderSync({
    file: filePath,
  });

  const cssClasses = getCompiledClasses(scssRenderResult);
  if (!cssClasses) {
    throw new Error('WTF DUDE');
  }
  const enumName: string = EnumGenerator.generateEnumNameFromPath(filePath);
  const enumBody = EnumGenerator.generateEnumBody(cssClasses);
  const definitionsFileName = generateDefinitionsFileName(filePath);
  const enumDefinition = EnumGenerator.generateEnumStringForWritingToFile(
    enumName,
    enumBody
  );
  writeEnumToFile(definitionsFileName, enumDefinition);
}

const scssFiles = findFilesRecursivelyByExtension(__dirname);
scssFiles.forEach((i) => generateScssTypesForFile(i));
