import { commands, ExtensionContext, languages, workspace } from "vscode";
import { templateMaker } from "./commands";

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand("extension.template-maker", templateMaker)
  );
}
