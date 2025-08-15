import { Node, SuperNode } from "../core";
export declare function Assign(fn?: () => void): <T extends (Node | SuperNode)>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<(...args: any[]) => (Node | SuperNode)[]>) => void;
