"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execTreeNaive = execTreeNaive;
function execTreeNaive(node, incomingInputs = {}) {
    try {
        node.inputs = { ...incomingInputs };
        let result = {};
        if (typeof node.code === "function") {
            result = node.code?.call(node) || {};
        }
        node.outputs = { ...result };
        const nextInputs = { ...node.outputs };
        if (node.children && node.children.length > 0) {
            for (const child of node.children) {
                execTreeNaive(child, nextInputs);
            }
        }
    }
    catch (error) {
        console.log("Error while running your application. Wrong Code/ Invalid Childrens., ", error);
    }
}
