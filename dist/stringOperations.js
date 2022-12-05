"use strict";
const toTitleCase = function (str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        el = el.toLowerCase();
        el = el.charAt(0).toUpperCase() + el.slice(1);
        arr[i] = el;
    }
    return arr.join(" ");
};
const countWords = function (str) {
    let arr = str.split(/[-_\s]/);
    return arr.length;
};
const toWords = function (str) {
    let arr = str.split(" ");
    return arr;
};
const repeat = function (str, r) {
    let newString = "";
    for (let i = 0; i < r; i++) {
        newString += str;
    }
    return newString;
};
const isAlpha = function (str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (/[0-9]/.test(arr[i])) {
            return false;
        }
    }
    return true;
};
const isBlank = function (str) {
    str = str.trim();
    if (str.length == 0) {
        return true;
    }
    return false;
};
