[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["findLastIndex"](_findlastindex_.md)

# External module: "findLastIndex"

## Index

### Functions

* [arrayToIndexed](_findlastindex_.md#const-arraytoindexed)
* [dictToIndexed](_findlastindex_.md#const-dicttoindexed)
* [findLastIndex](_findlastindex_.md#findlastindex)

## Functions

### `Const` arrayToIndexed

▸ **arrayToIndexed**<**A**>(`arr`: A[]): *[number, A][]*

*Defined in [src/findLastIndex.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/findLastIndex.ts#L6)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | A[] |

**Returns:** *[number, A][]*

___

### `Const` dictToIndexed

▸ **dictToIndexed**<**A**>(`dict`: [Dictionary](_types_.md#dictionary)‹A›): *[string, A][]*

*Defined in [src/findLastIndex.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/findLastIndex.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`dict` | [Dictionary](_types_.md#dictionary)‹A› |

**Returns:** *[string, A][]*

___

###  findLastIndex

▸ **findLastIndex**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›, `coll`: A[]): *number*

*Defined in [src/findLastIndex.ts:13](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/findLastIndex.ts#L13)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |
`coll` | A[] |

**Returns:** *number*

▸ **findLastIndex**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›, `coll`: [Dictionary](_types_.md#dictionary)‹A›): *string*

*Defined in [src/findLastIndex.ts:14](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/findLastIndex.ts#L14)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |
`coll` | [Dictionary](_types_.md#dictionary)‹A› |

**Returns:** *string*

▸ **findLastIndex**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›): *function*

*Defined in [src/findLastIndex.ts:15](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/findLastIndex.ts#L15)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |

**Returns:** *function*

▸ <**T**>(`coll`: T): *T extends A[] ? number : string*

**Type parameters:**

▪ **T**: *A[] | [Dictionary](_types_.md#dictionary)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | T |
