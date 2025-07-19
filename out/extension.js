"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('Funk language extension is now active!');
    // Register a command for formatting Funk files
    let formatCommand = vscode.commands.registerCommand('funk.format', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor && editor.document.languageId === 'funk') {
            vscode.window.showInformationMessage('Funk formatting would happen here!');
            // TODO: Integrate with the Funk formatter we built earlier
        }
    });
    // Register a hover provider for Funk files
    let hoverProvider = vscode.languages.registerHoverProvider('funk', {
        provideHover(document, position, token) {
            const range = document.getWordRangeAtPosition(position);
            const word = document.getText(range);
            // Provide hover information for built-in types and primitives
            const hoverInfo = getFunkHoverInfo(word);
            if (hoverInfo) {
                return new vscode.Hover(hoverInfo);
            }
        }
    });
    // Register completion provider for Funk files
    let completionProvider = vscode.languages.registerCompletionItemProvider('funk', {
        provideCompletionItems(document, position, token, context) {
            const completions = [];
            // Add basic Funk keywords
            const keywords = ['let', 'data', 'instance', 'trait', 'forall', 'if', 'then', 'else', 'case', 'of'];
            keywords.forEach(keyword => {
                const item = new vscode.CompletionItem(keyword, vscode.CompletionItemKind.Keyword);
                item.detail = `Funk keyword: ${keyword}`;
                completions.push(item);
            });
            // Add built-in types
            const types = ['Int', 'String', 'Bool', 'IO', 'List', 'Unit'];
            types.forEach(type => {
                const item = new vscode.CompletionItem(type, vscode.CompletionItemKind.Class);
                item.detail = `Built-in type: ${type}`;
                completions.push(item);
            });
            // Add primitive functions
            const primitives = ['#print', '#fmapIO', '#pureIO', '#bindIO', '#intEq', '#stringEq', '#stringConcat'];
            primitives.forEach(primitive => {
                const item = new vscode.CompletionItem(primitive, vscode.CompletionItemKind.Function);
                item.detail = `Primitive function: ${primitive}`;
                completions.push(item);
            });
            return completions;
        }
    });
    context.subscriptions.push(formatCommand, hoverProvider, completionProvider);
}
exports.activate = activate;
function getFunkHoverInfo(word) {
    const hoverMap = {
        'IO': 'IO monad for handling input/output operations',
        'Int': 'Integer type for whole numbers',
        'String': 'String type for text data',
        'Bool': 'Boolean type for true/false values',
        'List': 'List type for collections of values',
        'Unit': 'Unit type representing no meaningful value',
        '#print': 'Primitive function for printing values to console',
        '#fmapIO': 'Primitive function for mapping over IO values',
        '#pureIO': 'Primitive function for wrapping pure values in IO',
        '#bindIO': 'Primitive function for sequencing IO operations',
        'let': 'Keyword for defining local bindings',
        'data': 'Keyword for defining algebraic data types',
        'instance': 'Keyword for implementing trait instances',
        'trait': 'Keyword for defining type class interfaces',
        'forall': 'Keyword for universal quantification in types'
    };
    return hoverMap[word];
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map