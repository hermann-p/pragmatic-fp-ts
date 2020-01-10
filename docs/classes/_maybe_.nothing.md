[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Maybe"](../modules/_maybe_.md) › [Nothing](_maybe_.nothing.md)

# Class: Nothing <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Nothing**

## Implements

* [Monad](_monad_.monad.md)‹T›

## Index

### Methods

* [bind](_maybe_.nothing.md#bind)
* [effect](_maybe_.nothing.md#effect)
* [filter](_maybe_.nothing.md#filter)
* [getValue](_maybe_.nothing.md#getvalue)
* [getValueOr](_maybe_.nothing.md#getvalueor)
* [isJust](_maybe_.nothing.md#isjust)
* [isMaybe](_maybe_.nothing.md#ismaybe)
* [isMonad](_maybe_.nothing.md#ismonad)
* [isNothing](_maybe_.nothing.md#isnothing)
* [match](_maybe_.nothing.md#match)
* [toEither](_maybe_.nothing.md#toeither)
* [toString](_maybe_.nothing.md#tostring)

## Methods

###  bind

▸ **bind**<**B**>(`_`: [Mappable](../modules/_types_.md#mappable)‹T, B | [Maybe](../modules/_maybe_.md#maybe)‹B››): *[Maybe](../modules/_maybe_.md#maybe)‹B›*

*Defined in [Maybe.ts:91](https://github.com/hermann-p/pragmatic-fp-ts/blob/351d0ae/src/Maybe.ts#L91)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`_` | [Mappable](../modules/_types_.md#mappable)‹T, B &#124; [Maybe](../modules/_maybe_.md#maybe)‹B›› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹B›*

___

###  effect

▸ **effect**(`_`: [Effect](../modules/_types_.md#effect)‹T›): *[Maybe](../modules/_maybe_.md#maybe)‹T›*

*Defined in [Maybe.ts:105](https://github.com/hermann-p/pragmatic-fp-ts/blob/351d0ae/src/Maybe.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | [Effect](../modules/_types_.md#effect)‹T› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹T›*

___

###  filter

▸ **filter**(`_`: [Predicate](../modules/_types_.md#predicate)‹T›): *[Maybe](../modules/_maybe_.md#maybe)‹T›*

*Defined in [Maybe.ts:102](https://github.com/hermann-p/pragmatic-fp-ts/blob/351d0ae/src/Maybe.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹T›*

___

###  getValue

▸ **getValue**(): *T*

*Defined in [Maybe.ts:73](https://github.com/hermann-p/pragmatic-fp-ts/blob/351d0ae/src/Maybe.ts#L73)*

**Returns:** *T*

___

###  getValueOr

▸ **getValueOr**(`alternative`: T | [Just](_maybe_.just.md)‹T›): *T*

*Defined in [Maybe.ts:76](https://github.com/hermann-p/pragmatic-fp-ts/blob/351d0ae/src/Maybe.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`alternative` | T &#124; [Just](_maybe_.just.md)‹T› |

**Returns:** *T*

___

###  isJust

▸ **isJust**(): *boolean*

*Defined in [Maybe.ts:79](https://github.com/hermann-p/pragmatic-fp-ts/blob/351d0ae/src/Maybe.ts#L79)*

**Returns:** *boolean*

___

###  isMaybe

▸ **isMaybe**(): *boolean*

*Defined in [Maybe.ts:88](https://github.com/hermann-p/pragmatic-fp-ts/blob/351d0ae/src/Maybe.ts#L88)*

**Returns:** *boolean*

___

###  isMonad

▸ **isMonad**(): *boolean*

*Defined in [Maybe.ts:85](https://github.com/hermann-p/pragmatic-fp-ts/blob/351d0ae/src/Maybe.ts#L85)*

**Returns:** *boolean*

___

###  isNothing

▸ **isNothing**(): *boolean*

*Defined in [Maybe.ts:82](https://github.com/hermann-p/pragmatic-fp-ts/blob/351d0ae/src/Maybe.ts#L82)*

**Returns:** *boolean*

___

###  match

▸ **match**<**U**>(`match`: [MaybePattern](../modules/_maybe_.md#maybepattern)‹T, U›): *[Maybe](../modules/_maybe_.md#maybe)‹U›*

*Defined in [Maybe.ts:94](https://github.com/hermann-p/pragmatic-fp-ts/blob/351d0ae/src/Maybe.ts#L94)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`match` | [MaybePattern](../modules/_maybe_.md#maybepattern)‹T, U› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹U›*

___

###  toEither

▸ **toEither**(): *[Either](../modules/_either_.md#either)‹[Reason](../modules/_either_.md#reason), T›*

*Defined in [Maybe.ts:108](https://github.com/hermann-p/pragmatic-fp-ts/blob/351d0ae/src/Maybe.ts#L108)*

**Returns:** *[Either](../modules/_either_.md#either)‹[Reason](../modules/_either_.md#reason), T›*

___

###  toString

▸ **toString**(): *string*

*Defined in [Maybe.ts:111](https://github.com/hermann-p/pragmatic-fp-ts/blob/351d0ae/src/Maybe.ts#L111)*

**Returns:** *string*
