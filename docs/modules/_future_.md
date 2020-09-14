[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Future"](_future_.md)

# External module: "Future"

## Index

### Classes

* [Future](../classes/_future_.future.md)

### Functions

* [futureEither](_future_.md#const-futureeither)
* [futureMaybe](_future_.md#const-futuremaybe)

## Functions

### `Const` futureEither

▸ **futureEither**<**T**>(`value`: T): *[Future](../classes/_future_.future.md)‹T, [Left](../classes/_either_.left.md)‹T, Error› | [Right](../classes/_either_.right.md)‹T, Error››*

Defined in src/Future.ts:86

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Future](../classes/_future_.future.md)‹T, [Left](../classes/_either_.left.md)‹T, Error› | [Right](../classes/_either_.right.md)‹T, Error››*

___

### `Const` futureMaybe

▸ **futureMaybe**<**T**>(`value`: T): *[Future](../classes/_future_.future.md)‹T, [Just](../classes/_maybe_.just.md)‹T› | [Nothing](../classes/_maybe_.nothing.md)‹T››*

Defined in src/Future.ts:89

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Future](../classes/_future_.future.md)‹T, [Just](../classes/_maybe_.just.md)‹T› | [Nothing](../classes/_maybe_.nothing.md)‹T››*
