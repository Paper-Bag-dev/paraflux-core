"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
class SuperNode {
    __type = types_1.type.SuperNode;
    inputs;
    outputs = {};
    meta = {};
    children = [];
    constructor(inputs) {
        this.inputs = inputs ?? {};
    }
    static createNode(props, ...children) {
        const instantiatedNodes = children.map((child) => {
            const childInst = new child(props ?? {});
            childInst.render();
            return childInst;
        });
        return instantiatedNodes;
    }
    output() {
        const output = {};
        for (const key in this.outputs) {
            if (this.outputs.hasOwnProperty(key)) {
                output[key] = this.outputs[key];
            }
        }
        return output;
    }
}
exports.default = SuperNode;
