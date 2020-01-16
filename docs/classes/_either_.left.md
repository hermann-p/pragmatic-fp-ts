[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Either"](../modules/_either_.md) › [Left](_either_.left.md)

# Class: Left <**L, R**>

## Type parameters

▪ **L**

▪ **R**

## Hierarchy

* **Left**

## Implements

* [Monad](_monad_.monad.md)‹R›

## Index

### Constructors

* [constructor](_either_.left.md#constructor)

### Properties

* [reason](_either_.left.md#private-reason)

### Methods

* [bind](_either_.left.md#bind)
* [effect](_either_.left.md#effect)
* [filter](_either_.left.md#filter)
* [getReason](_either_.left.md#getreason)
* [getValue](_either_.left.md#getvalue)
* [getValueOr](_either_.left.md#getvalueor)
* [isLeft](_either_.left.md#isleft)
* [isMonad](_either_.left.md#ismonad)
* [isRight](_either_.left.md#isright)
* [match](_either_.left.md#match)
* [toMaybe](_either_.left.md#tomaybe)
* [toString](_either_.left.md#tostring)

## Constructors

###  constructor

\+ **new Left**(`reason`: L): *[Left](_either_.left.md)*

*Defined in [Either.ts:86](https://github.com/hermann-p/pragmatic-fp-ts/blob/be82131/src/Either.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`reason` | L |

**Returns:** *[Left](_either_.left.md)*

## Properties

### `Private` reason

• **reason**: *L*

*Defined in [Either.ts:86](https://github.com/hermann-p/pragmatic-fp-ts/blob/be82131/src/Either.ts#L86)*

## Methods

###  bind

▸ **bind**<**R2**>(`_`: [Mappable](../modules/_types_.md#mappable)‹R, R2 | [Either](../modules/_either_.md#either)‹R, R2››): *[Either](../modules/_either_.md#either)‹[Reason](../modules/_either_.md#reason), R2›*

*Defined in [Either.ts:90](https://github.com/hermann-p/pragmatic-fp-ts/blob/be82131/src/Either.ts#L90)*

**Type parameters:**

▪ **R2**

**Parameters:**

Name | Type |
------ | ------ |
`_` | [Mappable](../modules/_types_.md#mappable)‹R, R2 &#124; [Either](../modules/_either_.md#either)‹R, R2›› |

**Returns:** *[Either](../modules/_either_.md#either)‹[Reason](../modules/_either_.md#reason), R2›*

___

###  effect

▸ **effect**(`_`: [Effect](../modules/_types_.md#effect)‹R›): *[Either](../modules/_either_.md#either)‹L, R›*

*Defined in [Either.ts:113](https://github.com/hermann-p/pragmatic-fp-ts/blob/be82131/src/Either.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | [Effect](../modules/_types_.md#effect)‹R› |

**Returns:** *[Either](../modules/_either_.md#either)‹L, R›*

___

###  filter

▸ **filter**(`_`: [Predicate](../modules/_types_.md#predicate)‹R›): *[Either](../modules/_either_.md#either)‹L, R›*

*Defined in [Either.ts:101](https://github.com/hermann-p/pragmatic-fp-ts/blob/be82131/src/Either.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | [Predicate](../modules/_types_.md#predicate)‹R› |

**Returns:** *[Either](../modules/_either_.md#either)‹L, R›*

___

###  getReason

▸ **getReason**(): *L*

*Defined in [Either.ts:110](https://github.com/hermann-p/pragmatic-fp-ts/blob/be82131/src/Either.ts#L110)*

**Returns:** *L*

___

###  getValue

▸ **getValue**(): *any*

*Defined in [Either.ts:104](https://github.com/hermann-p/pragmatic-fp-ts/blob/be82131/src/Either.ts#L104)*

**Returns:** *any*

___

###  getValueOr

▸ **getValueOr**(`alternative`: R): *R*

*Defined in [Either.ts:107](https://github.com/hermann-p/pragmatic-fp-ts/blob/be82131/src/Either.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`alternative` | R |

**Returns:** *R*

___

###  isLeft

▸ **isLeft**(): *boolean*

*Defined in [Either.ts:119](https://github.com/hermann-p/pragmatic-fp-ts/blob/be82131/src/Either.ts#L119)*

**Returns:** *boolean*

___

###  isMonad

▸ **isMonad**(): *boolean*

*Defined in [Either.ts:116](https://github.com/hermann-p/pragmatic-fp-ts/blob/be82131/src/Either.ts#L116)*

**Returns:** *boolean*

___

###  isRight

▸ **isRight**(): *boolean*

*Defined in [Either.ts:122](https://github.com/hermann-p/pragmatic-fp-ts/blob/be82131/src/Either.ts#L122)*

**Returns:** *boolean*

___

###  match

▸ **match**<**R2**>(`pattern`: [EitherPattern](../modules/_either_.md#eitherpattern)‹R, R2›): *[Either](../modules/_either_.md#either)‹L, R2›*

*Defined in [Either.ts:93](https://github.com/hermann-p/pragmatic-fp-ts/blob/be82131/src/Either.ts#L93)*

**Type parameters:**

▪ **R2**

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | [EitherPattern](../modules/_either_.md#eitherpattern)‹R, R2› |

**Returns:** *[Either](../modules/_either_.md#either)‹L, R2›*

___

###  toMaybe

▸ **toMaybe**(): *[Maybe](../modules/_maybe_.md#maybe)‹R›*

*Defined in [Either.ts:125](https://github.com/hermann-p/pragmatic-fp-ts/blob/be82131/src/Either.ts#L125)*

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹R›*

___

###  toString

▸ **toString**(): *string*

*Defined in [Either.ts:128](https://github.com/hermann-p/pragmatic-fp-ts/blob/be82131/src/Either.ts#L128)*

**Returns:** *string*
