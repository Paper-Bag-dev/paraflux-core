import { NodeConstructor } from "../types";
import Node from "../core/Nodes/Node";
import SuperNode from "../core/Nodes/SuperNodes";
declare class Root extends SuperNode {
    app: NodeConstructor;
    constructor(app: NodeConstructor);
    code(): {
        name: string;
    };
    render(): (SuperNode | Node)[];
}
export declare function createRoot(app: NodeConstructor): Root;
export {};
