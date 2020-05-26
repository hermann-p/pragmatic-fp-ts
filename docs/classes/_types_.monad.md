[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [Monad](_types_.monad.md)

# Class: Monad <**A**>

## Type parameters

▪ **A**

## Hierarchy

* **Monad**

  ↳ [Left](_either_.left.md)

  ↳ [Right](_either_.right.md)

  ↳ [Nothing](_maybe_.nothing.md)

  ↳ [Just](_maybe_.just.md)

  ↳ [Chain](_chain_.chain.md)

## Index

### Methods

* [bind](_types_.monad.md#abstract-bind)
* [bindM](_types_.monad.md#abstract-bindm)
* [effect](_types_.monad.md#abstract-effect)
* [filter](_types_.monad.md#abstract-filter)
* [getValue](_types_.monad.md#abstract-getvalue)
* [getValueOr](_types_.monad.md#abstract-getvalueor)
* [to](_types_.monad.md#to)

## Methods

### `Abstract` bind

▸ **bind**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹A, B›): *[MonadType](../modules/_types_.md#monadtype)‹B›*

*Defined in [types.ts:106](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/types.ts#L106)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹A, B› |

**Returns:** *[MonadType](../modules/_types_.md#monadtype)‹B›*

___

### `Abstract` bindM

▸ **bindM**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹A›, [MonadType](../modules/_types_.md#monadtype)‹B››): *[Monad](_types_.monad.md)‹B›*

*Defined in [types.ts:107](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/types.ts#L107)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹A›, [MonadType](../modules/_types_.md#monadtype)‹B›› |

**Returns:** *[Monad](_types_.monad.md)‹B›*

___

### `Abstract` effect

▸ **effect**(`fn`: [Effect](../modules/_types_.md#effect)‹A›): *[Monad](_types_.monad.md)‹A›*

*Defined in [types.ts:109](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/types.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Effect](../modules/_types_.md#effect)‹A› |

**Returns:** *[Monad](_types_.monad.md)‹A›*

___

### `Abstract` filter

▸ **filter**(`fn`: [Predicate](../modules/_types_.md#predicate)‹A›): *[Monad](_types_.monad.md)‹A›*

*Defined in [types.ts:108](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/types.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Predicate](../modules/_types_.md#predicate)‹A› |

**Returns:** *[Monad](_types_.monad.md)‹A›*

___

### `Abstract` getValue

▸ **getValue**(): *A*

*Defined in [types.ts:110](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/types.ts#L110)*

**Returns:** *A*

___

### `Abstract` getValueOr

▸ **getValueOr**(`alt`: A): *A*

*Defined in [types.ts:111](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/types.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`alt` | A |

**Returns:** *A*

___

###  to

▸ **to**<**B**>(`transform`: [Transform](../modules/_types_.md#transform)‹A, B›): *ReturnType‹function›*

*Defined in [types.ts:112](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/types.ts#L112)*

**Type parameters:**

▪ **B**: *[Monad](_types_.monad.md)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`transform` | [Transform](../modules/_types_.md#transform)‹A, B› |

**Returns:** *ReturnType‹function›*
