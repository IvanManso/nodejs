"use strict"; //si quitamos el modo estricto el this se usa como contexto global

//hacemos un objeto con métodos

var persona = {
	name: "Luis",
	printName: function(){
		console.log(this.name);
	}
};

var mascota = {
	name:"Toby"
};

persona.printName();

//llamarlo sin this

setTimeout(persona.printName.bind(persona), 1000);

function saluda(func){
	func();
}

persona.printName.call(mascota); //sirve para heredar método de otros objetos

saluda(persona.printName.bind(persona));  //pierdes el this y se convierte en undefined