/*eslint no-unused-expressions: 0*/
/*eslint no-undef: 0*/

import { isUndefined, isEmpty } from 'lodash';

const _IS_LOGGING = true
const _LOGGING_LEVEL = 5

if (isUndefined(_IS_LOGGING)) {
  throw new Error('IS_LOGGING must be set.');
}

if (isUndefined(_LOGGING_LEVEL)) {
  throw new Error('LOGGING_LEVEL must be set.');
}

export const LogLevels = {
  LOG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
  DEBUG: 5
};

export function log() {
  shouldLog(LogLevels.LOG) && console.log.apply(console, arguments);
}

export function info() {
  shouldLog(LogLevels.INFO) && console.info.apply(console, arguments);
}

export function warn() {
  shouldLog(LogLevels.WARN) && console.warn.apply(console, arguments);
}

export function error() {
  shouldLog(LogLevels.ERROR) && console.error.apply(console, arguments);
}

export function debug() {
  shouldLog(LogLevels.DEBUG) && console.debug.apply(console, arguments);
}

function shouldLog(logLevel) {
  return Boolean(_IS_LOGGING) && _LOGGING_LEVEL >= logLevel;
}
