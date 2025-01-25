// extends关键字
class Book {
  constructor(year, name) {
    this.year = year;
    this.name = name;
  }
  sayYear() {
    console.log(`this.book published in ${this.year}`);
  }
  sayName() {
    console.log(`this.book's name is ${this.name}`);
  }
}

class ComicBook extends Book {
  makeFun() {
    console.log(`this comic book makes fun`);
  }
}

const comicBook = new ComicBook(2000, 'Naruto');
comicBook.sayName();

// 重写方法与constructor
class ScienceBook extends Book {
  constructor(year, name, type) {
    super(year, name); // 重写constructor时一定要调用super，且在this之前
    this.type = type;
  }
  sayYear(year) {
    super.sayYear();
    console.log(`this science book published in ${year}`);
  }
}

// 类字段是这样初始化的：

// 对于基类（还未继承任何东西的那种），在构造函数调用前初始化。
// 对于派生类，在 super() 后立刻初始化
