#!/usr/bin/env node

import { createTypesForStylesheets } from './main';

const projectFolder = __dirname.replace('node_modules/sass-typing/dist', '');

const folderToScan = projectFolder + (process.argv[2] || 'src');

createTypesForStylesheets(folderToScan);
