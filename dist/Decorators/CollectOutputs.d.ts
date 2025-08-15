import { Node } from "../core";
export declare function Collect<T extends Node, A extends any[], R extends Record<string, any>>(fn?: () => void): (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<(...args: A) => R>) => void;
