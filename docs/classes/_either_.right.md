[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Either"](../modules/_either_.md) › [Right](_either_.right.md)

# Class: Right <**R, L**>

## Type parameters

▪ **R**: *NonNullable‹any›*

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
* [isLeft](_either_.right.md#isleft)
* [isRight](_either_.right.md#isright)
* [match](_either_.right.md#match)
* [to](_either_.right.md#to)

## Constructors

###  constructor

\+ **new Right**(`value`: R): *[Right](_either_.right.md)*

*Defined in [src/Either.ts:49](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/Either.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | R |

**Returns:** *[Right](_either_.right.md)*

## Properties

###  bind

• **bind**: *[_](_either_.right.md#_)* =  this._

*Overrides [Monad](_types_.monad.md).[bind](_types_.monad.md#abstract-bind)*

*Defined in [src/Either.ts:62](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/Either.ts#L62)*

___

###  value

• **value**: *R*

*Defined in [src/Either.ts:49](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/Either.ts#L49)*

## Methods

###  _

▸ **_**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹R, B›): *[Either](../modules/_either_.md#either)‹NonNullable‹B›, L | Error›*

*Overrides [Monad](_types_.monad.md).[_](_types_.monad.md#abstract-_)*

*Defined in [src/Either.ts:54](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/Either.ts#L54)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹R, B› |

**Returns:** *[Either](../modules/_either_.md#either)‹NonNullable‹B›, L | Error›*

___

###  bindM

▸ **bindM**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹R›, [Monad](_types_.monad.md)‹B››): *[Either](../modules/_either_.md#either)‹NonNullable‹B›, L | Error›*

*Overrides [Monad](_types_.monad.md).[bindM](_types_.monad.md#abstract-bindm)*

*Defined in [src/Either.ts:63](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/Either.ts#L63)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹R›, [Monad](_types_.monad.md)‹B›› |

**Returns:** *[Either](../modules/_either_.md#either)‹NonNullable‹B›, L | Error›*

___

###  effect

▸ **effect**(`fn`: [Effect](../modules/_types_.md#effect)‹R›): *[Either](../modules/_either_.md#either)‹NonNullable‹R›, L›*

*Overrides [Monad](_types_.monad.md).[effect](_types_.monad.md#abstract-effect)*

*Defined in [src/Either.ts:81](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/Either.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Effect](../modules/_types_.md#effect)‹R› |

**Returns:** *[Either](../modules/_either_.md#either)‹NonNullable‹R›, L›*

___

###  filter

▸ **filter**(`fn`: [Predicate](../modules/_types_.md#predicate)‹R›): *[Either](../modules/_either_.md#either)‹NonNullable‹R›, L | Error›*

*Overrides [Monad](_types_.monad.md).[filter](_types_.monad.md#abstract-filter)*

*Defined in [src/Either.ts:71](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/Either.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Predicate](../modules/_types_.md#predicate)‹R› |

**Returns:** *[Either](../modules/_either_.md#either)‹NonNullable‹R›, L | Error›*

___

###  getValue

▸ **getValue**(): *NonNullable‹R›*

*Overrides [Monad](_types_.monad.md).[getValue](_types_.monad.md#abstract-getvalue)*

*Defined in [src/Either.ts:87](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/Either.ts#L87)*

**Returns:** *NonNullable‹R›*

___

###  getValueOr

▸ **getValueOr**(`_`: R): *R*

*Overrides [Monad](_types_.monad.md).[getValueOr](_types_.monad.md#abstract-getvalueor)*

*Defined in [src/Either.ts:90](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/Either.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | R |

**Returns:** *R*

___

###  isLeft

▸ **isLeft**(): *boolean*

*Defined in [src/Either.ts:96](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/Either.ts#L96)*

**Returns:** *boolean*

___

###  isRight

▸ **isRight**(): *boolean*

*Defined in [src/Either.ts:99](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/Either.ts#L99)*

**Returns:** *boolean*

___

###  match

▸ **match**<**B**>(`matcher`: [EitherMatcher](../modules/_either_.md#eithermatcher)‹R, L, B›): *[Either](../modules/_either_.md#either)‹NonNullable‹B›, L›*

*Defined in [src/Either.ts:93](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/Either.ts#L93)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`matcher` | [EitherMatcher](../modules/_either_.md#eithermatcher)‹R, L, B› |

**Returns:** *[Either](../modules/_either_.md#either)‹NonNullable‹B›, L›*

___

###  to

▸ **to**<**B**>(`transform`: [Transform](../modules/_types_.md#transform)‹R, B›): *ReturnType‹function›*

*Inherited from [Monad](_types_.monad.md).[to](_types_.monad.md#to)*

*Defined in [src/types.ts:106](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/types.ts#L106)*

**Type parameters:**

▪ **B**: *[Monad](_types_.monad.md)‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`transform` | [Transform](../modules/_types_.md#transform)‹R, B› |

**Returns:** *ReturnType‹function›*
