[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Either"](../modules/_either_.md) › [Right](_either_.right.md)

# Class: Right <**R, L**>

## Type parameters

▪ **R**

▪ **L**

## Hierarchy

* [Monad](_types_.monad.md)‹R›

  ↳ **Right**

## Index

### Constructors

* [constructor](_either_.right.md#constructor)

### Properties

* [bind](_either_.right.md#bind)
* [value](_either_.right.md#value)

### Methods

* [_](_either_.right.md#_)
* [bindM](_either_.right.md#bindm)
* [effect](_either_.right.md#effect)
* [filter](_either_.right.md#filter)
* [getValue](_either_.right.md#getvalue)
* [getValueOr](_either_.right.md#getvalueor)
* [match](_either_.right.md#match)
* [to](_either_.right.md#to)

## Constructors

###  constructor

\+ **new Right**(`value`: R): *[Right](_either_.right.md)*

*Defined in [src/Either.ts:43](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/Either.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | R |

**Returns:** *[Right](_either_.right.md)*

## Properties

###  bind

• **bind**: *[_](_either_.right.md#_)* =  this._

*Overrides [Monad](_types_.monad.md).[bind](_types_.monad.md#abstract-bind)*

*Defined in [src/Either.ts:56](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/Either.ts#L56)*

___

###  value

• **value**: *R*

*Defined in [src/Either.ts:43](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/Either.ts#L43)*

## Methods

###  _

▸ **_**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹R, B›): *[Either](../modules/_either_.md#either)‹B, L | Error›*

*Overrides [Monad](_types_.monad.md).[_](_types_.monad.md#abstract-_)*

*Defined in [src/Either.ts:48](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/Either.ts#L48)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹R, B› |

**Returns:** *[Either](../modules/_either_.md#either)‹B, L | Error›*

___

###  bindM

▸ **bindM**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹R›, [Monad](_types_.monad.md)‹B››): *[Either](../modules/_either_.md#either)‹B, L | Error›*

*Overrides [Monad](_types_.monad.md).[bindM](_types_.monad.md#abstract-bindm)*

*Defined in [src/Either.ts:57](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/Either.ts#L57)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹R›, [Monad](_types_.monad.md)‹B›› |

**Returns:** *[Either](../modules/_either_.md#either)‹B, L | Error›*

___

###  effect

▸ **effect**(`fn`: [Effect](../modules/_types_.md#effect)‹R›): *[Either](../modules/_either_.md#either)‹R, L›*

*Overrides [Monad](_types_.monad.md).[effect](_types_.monad.md#abstract-effect)*

*Defined in [src/Either.ts:73](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/Either.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Effect](../modules/_types_.md#effect)‹R› |

**Returns:** *[Either](../modules/_either_.md#either)‹R, L›*

___

###  filter

▸ **filter**(`fn`: [Predicate](../modules/_types_.md#predicate)‹R›): *[Either](../modules/_either_.md#either)‹R, L | Error›*

*Overrides [Monad](_types_.monad.md).[filter](_types_.monad.md#abstract-filter)*

*Defined in [src/Either.ts:65](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/Either.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Predicate](../modules/_types_.md#predicate)‹R› |

**Returns:** *[Either](../modules/_either_.md#either)‹R, L | Error›*

___

###  getValue

▸ **getValue**(): *R*

*Overrides [Monad](_types_.monad.md).[getValue](_types_.monad.md#abstract-getvalue)*

*Defined in [src/Either.ts:79](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/Either.ts#L79)*

**Returns:** *R*

___

###  getValueOr

▸ **getValueOr**(`_`: R): *R*

*Overrides [Monad](_types_.monad.md).[getValueOr](_types_.monad.md#abstract-getvalueor)*

*Defined in [src/Either.ts:82](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/Either.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | R |

**Returns:** *R*

___

###  match

▸ **match**<**B**>(`matcher`: [EitherMatcher](../modules/_either_.md#eithermatcher)‹R, L, B›): *[Either](../modules/_either_.md#either)‹B, L›*

*Defined in [src/Either.ts:85](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/Either.ts#L85)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`matcher` | [EitherMatcher](../modules/_either_.md#eithermatcher)‹R, L, B› |

**Returns:** *[Either](../modules/_either_.md#either)‹B, L›*

___

###  to

▸ **to**<**B**>(`transform`: [Transform](../modules/_types_.md#transform)‹R, B›): *ReturnType‹function›*

*Inherited from [Monad](_types_.monad.md).[to](_types_.monad.md#to)*

*Defined in [src/types.ts:106](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/types.ts#L106)*

**Type parameters:**

▪ **B**: *[Monad](_types_.monad.md)‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`transform` | [Transform](../modules/_types_.md#transform)‹R, B› |

**Returns:** *ReturnType‹function›*
