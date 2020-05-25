[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["filter"](_filter_.md)

# External module: "filter"

## Index

### Functions

* [filter](_filter_.md#filter)
* [filterArray](_filter_.md#const-filterarray)
* [filterDict](_filter_.md#const-filterdict)

## Functions

###  filter

▸ **filter**<**A**>(`pred`: [Predicate](_types_.md#predicate)‹A›, `coll`: A[]): *A[]*

Defined in filter.ts:13

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹A› |
`coll` | A[] |

**Returns:** *A[]*

▸ **filter**<**A**>(`pred`: [Predicate](_types_.md#predicate)‹A›, `coll`: [Dictionary](_types_.md#dictionary)‹A›): *[Dictionary](_types_.md#dictionary)‹A›*

Defined in filter.ts:14

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹A› |
`coll` | [Dictionary](_types_.md#dictionary)‹A› |

**Returns:** *[Dictionary](_types_.md#dictionary)‹A›*

▸ **filter**<**A**>(`pred`: [Predicate](_types_.md#predicate)‹A›): *function*

Defined in filter.ts:18

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹A› |

**Returns:** *function*

▸ <**B**>(`coll`: B): *B extends A[] ? A[] : Dictionary<A>*

**Type parameters:**

▪ **B**: *A[] | [Dictionary](_types_.md#dictionary)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | B |

___

### `Const` filterArray

▸ **filterArray**(`pred`: [Predicate](_types_.md#predicate)‹any›, `arr`: any[]): *any[]*

Defined in filter.ts:5

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹any› | - |
`arr` | any[] |  [] |

**Returns:** *any[]*

___

### `Const` filterDict

▸ **filterDict**(`pred`: [Predicate](_types_.md#predicate)‹any›, `dict`: [Dictionary](_types_.md#dictionary)): *object*

Defined in filter.ts:6

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹any› | - |
`dict` | [Dictionary](_types_.md#dictionary) |  {} |

**Returns:** *object*

* \[ **key**: *string*\]: T
