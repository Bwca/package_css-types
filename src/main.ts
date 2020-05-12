import { watchFile } from 'fs';

import { createCssTypesForFile } from './create-css-types-for-file/create-css-types-for-file';
import { findFilesRecursivelyByExtension } from './find-files-recursively-by-extension/find-files-recursively-by-extension';
import { NotificationService } from './notification-service';

export function createTypesForStylesheets(path = __dirname, isWatching = false): void {
  NotificationService.info('Attempting to create stylesheet type files...');

  let stylesheetPaths: string[];

  try {
    stylesheetPaths = findFilesRecursivelyByExtension(path);
  } catch (e) {
    NotificationService.error(
      `Error while walking directories: could not fetch a list of stylesheet files! Make sure the difectory exists: ${path}`
    );
    return;
  }

  if (!stylesheetPaths.length) {
    NotificationService.warning('Could not find any stylesheet files, please make sure you have provided a correct directory path.');
  }

  stylesheetPaths.forEach((i) => createCssTypesForFile(i));

  NotificationService.info('Finished creating enums');

  if (isWatching) {
    NotificationService.info('Watching files for changes');
    stylesheetPaths.forEach((f) => watchFile(f, () => createCssTypesForFile(f)));
  }
}
