function Calculator(a, b) {
  this.a = a;
  this.b = b;
  this.read = function () {
    console.log(this.a, this.b);
  }
  this.sum = function () {
    console.log(this.a + this.b);
  }
}

let calculator = new Calculator(8, 9);
calculator.read();
calculator.sum();
