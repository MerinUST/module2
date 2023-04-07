var Employeee = /** @class */ (function () {
    function Employeee(empno, lname) {
        this.empno = empno;
        this.lname = lname;
    }
    Employeee.prototype.getlname = function () {
        return this.lname;
    };
    return Employeee;
}());
var e1 = new Employeee(101, "merin");
console.log(e1.getlname);
var Employee = /** @class */ (function () {
    // constructor()
    // {
    //     this.empno=101;
    //     this.ename='abc';
    //     this.sal=20000;
    //     this.attendance=18;
    // }
    function Employee(empno, ename, sal, attendance) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendance = attendance;
    }
    Employee.prototype.getEmpno = function () {
        return this.empno;
    };
    Employee.prototype.getEname = function () {
        return this.ename;
    };
    Employee.prototype.getSal = function () {
        return this.sal;
    };
    Employee.prototype.getAttendance = function () {
        return this.attendance;
    };
    Employee.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendance);
    };
    return Employee;
}());
// var emp=new Employee();
// var emp1=new Employee();
// emp1.empno=102;
// var emp2=new Employee();
// emp2.empno=103;
var emp = new Employee(1, 'abc', 3000, 20);
var emp1 = new Employee(2, 'bbc', 3000, 33);
var emp2 = new Employee(3, 'mer', 4000000, 33);
emp.print();
emp1.print();
emp2.print();
var emparray = [emp, emp1, emp2];
