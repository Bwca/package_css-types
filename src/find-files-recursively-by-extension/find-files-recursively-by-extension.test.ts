import { findFilesRecursivelyByExtension } from './find-files-recursively-by-extension';

describe(`${findFilesRecursivelyByExtension.name} tests directory walker`, () => {
  it('It should find all stylesheet files', () => {
    // Arrange
    const expectedStylesheets = ['style-3.scss', 'style-2.scss', 'style-1.scss', 'src-style.scss', 'style.css'];

    // Act
    const files = findFilesRecursivelyByExtension(__dirname);
    const isEveryExpectedFileFound = expectedStylesheets.every((scss) => files.some((filePath) => filePath.includes(scss)));

    // Assert
    expect(files).toHaveLength(expectedStylesheets.length);
    expect(isEveryExpectedFileFound).toBeTruthy();
  });
});
