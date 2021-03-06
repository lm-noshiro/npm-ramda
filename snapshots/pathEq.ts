import * as R from '../ramda/dist/index';

declare const path: R.Path;
declare const number: number;
declare const object: object;

// @dts-jest:pass:snap -> (object: {}) => boolean
R.pathEq(path, number);
// @dts-jest:pass:snap -> boolean
R.pathEq(path)(number)(object);
// @dts-jest:pass:snap -> boolean
R.pathEq(path, number, object);
