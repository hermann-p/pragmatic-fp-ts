"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Monad {
    to(transform) {
        return transform(this);
    }
}
exports.Monad = Monad;
