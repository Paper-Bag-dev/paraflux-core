import { NodeConstructor, type } from "../../types";
import { Props } from "../../types/Props";
import Node from "./Node";
declare abstract class SuperNode {
    __type: type.SuperNode;
    inputs: Props;
    outputs: Record<string, any>;
    meta: Record<string, any>;
    children: Array<Node | SuperNode>;
    constructor(inputs?: Props);
    static createNode(props: Props | null, ...children: Array<NodeConstructor>): (SuperNode | Node)[];
    abstract code?(): Record<string, any>;
    abstract render(): (SuperNode | Node)[];
    paths?(): Record<string, Array<string>>;
    metadata?(): Record<string, object>;
    output(): Record<string, any>;
}
export default SuperNode;
