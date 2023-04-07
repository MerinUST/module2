class Vehicle{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    getName():string{
        return this.name;

    }
}
    class car extends Vehicle{
        model:string;
        constructor(model:string,name:string){
            super(name);
            this.model=model;
        }
        getModel():string{
            return this.model;
        }        
    }
class Truck extends Vehicle{
    constructor(name:string){
        super(name);
    }
}
var mycar=new car("sport model","BMW");
console.log(mycar.getName(),mycar.getModel());
var mytruck=new Truck("tata truck");
console.log(mytruck.getName())