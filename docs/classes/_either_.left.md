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

* [bind](_either_.left.md#bind)
* [errorValue](_either_.left.md#errorvalue)

### Methods

* [_](_either_.left.md#_)
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

*Defined in [src/Either.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Either.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`errVal` | L |

**Returns:** *[Left](_either_.left.md)*

## Properties

###  bind

• **bind**: *[_](_either_.left.md#_)* =  this._

*Overrides [Monad](_types_.monad.md).[bind](_types_.monad.md#abstract-bind)*

*Defined in [src/Either.ts:21](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Either.ts#L21)*

___

###  errorValue

• **errorValue**: *L*

*Defined in [src/Either.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Either.ts#L11)*

## Methods

###  _

▸ **_**<**B**>(`_`: [Mappable](../modules/_types_.md#mappable)‹R, B›): *[Either](../modules/_either_.md#either)‹NonNullable‹B›, L›*

*Overrides [Monad](_types_.monad.md).[_](_types_.monad.md#abstract-_)*

*Defined in [src/Either.ts:18](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Either.ts#L18)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`_` | [Mappable](../modules/_types_.md#mappable)‹R, B› |

**Returns:** *[Either](../modules/_either_.md#either)‹NonNullable‹B›, L›*

___

###  bindM

▸ **bindM**<**B**>(`_`: [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹R›, [Monad](_types_.monad.md)‹B››): *[Either](../modules/_either_.md#either)‹NonNullable‹B›, L›*

*Overrides [Monad](_types_.monad.md).[bindM](_types_.monad.md#abstract-bindm)*

*Defined in [src/Either.ts:22](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Either.ts#L22)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`_` | [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹R›, [Monad](_types_.monad.md)‹B›› |

**Returns:** *[Either](../modules/_either_.md#either)‹NonNullable‹B›, L›*

___

###  effect

▸ **effect**(`_`: any): *[Either](../modules/_either_.md#either)‹NonNullable‹R›, L›*

*Overrides [Monad](_types_.monad.md).[effect](_types_.monad.md#abstract-effect)*

*Defined in [src/Either.ts:28](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Either.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | any |

**Returns:** *[Either](../modules/_either_.md#either)‹NonNullable‹R›, L›*

___

###  filter

▸ **filter**(`_`: any): *[Either](../modules/_either_.md#either)‹NonNullable‹R›, L›*

*Overrides [Monad](_types_.monad.md).[filter](_types_.monad.md#abstract-filter)*

*Defined in [src/Either.ts:25](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Either.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | any |

**Returns:** *[Either](../modules/_either_.md#either)‹NonNullable‹R›, L›*

___

###  getValue

▸ **getValue**(): *NonNullable‹R›*

*Overrides [Monad](_types_.monad.md).[getValue](_types_.monad.md#abstract-getvalue)*

*Defined in [src/Either.ts:31](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Either.ts#L31)*

**Returns:** *NonNullable‹R›*

___

###  getValueOr

▸ **getValueOr**(`alt`: R): *R*

*Overrides [Monad](_types_.monad.md).[getValueOr](_types_.monad.md#abstract-getvalueor)*

*Defined in [src/Either.ts:34](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Either.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`alt` | R |

**Returns:** *R*

___

###  match

▸ **match**<**B**>(`matcher`: [EitherMatcher](../modules/_either_.md#eithermatcher)‹R, L, B›): *[Either](../modules/_either_.md#either)‹NonNullable‹B›, L | Error›*

*Defined in [src/Either.ts:37](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Either.ts#L37)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`matcher` | [EitherMatcher](../modules/_either_.md#eithermatcher)‹R, L, B› |

**Returns:** *[Either](../modules/_either_.md#either)‹NonNullable‹B›, L | Error›*

___

###  to

▸ **to**<**B**>(`transform`: [Transform](../modules/_types_.md#transform)‹R, B›): *ReturnType‹function›*

*Inherited from [Monad](_types_.monad.md).[to](_types_.monad.md#to)*

*Defined in [src/types.ts:106](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/types.ts#L106)*

**Type parameters:**

▪ **B**: *[Monad](_types_.monad.md)‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`transform` | [Transform](../modules/_types_.md#transform)‹R, B› |

**Returns:** *ReturnType‹function›*
