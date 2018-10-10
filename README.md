# expect
![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![Build](https://travis-ci.org/MikeBruns/expect.svg?branch=master)
[![Build status](https://ci.appveyor.com/api/projects/status/nivhe14l8dvfgqnl/branch/master?svg=true)](https://ci.appveyor.com/project/MikeBruns/expect/branch/master)

Atom snippet package for general expect statements based on [mjackson/expect](https://github.com/mjackson/expect) assertion library.

![Example](https://raw.githubusercontent.com/MikeBruns/expect/master/example.gif)


### Available Snippets
## Require (ES5) / Import (ES6)
| Keyword         | Snippet      |
|:--------------- |:-------------|
| `requireExpect` | `const expect = require('expect');` |
| `importExpect`  | `import expect from 'expect';`      |

## Assertions
Each assertion comes in two forms.
1. The full `expect().toExist();`
2. Just the assertion function `toExist();`

The full assetion keywords start with `expect` followed by the function name: `expectToExist`

   ***Tip:*** If you press `TAB` when using a snippet it will place the cursor in the next brackets.

The short hand is just the function name as a whole: `toExist`

| Keyword                   | Snippet      |
|:------------------------- |:-------------|
| `toExist`                 | `toExist();` |
| `toNotExist`              | `toNotExist();` |
| `toBe`                    | `toBe();` |
| `toNotBe`                 | `toNotBe();` |
| `toEqual`                 | `toEqual();` |
| `toNotEqual`              | `toNotEqual();` |
| `toThrow`                 | `toThrow();` |
| `toNotThrow`              | `toNotThrow();` |
| `toBeA`                   | `toBeA();` |
| `toNotBeA`                | `toNotBeA();` |
| `toMatch`                 | `toMatch();` |
| `toNotMatch`              | `toNotMatch();` |
| `toBeLessThan`            | `toBeLessThan();` |
| `toBeLessThanOrEqualTo`   | `toBeLessThanOrEqualTo();`|
| `toBeGreaterThan`         | `toBeGreaterThan();` |
| `toBeLessThanOrEqualTo`   | `toBeLessThanOrEqualTo();` |
| `toInclude`               | `toInclude();` |
| `toExclude`               | `toExclude();` |
| `toIncludeKey`            | `toIncludeKey();` |
| `toIncludeKeys`           | `toIncludeKeys();` |
| `toExcludeKey`            | `toExcludeKey();` |
| `toExcludeKeys`           | `toExcludeKeys();` |
| `toHaveBeenCalled`        | `toHaveBeenCalled();` |
| `toHaveBeenNotCalled`     | `toHaveBeenNotCalled();` |
| `toHaveBeenCalledWith`    | `toHaveBeenCalledWith();` |
