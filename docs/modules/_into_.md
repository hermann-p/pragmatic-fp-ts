[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["into"](_into_.md)

# External module: "into"

## Index

### Type aliases

* [ObjKey](_into_.md#objkey)

### Functions

* [into](_into_.md#into)

## Type aliases

###  ObjKey

Ƭ **ObjKey**: *string | number*

*Defined in [src/into.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/87551e7/src/into.ts#L3)*

## Functions

###  into

▸ **into**<**T**>(`target`: [Dictionary](_types_.md#dictionary)‹T›, `coll`: [[ObjKey](_into_.md#objkey), T][]): *[Dictionary](_types_.md#dictionary)‹T›*

*Defined in [src/into.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/87551e7/src/into.ts#L4)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`target` | [Dictionary](_types_.md#dictionary)‹T› |
`coll` | [[ObjKey](_into_.md#objkey), T][] |

**Returns:** *[Dictionary](_types_.md#dictionary)‹T›*

▸ **into**<**T**>(`target`: [Dictionary](_types_.md#dictionary)‹T›): *function*

*Defined in [src/into.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/87551e7/src/into.ts#L8)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`target` | [Dictionary](_types_.md#dictionary)‹T› |

**Returns:** *function*

▸ (`coll`: [[ObjKey](_into_.md#objkey), T][]): *[Dictionary](_types_.md#dictionary)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [[ObjKey](_into_.md#objkey), T][] |

▸ **into**<**T**>(`target`: T[], `coll`: T[]): *T[]*

*Defined in [src/into.ts:12](https://github.com/hermann-p/pragmatic-fp-ts/blob/87551e7/src/into.ts#L12)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`target` | T[] |
`coll` | T[] |

**Returns:** *T[]*

▸ **into**<**T**>(`target`: T[]): *function*

*Defined in [src/into.ts:13](https://github.com/hermann-p/pragmatic-fp-ts/blob/87551e7/src/into.ts#L13)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`target` | T[] |

**Returns:** *function*

▸ (`coll`: T[]): *T[]*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | T[] |
