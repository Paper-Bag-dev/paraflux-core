"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assign = Assign;
function Assign(fn) {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            this.children = original.apply(this, args);
            if (fn)
                fn.call(this);
            return this.children;
        };
    };
}
