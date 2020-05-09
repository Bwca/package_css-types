import { writeFileSync } from 'fs';

export function writeCssTypesEnumToFile(path: string, payload: string): void {
  writeFileSync(path, payload, {
    encoding: 'utf-8',
    flag: 'w+',
  });
}
