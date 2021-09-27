var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Basic types
 */
var id = 5;
var company = 'Company name';
var isPublished = true;
var x = 'Hello';
var ids; // array of numbers, [1,2,3,4,5]
var arr = [1, true, 'Hello'];
/**
 * Tuple
 * -> specify the types inside the array
 */
var person = [1, 'Giulia', true];
// Tuple array
var employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Bill'],
];
/**
 * Union
 * -> if you want more than one type
 */
var productId;
productId = '22'; // or it could be a number `productId = 10`
/**
 * Enum
 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// if we set up the first value
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// we can also set this with strings
var DirectionStrings;
(function (DirectionStrings) {
    DirectionStrings["Up"] = "up";
    DirectionStrings["Down"] = "down";
    DirectionStrings["Left"] = "left";
    DirectionStrings["Right"] = "right";
})(DirectionStrings || (DirectionStrings = {}));
/**
 * Objects
 */
// we can declare it in this way:
var user = {
    id: 1,
    name: 'John'
};
var user2 = {
    id: 1,
    name: 'John'
};
/**
 * Type assertion
 * -> explicity telling the compiler that we want to treat an entity as a different type
 */
var cid = 1;
// 1. first way to write it
var customerId = cid;
// 2. second way
var customerId2 = cid;
/**
 * Functions
 */
function addNum(x, y) {
    return x + y;
}
// void
function log(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: 'John'
};
var p1 = 1;
var user3 = {
    id: 1,
    name: 'Bob'
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
/**
 * Classes
 */
var Person = /** @class */ (function () {
    // the constructor will run whenever the object is instantiated
    function Person(id, name) {
        this.id = id,
            this.name = name;
    }
    return Person;
}());
var brad = new Person(1, 'Brad'); // here runs the constructor
var mike = new Person(2, 'Mike'); // here runs the constructor again
brad.id = 10; // ok
// If we declare a property `private` we can access and modify it only inside the class
var Person_WithPrivateId = /** @class */ (function () {
    function Person_WithPrivateId(id, name) {
        this.id = id,
            this.name = name;
    }
    return Person_WithPrivateId;
}());
var giulia = new Person_WithPrivateId(1, 'Giulia');
// giulia.id = 10 // ERROR
// If we declare a property `protected` we can access and modify it only inside the class OR classes that extend this class
var Person_WithProtectedId = /** @class */ (function () {
    function Person_WithProtectedId(id, name) {
        this.id = id,
            this.name = name;
    }
    return Person_WithProtectedId;
}());
var giulia2 = new Person_WithProtectedId(1, 'Giulia');
var PersonClass = /** @class */ (function () {
    function PersonClass(id, name) {
        this.id = id,
            this.name = name;
    }
    PersonClass.prototype.register = function () {
        return this.name + " is registered";
    };
    return PersonClass;
}());
/**
 * Extend a class
 */
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) // inherited from Person class
         || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, 'Shawn', 'developer');
/**
 * Generics
 */
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(['John', 'Joe', 'Bill']);
// numArray.push('hello') // ERROR! we can't push a string in a number array
// strArray.push(10) // ERROR! we can't push a number in a string array
