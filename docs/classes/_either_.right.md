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

* [value](_either_.right.md#value)

### Methods

* [bind](_either_.right.md#bind)
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

*Defined in [Either.ts:42](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | R |

**Returns:** *[Right](_either_.right.md)*

## Properties

###  value

• **value**: *R*

*Defined in [Either.ts:42](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L42)*

## Methods

###  bind

▸ **bind**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹R, B›): *[Either](../modules/_either_.md#either)‹B, L | Error›*

*Overrides [Monad](_types_.monad.md).[bind](_types_.monad.md#abstract-bind)*

*Defined in [Either.ts:47](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L47)*

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

*Defined in [Either.ts:55](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L55)*

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

*Defined in [Either.ts:71](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Effect](../modules/_types_.md#effect)‹R› |

**Returns:** *[Either](../modules/_either_.md#either)‹R, L›*

___

###  filter

▸ **filter**(`fn`: [Predicate](../modules/_types_.md#predicate)‹R›): *[Either](../modules/_either_.md#either)‹R, L | Error›*

*Overrides [Monad](_types_.monad.md).[filter](_types_.monad.md#abstract-filter)*

*Defined in [Either.ts:63](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Predicate](../modules/_types_.md#predicate)‹R› |

**Returns:** *[Either](../modules/_either_.md#either)‹R, L | Error›*

___

###  getValue

▸ **getValue**(): *R*

*Overrides [Monad](_types_.monad.md).[getValue](_types_.monad.md#abstract-getvalue)*

*Defined in [Either.ts:77](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L77)*

**Returns:** *R*

___

###  getValueOr

▸ **getValueOr**(`_`: R): *R*

*Overrides [Monad](_types_.monad.md).[getValueOr](_types_.monad.md#abstract-getvalueor)*

*Defined in [Either.ts:80](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | R |

**Returns:** *R*

___

###  match

▸ **match**<**B**>(`matcher`: [EitherMatcher](../modules/_either_.md#eithermatcher)‹R, L, B›): *[Either](../modules/_either_.md#either)‹B, L›*

*Defined in [Either.ts:83](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L83)*

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

*Defined in [types.ts:112](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/types.ts#L112)*

**Type parameters:**

▪ **B**: *[Monad](_types_.monad.md)‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`transform` | [Transform](../modules/_types_.md#transform)‹R, B› |

**Returns:** *ReturnType‹function›*
