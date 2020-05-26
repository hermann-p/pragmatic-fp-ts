"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const types_1 = require("./types");
class Chain extends types_1.Monad {
    constructor(value) {
        super();
        this.__value = value;
    }
    bind(fn) {
        return chain(fn(this.__value));
    }
    bindM(fn) {
        return chain(fn(this));
    }
    filter(pred) {
        return pred(this.__value) ? this : chain(null);
    }
    getValue() {
        return this.__value;
    }
    getValueOr(alt) {
        return this.__value || alt;
    }
    effect(eff) {
        eff(this.__value);
        return this;
    }
}
exports.Chain = Chain;
function chain(value) {
    return new Chain(main_1.getValueOr(null, value));
}
exports.chain = chain;
function isChain(candidate) {
    return candidate instanceof Chain;
}
exports.isChain = isChain;
