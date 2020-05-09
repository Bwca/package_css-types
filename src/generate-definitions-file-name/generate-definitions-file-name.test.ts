import { expect } from 'chai';

import { generateDefinitionsFileName } from './generate-definitions-file-name';

describe(`${generateDefinitionsFileName.name} tests for file name generator`, () => {
  it('It should generate a .ts file name', () => {
    // Arrange
    const filePath = './src/my-awesome-styleshee.scss';
    const expectedDefinitionsFileName = './src/my-awesome-styleshee.style.ts';

    // Act
    const fileName = generateDefinitionsFileName(filePath);

    // Assert
    expect(fileName).to.be.equal(expectedDefinitionsFileName);
  });
});
