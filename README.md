# Generic Flat File Parser

## Currently Supported Functionalities

-   Transforming StratEDI Orders/Invoices/Deasdvs into XML and back.
-   Validating StratEDI files content.

## Usage

This parser provides 2 main classes `Reader` and `Writer`.

### Reader

`Reader` class transforms StratEDI file in XML. Its main function is `read`.

**Calling `read` function:**

`Reader.read()` function takes 3 arguments:
|Argument  | Type |	Description|
|--|--|--|
| `format` |“STRATEDI” | Format of file that parser should `canonicalize`. (currently only supports “STRATEDI”) |
| `fileType` | “ORDER” “INVOICE” “DEASDV” | Type of file of the specified format that parser should `canonicalize`. |
| `file` | string | Content of file that parser should `canonicalize`.|


**`read` function return value:**

`read` function returns object with two fields `file` and `errors`.
| Field | Description |
|--|--|
| `file` (string) | xml that’s been produced from provided StratEDI file. (double quotes replaced with single). |
| `errors` (array of objects)| Error messages that’s been produced by validator describing inconsistencies between the provided StratEDI file and the StratEDI guidelines. |


### Writer

Writer class transforms XML file in StratEDI. Its main function is `write`.

`Writer.write()` function takes 3 arguments:
|Argument  | Type |	Description|
|--|--|--|
| `format` |“STRATEDI” | Format of file that parser should `decanonicalize` xml into. (currently only supports “STRATEDI”) |
| `fileType` | “ORDER” “INVOICE” “DEASDV” | Type of file of the specified format that parser should `decanonicalize` xml into. |
| `file` | string | Content of file that parser should `decanonicalize` xml into.|

`Writer.write()` function returns `decanonicalized` string.

## Implementation

Besides `Reader` and `Writer` there are 3 main classes that cover implementation: Parser, `Tokenizer`, and `Validator`.

| Class | Description |
|--|--|
| `Parser` | `Parser` repeatedly calls `Tokenizer` to get the next `token` and depending on the value of `token` decompose the given file into `sentences` and `words`. Its main method is `parse()`. This method is the entry point of the class: it starts the decomposition of the given `file` and when the whole is parsed, it returns an abstract syntax tree(AST). |
| `Tokenizer`| `Tokenizer`'s main method is `getNextToken()`. This method gets the next `word` according to specification of provided file format which is stored in `constants`, validates it with the help of `Validator` and returns it to `Parser`. This class keeps track of where is the file `cursor`, `tokenIndex`, `sentenceType` and so on. This is the most important class for parsing. |
|`Validator`  | `Validator` is called by `Tokenizer` . It checks if the provided `token` satisfies the specifications provided of the given file format, and if that’s not so, it returns an object with the `message` that describe inconsistency between the given `file` and guidelines of that file format.  |

[embed]https://github.com/nikaaboda/parser/blob/main/static/StratEDI/Parser.pdf[/embed]
