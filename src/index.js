const vscode = require('vscode');
const path = require('path');

/**
 * 注册一个vscode命令
 */
vscode.commands.registerCommand('markdown.example', function() {
    console.log(path.join(__dirname, 'example.md'));
    // 打开一个markdown文件
    vscode.workspace.openTextDocument(path.join(__dirname, 'example.md')).then(doc => {
        // 显示markdown文件
        vscode.window.showTextDocument(doc);
    });
});