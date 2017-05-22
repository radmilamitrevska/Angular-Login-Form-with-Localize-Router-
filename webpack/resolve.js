'use strict';

let path = require('path');

module.exports = {
  modules: [
    'node_modules',
    path.resolve(process.cwd(), 'app')
  ],
  extensions: ['.ts', '.js']
};
