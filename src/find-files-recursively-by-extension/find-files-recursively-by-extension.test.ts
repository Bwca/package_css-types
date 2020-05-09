import { findFilesRecursivelyByExtension } from './find-files-recursively-by-extension';

describe(`${findFilesRecursivelyByExtension.name} tests directory walker`, () => {
  it('It should find all scss files', () => {
    // Arrange
    const expectedScssFiles = ['style-3.scss', 'style-2.scss', 'style-1.scss', 'src-style.scss'];

    // Act
    const files = findFilesRecursivelyByExtension(__dirname);
    const isEveryExpectedFileFound = expectedScssFiles.every((scss) => files.some((filePath) => filePath.includes(scss)));

    // Assert
    expect(files).toHaveLength(4);
    expect(isEveryExpectedFileFound).toBeTruthy();
  });
});
