import { NodeConstructor } from "../types";
import Node from "../core/Nodes/Node";
import SuperNode from "../core/Nodes/SuperNodes";
import { Assign } from "../Decorators/AssignChildren";
import { Collect } from "../Decorators/CollectOutputs";

class Root extends SuperNode{
    app: NodeConstructor;
    constructor(app: NodeConstructor) {
        super();
        this.app = app;
    }

    @Collect()
    code(){
        return {
            name: "Root",
        };
    }

    @Assign()
    render(){
        return Node.createNode(null, this.app);
    }
}

export function createRoot(app: NodeConstructor) {
    return new Root(app);
}