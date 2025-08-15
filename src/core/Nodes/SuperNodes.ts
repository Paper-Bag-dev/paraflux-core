import { NodeConstructor, type } from "../../types";
import { Props } from "../../types/Props";
import Node from "./Node";

abstract class SuperNode {
  __type: type.SuperNode = type.SuperNode;
  inputs: Props;
  outputs: Record<string, any> = {};
  meta: Record<string, any> = {};
  children: Array<Node | SuperNode> = [];

  constructor(inputs?: Props) {
    this.inputs = inputs ?? ({} as Props);
  }

  static createNode(props: Props | null, ...children: Array<NodeConstructor>) {
    const instantiatedNodes = children.map((child) => {
      const childInst = new child(props ?? ({} as Props));
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
