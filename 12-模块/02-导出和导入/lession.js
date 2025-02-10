// 导出和导入语法变体

// import *
// import * as say from './导出和声明分开.js';
// say.sayHi();
// say.sayBye();

// import as
import { sayHi as hi } from './导出和声明分开.js';
hi();

import { name } from './exportAs.js';
name();

// 导入默认导出时可以不带花括号
import Book from './exportDefault.js';
