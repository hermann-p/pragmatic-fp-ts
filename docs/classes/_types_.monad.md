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

* [_](_types_.monad.md#abstract-_)
* [bind](_types_.monad.md#abstract-bind)
* [bindM](_types_.monad.md#abstract-bindm)
* [effect](_types_.monad.md#abstract-effect)
* [filter](_types_.monad.md#abstract-filter)
* [getValue](_types_.monad.md#abstract-getvalue)
* [getValueOr](_types_.monad.md#abstract-getvalueor)
* [to](_types_.monad.md#to)

## Methods

### `Abstract` _

▸ **_**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹A, B›): *[MonadType](../modules/_types_.md#monadtype)‹B›*

*Defined in [src/types.ts:100](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/types.ts#L100)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹A, B› |

**Returns:** *[MonadType](../modules/_types_.md#monadtype)‹B›*

___

### `Abstract` bind

▸ **bind**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹A, B›): *[MonadType](../modules/_types_.md#monadtype)‹B›*

*Defined in [src/types.ts:99](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/types.ts#L99)*

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

*Defined in [src/types.ts:101](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/types.ts#L101)*

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

*Defined in [src/types.ts:103](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/types.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Effect](../modules/_types_.md#effect)‹A› |

**Returns:** *[Monad](_types_.monad.md)‹A›*

___

### `Abstract` filter

▸ **filter**(`fn`: [Predicate](../modules/_types_.md#predicate)‹A›): *[Monad](_types_.monad.md)‹A›*

*Defined in [src/types.ts:102](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/types.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Predicate](../modules/_types_.md#predicate)‹A› |

**Returns:** *[Monad](_types_.monad.md)‹A›*

___

### `Abstract` getValue

▸ **getValue**(): *A*

*Defined in [src/types.ts:104](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/types.ts#L104)*

**Returns:** *A*

___

### `Abstract` getValueOr

▸ **getValueOr**(`alt`: A): *A*

*Defined in [src/types.ts:105](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/types.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`alt` | A |

**Returns:** *A*

___

###  to

▸ **to**<**B**>(`transform`: [Transform](../modules/_types_.md#transform)‹A, B›): *ReturnType‹function›*

*Defined in [src/types.ts:106](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/types.ts#L106)*

**Type parameters:**

▪ **B**: *[Monad](_types_.monad.md)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`transform` | [Transform](../modules/_types_.md#transform)‹A, B› |

**Returns:** *ReturnType‹function›*
