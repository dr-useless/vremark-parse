import * as PEG from 'pegjs';

declare namespace Parser {
  interface ParseResult {
    location: PEG.LocationRange;
    math: string;
  }
}

interface Parser extends PEG.Parser {
  parse(value: string, options?: PEG.ParserOptions): Parser.ParseResult;
}

declare var Parser: Parser;

export = Parser;
