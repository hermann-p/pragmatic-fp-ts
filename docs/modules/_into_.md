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

Defined in into.ts:3

## Functions

###  into

▸ **into**<**T**>(`target`: [Dictionary](_types_.md#dictionary)‹T›, `coll`: [[ObjKey](_into_.md#objkey), T][]): *[Dictionary](_types_.md#dictionary)‹T›*

Defined in into.ts:4

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`target` | [Dictionary](_types_.md#dictionary)‹T› |
`coll` | [[ObjKey](_into_.md#objkey), T][] |

**Returns:** *[Dictionary](_types_.md#dictionary)‹T›*

▸ **into**<**T**>(`target`: [Dictionary](_types_.md#dictionary)‹T›): *function*

Defined in into.ts:8

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

Defined in into.ts:12

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`target` | T[] |
`coll` | T[] |

**Returns:** *T[]*

▸ **into**<**T**>(`target`: T[]): *function*

Defined in into.ts:13

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
