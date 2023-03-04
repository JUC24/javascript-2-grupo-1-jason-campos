class Libreria {
  constructor(nombre, direccion, libros, comics) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.libros = libros || [];
    this.comics = comics || [];
  }

  agregarLibro(libro) {
    this.libros.push(libro)
  }

  agregarComic(comic) {
    this.comics.push(comic)
  }
}

class Libro {
  constructor(titulo, autor, precio, cantidad, year) {
    this._titulo = titulo;
    this._autor = autor;
    this._precio = precio;
    this._cantidad = cantidad;
    this._year = year;
  }

  set cantidad(nuevaCantidad) {
    this._cantidad = nuevaCantidad;
  }

  set year(nuevoyear) {
    this._year = nuevoyear;
  }

  get titulo() {
    return this._titulo;
  }

  get autor() {
    return this._autor;
  }

  get precio() {
    return this._precio;
  }

  get year() {
    return this._year;
  }

  get cantidad() {
    return this._cantidad;
  }

  getInfo() {
    let information = `${this.titulo} por ${this.autor}. Precio: ${this.precio}. Publicado en ${this.year}`;

    if (this.cantidad === 0) {
      information += "No hay ejemplares disponibles.";
    } else {
      information += `Cantidad disponible: ${this.cantidad}.`;
    }

    return information;
  }

}

class Comic extends Libro {
  constructor(titulo, autor, precio, cantidad, year, dibujante, editorial, volumen) {
    super(titulo, autor, precio, cantidad, year);
    this._dibujante = dibujante;
    this._editorial = editorial;
    this._volumen = volumen;
  }

  get dibujante() {
    return this._dibujante;
  }

  get editorial() {
    return this._editorial;
  }

  get volumen() {
    return this._volumen;
  }

  getInfo() {
    let information = super.getInfo();
    information += ` Dibujante: ${this.dibujante}. Editorial: ${this.editorial}. Volumen: ${this.volumen}.`;
    return information;
  }
}

const libreria = new Libreria("Mi Librería", "Calle Fallaa 425");

const libro1 = new Libro("El principito", "Antoine de Saint-Exupéry", 150, 5, 1943);
libreria.agregarLibro(libro1);

const comic1 = new Comic("Watchmen", "Alan Moore", 250, 0, 1986, "Dave Gibbons", "DC Comics", 1);
libreria.agregarComic(comic1);

console.log(libreria.libros[0].getInfo());
console.log(libreria.comics[0].getInfo());
console.log(libreria.comics[0]);
console.log(libreria.libros[0]);

//revisado con un compañero, pero no encontramos el error como tal 