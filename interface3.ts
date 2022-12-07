// Interface -> Class インターフェイスの中のプロパティを必ずクラスのほうで実装

interface GameUser {
    score: number;
    showScore(): void;
}

class User implements GameUser { //Userクラスは必ずscoreとshowScoreを持ってないといけない
    name: string;
    score: number = 0;
    constructor(name: string) {
        this.name = name;
    }
    sayHi(): void {
        console.log("hi! i am " + this.name);
    }
    showScore(): void {
        console.log("score " + this.score);
    }
}