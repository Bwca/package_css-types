import { statSync, readdirSync } from 'fs';
import { join } from 'path';

export function findFilesRecursivelyByExtension(
  dir: string,
  files: string[] = [],
  extension = /scss$/
): string[] {
  return (
    readdirSync(dir)
      .map((potentialFile) => {
        const dirPath = join(dir, potentialFile);
        const isDirectory = statSync(dirPath).isDirectory();
        if (isDirectory) {
          return findFilesRecursivelyByExtension(dirPath, files, extension);
        }
        if (extension.test(potentialFile)) {
          return [...files, join(dir, potentialFile)];
        }
        return null;
      })
      .filter(Boolean)
      .reduce((a, b) => [...a, ...b], []) || []
  );
}
