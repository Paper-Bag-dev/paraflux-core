import Node from "../core/Nodes/Node";

export function createRoot(app: new () => Node) {
    return new app().render();
}