import { generateDefinitionsFileName } from './generate-definitions-file-name';

describe(`${generateDefinitionsFileName.name} tests for file name generator`, () => {
  it('It should generate a .ts file name for a scss file', () => {
    // Arrange
    const filePath = './src/my-awesome-styleshee.scss';
    const expectedDefinitionsFileName = './src/my-awesome-styleshee.style.ts';

    // Act
    const fileName = generateDefinitionsFileName(filePath);

    // Assert
    expect(fileName).toEqual(expectedDefinitionsFileName);
  });
  it('It should generate a .ts file name for a css file', () => {
    // Arrange
    const filePath = './src/my-awesome-styleshee.css';
    const expectedDefinitionsFileName = './src/my-awesome-styleshee.style.ts';

    // Act
    const fileName = generateDefinitionsFileName(filePath);

    // Assert
    expect(fileName).toEqual(expectedDefinitionsFileName);
  });
});
