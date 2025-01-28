// 受保护的属性通常添加_前缀，非语法强制性的,只读场景可以只设置get
// class CoffeeMachine {
//   _waterMount = 0;
//   constructor(waterMount) {
//     this._waterMount = waterMount;
//   }
//   get waterMount() {
//     return this._waterMount;
//   }

//   // set waterMount(waterMount) {
//   //   this._waterMount = waterMount;
//   // }
// }

// 私有属性和私有方法，添加#方法，只能在类内部访问
class CoffeeMachine {
  #waterLimit = 200;
  _waterAmount = 0;

  #fixWaterAmount(value) {
    if (value < 0) {
      return 0;
    } else if (value > this.#waterLimit) {
      return this.#waterLimit;
    } else {
      return value;
    }
  }

  set waterAmount(value) {
    this._waterAmount = this.#fixWaterAmount(value);
  }

  get waterAmount() {
    return this._waterAmount;
  }
}

let coffeeMachine = new CoffeeMachine();
coffeeMachine.waterAmount = 300;
console.log(coffeeMachine.waterAmount);
