import { readFileSync } from 'fs';
import { renderSync } from 'sass';

import { NotificationService } from '../notification-service';

export async function extractCssStringFromFile(filePath: string): Promise<string | undefined> {
  /** In case of SCSS file, parse it first. */
  if (/\.scss$/.test(filePath)) {
    try {
      const scssRenderResult = renderSync({
        file: filePath,
      });
      return scssRenderResult.css.toString();
    } catch (e) {
      NotificationService.error('Error during sass compilation!');
      return;
    }
  }
  /** In case of css file, just read the contents. */
  if (/\.css$/.test(filePath)) {
    try {
      return readFileSync(filePath, 'utf8');
    } catch (e) {
      NotificationService.error('Error reading css file!');
      return;
    }
  }
}
