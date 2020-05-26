"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function sequentialize(fn, coll) {
    if (arguments.length === 1) {
        return (_coll) => sequentialize(fn, _coll);
    }
    return main_1.chain(coll)
        .bind((elements) => __awaiter(this, void 0, void 0, function* () {
        if (!elements) {
            return [];
        }
        const results = Array(elements.length);
        for (let i = 0; i < elements.length; ++i) {
            results[i] = yield fn(elements[i]).then(main_1.getValue);
        }
        return results;
    }))
        .getValue();
}
exports.sequentialize = sequentialize;
