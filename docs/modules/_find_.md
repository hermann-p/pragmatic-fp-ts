[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["find"](_find_.md)

# External module: "find"

## Index

### Functions

* [find](_find_.md#find)

## Functions

###  find

▸ **find**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›, `coll`: A[]): *A | null*

Defined in find.ts:3

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |
`coll` | A[] |

**Returns:** *A | null*

▸ **find**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›, `dict`: [Dictionary](_types_.md#dictionary)‹A›): *A | null*

Defined in find.ts:4

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |
`dict` | [Dictionary](_types_.md#dictionary)‹A› |

**Returns:** *A | null*

▸ **find**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›): *function*

Defined in find.ts:6

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |

**Returns:** *function*

▸ <**B**>(`coll`: B): *A | null*

**Type parameters:**

▪ **B**: *A[] | [Dictionary](_types_.md#dictionary)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | B |
