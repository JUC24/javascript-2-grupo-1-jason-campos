/*Constructors*/

// Funcion que se llama utilizando la palabra reservada 'new'
// tambien llamadas funciones constructores

// .Permite crear objetos con propiedades y metodos que necesitemos
// .La funcionalidad central se vincula por medio de 'prototupes'
// .Retorna nuevo objeto(Implicitammente)

//Como Funcionan:
// .Se crea el objeto (implicitamente)
// .se hace in bind del this
// .Corre el codigo en el constructor
// .Retorna nuevo objeto (implicitamente)

//diferencia:
//constructor
// .Se ejecuta con la palabra 'new'
// . tiene la palabra this, y es retornado implictamente
// . No es necesario crear un objeto y luego retornarlo

//function:
// .No se ejecuta con la palabra new
// .Es necesario crear el objeto nuevo y devolverlo utilizando la palabra return

//cuando usar un constructor o una funcion normal
// Depende de lo que se necesite hacer

/*Constructores*/
function estudianteNew(nombre,apellidos,fechaNacimiento,id,nuevoIngreso,carrera,cursosMatriculados,CursosCursados){
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.fechaNacimiento = fechaNacimiento;
  this.id = id;
  this.nuevoIngreso = nuevoIngreso;
  this.carrera = carrera;
  this.cursosMatriculados = cursosMatriculados || [];
  this.CursosCursados = CursosCursados || [];
  
  this.matricular = function(curso){
    this.cursosMatriculados.push(curso)
  }

  this.retirarMatricula = function(curso){
    const index = this.cursosMatriculados.indexOf(curso);
    if(index > -1){
      this.cursosMatriculados.splice(index, 1);
    }
  }

  this.aprovecourse = function(curso,nota){
    this.cursosCursados.push({curso,nota});
    this.cursosCursados.estado = nota >=70 ? 'aprobado' : 'reprobado';
  }
};

const estudiantePrueba = new estudianteNew ('Andy','smith','1990-10-30','a-0001',true,'Historia del arte',['Introduccion a la pintura','intro a informatica '], [{curso: 'prueba', nota: 50}]);

console.log(estudiantePrueba)
estudiantePrueba.aprovecourse('Prueba 1', 50);
console.log(estudiantePrueba.CursosCursados);