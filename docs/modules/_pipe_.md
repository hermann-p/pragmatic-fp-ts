[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["pipe"](_pipe_.md)

# External module: "pipe"

## Index

### Type aliases

* [ArgType](_pipe_.md#argtype)
* [AsChain](_pipe_.md#aschain)
* [Func1](_pipe_.md#func1)
* [LastIndexOf](_pipe_.md#lastindexof)
* [Lookup](_pipe_.md#lookup)
* [Tail](_pipe_.md#tail)

### Functions

* [pipe](_pipe_.md#pipe)

## Type aliases

###  ArgType

Ƭ **ArgType**: *ArgType<F, Else>*

Defined in pipe.ts:6

___

###  AsChain

Ƭ **AsChain**: *object*

Defined in pipe.ts:7

#### Type declaration:

___

###  Func1

Ƭ **Func1**: *function*

Defined in pipe.ts:5

#### Type declaration:

▸ (`arg`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | any |

___

###  LastIndexOf

Ƭ **LastIndexOf**: *LastIndexOf<T>*

Defined in pipe.ts:10

___

###  Lookup

Ƭ **Lookup**: *Lookup<T, K, Else>*

Defined in pipe.ts:1

___

###  Tail

Ƭ **Tail**: *Tail<T>*

Defined in pipe.ts:2

## Functions

###  pipe

▸ **pipe**<**F**>(...`f`: F & [AsChain](_pipe_.md#aschain)‹F›): *function*

Defined in pipe.ts:13

Composes an arbitrary number of functions unary into a n-ary
function, type-checking the chain.

Note: Generic function types cannot be inferred, resulting in a
TypeScript error. Successive (any) -> any functions might break type
inference.

((A1 -> A2) -> (A2 -> A3) ... -> (An-1 -> An)) -> A1 -> An

**Type parameters:**

▪ **F**: *[function, function]*

**Parameters:**

Name | Type |
------ | ------ |
`...f` | F & [AsChain](_pipe_.md#aschain)‹F› |

**Returns:** *function*

▸ (`arg`: [ArgType](_pipe_.md#argtype)‹F[0]›): *ReturnType‹F[LastIndexOf<F>]›*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [ArgType](_pipe_.md#argtype)‹F[0]› |
