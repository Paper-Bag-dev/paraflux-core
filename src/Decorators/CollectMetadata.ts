import { SuperNode } from "../core";


export function CollectMetadata(fn?: () => void) {
  return function <T extends SuperNode>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => Record<string, object>>
  ): void {
    const original = descriptor.value!;
    
    descriptor.value = function (this: T, ...args: any[]) {
      this.meta = original.apply(this, args);
      if (fn) fn.call(this);
      return this.meta;
    };
  };
}

