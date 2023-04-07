var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(name) {
        this.name = name;
    }
    Vehicle.prototype.getName = function () {
        return this.name;
    };
    return Vehicle;
}());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car(model, name) {
        var _this = _super.call(this, name) || this;
        _this.model = model;
        return _this;
    }
    car.prototype.getModel = function () {
        return this.model;
    };
    return car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(name) {
        return _super.call(this, name) || this;
    }
    return Truck;
}(Vehicle));
var mycar = new car("sport model", "BMW");
console.log(mycar.getName(), mycar.getModel());
var mytruck = new Truck("tata truck");
console.log(mytruck.getName());
