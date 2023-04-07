// class Employeee{
//     private empno:number;
//     private lname!:string;
//     getEmpno():number{
//         return this.empno;
//     }
//     getlname():string{
//         return this.lname;
//     }
//     constructor(empno:number,lname:string){
//         this.empno=empno;
//         this.lname=lname;
//     }

    
// }
// let e1=new Employeee(101,"merin");

console.log(e1.getlname);
class Employee{
    private readonly empno:number;//readonly is like final.can assing value only in constructor
    private ename:string;
    private sal:number;
    private attendance:any;// when class instance variables are private use get and set.

    public getEmpno():number{
        return this.empno;
    }
    public getEname():string{
        return this.ename;
    }
    public getSal():number{
        return this.sal;
    }
    public getAttendance():number{
        return this.attendance;
    }
// constructor()
// {
//     this.empno=101;
//     this.ename='abc';
//     this.sal=20000;
//     this.attendance=18;
// }
constructor(empno:number,ename:string,sal:number,attendance:any){
    this.empno=empno;
    this.ename=ename;
    this.sal=sal;
    this.attendance=attendance;

}
print():void{
    console.log(this.empno,this.ename,this.sal,this.attendance);
}
}
// var emp=new Employee();
// var emp1=new Employee();
// emp1.empno=102;
// var emp2=new Employee();
// emp2.empno=103;
// -----------
let emp=new Employee(1,'abc',3000,20);
let emp1=new Employee(2,'bbc',3000,33);
let emp2=new Employee(3,'mer',4000000,33);
emp.print();
emp1.print();
emp2.print();
var emparray:Employee[]=[emp,emp1,emp2];
emparray.forEach()