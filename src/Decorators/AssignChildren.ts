import { Node, SuperNode } from "../core";


export function Assign(fn?: () => void) {
  return function <T extends (Node | SuperNode)>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => (Node | SuperNode)[]>
  ): void {
    const original = descriptor.value!;
    
    descriptor.value = function (this: T, ...args: any[]) {
      this.children = original.apply(this, args);
      if (fn) fn.call(this);
      return this.children;
    };
  };
}

