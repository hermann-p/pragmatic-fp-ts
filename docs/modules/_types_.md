[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# External module: "types"

## Index

### Classes

* [InvalidValueError](../classes/_types_.invalidvalueerror.md)
* [Monad](../classes/_types_.monad.md)
* [NilError](../classes/_types_.nilerror.md)

### Type aliases

* [ArgTypes](_types_.md#argtypes)
* [BasicComparable](_types_.md#basiccomparable)
* [Comparator](_types_.md#comparator)
* [Dictionary](_types_.md#dictionary)
* [Effect](_types_.md#effect)
* [Endomorphism](_types_.md#endomorphism)
* [Equality](_types_.md#equality)
* [Foldable](_types_.md#foldable)
* [GetLast](_types_.md#getlast)
* [GetLength](_types_.md#getlength)
* [Mappable](_types_.md#mappable)
* [MonadType](_types_.md#monadtype)
* [Predicate](_types_.md#predicate)
* [Prev](_types_.md#prev)
* [SelectorPath](_types_.md#selectorpath)
* [Transform](_types_.md#transform)
* [UnboxPromise](_types_.md#unboxpromise)

## Type aliases

###  ArgTypes

Ƭ **ArgTypes**: *ArgTypes<F>*

*Defined in [src/types.ts:22](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L22)*

___

###  BasicComparable

Ƭ **BasicComparable**: *number | string | Date*

*Defined in [src/types.ts:16](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L16)*

___

###  Comparator

Ƭ **Comparator**: *function*

*Defined in [src/types.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L11)*

#### Type declaration:

▸ (`a`: A, `b`: A): *number*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | A |

___

###  Dictionary

Ƭ **Dictionary**: *object*

*Defined in [src/types.ts:9](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L9)*

#### Type declaration:

* \[ **key**: *string*\]: T

___

###  Effect

Ƭ **Effect**: *function*

*Defined in [src/types.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L5)*

#### Type declaration:

▸ (`input`: A): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`input` | A |

___

###  Endomorphism

Ƭ **Endomorphism**: *[Mappable](_types_.md#mappable)‹A, A›*

*Defined in [src/types.ts:2](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L2)*

___

###  Equality

Ƭ **Equality**: *function*

*Defined in [src/types.ts:15](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L15)*

#### Type declaration:

▸ (`a`: A, `b`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | A |

___

###  Foldable

Ƭ **Foldable**: *function*

*Defined in [src/types.ts:18](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L18)*

#### Type declaration:

▸ (`accum`: TResult, `value`: TValues): *TResult*

**Parameters:**

Name | Type |
------ | ------ |
`accum` | TResult |
`value` | TValues |

___

###  GetLast

Ƭ **GetLast**: *original[[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, ... 24 more ..., 62][GetLength<...>]]*

*Defined in [src/types.ts:118](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L118)*

___

###  GetLength

Ƭ **GetLength**: *GetLength<original>*

*Defined in [src/types.ts:24](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L24)*

___

###  Mappable

Ƭ **Mappable**: *function*

*Defined in [src/types.ts:1](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L1)*

#### Type declaration:

▸ (`input`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`input` | A |

___

###  MonadType

Ƭ **MonadType**: *A | [Monad](../classes/_types_.monad.md)‹A›*

*Defined in [src/types.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L7)*

___

###  Predicate

Ƭ **Predicate**: *function*

*Defined in [src/types.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L3)*

#### Type declaration:

▸ (`input`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`input` | A |

___

###  Prev

Ƭ **Prev**: *[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, ... 20 more ..., 62][T]*

*Defined in [src/types.ts:51](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L51)*

___

###  SelectorPath

Ƭ **SelectorPath**: *number | string | string | number[]*

*Defined in [src/types.ts:20](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L20)*

___

###  Transform

Ƭ **Transform**: *function*

*Defined in [src/types.ts:120](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L120)*

#### Type declaration:

▸ (`monad`: [Monad](../classes/_types_.monad.md)‹A›): *B*

**Parameters:**

Name | Type |
------ | ------ |
`monad` | [Monad](../classes/_types_.monad.md)‹A› |

___

###  UnboxPromise

Ƭ **UnboxPromise**: *UnboxPromise<T>*

*Defined in [src/types.ts:13](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L13)*
