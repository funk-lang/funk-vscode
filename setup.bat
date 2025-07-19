@echo off
REM Funk VS Code Extension Setup Script for Windows

echo Setting up Funk Language Support for VS Code...

REM Check if Node.js and npm are installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed. Please install Node.js first.
    exit /b 1
)

where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: npm is not installed. Please install npm first.
    exit /b 1
)

REM Install dependencies
echo Installing dependencies...
call npm install

REM Compile TypeScript
echo Compiling TypeScript...
call npm run compile

REM Check if @vscode/vsce is installed globally
where vsce >nul 2>nul
if %errorlevel% neq 0 (
    echo Installing @vscode/vsce (Visual Studio Code Extension Manager)...
    call npm install -g @vscode/vsce
)

REM Package the extension
echo Packaging extension...
call vsce package

echo.
echo ✅ Setup complete!
echo.
echo To install the extension:
echo 1. Open VS Code
echo 2. Press Ctrl+Shift+P
echo 3. Type 'Extensions: Install from VSIX...'
echo 4. Select the generated .vsix file in this directory
echo.
echo To develop the extension:
echo 1. Open this folder in VS Code
echo 2. Press F5 to launch Extension Development Host
echo 3. Open a .funk file to test syntax highlighting
echo.
echo Sample Funk file: test-sample.funk
pause
