import { NodeConstructor, type } from "../../types";
import SuperNode from "./SuperNodes";
declare abstract class Node<P = Record<string, any>> {
    __type: type.Node;
    inputs: P;
    outputs: Record<string, any>;
    children: Node[];
    constructor(inputs?: P);
    static createNode(props: Record<string, any> | null, ...children: Array<NodeConstructor>): (Node<any> | SuperNode<any>)[];
    abstract code(): Record<string, any>;
    abstract render(): (Node | SuperNode)[];
    output(): Record<string, any>;
}
export default Node;
