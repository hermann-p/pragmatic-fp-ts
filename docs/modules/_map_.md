[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["map"](_map_.md)

# External module: "map"

## Index

### Functions

* [map](_map_.md#map)
* [mapObj](_map_.md#const-mapobj)

## Functions

###  map

▸ **map**<**A**, **B**>(`fn`: [Mappable](_types_.md#mappable)‹A, B›, `coll`: A[]): *B[]*

*Defined in [src/map.ts:9](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/map.ts#L9)*

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

*Defined in [src/map.ts:10](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/map.ts#L10)*

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

*Defined in [src/map.ts:14](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/map.ts#L14)*

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

*Defined in [src/map.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/map.ts#L3)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](_types_.md#mappable)‹A, B› |
`dict` | [Dictionary](_types_.md#dictionary)‹A› |

**Returns:** *[Dictionary](_types_.md#dictionary)‹B›*
