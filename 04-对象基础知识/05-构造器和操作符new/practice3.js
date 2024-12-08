function Accumulator (startingValue) {
  this.startingValue = startingValue;
  this.value = startingValue;
  this.read = function (value) {
    this.value += value;
    console.log(this.value)
  }
}

let acc = new Accumulator(10);
acc.read(5);
acc.read(5);