// クラス
/* アクセス修飾子
public どこからでもアクセスできるよ
protected
private
*/
class User {
    /*
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    */
   constructor(public name: string) {   
   }
    sayHi(): void{
        console.log("hi! i am" + this.name); //クラス内の変数にアクセス
    }
}

var tom = new User("Tom");//インスタンス化する時 new
console.log(tom.name);
tom.sayHi();