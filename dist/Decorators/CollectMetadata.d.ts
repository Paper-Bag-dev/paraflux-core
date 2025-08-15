import { SuperNode } from "../core";
export declare function CollectMetadata(fn?: () => void): <T extends SuperNode>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<(...args: any[]) => Record<string, object>>) => void;
