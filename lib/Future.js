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
exports.futureMaybe = exports.futureEither = exports.Future = void 0;
const main_1 = require("./main");
class Future {
    constructor(bindDefault, bindError, value) {
        this.bindDefault = bindDefault;
        this.bindError = bindError;
        this.value = value instanceof Promise ? value : Promise.resolve(value);
    }
    _(f, errorHint) {
        const toError = errorHint ? () => this.bindError(errorHint) : this.bindError;
        const applyBinding = (m) => __awaiter(this, void 0, void 0, function* () {
            if (main_1.isNothing(m) || main_1.isLeft(m)) {
                return Promise.resolve(m);
            } // short circuit Left, Nothing,...
            try {
                const v = m.getValue();
                const applied = f(v);
                if (applied instanceof Promise) {
                    return applied
                        .then((appliedValue) => m._(() => appliedValue))
                        .catch((err) => {
                        return toError(err);
                    })
                        .then(logLeft);
                }
                else {
                    return logLeft(m._(() => applied, errorHint));
                }
            }
            catch (err) {
                console.log(err);
                return toError(err);
            }
        });
        const rm = this.value.then(applyBinding);
        return new Future(this.bindDefault, this.bindError, rm);
    }
    filter(pred, errorHint) {
        return new Future(this.bindDefault, this.bindError, this.value
            .then((m) => __awaiter(this, void 0, void 0, function* () {
            const filterResult = yield m.bind(pred).getValue();
            return m.filter(() => filterResult, errorHint);
        }))
            .catch(this.bindError));
    }
    effect(f) {
        return new Future(this.bindDefault, this.bindError, this.value.then((m) => m.effect(f)).catch(this.bindError));
    }
    match(matcher) {
        const match = this.value.then((m) => m.match(matcher)).then(this.bindDefault);
        return new Future(this.bindDefault, this.bindError, match);
    }
    effectAsync(f) {
        this.value.then((m) => m.effect(f));
        return this;
    }
    getValueOr(alt) {
        return this.value.then(main_1.getValueOr(alt));
    }
    getValue() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.value).getValue();
        });
    }
    getMonad() {
        return this.value;
    }
    getReason() {
        return __awaiter(this, void 0, void 0, function* () {
            const m = yield this.value;
            if (main_1.isLeft(m)) {
                return m.getReason();
            }
            else if (main_1.isNothing(m)) {
                return new main_1.NilError("Nothing()");
            }
            else
                throw new Error(`Can not get reason from ${m}`);
        });
    }
}
exports.Future = Future;
exports.futureEither = (value) => new Future(main_1.either, main_1.left, main_1.either(value));
exports.futureMaybe = (value) => new Future(main_1.maybe, main_1.nothing, main_1.maybe(value));
const logLeft = (m) => {
    if (main_1.isLeft(m))
        console.log(m.getReason());
    return m;
};
