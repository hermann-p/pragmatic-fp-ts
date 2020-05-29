[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["flow"](_flow_.md)

# External module: "flow"

## Index

### Type aliases

* [ArgType](_flow_.md#argtype)
* [AsChain](_flow_.md#aschain)
* [Func1](_flow_.md#func1)
* [LastIndexOf](_flow_.md#lastindexof)
* [Lookup](_flow_.md#lookup)
* [Tail](_flow_.md#tail)

### Functions

* [flow](_flow_.md#flow)

## Type aliases

###  ArgType

Ƭ **ArgType**: *ArgType<F, Else>*

*Defined in [src/flow.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/flow.ts#L6)*

___

###  AsChain

Ƭ **AsChain**: *object*

*Defined in [src/flow.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/flow.ts#L7)*

#### Type declaration:

___

###  Func1

Ƭ **Func1**: *function*

*Defined in [src/flow.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/flow.ts#L5)*

#### Type declaration:

▸ (`arg`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | any |

___

###  LastIndexOf

Ƭ **LastIndexOf**: *LastIndexOf<T>*

*Defined in [src/flow.ts:10](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/flow.ts#L10)*

___

###  Lookup

Ƭ **Lookup**: *Lookup<T, K, Else>*

*Defined in [src/flow.ts:1](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/flow.ts#L1)*

___

###  Tail

Ƭ **Tail**: *Tail<T>*

*Defined in [src/flow.ts:2](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/flow.ts#L2)*

## Functions

###  flow

▸ **flow**<**F**>(...`f`: F & [AsChain](_flow_.md#aschain)‹F›): *function*

*Defined in [src/flow.ts:13](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/flow.ts#L13)*

Composes an arbitrary number of functions into a new function, the
result being a function piping their results as argument into the
next function, with data flow from left to right. The first
function may be n-ary while all others must be unary

Note: Generic function types cannot be inferred, resulting in a
TypeScript error. Successive (any) -> any functions might break
type inference.

(((A1, B, C,...)  -> A2) -> (A2 -> A3) ... -> (An-1 -> An)) -> (A1, B, C,...) -> An

**Type parameters:**

▪ **F**: *[function, function]*

**Parameters:**

Name | Type |
------ | ------ |
`...f` | F & [AsChain](_flow_.md#aschain)‹F› |

**Returns:** *function*

▸ (`arg`: [ArgType](_flow_.md#argtype)‹F[0]›): *ReturnType‹F[LastIndexOf<F>]›*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [ArgType](_flow_.md#argtype)‹F[0]› |
