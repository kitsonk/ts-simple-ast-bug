import { Project, TypeGuards } from "ts-simple-ast";

const project = new Project({
  tsConfigFilePath: "./example/tsconfig.json"
});

const exampleDts = project.getSourceFileOrThrow("example.d.ts");

exampleDts.forEachChild(node => {
  if (TypeGuards.isAmbientableNode(node)) {
    node.setHasDeclareKeyword(false);
  }
});

console.log(exampleDts.print());
