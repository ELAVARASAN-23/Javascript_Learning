function names(a,b){
	return this.a+this.b;
}

function givenname(name){
	"use strict";
	var x='hello';
	return x;
}

class ela{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	display(){
		return this.name+" "+this.age;
	}
}


const person={
	name: 'Elavarasan',
	color: 'green',
	get both(){
		return this.name+this.color;
	},
	set addname(names){
		this.name=names;
	}
};

person.weight=64;

person.addname="King";

console.log(person.name);

function proper(name,age,height,weight){
	this.name=name;
	this.age=age;
	this.height=height;
	this.weight=weight;
}

proper.prototype.nation="Indian";

proper.prototype.view=function(){
	return this.name+' '+this.nation;
}
var mybio=new proper('ela',22,6.6,64);

console.log(mybio.view());

//learning dates
var d= new Date();
console.log(d.getFullYear());
coso





