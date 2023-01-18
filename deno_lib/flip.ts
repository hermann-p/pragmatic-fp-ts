import { Init, Last  } from "./types.ts"

type FlipLastTwo<T extends any []> = T extends [...args: infer A, b: infer B, c: infer C] ? [...args: A, c: C,b: B] : T

export function flip <T extends any [], U>(f: (...args: T) => U) {
    type FlippedArgs = FlipLastTwo<T>
    return (...args: Init<FlippedArgs>) => (x: Last<FlippedArgs>) => {
        const argv: T = [...args.slice (0, args.length -1), x, args [args.length - 1]] as any;
        return f (...argv)
    }
}
