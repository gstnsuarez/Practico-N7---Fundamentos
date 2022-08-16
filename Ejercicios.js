    // Crea un objeto
    // Luego crea otro objeto en donde el sea su padre y ademas se cree como nuevo objeto
    // Pista, utilizar: __proto__
    // Tu código:
    var usuario = {
        nombre : 'default',
        apellido : 'default',
    }
    var persona = {
        nombre : 'gaston',
        apellido : 'suarez',
    }

persona.___proto__=usuario
console.log(persona);




    // Agrega un método al Constructor del `prototype`
    // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
    // Tu código:

    function alumno(nombre, edad){

        this.nombre = nombre ;        
        this.edad = edad ;
        
        }
        
        alumno.prototype.saludar = function(){        
        return "Hello World!"        
        }        
        var p1 = new alumno("David", 12)    
        console.log(p1.saludar())


    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse() => menem
    // 'joaco'.reverse() => 'ocaoj' 
    // Pista: Necesitarás usar "this" dentro de "reverse
    function string (nombre)
    {
        this.nombre = nombre ;
    }
    
    string.prototype.invertir = function(){
        return reverse(this.nombre)
    }
    var p2 = new string('gaston')
    console.log(p2.invertir())



    // Crea un objeto
    // Agregar un getNombre()
    // Agregar un changeNombre()
    // Mostrar por consola changeNombre() y getNombre(), con nombre distinto en changeNombre() al del constructor y al del getNombre()
    // Tu código:

    var cambiar = {


        nombre : 'Pepe',

        getNombre: function(){
            return this.nombre;
            },
        changeNombre: function(nombre){
            return "el nuevo nombre es " + nombre;
        }

    }

        console.log(cambiar.getNombre());
        console.log(cambiar.changeNombre('asd'))





    // Crea un objeto
    // Luego crea otro objeto en donde el sea su padre y ademas se cree como nuevo objeto
    // Utilizar obligatoriamente el Metodo Object
    // Tu código:
    var persona = {

        nombre: "edu",
        
        apellido: "paez",
        
        } 
        
        var alu = Object.create(persona)
        
        console.log(alu)
        
        console.log(alu.__proto__)
