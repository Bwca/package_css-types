import { findFilesRecursivelyByExtension } from './find-files-recursively-by-extension';
import { generateScssTypesForFile } from './generate-types-for-file';
import { NotificationService } from './notification-service';

export function createTypesFromScss(path = __dirname): void {
  NotificationService.info('Attempting to create *.scss type files...');

  let scssFilePaths: string[];

  try {
    scssFilePaths = findFilesRecursivelyByExtension(path);
  } catch (e) {
    NotificationService.error('Error while walking directories: could not fetch a list of *.scss files!');
    return;
  }

  if (!scssFilePaths.length) {
    NotificationService.warning('Could not find any *.scss files, please make sure you have provided a correct directory path.');
  }

  scssFilePaths.forEach((i) => generateScssTypesForFile(i));
  NotificationService.info('It is done.');
}
