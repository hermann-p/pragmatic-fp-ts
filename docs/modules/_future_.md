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

## Type aliases

###  FutureEither

Ƭ **FutureEither**: *[Future](../classes/_future_.future.md)‹T, [Either](_either_.md#either)‹T, Error››*

*Defined in [src/Future.ts:90](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/Future.ts#L90)*

___

###  FutureMaybe

Ƭ **FutureMaybe**: *[Future](../classes/_future_.future.md)‹T, [Maybe](_maybe_.md#maybe)‹T››*

*Defined in [src/Future.ts:94](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/Future.ts#L94)*

## Functions

### `Const` futureEither

▸ **futureEither**<**T**>(`value`: T): *[FutureEither](_future_.md#futureeither)‹T›*

*Defined in [src/Future.ts:91](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/Future.ts#L91)*

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

*Defined in [src/Future.ts:95](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/Future.ts#L95)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[FutureMaybe](_future_.md#futuremaybe)‹T›*
