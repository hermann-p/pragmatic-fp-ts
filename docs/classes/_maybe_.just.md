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

* [value](_maybe_.just.md#value)

### Methods

* [bind](_maybe_.just.md#bind)
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

*Defined in [Maybe.ts:32](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Maybe.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *[Just](_maybe_.just.md)*

## Properties

###  value

• **value**: *A*

*Defined in [Maybe.ts:32](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Maybe.ts#L32)*

## Methods

###  bind

▸ **bind**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹A, B›): *[Maybe](../modules/_maybe_.md#maybe)‹B›*

*Overrides [Monad](_types_.monad.md).[bind](_types_.monad.md#abstract-bind)*

*Defined in [Maybe.ts:37](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Maybe.ts#L37)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹A, B› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹B›*

___

###  bindM

▸ **bindM**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹A›, [Monad](_types_.monad.md)‹B››): *[Maybe](../modules/_maybe_.md#maybe)‹B›*

*Overrides [Monad](_types_.monad.md).[bindM](_types_.monad.md#abstract-bindm)*

*Defined in [Maybe.ts:45](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Maybe.ts#L45)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹A›, [Monad](_types_.monad.md)‹B›› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹B›*

___

###  effect

▸ **effect**(`fn`: [Effect](../modules/_types_.md#effect)‹A›): *[Maybe](../modules/_maybe_.md#maybe)‹A›*

*Overrides [Monad](_types_.monad.md).[effect](_types_.monad.md#abstract-effect)*

*Defined in [Maybe.ts:61](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Maybe.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Effect](../modules/_types_.md#effect)‹A› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹A›*

___

###  filter

▸ **filter**(`fn`: [Predicate](../modules/_types_.md#predicate)‹A›): *[Maybe](../modules/_maybe_.md#maybe)‹A›*

*Overrides [Monad](_types_.monad.md).[filter](_types_.monad.md#abstract-filter)*

*Defined in [Maybe.ts:53](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Maybe.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Predicate](../modules/_types_.md#predicate)‹A› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹A›*

___

###  getValue

▸ **getValue**(): *A*

*Overrides [Monad](_types_.monad.md).[getValue](_types_.monad.md#abstract-getvalue)*

*Defined in [Maybe.ts:67](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Maybe.ts#L67)*

**Returns:** *A*

___

###  getValueOr

▸ **getValueOr**(`_`: A): *A*

*Overrides [Monad](_types_.monad.md).[getValueOr](_types_.monad.md#abstract-getvalueor)*

*Defined in [Maybe.ts:70](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Maybe.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | A |

**Returns:** *A*

___

###  match

▸ **match**<**B**>(`matcher`: [MaybeMatcher](../modules/_maybe_.md#maybematcher)‹A, B›): *[Maybe](../modules/_maybe_.md#maybe)‹B›*

*Defined in [Maybe.ts:73](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Maybe.ts#L73)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`matcher` | [MaybeMatcher](../modules/_maybe_.md#maybematcher)‹A, B› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹B›*

___

###  to

▸ **to**<**B**>(`transform`: [Transform](../modules/_types_.md#transform)‹A, B›): *ReturnType‹function›*

*Inherited from [Monad](_types_.monad.md).[to](_types_.monad.md#to)*

*Defined in [types.ts:112](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/types.ts#L112)*

**Type parameters:**

▪ **B**: *[Monad](_types_.monad.md)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`transform` | [Transform](../modules/_types_.md#transform)‹A, B› |

**Returns:** *ReturnType‹function›*
