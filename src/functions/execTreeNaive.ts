import Node from "../core/Nodes/Node";
import SuperNode from "../core/Nodes/SuperNodes";

export function execTreeNaive(node: Node | SuperNode, incomingInputs: Record<string, any> = {}) {
    node.inputs = { ...incomingInputs };

    let result: Record<string, any> = {};
    if (typeof node.code === "function") {
        result = node.code() || {};
    }

    node.outputs = { ...result };

    const nextInputs = { ...node.outputs };

    if (node.children && node.children.length > 0) {
        for (const child of node.children) {
            execTreeNaive(child, nextInputs);
        }
    }
}
