import { argsParser } from './args-parser';

describe(`${argsParser.name} test`, () => {
  it('should properly parse arguments with watch flag', () => {
    // Arrange
    const args = ['/usr/bin/node', '/home/voka/Projects/test-typings/node_modules/.bin/css-types', '--watch', 'dir'];

    // Act
    const result = argsParser(args);

    // Assert
    expect(result.dir).toBeDefined();
    expect(result.dir).toEqual('dir');
    expect(result.isWatching).toBeDefined();
    expect(result.isWatching).toBeTruthy();
  });

  it('should recognize absence of watch flag', () => {
    // Arrange
    const args = ['/usr/bin/node', '/home/voka/Projects/test-typings/node_modules/.bin/css-types', 'dir'];

    // Act
    const result = argsParser(args);

    // Assert
    expect(result.dir).toBeDefined();
    expect(result.dir).toEqual('dir');
    expect(result.isWatching).toBeDefined();
    expect(result.isWatching).toBeFalsy();
  });

  it('should recognize dirname', () => {
    // Arrange
    const args = ['/usr/bin/node', '/home/voka/Projects/test-typings/node_modules/.bin/css-types', 'dirname=some-dir'];

    // Act
    const result = argsParser(args);

    // Assert
    expect(result.dir).toBeDefined();
    expect(result.dir).toEqual('some-dir');
    expect(result.isWatching).toBeDefined();
    expect(result.isWatching).toBeFalsy();
  });
});
