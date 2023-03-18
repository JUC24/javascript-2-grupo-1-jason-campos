class Bookstore {
  #bookstoreName;
  #address;
  #books;
  #comics;
  constructor(bookstoreName, address) {
    this.#bookstoreName = bookstoreName;
    this.#address = address;
    this.#books = [];
    this.#comics = [];
  }
  // getters
  get getBooks() {
    return this.#books;
  }
  get getComics() {
    return this.#comics;
  }
  get getName() {
    return this.#bookstoreName
  }
  // setters
  set setBookstoreName(name) {
    this.#bookstoreName = name;
  }
  set setAddress(address) {
    this.#address = address;
  }
  set setBooks(book) {
    this.#books.push(book);
  }
  set setComics(comic) {
    this.#comics.push(comic);
  }
}

class Book {
  #title;
  #author;
  #price;
  #stock;
  #year;

  constructor(title, author, price, stock, year) {
    this.#title = title;
    this.#author = author;
    this.#price = price;
    this.#stock = stock;
    this.#year = year;
  }
  getInfo() {
    return {
      title: this.#title,
      author: this.#author,
      price: this.#price,
      year: this.#year,
      stock: !this.#stock ? 'No hay ejemplares disponibles' : this.#stock
    }
  }
  // setters
  set setStock(stock) {
    this.#stock = stock;
  }
  set setYear(year) {
    this.#year = year;
  }
}

class Comic extends Book {
  #illustrator;
  #publisher;
  #volume;
  constructor(title, author, price, stock, year, illustrator, publisher, volume) {
    super(title, author, price, stock, year);
    this.#illustrator = illustrator;
    this.#publisher = publisher;
    this.#volume = volume;
  }
  getInfo () {
    const info = super.getInfo(); 
    return {
      ...info,
      illustrator: this.#illustrator,
      publisher: this.#publisher,
      volume: this.#volume
    }
  }
}
const bookstore1 = new Bookstore('Wolf BookStore', 'Calle 1');

// const addBook = () => {
//   const book = new Book('El principito', 'Antoine de Saint', 100, 10, 1943);
//   bookstore1.setBooks = book.getInfo();
//   console.log('Add book')
// } 
// const addComic = () => {
//   const comic = new Comic('Batman', 'bob kane', 200, 5, '1939', 'Bob kane', 'DC Comics', 1);
//   bookstore1.setComics = comic.getInfo();
//   console.log('Add Comic')
// }
// const showProducts = () => {
//   console.log('Books')
//   console.log(bookstore1.getBooks);
//   console.log('Comics')
//   console.log(bookstore1.getComics);
// }
const sidebar = document.getElementById('sidebar');
const menu = ['Show Books', 'Show Comics', 'Add book', 'Add Comic'];
const printBookstoreName = () => {
  sidebar.insertAdjacentHTML(
    'afterbegin',
    `<h2 class="title">
      <img src="./img/logo.svg" class="logo"/>
      ${bookstore1.getName}
    </h2>`
  )
}
const createMenu = () => {
  let menuHtml = '';
  menu.forEach((elem, index) => {
    menuHtml += `<li class="menu-item"> 
      <a href="#" id="${index}">${elem}</a>
    </li>`
  });
  return menuHtml;
}
const displayMenu = () => {
  sidebar.insertAdjacentHTML(
    'beforeend',
    `<ul class="menu">${createMenu()}</ul>`
  );
}

const menuFuntion = () => {
  const items = document.querySelectorAll('.menu-item');
  items.forEach ((item) => {
    item.addEventListener ('click', (event) => {
      event.stopPropagation();
      event.preventDefault();

      const {id} = event.target

      switch (id) {
        case '0':
          showBooks()
          break;
        case '1':
          showComics()
          break;
        case '2':
          addBook()
          break;
        case '3':
          addComic()
          break;
        default:
          console.log ('That option does exist')
          break;
      }
    });
  })
};

