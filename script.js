let num1 = +prompt('Введите первое число', 0);
let num2= +prompt('Введите второе число', 0);
let sym = prompt('Выберите символ', "+");
function calc(a, b, sym) {
    this.a = a;
    this.b = b;
    this.sym = sym;
    if (this.sym == "+") {
        console.log(this.a + this.b);
    } else if (this.sym == "-") {
        console.log(this.a - this.b);
    } else if (this.sym == "*") {
        console.log(this.a * this.b);
    } else if(this.sym == "/") {
        console.log(this.a / this.b);
    }
}
let x = new calc(num1, num2, sym);