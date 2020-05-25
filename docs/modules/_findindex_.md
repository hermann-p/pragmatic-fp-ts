[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["findIndex"](_findindex_.md)

# External module: "findIndex"

## Index

### Functions

* [arrayToIndexed](_findindex_.md#const-arraytoindexed)
* [dictToIndexed](_findindex_.md#const-dicttoindexed)
* [findIndex](_findindex_.md#findindex)

## Functions

### `Const` arrayToIndexed

▸ **arrayToIndexed**<**A**>(`arr`: A[]): *[number, A][]*

Defined in findIndex.ts:6

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

Defined in findIndex.ts:9

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`dict` | [Dictionary](_types_.md#dictionary)‹A› |

**Returns:** *[string, A][]*

___

###  findIndex

▸ **findIndex**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›, `coll`: A[]): *number*

Defined in findIndex.ts:14

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |
`coll` | A[] |

**Returns:** *number*

▸ **findIndex**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›, `coll`: [Dictionary](_types_.md#dictionary)‹A›): *string*

Defined in findIndex.ts:15

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |
`coll` | [Dictionary](_types_.md#dictionary)‹A› |

**Returns:** *string*

▸ **findIndex**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›): *function*

Defined in findIndex.ts:19

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |

**Returns:** *function*

▸ <**B**>(`coll`: B): *B extends A[] ? A[] : Dictionary<A>*

**Type parameters:**

▪ **B**: *A[] | [Dictionary](_types_.md#dictionary)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | B |
