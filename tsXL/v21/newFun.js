"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./ed.js");
var y = 10;
console.log(x);
function isNumber(x) {
    return typeof x === 'number';
}
var Fish = (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log('swim');
    };
    return Fish;
}());
var Bird = (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log('fly');
    };
    return Bird;
}());
function isFish(pet) {
    return pet.swim !== undefined;
}
var oPet = {};
function test(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
