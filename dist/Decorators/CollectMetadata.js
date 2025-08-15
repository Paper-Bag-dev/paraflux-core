"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectMetadata = CollectMetadata;
function CollectMetadata(fn) {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            this.meta = original.apply(this, args);
            if (fn)
                fn.call(this);
            return this.meta;
        };
    };
}
