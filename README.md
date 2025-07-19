# Funk Language Support for VS Code

A Visual Studio Code extension that provides syntax highlighting and language support for the Funk functional programming language.

## Features

- **Syntax Highlighting**: Full syntax highlighting for Funk language constructs including:
  - Keywords (`let`, `data`, `instance`, `trait`, `forall`, etc.)
  - Built-in types (`Int`, `String`, `Bool`, `IO`, `List`, `Unit`)
  - Primitive functions (`#print`, `#fmapIO`, `#pureIO`, `#bindIO`, etc.)
  - Comments (line comments with `--` and block comments with `{- -}`)
  - String literals with escape sequences
  - Numbers (integers and floats)
  - Operators and punctuation

- **Language Configuration**: 
  - Auto-closing brackets and quotes
  - Smart indentation
  - Code folding support
  - Comment toggling

- **IntelliSense Support**:
  - Hover information for built-in types and primitives
  - Auto-completion for keywords, types, and primitive functions

- **Custom Theme**: Includes a "Funk Dark" theme optimized for Funk syntax

## File Association

The extension automatically activates for files with the `.funk` extension.

## Installation

### Method 1: Install from VSIX (Recommended)

The extension has been pre-built and packaged. Simply:

1. Open VS Code
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
3. Type `Extensions: Install from VSIX...`
4. Select the `funk-language-support-0.1.0.vsix` file in this directory
5. Reload VS Code when prompted

### Method 2: Development Installation

1. Clone or download this extension
2. Open the extension folder in VS Code
3. Press `F5` to run the extension in a new Extension Development Host window
4. Open a `.funk` file to see syntax highlighting in action

### Method 3: Build from Source

1. Install dependencies:
   ```bash
   npm install
   ```

2. Compile the TypeScript:
   ```bash
   npm run compile
   ```

3. Package the extension:
   ```bash
   npm install -g @vscode/vsce
   npx @vscode/vsce package
   ```

4. Install the generated `.vsix` file in VS Code

## Syntax Examples

Here are some examples of Funk syntax that will be highlighted:

```funk
-- This is a line comment
{- This is a 
   block comment -}

data IO a = {unIO: #IO a}

instance Functor IO = {
  fmap = \f fa -> IO {unIO = #fmapIO f (unIO fa)}
}

instance Applicative IO = {
  pure = \a -> IO {unIO = #pureIO a},
  apply = \f a -> IO {
    unIO = #bindIO #fmapIO (\fn -> #fmapIO fn a) f (\x -> #pureIO x)
  }
}

let putStrLn = \s -> IO {unIO = #print s};
```

## Language Features

The extension recognizes and highlights:

### Keywords
- Control flow: `if`, `then`, `else`, `case`, `of`, `where`
- Declarations: `data`, `type`, `instance`, `trait`, `pub`, `use`, `forall`
- Bindings: `let`, `in`, `do`, `return`, `bind`

### Types
- Built-in types: `Int`, `String`, `Bool`, `Unit`, `IO`, `List`
- User-defined types (capitalized identifiers)
- Type variables and generic types

### Primitives
- IO operations: `#print`, `#fmapIO`, `#pureIO`, `#bindIO`
- Comparison: `#intEq`, `#stringEq`
- Utilities: `#stringConcat`, `#ifThenElse`, `#exit`

### Operators
- Lambda: `\`
- Arrow: `->`
- Type annotation: `::`
- Assignment: `=`
- Pipe: `|`
- Arithmetic: `+`, `-`, `*`, `/`
- Comparison: `<`, `>`, `==`, `!=`

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

MIT License - see LICENSE file for details.
