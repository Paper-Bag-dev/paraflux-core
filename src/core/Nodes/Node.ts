import { NodeConstructor, type } from "../../types";
import {Props} from "../../types/Props";
import SuperNode from "./SuperNodes";

abstract class Node{
    __type: type.Node = type.Node;
    inputs: Props;
    outputs: Record<string, any> = {};
    children: Node[] = [];

    constructor(inputs?: Props){
        this.inputs = inputs ?? {} as Props;
    }

    static createNode(props: Props | null, ...children: Array<NodeConstructor>){
        const instantiatedNodes = children.map((child) => {
            const childInst = new child(props ?? {} as Props);
            childInst.render();
            return childInst;
        });
        return instantiatedNodes;
    }

    abstract code(): Record<string, any>;
    abstract render(): (Node | SuperNode)[];

    output(){
        const output: Record<string, any> = {};
        for (const key in this.outputs) {
            if (this.outputs.hasOwnProperty(key)) {
                output[key] = this.outputs[key];
            }
        }
        return output;
    }
}

export default Node;