import { existsSync, readFileSync, unlinkSync } from 'fs';

import { findFilesRecursivelyByExtension } from '../find-files-recursively-by-extension/find-files-recursively-by-extension';
import { createCssTypesForFile } from './create-css-types-for-file';

describe(`${createCssTypesForFile.name} test`, () => {
  /** Cleanup any existing enum files before tests */
  beforeAll(() => {
    const testDir = __dirname + '/__test__';
    const existingTypescriptEnums = findFilesRecursivelyByExtension(testDir, /\.ts$/, []);
    existingTypescriptEnums.forEach((f) => unlinkSync(f));
  });

  it('should create types file for a css stylesheet', async () => {
    // Arrange
    const stylesheet = __dirname + '/__test__/css/sheet.css';
    const expectedEnumFile = __dirname + '/__test__/css/sheet.style.ts';

    // Act
    await createCssTypesForFile(stylesheet);

    // Assert
    expect(existsSync(expectedEnumFile)).toBeTruthy();
    expect(readFileSync(expectedEnumFile, 'utf8')).toMatchSnapshot();
  });

  it('should create types file for scss stylesheet', async () => {
    // Arrange
    const stylesheet = __dirname + '/__test__/scss/sheet.scss';
    const expectedEnumFile = __dirname + '/__test__/scss/sheet.style.ts';

    // Act
    await createCssTypesForFile(stylesheet);

    // Assert
    expect(existsSync(expectedEnumFile)).toBeTruthy();
    expect(readFileSync(expectedEnumFile, 'utf8')).toMatchSnapshot();
  });
});
