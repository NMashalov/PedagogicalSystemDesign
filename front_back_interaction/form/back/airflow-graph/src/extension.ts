import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let webview = vscode.commands.registerCommand('react-ext.namasteworld', () => {

        let panel = vscode.window.createWebviewPanel("webview", "React", vscode.ViewColumn.One, {
            enableScripts: true
        })

        // web is for my react root directory, rename for yours

        let scriptSrc = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, "web", "dist", "assets","index.js"))
		let cssSrc = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, "web", "dist", "assets","index.css"))

        panel.webview.html = `<!DOCTYPE html>
        <html lang="en">
          <head>
		  	<link rel="stylesheet" href="${cssSrc}" />
			<meta charset="UTF-8" />
			<link rel="icon" type="image/svg+xml" href="/tree.svg" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Mathema</title>
          </head>
          <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root"></div>
            <script src="${scriptSrc}"></script>
          </body>
        </html>
        `
    });

    context.subscriptions.push(webview);
}

export function deactivate() { }