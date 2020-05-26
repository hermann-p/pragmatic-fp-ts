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

## Type aliases

###  Either

Ƭ **Either**: *[Left](../classes/_either_.left.md)‹R, L› | [Right](../classes/_either_.right.md)‹R, L›*

*Defined in [Either.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/Either.ts#L4)*

___

###  EitherMatcher

Ƭ **EitherMatcher**: *object*

*Defined in [Either.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/Either.ts#L6)*

#### Type declaration:

* **left**(): *function*

  * (`err`: L): *B*

* **right**(): *function*

  * (`val`: R): *B*

## Functions

###  either

▸ **either**<**R**, **L**>(`value`: [MonadType](_types_.md#monadtype)‹R›, `errVal?`: L): *[Either](_either_.md#either)‹R, L | Error›*

*Defined in [Either.ts:96](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/Either.ts#L96)*

**Type parameters:**

▪ **R**

▪ **L**

**Parameters:**

Name | Type |
------ | ------ |
`value` | [MonadType](_types_.md#monadtype)‹R› |
`errVal?` | L |

**Returns:** *[Either](_either_.md#either)‹R, L | Error›*

___

###  isEither

▸ **isEither**<**R**, **L**>(`el`: unknown): *el is Either<R, L>*

*Defined in [Either.ts:116](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/Either.ts#L116)*

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

*Defined in [Either.ts:108](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/Either.ts#L108)*

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

*Defined in [Either.ts:112](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/Either.ts#L112)*

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

*Defined in [Either.ts:88](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/Either.ts#L88)*

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

*Defined in [Either.ts:92](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/Either.ts#L92)*

**Type parameters:**

▪ **R**

▪ **L**

**Parameters:**

Name | Type |
------ | ------ |
`value` | R |

**Returns:** *[Right](../classes/_either_.right.md)‹R, L›*
