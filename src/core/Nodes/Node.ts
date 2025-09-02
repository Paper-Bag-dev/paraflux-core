import { NodeConstructor, type } from "../../types";
import SuperNode from "./SuperNodes";

abstract class Node<P = Record<string, any>>{
    __type: type.Node = type.Node;
    inputs: P;
    outputs: Record<string, any> = {};
    children: Node[] = [];

    constructor(inputs?: P){
        this.inputs = inputs ?? {} as P;
    }

    static createNode(props: Record<string,any> | null, ...children: Array<NodeConstructor>){
        const instantiatedNodes = children.map((child) => {
            const childInst = new child(props ?? {} as Record<string, any>);
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