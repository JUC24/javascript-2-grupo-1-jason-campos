/*Mini proyecto: Libreria
Crear un programa que simule una librería. Debe tener las siguientes características:
1. Debe tener una clase Libreria que tenga las siguientes propiedades:
    1.1 Nombre
    1.2. Dirección
    1.3. Libros // lista de libros
    1.4. Comics // lista de comics
    1.5. Debe contar un método que permita agregar libros y comics a la librería.

2. Debe tener una clase Libro que represente un libro y tenga las siguientes propiedades: título, autor, precio, cantidad y año.

3. Debe tener una clase Comic que herede de Libro y tenga las siguientes propiedades extras: dibujante, editorial, volumen.

4. ** Los usuarios no pueden modificar datos de los libros o comics, pero sí pueden modificar la cantidad de libros disponibles, o el año, de igual forma deben ser propiedades privadas
// ** tener en cuenta que para poder acceder y modificar las propiedades privadas debe usar getters y setters

5. Debe haber un método que permita obtener la información completa de un libro o comic, este debe llamarse "getInfo".

6. En caso de que la cantidad de libros o comics sea 0, debe mostrar un mensaje que diga "No hay ejemplares disponibles".

// ** Subir a github en un branch con el nombre de clases-mini-proyecto
*/

class Libreria{
  constructorLibreria(nombre,direccion,libros,comics){
    this.nombre = nombre;
    this.direccion = direccion;
    this.libros = libros || [];
    this.comics = comics || [];
  }

  agregarLibro(libro){
    this.libros.push(libro)
  }

  agregarComic(comic){
    this.comics.push(comic)
  }
}

class Libro{
  constructorLibro( titulo, autor, precio, cantidad, year){
    this.titulo = titulo;
    this.autor = autor;
    this.precio = precio;
    this.cantidad = cantidad;
    this.year = year;
  }

  set cantidad(nuevaCantidad) {
    this.cantidad = nuevaCantidad;
  }

  set year(nuevoyear) {
    this.year = nuevoyear;
  }

  get titulo() {
    return this.titulo;
  }

  get autor() {
    return this.autor;
  }

  get precio() {
    return this.precio;
  }

  get year() {
    return this.year;
  }

  get cantidad() {
    return this.cantidad;
  }

  getInfo() {
    let information = `${this.titulo} por ${this.autor}. Precio: ${this.precio}. Publicado en ${this.year}`;

    if (this.cantidad === 0) {
      information += " No hay ejemplares disponibles.";
    } else {
      information += `Cantidad disponible: ${this.cantidad}.`;
    }

    return information;
  }

}

class Comic extends Libro {
  constructor(titulo, autor, precio, cantidad, year, dibujante, editorial, volumen) {
    super(titulo, autor, precio, cantidad, year);
    this.dibujante = dibujante;
    this.editorial = editorial;
    this.volumen = volumen;
  }

  get dibujante() {
    return this.dibujante;
  }

  get editorial() {
    return this.editorial;
  }

  get volumen() {
    return this.volumen;
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
console.log(libreria.comics[0])

//Revisar problema con profe
