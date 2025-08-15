"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collect = Collect;
function Collect(fn) {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            this.outputs = original.apply(this, args);
            if (fn)
                fn.call(this);
            return this.outputs;
        };
    };
}
