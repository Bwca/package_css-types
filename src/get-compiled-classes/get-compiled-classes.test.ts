import { getCssClassesAsArray } from './get-compiled-classes';

describe(`${getCssClassesAsArray.name} tests`, () => {
  it('should return an array of unique css names', () => {
    // Arrange
    const css = '.one .two{} .one > .three{} .three + .three{}';
    const expectedClasses = ['.one', '.two', '.three'];

    // Act
    const classes = getCssClassesAsArray(css) as string[];
    const isEveryExpectedClassPresent = expectedClasses.every((i) => classes.includes(i));

    // Assert
    expect(isEveryExpectedClassPresent).toBeTruthy();
    expect(classes.length).toEqual(expectedClasses.length);
  });
});
