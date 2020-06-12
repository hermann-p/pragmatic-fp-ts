[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Maybe"](../modules/_maybe_.md) › [Just](_maybe_.just.md)

# Class: Just <**A**>

## Type parameters

▪ **A**

## Hierarchy

* [Monad](_types_.monad.md)‹A›

  ↳ **Just**

## Index

### Constructors

* [constructor](_maybe_.just.md#constructor)

### Properties

* [bind](_maybe_.just.md#bind)
* [value](_maybe_.just.md#value)

### Methods

* [_](_maybe_.just.md#_)
* [bindM](_maybe_.just.md#bindm)
* [effect](_maybe_.just.md#effect)
* [filter](_maybe_.just.md#filter)
* [getValue](_maybe_.just.md#getvalue)
* [getValueOr](_maybe_.just.md#getvalueor)
* [match](_maybe_.just.md#match)
* [to](_maybe_.just.md#to)

## Constructors

###  constructor

\+ **new Just**(`value`: A): *[Just](_maybe_.just.md)*

*Defined in [src/Maybe.ts:33](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Maybe.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *[Just](_maybe_.just.md)*

## Properties

###  bind

• **bind**: *[_](_maybe_.just.md#_)* =  this._

*Overrides [Monad](_types_.monad.md).[bind](_types_.monad.md#abstract-bind)*

*Defined in [src/Maybe.ts:46](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Maybe.ts#L46)*

___

###  value

• **value**: *A*

*Defined in [src/Maybe.ts:33](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Maybe.ts#L33)*

## Methods

###  _

▸ **_**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹A, B›): *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹B››*

*Overrides [Monad](_types_.monad.md).[_](_types_.monad.md#abstract-_)*

*Defined in [src/Maybe.ts:38](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Maybe.ts#L38)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹A, B› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹B››*

___

###  bindM

▸ **bindM**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹A›, [Monad](_types_.monad.md)‹B››): *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹B››*

*Overrides [Monad](_types_.monad.md).[bindM](_types_.monad.md#abstract-bindm)*

*Defined in [src/Maybe.ts:47](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Maybe.ts#L47)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹A›, [Monad](_types_.monad.md)‹B›› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹B››*

___

###  effect

▸ **effect**(`fn`: [Effect](../modules/_types_.md#effect)‹A›): *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹A››*

*Overrides [Monad](_types_.monad.md).[effect](_types_.monad.md#abstract-effect)*

*Defined in [src/Maybe.ts:63](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Maybe.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Effect](../modules/_types_.md#effect)‹A› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹A››*

___

###  filter

▸ **filter**(`fn`: [Predicate](../modules/_types_.md#predicate)‹A›): *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹A››*

*Overrides [Monad](_types_.monad.md).[filter](_types_.monad.md#abstract-filter)*

*Defined in [src/Maybe.ts:55](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Maybe.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Predicate](../modules/_types_.md#predicate)‹A› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹A››*

___

###  getValue

▸ **getValue**(): *NonNullable‹A›*

*Overrides [Monad](_types_.monad.md).[getValue](_types_.monad.md#abstract-getvalue)*

*Defined in [src/Maybe.ts:69](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Maybe.ts#L69)*

**Returns:** *NonNullable‹A›*

___

###  getValueOr

▸ **getValueOr**(`_`: A): *A*

*Overrides [Monad](_types_.monad.md).[getValueOr](_types_.monad.md#abstract-getvalueor)*

*Defined in [src/Maybe.ts:72](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Maybe.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | A |

**Returns:** *A*

___

###  match

▸ **match**<**B**>(`matcher`: [MaybeMatcher](../modules/_maybe_.md#maybematcher)‹A, B›): *[Maybe](../modules/_maybe_.md#maybe)‹NonNullable‹B››*

*Defined in [src/Maybe.ts:75](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/Maybe.ts#L75)*

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

*Defined in [src/types.ts:106](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/types.ts#L106)*

**Type parameters:**

▪ **B**: *[Monad](_types_.monad.md)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`transform` | [Transform](../modules/_types_.md#transform)‹A, B› |

**Returns:** *ReturnType‹function›*
