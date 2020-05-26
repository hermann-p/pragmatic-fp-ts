export function match(re: RegExp | string, text: string): string[];
export function match(re: RegExp | string): (text: string) => string[];

export function match(re: RegExp | string, text?: string) {
  if (arguments.length === 1) return (_text: string) => match(re, _text);

  const regex = RegExp(re);
  const result = text!.match(regex);

  return result ? (regex.global ? result : [result[0]]) : [];
}
