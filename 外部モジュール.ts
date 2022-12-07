// 外部モジュール

// Node - CommonJS
// RequireJS - AMD

// module UserModule {
//     export var name = "unknown";
// }

// import User = require("./user_commonjs");
import User = require("./user_amd");

console.log(User.name);

/*
user_amd.ts
exports.name = "unknown";

user_amd.js
define(["require", "exports"], function (require, exports) {
    exports.name = "unknown";
});

user_commonjs.ts
exports.name = "unknown";

user_commonjs.js
exports.name = "unknown";
*/