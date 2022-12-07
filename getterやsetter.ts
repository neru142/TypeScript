// クラス
/* アクセス修飾子
public どこからでもアクセスできるよ
protected
private
*/
class User {
    constructor(private _name: string) {//分かりやすいように _name
    }
    public sayHi(): void {
        console.log("hi! i am " + this._name);
    }
    get name() {// private 変数だけど値を取得したい場合には getter
        return this._name;
    }
    set name(newValue: string) { //新しい名前を string 型で与える setter
        this._name = newValue;
    }
}

var tom = new User("Tom");
console.log(tom.name);
tom.name = "TOM";
console.log(tom.name);
tom.sayHi();