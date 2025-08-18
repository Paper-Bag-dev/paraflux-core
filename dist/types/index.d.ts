import Node from "../core/Nodes/Node";
import SuperNode from "../core/Nodes/SuperNodes";
import { Props } from "./Props";
export declare enum type {
    Node = 0,
    SuperNode = 1,
    Metadata = 2,
    Controller = 3
}
export type NodeConstructor = new (props: Props) => Node | SuperNode;
