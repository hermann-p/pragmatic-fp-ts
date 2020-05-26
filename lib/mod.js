"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// mod that really constrains n within the modulus of [0, n[
function mod(modulus, n) {
    if (arguments.length === 1)
        return (_n) => mod(modulus, _n);
    const jsMod = n % modulus;
    return jsMod < 0 ? jsMod + modulus : Math.abs(jsMod); // catch -0
}
exports.mod = mod;
