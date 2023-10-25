import { identity } from "./identity.ts";
import { isString } from "./isString.ts";
import V, { Validator } from "./validate.ts";
import { Either } from "./Either.ts";
import { tryCatch } from "./tryCatch.ts";

export type Decoder<T = any> = (_: unknown) => Either<T, Error>;
export type DecoderTarget<T extends Decoder<any>> = T extends Decoder<infer U> ? U : never;

const Decoder =
  <T extends any>(
    validate: Validator<T> | Decoder<T>,
    parse: (_: string) => any = JSON.parse
  ): Decoder<T> =>
  (x: unknown) => {
    const xx = isString(x) ? tryCatch(parse, identity, x) : x;
    return validate(xx);
  };

export default {
  from: <T>(
    name: string,
    validate: (_: unknown) => _ is T,
    parse?: (_: string) => any
  ): Decoder<T> => Decoder(V.from(name, validate), parse),
  Decoder,
};
