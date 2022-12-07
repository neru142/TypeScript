// 内部モジュール

// module UserModule {
//     export var name = "unknown"; //moduleデータを使う場合にはexport
//     export module AddressModule {
//         export var zip = "×××-××××";
//     }
// }

/// <reference path="./user.ts" />

console.log(UserModule.name);
// console.log(UserModule.AddressModule.zip);

import addr = UserModule.AddressModule;
console.log(addr.zip);

// user.ts内
// module UserModule {
//     export var name = "unknown";
//     export module AddressModule {
//         export var zip = "×××-××××";
//     }