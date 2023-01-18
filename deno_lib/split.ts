export function split(splitMark: string, input: string): string[];
export function split(splitMark: string): (input: string) => string[];

export function split(at: string, input?: string) {
  if (arguments.length === 1) return (_input: string) => split(at, _input);

  return (input ?? "").split(at) || [];
}
