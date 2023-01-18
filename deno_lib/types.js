"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Monad = exports.InvalidValueError = exports.NilError = void 0;
var NilError = /** @class */ (function (_super) {
    __extends(NilError, _super);
    function NilError(message) {
        if (message === void 0) { message = "Encountered NIL"; }
        var _this = _super.call(this, message) || this;
        _this.name = _this.constructor.name;
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(_this, _this.constructor);
        }
        return _this;
    }
    return NilError;
}(Error));
exports.NilError = NilError;
var InvalidValueError = /** @class */ (function (_super) {
    __extends(InvalidValueError, _super);
    function InvalidValueError(moreDetails) {
        if (moreDetails === void 0) { moreDetails = ""; }
        var _this = this;
        var baseMsg = "Value was invalid";
        _this = _super.call(this, moreDetails ? baseMsg + ": " + moreDetails : baseMsg) || this;
        _this.name = _this.constructor.name;
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(_this, _this.constructor);
        }
        return _this;
    }
    return InvalidValueError;
}(Error));
exports.InvalidValueError = InvalidValueError;
var Monad = /** @class */ (function () {
    function Monad() {
    }
    Monad.prototype.to = function (transform) {
        return transform(this);
    };
    return Monad;
}());
exports.Monad = Monad;
