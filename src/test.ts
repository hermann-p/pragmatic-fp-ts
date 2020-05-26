export function test(re: RegExp, text: string): boolean;
export function test(re: RegExp): (text: string) => boolean;

export function test(re: RegExp, text?: string) {
  if (arguments.length === 1) return (_text: string) => test(re, _text);

  return re.test(text!);
}
