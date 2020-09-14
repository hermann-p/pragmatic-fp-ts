[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Chain"](../modules/_chain_.md) › [Chain](_chain_.chain.md)

# Class: Chain <**A**>

## Type parameters

▪ **A**

## Hierarchy

* [Monad](_types_.monad.md)‹A›

  ↳ **Chain**

## Index

### Constructors

* [constructor](_chain_.chain.md#constructor)

### Properties

* [__value](_chain_.chain.md#__value)
* [bind](_chain_.chain.md#bind)

### Methods

* [_](_chain_.chain.md#_)
* [bindM](_chain_.chain.md#bindm)
* [effect](_chain_.chain.md#effect)
* [filter](_chain_.chain.md#filter)
* [getValue](_chain_.chain.md#getvalue)
* [getValueOr](_chain_.chain.md#getvalueor)
* [to](_chain_.chain.md#to)

## Constructors

###  constructor

\+ **new Chain**(`value`: A): *[Chain](_chain_.chain.md)*

*Defined in [src/Chain.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/d79a7fd/src/Chain.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *[Chain](_chain_.chain.md)*

## Properties

###  __value

• **__value**: *A*

*Defined in [src/Chain.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/d79a7fd/src/Chain.ts#L6)*

___

###  bind

• **bind**: *[_](_chain_.chain.md#_)* =  this._

*Overrides [Monad](_types_.monad.md).[bind](_types_.monad.md#abstract-bind)*

*Defined in [src/Chain.ts:14](https://github.com/hermann-p/pragmatic-fp-ts/blob/d79a7fd/src/Chain.ts#L14)*

## Methods

###  _

▸ **_**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹A, [MonadType](../modules/_types_.md#monadtype)‹B››): *[Chain](_chain_.chain.md)‹B›*

*Overrides [Monad](_types_.monad.md).[_](_types_.monad.md#abstract-_)*

*Defined in [src/Chain.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/d79a7fd/src/Chain.ts#L11)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹A, [MonadType](../modules/_types_.md#monadtype)‹B›› |

**Returns:** *[Chain](_chain_.chain.md)‹B›*

___

###  bindM

▸ **bindM**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹A›, [Monad](_types_.monad.md)‹B››): *[Chain](_chain_.chain.md)‹B›*

*Overrides [Monad](_types_.monad.md).[bindM](_types_.monad.md#abstract-bindm)*

*Defined in [src/Chain.ts:15](https://github.com/hermann-p/pragmatic-fp-ts/blob/d79a7fd/src/Chain.ts#L15)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹A›, [Monad](_types_.monad.md)‹B›› |

**Returns:** *[Chain](_chain_.chain.md)‹B›*

___

###  effect

▸ **effect**(`eff`: [Effect](../modules/_types_.md#effect)‹A›): *this*

*Overrides [Monad](_types_.monad.md).[effect](_types_.monad.md#abstract-effect)*

*Defined in [src/Chain.ts:27](https://github.com/hermann-p/pragmatic-fp-ts/blob/d79a7fd/src/Chain.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`eff` | [Effect](../modules/_types_.md#effect)‹A› |

**Returns:** *this*

___

###  filter

▸ **filter**(`pred`: [Predicate](../modules/_types_.md#predicate)‹A›): *[Chain](_chain_.chain.md)‹A›*

*Overrides [Monad](_types_.monad.md).[filter](_types_.monad.md#abstract-filter)*

*Defined in [src/Chain.ts:18](https://github.com/hermann-p/pragmatic-fp-ts/blob/d79a7fd/src/Chain.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](../modules/_types_.md#predicate)‹A› |

**Returns:** *[Chain](_chain_.chain.md)‹A›*

___

###  getValue

▸ **getValue**(): *A*

*Overrides [Monad](_types_.monad.md).[getValue](_types_.monad.md#abstract-getvalue)*

*Defined in [src/Chain.ts:21](https://github.com/hermann-p/pragmatic-fp-ts/blob/d79a7fd/src/Chain.ts#L21)*

**Returns:** *A*

___

###  getValueOr

▸ **getValueOr**(`alt`: A): *A*

*Overrides [Monad](_types_.monad.md).[getValueOr](_types_.monad.md#abstract-getvalueor)*

*Defined in [src/Chain.ts:24](https://github.com/hermann-p/pragmatic-fp-ts/blob/d79a7fd/src/Chain.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`alt` | A |

**Returns:** *A*

___

###  to

▸ **to**<**B**>(`transform`: [Transform](../modules/_types_.md#transform)‹A, B›): *ReturnType‹function›*

*Inherited from [Monad](_types_.monad.md).[to](_types_.monad.md#to)*

*Defined in [src/types.ts:129](https://github.com/hermann-p/pragmatic-fp-ts/blob/d79a7fd/src/types.ts#L129)*

**Type parameters:**

▪ **B**: *[Monad](_types_.monad.md)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`transform` | [Transform](../modules/_types_.md#transform)‹A, B› |

**Returns:** *ReturnType‹function›*
