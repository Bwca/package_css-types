import { readdirSync, statSync } from 'fs';
import { join } from 'path';

export function findFilesRecursivelyByExtension(dir: string, extension = /scss$/, files: string[] = []): string[] {
  return (
    readdirSync(dir)
      .map((potentialFile) => {
        const dirPath = join(dir, potentialFile);
        const isDirectory = statSync(dirPath).isDirectory();
        if (isDirectory) {
          return findFilesRecursivelyByExtension(dirPath, extension, files);
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
