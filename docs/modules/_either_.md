[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Either"](_either_.md)

# External module: "Either"

## Index

### Classes

* [Left](../classes/_either_.left.md)
* [Right](../classes/_either_.right.md)

### Type aliases

* [Either](_either_.md#either)
* [EitherMatcher](_either_.md#eithermatcher)

### Functions

* [either](_either_.md#either)
* [isEither](_either_.md#iseither)
* [isLeft](_either_.md#isleft)
* [isRight](_either_.md#isright)
* [left](_either_.md#left)
* [right](_either_.md#right)

### Object literals

* [throwLeftAsError](_either_.md#const-throwleftaserror)

## Type aliases

###  Either

Ƭ **Either**: *[Left](../classes/_either_.left.md)‹R, L› | [Right](../classes/_either_.right.md)‹R, L›*

*Defined in [src/Either.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Either.ts#L4)*

___

###  EitherMatcher

Ƭ **EitherMatcher**: *object*

*Defined in [src/Either.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Either.ts#L6)*

#### Type declaration:

* **left**? : *undefined | function*

* **right**? : *undefined | function*

## Functions

###  either

▸ **either**<**R**, **L**>(`value`: [MonadType](_types_.md#monadtype)‹R›, `errVal?`: L): *[Either](_either_.md#either)‹NonNullable‹R›, L | Error›*

*Defined in [src/Either.ts:120](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Either.ts#L120)*

**Type parameters:**

▪ **R**

▪ **L**

**Parameters:**

Name | Type |
------ | ------ |
`value` | [MonadType](_types_.md#monadtype)‹R› |
`errVal?` | L |

**Returns:** *[Either](_either_.md#either)‹NonNullable‹R›, L | Error›*

___

###  isEither

▸ **isEither**<**R**, **L**>(`el`: unknown): *el is Either<R, L>*

*Defined in [src/Either.ts:140](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Either.ts#L140)*

**Type parameters:**

▪ **R**

▪ **L**

**Parameters:**

Name | Type |
------ | ------ |
`el` | unknown |

**Returns:** *el is Either<R, L>*

___

###  isLeft

▸ **isLeft**<**R**, **L**>(`el`: unknown): *el is Left<R, L>*

*Defined in [src/Either.ts:132](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Either.ts#L132)*

**Type parameters:**

▪ **R**

▪ **L**

**Parameters:**

Name | Type |
------ | ------ |
`el` | unknown |

**Returns:** *el is Left<R, L>*

___

###  isRight

▸ **isRight**<**R**, **L**>(`el`: unknown): *el is Right<R, L>*

*Defined in [src/Either.ts:136](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Either.ts#L136)*

**Type parameters:**

▪ **R**

▪ **L**

**Parameters:**

Name | Type |
------ | ------ |
`el` | unknown |

**Returns:** *el is Right<R, L>*

___

###  left

▸ **left**<**R**, **L**>(`errVal`: L): *[Left](../classes/_either_.left.md)‹R, L›*

*Defined in [src/Either.ts:112](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Either.ts#L112)*

**Type parameters:**

▪ **R**

▪ **L**

**Parameters:**

Name | Type |
------ | ------ |
`errVal` | L |

**Returns:** *[Left](../classes/_either_.left.md)‹R, L›*

___

###  right

▸ **right**<**R**, **L**>(`value`: R): *[Right](../classes/_either_.right.md)‹R, L›*

*Defined in [src/Either.ts:116](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Either.ts#L116)*

**Type parameters:**

▪ **R**

▪ **L**

**Parameters:**

Name | Type |
------ | ------ |
`value` | R |

**Returns:** *[Right](../classes/_either_.right.md)‹R, L›*

## Object literals

### `Const` throwLeftAsError

### ▪ **throwLeftAsError**: *object*

*Defined in [src/Either.ts:144](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Either.ts#L144)*

###  left

▸ **left**(`reason`: Error | string): *any*

*Defined in [src/Either.ts:146](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Either.ts#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`reason` | Error &#124; string |

**Returns:** *any*

###  right

▸ **right**(`data`: any): *any*

*Defined in [src/Either.ts:145](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Either.ts#L145)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *any*
