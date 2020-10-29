[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Future"](_future_.md)

# External module: "Future"

## Index

### Classes

* [Future](../classes/_future_.future.md)

### Type aliases

* [FutureEither](_future_.md#futureeither)
* [FutureMaybe](_future_.md#futuremaybe)

### Functions

* [futureEither](_future_.md#const-futureeither)
* [futureMaybe](_future_.md#const-futuremaybe)
* [logLeft](_future_.md#const-logleft)

## Type aliases

###  FutureEither

Ƭ **FutureEither**: *[Future](../classes/_future_.future.md)‹NonNullable‹T›, [Either](_either_.md#either)‹NonNullable‹T›, Error››*

*Defined in [src/Future.ts:119](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L119)*

___

###  FutureMaybe

Ƭ **FutureMaybe**: *[Future](../classes/_future_.future.md)‹NonNullable‹T›, [Maybe](_maybe_.md#maybe)‹NonNullable‹T›››*

*Defined in [src/Future.ts:123](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L123)*

## Functions

### `Const` futureEither

▸ **futureEither**<**T**>(`value`: T): *[FutureEither](_future_.md#futureeither)‹T›*

*Defined in [src/Future.ts:120](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L120)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[FutureEither](_future_.md#futureeither)‹T›*

___

### `Const` futureMaybe

▸ **futureMaybe**<**T**>(`value`: T): *[FutureMaybe](_future_.md#futuremaybe)‹T›*

*Defined in [src/Future.ts:124](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L124)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[FutureMaybe](_future_.md#futuremaybe)‹T›*

___

### `Const` logLeft

▸ **logLeft**(`m`: [Monad](../classes/_types_.monad.md)‹any›): *[Monad](../classes/_types_.monad.md)‹any›*

*Defined in [src/Future.ts:127](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`m` | [Monad](../classes/_types_.monad.md)‹any› |

**Returns:** *[Monad](../classes/_types_.monad.md)‹any›*
