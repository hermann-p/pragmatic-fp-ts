[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Maybe"](../modules/_maybe_.md) › [Just](_maybe_.just.md)

# Class: Just <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Monad](_monad_.monad.md)‹T›

  ↳ **Just**

## Index

### Constructors

* [constructor](_maybe_.just.md#constructor)

### Properties

* [value](_maybe_.just.md#private-value)

### Methods

* [bind](_maybe_.just.md#bind)
* [bindM](_maybe_.just.md#bindm)
* [effect](_maybe_.just.md#effect)
* [filter](_maybe_.just.md#filter)
* [getValue](_maybe_.just.md#getvalue)
* [getValueOr](_maybe_.just.md#getvalueor)
* [isJust](_maybe_.just.md#isjust)
* [isMaybe](_maybe_.just.md#ismaybe)
* [isMonad](_maybe_.just.md#ismonad)
* [isNothing](_maybe_.just.md#isnothing)
* [match](_maybe_.just.md#match)
* [toEither](_maybe_.just.md#toeither)
* [toString](_maybe_.just.md#tostring)

## Constructors

###  constructor

\+ **new Just**(`value`: T | [Just](_maybe_.just.md)‹T›): *[Just](_maybe_.just.md)*

*Defined in [Maybe.ts:15](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/Maybe.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; [Just](_maybe_.just.md)‹T› |

**Returns:** *[Just](_maybe_.just.md)*

## Properties

### `Private` value

• **value**: *T*

*Defined in [Maybe.ts:15](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/Maybe.ts#L15)*

## Methods

###  bind

▸ **bind**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹T, B | [Maybe](../modules/_maybe_.md#maybe)‹B››): *[Maybe](../modules/_maybe_.md#maybe)‹B›*

*Overrides [Monad](_monad_.monad.md).[bind](_monad_.monad.md#abstract-bind)*

*Defined in [Maybe.ts:39](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/Maybe.ts#L39)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹T, B &#124; [Maybe](../modules/_maybe_.md#maybe)‹B›› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹B›*

___

###  bindM

▸ **bindM**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹[Monad](_monad_.monad.md)‹T›, B | [Monad](_monad_.monad.md)‹B››): *[Maybe](../modules/_maybe_.md#maybe)‹B›*

*Overrides [Monad](_monad_.monad.md).[bindM](_monad_.monad.md#abstract-bindm)*

*Defined in [Maybe.ts:48](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/Maybe.ts#L48)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹[Monad](_monad_.monad.md)‹T›, B &#124; [Monad](_monad_.monad.md)‹B›› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹B›*

___

###  effect

▸ **effect**(`fn`: [Effect](../modules/_types_.md#effect)‹T›): *[Maybe](../modules/_maybe_.md#maybe)‹T›*

*Overrides [Monad](_monad_.monad.md).[effect](_monad_.monad.md#abstract-effect)*

*Defined in [Maybe.ts:62](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/Maybe.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Effect](../modules/_types_.md#effect)‹T› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹T›*

___

###  filter

▸ **filter**(`pred`: [Predicate](../modules/_types_.md#predicate)‹T›): *[Maybe](../modules/_maybe_.md#maybe)‹T›*

*Defined in [Maybe.ts:59](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/Maybe.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](../modules/_types_.md#predicate)‹T› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹T›*

___

###  getValue

▸ **getValue**(): *T*

*Overrides [Monad](_monad_.monad.md).[getValue](_monad_.monad.md#abstract-getvalue)*

*Defined in [Maybe.ts:21](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/Maybe.ts#L21)*

**Returns:** *T*

___

###  getValueOr

▸ **getValueOr**(`_`: T): *T*

*Overrides [Monad](_monad_.monad.md).[getValueOr](_monad_.monad.md#abstract-getvalueor)*

*Defined in [Maybe.ts:24](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/Maybe.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | T |

**Returns:** *T*

___

###  isJust

▸ **isJust**(): *boolean*

*Defined in [Maybe.ts:27](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/Maybe.ts#L27)*

**Returns:** *boolean*

___

###  isMaybe

▸ **isMaybe**(): *boolean*

*Defined in [Maybe.ts:36](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/Maybe.ts#L36)*

**Returns:** *boolean*

___

###  isMonad

▸ **isMonad**(): *boolean*

*Overrides [Monad](_monad_.monad.md).[isMonad](_monad_.monad.md#abstract-ismonad)*

*Defined in [Maybe.ts:33](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/Maybe.ts#L33)*

**Returns:** *boolean*

___

###  isNothing

▸ **isNothing**(): *boolean*

*Defined in [Maybe.ts:30](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/Maybe.ts#L30)*

**Returns:** *boolean*

___

###  match

▸ **match**<**U**>(`match`: [MaybePattern](../modules/_maybe_.md#maybepattern)‹T, U›): *[Maybe](../modules/_maybe_.md#maybe)‹U›*

*Overrides [Monad](_monad_.monad.md).[match](_monad_.monad.md#abstract-match)*

*Defined in [Maybe.ts:51](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/Maybe.ts#L51)*

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

*Defined in [Maybe.ts:67](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/Maybe.ts#L67)*

**Returns:** *[Either](../modules/_either_.md#either)‹[Reason](../modules/_either_.md#reason), T›*

___

###  toString

▸ **toString**(): *string*

*Defined in [Maybe.ts:70](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/Maybe.ts#L70)*

**Returns:** *string*
