import { Node } from "../core";


export function Collect<
  T extends Node,
  A extends any[],
  R extends Record<string, any>
>(fn?: () => void) {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: A) => R>
  ): void {
    const original = descriptor.value!;
    
    descriptor.value = function (this: T, ...args: A): R {
      this.outputs = original.apply(this, args);
      if (fn) fn.call(this);
      return this.outputs as R;
    };
  };
}

