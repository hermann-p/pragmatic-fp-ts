[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["map"](_map_.md)

# External module: "map"

## Index

### Functions

* [map](_map_.md#map)
* [mapObj](_map_.md#const-mapobj)

## Functions

###  map

▸ **map**<**A**, **B**>(`fn`: [Mappable](_types_.md#mappable)‹A, B›, `coll`: A[]): *B[]*

Defined in map.ts:9

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](_types_.md#mappable)‹A, B› |
`coll` | A[] |

**Returns:** *B[]*

▸ **map**<**A**, **B**>(`fn`: [Mappable](_types_.md#mappable)‹A, B›, `coll`: [Dictionary](_types_.md#dictionary)‹A›): *[Dictionary](_types_.md#dictionary)‹B›*

Defined in map.ts:10

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](_types_.md#mappable)‹A, B› |
`coll` | [Dictionary](_types_.md#dictionary)‹A› |

**Returns:** *[Dictionary](_types_.md#dictionary)‹B›*

▸ **map**<**A**, **B**>(`fn`: [Mappable](_types_.md#mappable)‹A, B›): *function*

Defined in map.ts:14

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *function*

▸ <**C**>(`coll`: C): *C extends A[] ? B[] : Dictionary<B>*

**Type parameters:**

▪ **C**: *A[] | [Dictionary](_types_.md#dictionary)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | C |

___

### `Const` mapObj

▸ **mapObj**<**A**, **B**>(`fn`: [Mappable](_types_.md#mappable)‹A, B›, `dict`: [Dictionary](_types_.md#dictionary)‹A›): *[Dictionary](_types_.md#dictionary)‹B›*

Defined in map.ts:3

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](_types_.md#mappable)‹A, B› |
`dict` | [Dictionary](_types_.md#dictionary)‹A› |

**Returns:** *[Dictionary](_types_.md#dictionary)‹B›*
