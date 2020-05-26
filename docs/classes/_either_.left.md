[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Either"](../modules/_either_.md) › [Left](_either_.left.md)

# Class: Left <**R, L**>

## Type parameters

▪ **R**

▪ **L**

## Hierarchy

* [Monad](_types_.monad.md)‹R›

  ↳ **Left**

## Index

### Constructors

* [constructor](_either_.left.md#constructor)

### Properties

* [errorValue](_either_.left.md#errorvalue)

### Methods

* [bind](_either_.left.md#bind)
* [bindM](_either_.left.md#bindm)
* [effect](_either_.left.md#effect)
* [filter](_either_.left.md#filter)
* [getValue](_either_.left.md#getvalue)
* [getValueOr](_either_.left.md#getvalueor)
* [match](_either_.left.md#match)
* [to](_either_.left.md#to)

## Constructors

###  constructor

\+ **new Left**(`errVal`: L): *[Left](_either_.left.md)*

*Defined in [Either.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`errVal` | L |

**Returns:** *[Left](_either_.left.md)*

## Properties

###  errorValue

• **errorValue**: *L*

*Defined in [Either.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L11)*

## Methods

###  bind

▸ **bind**<**B**>(`_`: [Mappable](../modules/_types_.md#mappable)‹R, B›): *[Either](../modules/_either_.md#either)‹B, L›*

*Overrides [Monad](_types_.monad.md).[bind](_types_.monad.md#abstract-bind)*

*Defined in [Either.ts:18](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L18)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`_` | [Mappable](../modules/_types_.md#mappable)‹R, B› |

**Returns:** *[Either](../modules/_either_.md#either)‹B, L›*

___

###  bindM

▸ **bindM**<**B**>(`_`: [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹R›, [Monad](_types_.monad.md)‹B››): *[Either](../modules/_either_.md#either)‹B, L›*

*Overrides [Monad](_types_.monad.md).[bindM](_types_.monad.md#abstract-bindm)*

*Defined in [Either.ts:21](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L21)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`_` | [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹R›, [Monad](_types_.monad.md)‹B›› |

**Returns:** *[Either](../modules/_either_.md#either)‹B, L›*

___

###  effect

▸ **effect**(`_`: any): *[Either](../modules/_either_.md#either)‹R, L›*

*Overrides [Monad](_types_.monad.md).[effect](_types_.monad.md#abstract-effect)*

*Defined in [Either.ts:27](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | any |

**Returns:** *[Either](../modules/_either_.md#either)‹R, L›*

___

###  filter

▸ **filter**(`_`: any): *[Either](../modules/_either_.md#either)‹R, L›*

*Overrides [Monad](_types_.monad.md).[filter](_types_.monad.md#abstract-filter)*

*Defined in [Either.ts:24](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | any |

**Returns:** *[Either](../modules/_either_.md#either)‹R, L›*

___

###  getValue

▸ **getValue**(): *R*

*Overrides [Monad](_types_.monad.md).[getValue](_types_.monad.md#abstract-getvalue)*

*Defined in [Either.ts:30](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L30)*

**Returns:** *R*

___

###  getValueOr

▸ **getValueOr**(`alt`: R): *R*

*Overrides [Monad](_types_.monad.md).[getValueOr](_types_.monad.md#abstract-getvalueor)*

*Defined in [Either.ts:33](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`alt` | R |

**Returns:** *R*

___

###  match

▸ **match**<**B**>(`matcher`: [EitherMatcher](../modules/_either_.md#eithermatcher)‹R, L, B›): *[Either](../modules/_either_.md#either)‹B, L | Error›*

*Defined in [Either.ts:36](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Either.ts#L36)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`matcher` | [EitherMatcher](../modules/_either_.md#eithermatcher)‹R, L, B› |

**Returns:** *[Either](../modules/_either_.md#either)‹B, L | Error›*

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
