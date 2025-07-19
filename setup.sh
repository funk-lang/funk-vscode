#!/bin/bash

# Funk VS Code Extension Setup Script

echo "Setting up Funk Language Support for VS Code..."

# Check if Node.js and npm are installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js first."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Compile TypeScript
echo "Compiling TypeScript..."
npm run compile

# Check if @vscode/vsce is installed globally
if ! command -v vsce &> /dev/null; then
    echo "Installing @vscode/vsce (Visual Studio Code Extension Manager)..."
    npm install -g @vscode/vsce
fi

# Package the extension
echo "Packaging extension..."
vsce package

echo ""
echo "✅ Setup complete!"
echo ""
echo "To install the extension:"
echo "1. Open VS Code"
echo "2. Press Ctrl+Shift+P (or Cmd+Shift+P on Mac)"
echo "3. Type 'Extensions: Install from VSIX...'"
echo "4. Select the generated .vsix file in this directory"
echo ""
echo "To develop the extension:"
echo "1. Open this folder in VS Code"
echo "2. Press F5 to launch Extension Development Host"
echo "3. Open a .funk file to test syntax highlighting"
echo ""
echo "Sample Funk file: test-sample.funk"
