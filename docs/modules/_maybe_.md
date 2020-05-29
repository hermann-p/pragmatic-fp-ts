[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Maybe"](_maybe_.md)

# External module: "Maybe"

## Index

### Classes

* [Just](../classes/_maybe_.just.md)
* [Nothing](../classes/_maybe_.nothing.md)

### Type aliases

* [Maybe](_maybe_.md#maybe)
* [MaybeMatcher](_maybe_.md#maybematcher)

### Functions

* [isJust](_maybe_.md#const-isjust)
* [isMaybe](_maybe_.md#const-ismaybe)
* [isNothing](_maybe_.md#const-isnothing)
* [just](_maybe_.md#const-just)
* [maybe](_maybe_.md#const-maybe)
* [nothing](_maybe_.md#const-nothing)

## Type aliases

###  Maybe

Ƭ **Maybe**: *[Just](../classes/_maybe_.just.md)‹A› | [Nothing](../classes/_maybe_.nothing.md)‹A›*

*Defined in [src/Maybe.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/Maybe.ts#L4)*

___

###  MaybeMatcher

Ƭ **MaybeMatcher**: *object*

*Defined in [src/Maybe.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/Maybe.ts#L6)*

#### Type declaration:

* **just**: *[Mappable](_types_.md#mappable)‹A, B›*

* **nothing**(): *function*

  * (): *B*

## Functions

### `Const` isJust

▸ **isJust**(`x`: unknown): *boolean*

*Defined in [src/Maybe.ts:94](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/Maybe.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *boolean*

___

### `Const` isMaybe

▸ **isMaybe**(`x`: unknown): *boolean*

*Defined in [src/Maybe.ts:98](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/Maybe.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *boolean*

___

### `Const` isNothing

▸ **isNothing**(`x`: unknown): *boolean*

*Defined in [src/Maybe.ts:96](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/Maybe.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *boolean*

___

### `Const` just

▸ **just**<**T**>(`value`: T): *[Just](../classes/_maybe_.just.md)‹T›*

*Defined in [src/Maybe.ts:80](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/Maybe.ts#L80)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Just](../classes/_maybe_.just.md)‹T›*

___

### `Const` maybe

▸ **maybe**<**T**>(`value`: T | [Monad](../classes/_types_.monad.md)‹T›): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [src/Maybe.ts:87](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/Maybe.ts#L87)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; [Monad](../classes/_types_.monad.md)‹T› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹T›*

___

### `Const` nothing

▸ **nothing**<**T**>(): *[Nothing](../classes/_maybe_.nothing.md)‹T›*

*Defined in [src/Maybe.ts:83](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/Maybe.ts#L83)*

**Type parameters:**

▪ **T**

**Returns:** *[Nothing](../classes/_maybe_.nothing.md)‹T›*
