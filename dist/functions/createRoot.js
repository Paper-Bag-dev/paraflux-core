"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoot = createRoot;
const Node_1 = __importDefault(require("../core/Nodes/Node"));
const SuperNodes_1 = __importDefault(require("../core/Nodes/SuperNodes"));
const AssignChildren_1 = require("../Decorators/AssignChildren");
const CollectOutputs_1 = require("../Decorators/CollectOutputs");
class Root extends SuperNodes_1.default {
    app;
    constructor(app) {
        super();
        this.app = app;
    }
    code() {
        return {
            name: "Root",
        };
    }
    render() {
        return Node_1.default.createNode(null, this.app);
    }
}
__decorate([
    (0, CollectOutputs_1.Collect)()
], Root.prototype, "code", null);
__decorate([
    (0, AssignChildren_1.Assign)()
], Root.prototype, "render", null);
function createRoot(app) {
    return new Root(app);
}
