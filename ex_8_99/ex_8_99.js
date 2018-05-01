"use strict";
exports.__esModule = true;
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.items = {};
    }
    MyMap.prototype.setItem = function (key, value) {
        this.items[key] = value;
    };
    MyMap.prototype.getItem = function (key) {
        return this.items[key];
    };
    MyMap.prototype.clear = function () {
        this.items = {};
    };
    MyMap.prototype.printMap = function () {
        console.log(this.items);
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
