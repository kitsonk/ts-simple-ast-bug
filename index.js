"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_simple_ast_1 = require("ts-simple-ast");
const project = new ts_simple_ast_1.Project({
    tsConfigFilePath: "./example/tsconfig.json"
});
const exampleDts = project.getSourceFileOrThrow("example.d.ts");
exampleDts.forEachChild(node => {
    if (ts_simple_ast_1.TypeGuards.isAmbientableNode(node)) {
        node.setHasDeclareKeyword(false);
    }
});
console.log(exampleDts.print());
