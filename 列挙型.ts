// 列挙型
// Signal

// enum Signal {
//     Red = 0,
//     Blue = 1,
//     Yellow = 2
// }

enum Signal {
    Red, // 0から始まる連番
    Blue = 3,
    Yellow // この前の数値の連番(4)
}

enum Signal {
    Green = 5
}

var result: Signal;

// if (result === Signal.Yellow) {...}
// if (result === Signal['Yellow']) {...}

//console.log(Signal[2]); // Yellow
console.log(Signal[3]); // Blue

console.log(Signal.Green); // 5