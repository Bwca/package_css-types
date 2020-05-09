#!/usr/bin/env node

const makeTypes = require('./main');

const projectFolder = __dirname.replace('node_modules/sass-typing/dist', '');

const folderToScan = projectFolder + (process.argv[2] || 'src');

makeTypes.createTypesFromScss(folderToScan);
