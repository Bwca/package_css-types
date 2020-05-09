#!/usr/bin/env node

import { createTypesFromScss } from './main';

const projectFolder = __dirname.replace('node_modules/sass-typing/dist', '');

const folderToScan = projectFolder + (process.argv[2] || 'src');

createTypesFromScss(folderToScan);
