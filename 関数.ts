// 関数
/*
void 

*/

// function add(a: number ,b: number): number {
//     return a + b;
// }

//オプションを付ける
// function add(a: number ,b?: number): number {
//     if (b) {
//         return a + b;
//     }else{
//         return a + a;
//     }
// }

// 引数に初期値
function add(a: number ,b: number  = 10): number {
    return a + b;
}

// console.log(add(5, 3));
//console.log(add(5,"hello")); //誰かが間違った場合エラーになる

console.log(add(5, 3));
console.log(add(5));