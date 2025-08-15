import { NodeConstructor, type } from "../../types";
import { Props } from "../../types/Props";
import SuperNode from "./SuperNodes";
declare abstract class Node {
    __type: type.Node;
    inputs: Props;
    outputs: Record<string, any>;
    children: Node[];
    constructor(inputs?: Props);
    static createNode(props: Props | null, ...children: Array<NodeConstructor>): (SuperNode | Node)[];
    abstract code(): Record<string, any>;
    abstract render(): (Node | SuperNode)[];
    output(): Record<string, any>;
}
export default Node;
