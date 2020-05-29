[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["mapIndexed"](_mapindexed_.md)

# External module: "mapIndexed"

## Index

### Type aliases

* [ArrayMappable](_mapindexed_.md#arraymappable)
* [DictMappable](_mapindexed_.md#dictmappable)

### Functions

* [mapArrayIndexed](_mapindexed_.md#const-maparrayindexed)
* [mapIndexed](_mapindexed_.md#mapindexed)
* [mapObjIndexed](_mapindexed_.md#const-mapobjindexed)

## Type aliases

###  ArrayMappable

Ƭ **ArrayMappable**: *function*

*Defined in [src/mapIndexed.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/0abe0d4/src/mapIndexed.ts#L3)*

#### Type declaration:

▸ (`value`: A, `idx`: number): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`idx` | number |

___

###  DictMappable

Ƭ **DictMappable**: *function*

*Defined in [src/mapIndexed.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/0abe0d4/src/mapIndexed.ts#L4)*

#### Type declaration:

▸ (`value`: A, `key`: string): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`key` | string |

## Functions

### `Const` mapArrayIndexed

▸ **mapArrayIndexed**<**A**, **B**>(`fn`: [ArrayMappable](_mapindexed_.md#arraymappable)‹A, B›, `coll`: A[]): *B[]*

*Defined in [src/mapIndexed.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/0abe0d4/src/mapIndexed.ts#L6)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [ArrayMappable](_mapindexed_.md#arraymappable)‹A, B› |
`coll` | A[] |

**Returns:** *B[]*

___

###  mapIndexed

▸ **mapIndexed**<**A**, **B**>(`fn`: [ArrayMappable](_mapindexed_.md#arraymappable)‹A, B›, `coll`: A[]): *B[]*

*Defined in [src/mapIndexed.ts:24](https://github.com/hermann-p/pragmatic-fp-ts/blob/0abe0d4/src/mapIndexed.ts#L24)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [ArrayMappable](_mapindexed_.md#arraymappable)‹A, B› |
`coll` | A[] |

**Returns:** *B[]*

▸ **mapIndexed**<**A**, **B**>(`fn`: [ArrayMappable](_mapindexed_.md#arraymappable)‹A, B›): *function*

*Defined in [src/mapIndexed.ts:25](https://github.com/hermann-p/pragmatic-fp-ts/blob/0abe0d4/src/mapIndexed.ts#L25)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [ArrayMappable](_mapindexed_.md#arraymappable)‹A, B› |

**Returns:** *function*

▸ (`coll`: A[]): *B[]*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | A[] |

▸ **mapIndexed**<**A**, **B**>(`fn`: [DictMappable](_mapindexed_.md#dictmappable)‹A, B›, `coll`: [Dictionary](_types_.md#dictionary)‹A›): *[Dictionary](_types_.md#dictionary)‹B›*

*Defined in [src/mapIndexed.ts:27](https://github.com/hermann-p/pragmatic-fp-ts/blob/0abe0d4/src/mapIndexed.ts#L27)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [DictMappable](_mapindexed_.md#dictmappable)‹A, B› |
`coll` | [Dictionary](_types_.md#dictionary)‹A› |

**Returns:** *[Dictionary](_types_.md#dictionary)‹B›*

▸ **mapIndexed**<**A**, **B**>(`fn`: [DictMappable](_mapindexed_.md#dictmappable)‹A, B›): *function*

*Defined in [src/mapIndexed.ts:31](https://github.com/hermann-p/pragmatic-fp-ts/blob/0abe0d4/src/mapIndexed.ts#L31)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [DictMappable](_mapindexed_.md#dictmappable)‹A, B› |

**Returns:** *function*

▸ (`coll`: [Dictionary](_types_.md#dictionary)‹A›): *[Dictionary](_types_.md#dictionary)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [Dictionary](_types_.md#dictionary)‹A› |

___

### `Const` mapObjIndexed

▸ **mapObjIndexed**<**A**, **B**>(`fn`: [DictMappable](_mapindexed_.md#dictmappable)‹A, B›, `dict`: [Dictionary](_types_.md#dictionary)‹A›): *[Dictionary](_types_.md#dictionary)‹B›*

*Defined in [src/mapIndexed.ts:9](https://github.com/hermann-p/pragmatic-fp-ts/blob/0abe0d4/src/mapIndexed.ts#L9)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [DictMappable](_mapindexed_.md#dictmappable)‹A, B› |
`dict` | [Dictionary](_types_.md#dictionary)‹A› |

**Returns:** *[Dictionary](_types_.md#dictionary)‹B›*
