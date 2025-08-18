import Node from "../core/Nodes/Node";
import SuperNode from "../core/Nodes/SuperNodes";
import { Props } from "./Props";

export enum type{
    Node,
    SuperNode,
    Metadata,
    Controller
}

export type NodeConstructor = new (props: Props) => Node | SuperNode;
