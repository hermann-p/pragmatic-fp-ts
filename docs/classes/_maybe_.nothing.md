[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Maybe"](../modules/_maybe_.md) › [Nothing](_maybe_.nothing.md)

# Class: Nothing <**A**>

## Type parameters

▪ **A**

## Hierarchy

* [Monad](_types_.monad.md)‹A›

  ↳ **Nothing**

## Index

### Properties

* [bind](_maybe_.nothing.md#bind)

### Methods

* [_](_maybe_.nothing.md#_)
* [bindM](_maybe_.nothing.md#bindm)
* [effect](_maybe_.nothing.md#effect)
* [filter](_maybe_.nothing.md#filter)
* [getValue](_maybe_.nothing.md#getvalue)
* [getValueOr](_maybe_.nothing.md#getvalueor)
* [isJust](_maybe_.nothing.md#isjust)
* [isNothing](_maybe_.nothing.md#isnothing)
* [match](_maybe_.nothing.md#match)
* [to](_maybe_.nothing.md#to)

## Properties

###  bind

• **bind**: *[_](_maybe_.nothing.md#_)* =  this._

*Overrides [Monad](_types_.monad.md).[bind](_types_.monad.md#abstract-bind)*

*Defined in [src/Maybe.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Maybe.ts#L11)*

## Methods

###  _

▸ **_**<**B**>(`_`: [Mappable](../modules/_types_.md#mappable)‹A, B›): *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹B››*

*Overrides [Monad](_types_.monad.md).[_](_types_.monad.md#abstract-_)*

*Defined in [src/Maybe.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Maybe.ts#L8)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`_` | [Mappable](../modules/_types_.md#mappable)‹A, B› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹B››*

___

###  bindM

▸ **bindM**<**B**>(`_`: [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹A›, [Monad](_types_.monad.md)‹B››): *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹B››*

*Overrides [Monad](_types_.monad.md).[bindM](_types_.monad.md#abstract-bindm)*

*Defined in [src/Maybe.ts:12](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Maybe.ts#L12)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`_` | [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹A›, [Monad](_types_.monad.md)‹B›› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹B››*

___

###  effect

▸ **effect**(`_`: any): *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹A››*

*Overrides [Monad](_types_.monad.md).[effect](_types_.monad.md#abstract-effect)*

*Defined in [src/Maybe.ts:18](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Maybe.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | any |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹A››*

___

###  filter

▸ **filter**(`_`: any): *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹A››*

*Overrides [Monad](_types_.monad.md).[filter](_types_.monad.md#abstract-filter)*

*Defined in [src/Maybe.ts:15](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Maybe.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | any |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹A››*

___

###  getValue

▸ **getValue**(): *A*

*Overrides [Monad](_types_.monad.md).[getValue](_types_.monad.md#abstract-getvalue)*

*Defined in [src/Maybe.ts:21](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Maybe.ts#L21)*

**Returns:** *A*

___

###  getValueOr

▸ **getValueOr**(`alt`: A): *A*

*Overrides [Monad](_types_.monad.md).[getValueOr](_types_.monad.md#abstract-getvalueor)*

*Defined in [src/Maybe.ts:24](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Maybe.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`alt` | A |

**Returns:** *A*

___

###  isJust

▸ **isJust**(): *boolean*

*Defined in [src/Maybe.ts:33](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Maybe.ts#L33)*

**Returns:** *boolean*

___

###  isNothing

▸ **isNothing**(): *boolean*

*Defined in [src/Maybe.ts:30](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Maybe.ts#L30)*

**Returns:** *boolean*

___

###  match

▸ **match**<**B**>(`matcher`: [MaybeMatcher](../modules/_maybe_.md#maybematcher)‹A, B›): *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹B››*

*Defined in [src/Maybe.ts:27](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Maybe.ts#L27)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`matcher` | [MaybeMatcher](../modules/_maybe_.md#maybematcher)‹A, B› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹B››*

___

###  to

▸ **to**<**B**>(`transform`: [Transform](../modules/_types_.md#transform)‹A, B›): *ReturnType‹function›*

*Inherited from [Monad](_types_.monad.md).[to](_types_.monad.md#to)*

*Defined in [src/types.ts:129](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/types.ts#L129)*

**Type parameters:**

▪ **B**: *[Monad](_types_.monad.md)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`transform` | [Transform](../modules/_types_.md#transform)‹A, B› |

**Returns:** *ReturnType‹function›*
