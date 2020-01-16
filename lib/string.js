"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Maybe_1 = require("./Maybe");
exports.replace = (pattern) => (replacement) => (value) => Maybe_1.maybe(value).bind((str) => str.replace(pattern, replacement));
exports.test = (regex) => (str) => typeof str === "string" && regex instanceof RegExp && regex.test(str);
exports.matches = exports.test;
exports.toUpper = (str) => Maybe_1.maybe(str).bind((s) => s.toUpperCase());
exports.toLower = (str) => Maybe_1.maybe(str).bind((s) => s.toLowerCase());
//# sourceMappingURL=string.js.map