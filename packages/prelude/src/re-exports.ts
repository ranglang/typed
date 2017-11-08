/**
 * Re-exported types and functions. Please see their respective documentation!
 * @name
 * @type
 */
export {
  unpack,
  Either,
  Left,
  Right,
  isLeft,
  isRight,
  fromLeft,
  fromRight,
  mapLeft,
  chainLeft,
} from '@typed/either'
export {
  __,
  always,
  apply,
  compose,
  curry,
  curry2,
  curry3,
  curry4,
  curry5,
  curryN,
  flip,
  id,
  memoize,
  partial,
  pipe,
} from '@typed/functions'
export { composeLenses, lens, Lens, pipeLenses, updateAt, view } from '@typed/lenses'
export {
  append,
  arrayFrom,
  ascend,
  concat,
  contains,
  descend,
  drop,
  dropLast,
  endsWith,
  filter,
  find,
  findIndex,
  findLast,
  findLastIndex,
  flatten,
  forEach,
  groupBy,
  head,
  includes,
  indexOf,
  insert,
  isList,
  join,
  last,
  lastIndexOf,
  lensIndex,
  move,
  prepend,
  range,
  reduce,
  reduceRight,
  remove,
  reverse,
  slice,
  sort,
  splitAt,
  splitEvery,
  startsWith,
  take,
  takeLast,
  uniq,
  update,
  without,
} from '@typed/list'
export {
  all,
  allPass,
  and,
  any,
  anyPass,
  cond,
  equals,
  greaterThan,
  greaterThanOrEqual,
  ifElse,
  isArray,
  isIterable,
  isIterator,
  isMap,
  isNull,
  isNumber,
  isObject,
  isPromiseLike,
  isSet,
  isUndefined,
  lessThan,
  lessThanOrEqual,
  not,
  or,
  propEq,
  propOr,
  tryCatch,
} from '@typed/logic'
export {
  add,
  decrement,
  divide,
  increment,
  mean,
  median,
  modulo,
  multiply,
  negate,
  pow,
  product,
  subtract,
  sum,
} from '@typed/math'
export {
  fromJust,
  fromMaybe,
  isJust,
  isNothing,
  Just,
  Nothing,
  Maybe,
  combine,
  combineArray,
} from '@typed/maybe'
export {
  clone,
  hasOwnProperty,
  invoker,
  isEmpty,
  keys,
  length,
  lensPath,
  lensProp,
  path,
  prop,
  set,
  values,
} from '@typed/objects'
export { split, trim, toLowerCase, toUpperCase, substr, substring } from '@typed/strings'
