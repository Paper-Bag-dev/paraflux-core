import { NodeConstructor, type } from "../../types";
import Node from "./Node";
declare abstract class SuperNode<P = Record<string, any>> {
    __type: type.SuperNode;
    inputs: P;
    outputs: Record<string, any>;
    meta: Record<string, any>;
    children: Array<Node | SuperNode>;
    constructor(inputs?: P);
    static createNode(props: Record<string, any> | null, ...children: Array<NodeConstructor>): (Node<any> | SuperNode<any>)[];
    abstract code?(): Record<string, any>;
    abstract render(): (SuperNode | Node)[];
    paths?(): Record<string, Array<string>>;
    metadata?(): Record<string, object>;
    output(): Record<string, any>;
}
export default SuperNode;
