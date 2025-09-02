import { NodeConstructor, type } from "../../types";
import Node from "./Node";

abstract class SuperNode<P = Record<string, any>> {
  __type: type.SuperNode = type.SuperNode;
  inputs: P;
  outputs: Record<string, any> = {};
  meta: Record<string, any> = {};
  children: Array<Node | SuperNode> = [];

  constructor(inputs?: P) {
    this.inputs = inputs ?? {} as P;
  }

  static createNode(props: Record<string, any> | null, ...children: Array<NodeConstructor>) {
    const instantiatedNodes = children.map((child) => {
      const childInst = new child(props ?? {} as Record<string, any>);
      childInst.render();
      return childInst;
    });
    return instantiatedNodes;
  }

  abstract code?(): Record<string, any>;
  abstract render(): (SuperNode | Node)[];
  paths?(): Record<string, Array<string>>
  metadata?(): Record<string, object>

  output() {
    const output: Record<string, any> = {};
    for (const key in this.outputs) {
      if (this.outputs.hasOwnProperty(key)) {
        output[key] = this.outputs[key];
      }
    }
    return output;
  }
}

export default SuperNode;
