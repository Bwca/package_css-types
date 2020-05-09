import { EnumGenerator } from './enum-generator';

describe(`${EnumGenerator.name} tests for enum name generation`, () => {
  it('should generate enum name from a provided path to a scss stylesheet', () => {
    // Arrange
    const filePath = '/home/user/folder/project/src/style.scss';
    const expectedEnumName = 'Style';

    // Act
    const enumName = EnumGenerator.generateEnumNameFromPath(filePath);

    // Assert
    expect(enumName).toEqual(expectedEnumName);
  });

  it('should generate enum name from a provided path to a css stylesheet', () => {
    // Arrange
    const filePath = '/home/user/folder/project/src/style.css';
    const expectedEnumName = 'Style';

    // Act
    const enumName = EnumGenerator.generateEnumNameFromPath(filePath);

    // Assert
    expect(enumName).toEqual(expectedEnumName);
  });

  it('should generate enum name from a provided path to a stylesheet when stylesheet file name uses kebab casing', () => {
    // Arrange
    const filePath = '/home/user/folder/project/src/my-awesome-style-sheet.scss';
    const expectedEnumName = 'MyAwesomeStyleSheet';

    // Act
    const enumName = EnumGenerator.generateEnumNameFromPath(filePath);

    // Assert
    expect(enumName).toEqual(expectedEnumName);
  });

  it('should generate enum name from a provided path to a stylesheet when stylesheet file name uses snake casing', () => {
    // Arrange
    const filePath = '/home/user/folder/project/src/my_awesome_style_sheet.scss';
    const expectedEnumName = 'MyAwesomeStyleSheet';

    // Act
    const enumName = EnumGenerator.generateEnumNameFromPath(filePath);

    // Assert
    expect(enumName).toEqual(expectedEnumName);
  });

  it('should generate enum name from a provided path to a stylesheet when stylesheet file name uses dots to separate words', () => {
    // Arrange
    const filePath = '/home/user/folder/project/src/my-awesome.component.scss';
    const expectedEnumName = 'MyAwesomeComponent';

    // Act
    const enumName = EnumGenerator.generateEnumNameFromPath(filePath);

    // Assert
    expect(enumName).toEqual(expectedEnumName);
  });
});

describe(`${EnumGenerator.name} tests for enum body generation`, () => {
  it('should generate a string containing enum body with proper keys and values', () => {
    // Arrange
    const cssClasses = ['.class-one', '.class--two', '.class_three', '.class__four', '.class__five--item'];
    const expectedEnumPairs = [
      `ClassOne = 'class-one'`,
      `ClassTwo = 'class--two'`,
      `ClassThree = 'class_three'`,
      `ClassFour = 'class__four'`,
      `ClassFiveItem = 'class__five--item'`,
    ];

    // Act
    const enumBody = EnumGenerator.generateEnumBody(cssClasses);

    // Assert
    expect(expectedEnumPairs.every((i) => enumBody.includes(i))).toBeTruthy();
    expect(enumBody).toMatchSnapshot();
  });
});
