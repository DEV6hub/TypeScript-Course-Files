///<reference path="rimraf.d.ts"/>

import * as rimraf from 'rimraf';

rimraf('C:\\Temp', (error: Error) => { /*...*/ });
rimraf.sync('C:\\Temp');
