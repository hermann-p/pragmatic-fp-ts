"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function lens(getter, setter) {
    return {
        view: getter,
        set: setter,
    };
}
exports.lens = lens;
function view(lens, data) {
    if (arguments.length === 1) {
        return (data_) => view(lens, data_);
    }
    return lens.view(data);
}
exports.view = view;
function set(lens, value, data) {
    if (arguments.length === 1) {
        return function (value_, data_) {
            return arguments.length === 1
                ? set(lens, value_)
                : set(lens, value_, data_);
        };
    }
    else if (arguments.length === 2) {
        return (data_) => set(lens, value, data_);
    }
    return lens.set(value, data);
}
exports.set = set;
function over(lens, fn, data) {
    if (arguments.length === 1) {
        return function (fn_, data_) {
            return arguments.length === 1 ? over(lens, fn_) : over(lens, fn_, data_);
        };
    }
    else if (arguments.length === 2) {
        return (data_) => over(lens, fn, data_);
    }
    return lens.set(fn(lens.view(data)), data);
}
exports.over = over;
function lensProp(propName) {
    const getter = main_1.prop(propName);
    const setter = main_1.assoc(propName);
    return lens(getter, setter);
}
exports.lensProp = lensProp;
function lensIndex(idx) {
    const getter = main_1.nth(idx);
    const setter = main_1.assocIn([idx]);
    return lens(getter, setter);
}
exports.lensIndex = lensIndex;
function lensPath(path) {
    const getter = main_1.getIn(path);
    const setter = main_1.assocIn(path);
    return lens(getter, setter);
}
exports.lensPath = lensPath;
