#!/usr/bin/env node

import { createTypesForStylesheets } from '../main';
import { argsParser } from './args-parser/args-parser';

const projectFolder = __dirname.replace('node_modules/css-types/dist/cli', '');

const { dir, isWatching } = argsParser(process.argv);

const path = projectFolder + (dir || 'src');

createTypesForStylesheets(path, isWatching);