const showBooks = () => {
  const mainContent = document.getElementById("main-content");
  
  let librosHTML = "";
  console.log(bookstore1.getBooks)
  for (let i = 0; i < bookstore1.getBooks.length; i++) {
    librosHTML += `
      <div class="libro">
        <h2>Title: ${bookstore1.getBooks[i].title}</h2>
        <h3>Author: ${bookstore1.getBooks[i].author}</h3>
        <p>Price: ${bookstore1.getBooks[i].price}</p>
        <p>Stock: ${bookstore1.getBooks[i].stock}</p>
        <p>Year: ${bookstore1.getBooks[i].year}</p>
      </div>
    `;
    
  }
  
  mainContent.innerHTML = `<div class='row'>${librosHTML}</div>`;
};

const showComics = () => {
  const mainContent = document.getElementById("main-content");
  
  let librosHTML = "";
  console.log(bookstore1.getComics)
  for (let i = 0; i < bookstore1.getComics.length; i++) {
    librosHTML += `
      <div class="libro">
        <h2>Title: ${bookstore1.getComics[i].title}</h2>
        <h3>Author: ${bookstore1.getComics[i].author}</h3>
        <p>Price: ${bookstore1.getComics[i].price}</p>
        <p>Stock: ${bookstore1.getComics[i].stock}</p>
        <p>Year: ${bookstore1.getComics[i].year}</p>
        <p>Illustrator: ${bookstore1.getComics[i].illustrator}</p>
        <p>Illustrator: ${bookstore1.getComics[i].publisher}</p>
        <p>Volume: ${bookstore1.getComics[i].volume}</p>
      </div>
    `;
    
  }
  
  mainContent.innerHTML = `<div class='row'>${librosHTML}</div>`;
};

const addBook = () => {
  const title = prompt('Title:');
  if (!title) {
    alert("This space cannot be empty");
    return;
  }
  const author = prompt('Author:');
  console.log(author, 'author')
  if (!author) {
    alert("This space cannot be empty");
    return;
  }
  const price = prompt('Price:');
  if (!price) {
    alert("This space cannot be empty");
    return;
  }
  const stock = prompt('Stock:');
  if (!stock) {
    alert("This space cannot be empty");
    return;
  }
  const year = prompt('Year:');
  if (!year) {
    alert("This space cannot be empty");
    return;
  }

  const bookStore1Books = bookstore1.getBooks

  if (bookStore1Books.some((book) => book.title === title)) {
    alert("The book already exists on the list.");
    return;
  }

  const book = new Book (title, author, price, stock, year)
  bookstore1.setBooks = book.getInfo();

};

const addComic = () => {
  const title = prompt('Title:');
  if (!title) {
    alert("This space cannot be empty");
    return;
  }
  const author = prompt('Author:');
  if (!author) {
    alert("This space cannot be empty");
    return;
  }
  const price = prompt('Price:');
  if (!price) {
    alert("This space cannot be empty");
    return;
  }
  const stock = prompt('Stock:');
  if (!stock) {
    alert("This space cannot be empty");
    return;
  }
  const year = prompt('Year:');
  if (!year) {
    alert("This space cannot be empty");
    return;
  }

  const illustrador = prompt('Ilustrador:');
  if (!illustrador) {
    alert("This space cannot be empty");
    return;
  }

  const publisher = prompt('Publisher:');
  if (!publisher) {
    alert("This space cannot be empty");
    return;
  }

  const volume = prompt('Volume:');
  if (!volume) {
    alert("This space cannot be empty");
    return;
  }

  const bookStore1Comics = bookstore1.getComics

  if (bookStore1Comics.some((comic) => comic.title === title)) {
    alert("The comic already exists on the list.");
    return;
  }
  
  const comic = new Comic (title, author, price, stock, year, illustrador, publisher, volume)
  bookstore1.setComics = comic.getInfo();
  
  /*if (comic.includes(title)) {
    alert("The book already exists on the list.");
    return;
  }*/
};

printBookstoreName();
displayMenu();
menuFuntion()

// ** TAREA **
// Crear una función que se encargué de crear el menu, iterando sobre la lista menu (línea 125)
// Debe generarse un element html tipo ul, y dentro de ese ul un li para cada elemento lista; Puede ver el ejemplo de lo que debe crear en el html 
