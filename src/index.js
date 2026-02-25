"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimAndUppercase = exports.capitalizeFirstLetter = void 0;
exports.createUser = createUser;
exports.createBook = createBook;
exports.calculateArea = calculateArea;
exports.getStatusColor = getStatusColor;
exports.getFirstElement = getFirstElement;
exports.findById = findById;
function createUser(id, name, email, isActive) {
    if (isActive === void 0) { isActive = true; }
    return { id: id, name: name, email: email, isActive: isActive };
}
function createBook(book) {
    return book;
}
function calculateArea(shape, value) {
    if (shape === 'circle') {
        return Math.PI * value * value;
    }
    else {
        return value * value;
    }
}
function getStatusColor(status) {
    switch (status) {
        case 'active': return 'green';
        case 'inactive': return 'red';
        case 'new': return 'blue';
        default:
            return 'gray';
    }
}
var capitalizeFirstLetter = function (str, uppercase) {
    if (uppercase === void 0) { uppercase = false; }
    if (uppercase)
        return str.toUpperCase();
    var trimmed = str.trimStart();
    if (trimmed.length === 0)
        return str;
    var firstNonSpaceIndex = str.length - trimmed.length;
    return str.substring(0, firstNonSpaceIndex) +
        trimmed.charAt(0).toUpperCase() +
        trimmed.slice(1);
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
var trimAndUppercase = function (str, uppercase) {
    if (uppercase === void 0) { uppercase = false; }
    var trimmed = str.trim();
    return uppercase ? trimmed.toUpperCase() : trimmed;
};
exports.trimAndUppercase = trimAndUppercase;
function getFirstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
function findById(items, id) {
    return items.find(function (item) { return item.id === id; });
}
var user1 = createUser(1, "Ivan Ivanov", "ivan@aboba.com");
var book1 = createBook({ title: "1984", author: "George Orwell", year: 1949, genre: "fiction" });
var circleArea = calculateArea('circle', 5);
var activeColor = getStatusColor('active');
var result1 = (0, exports.capitalizeFirstLetter)(" hello world   ");
var numbers = [1, 2, 3];
var firstNumber = getFirstElement(numbers);
console.log(user1);
console.log(book1);
console.log(circleArea);
console.log(activeColor);
console.log(result1);
console.log(numbers);
console.log(firstNumber);
