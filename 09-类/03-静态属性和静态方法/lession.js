// 静态方法
// 示例一：
class User {
  static staticMethod() {
    console.log(this === User);
  }
}
User.staticMethod();

// 静态方法是属于类的，不专属于某个对象，示例二：
class Article {
  constructor(name, date) {
    this._name = name;
    this._date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date; // 按照date升序
  }

  get date() {
    return this._date;
  }

  get name() {
    return this._name;
  }
}

let articles = [
  new Article('test1', new Date('2024-01-01')),
  new Article('test2', new Date('2023/01/01')),
];
articles.sort(Article.compare);
console.log(articles);

// 另外一个常见例子就是工厂类
class Shoes {
  constructor(type, date) {
    this._type = type;
    this._date = date;
  }

  static createShoes(type, date) {
    return new this(type, new Date(date));
  }
}

let nike = Shoes.createShoes('basketball', '2024-01-01');
console.log(nike);

// 静态对象不适用于对象
// nike.createShoes('run', '2023-01-01');

// 静态属性
class House {
  static usage = 'live';
}
console.log(House.usage);
