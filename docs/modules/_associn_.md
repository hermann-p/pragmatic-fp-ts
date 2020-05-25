[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["assocIn"](_associn_.md)

# External module: "assocIn"

## Index

### Type aliases

* [Path](_associn_.md#path)

### Functions

* [assocIn](_associn_.md#associn)

## Type aliases

###  Path

Ƭ **Path**: *string | number[]*

Defined in assocIn.ts:4

## Functions

###  assocIn

▸ **assocIn**<**A**>(`path`: [Path](_associn_.md#path), `value`: any, `coll`: any[]): *A[]*

Defined in assocIn.ts:5

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](_associn_.md#path) |
`value` | any |
`coll` | any[] |

**Returns:** *A[]*

▸ **assocIn**<**A**>(`path`: [Path](_associn_.md#path), `value`: any): *function*

Defined in assocIn.ts:6

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](_associn_.md#path) |
`value` | any |

**Returns:** *function*

▸ (`coll`: any[]): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | any[] |

▸ **assocIn**<**A**>(`path`: [Path](_associn_.md#path)): *function*

Defined in assocIn.ts:7

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](_associn_.md#path) |

**Returns:** *function*

▸ (`value`: any): *function*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

▸ (`coll`: any[] | [Dictionary](_types_.md#dictionary)): *A[] | [Dictionary](_types_.md#dictionary)*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | any[] &#124; [Dictionary](_types_.md#dictionary) |

▸ **assocIn**<**A**>(`path`: [Path](_associn_.md#path), `value`: any, `dict`: A): *A*

Defined in assocIn.ts:11

**Type parameters:**

▪ **A**: *[Dictionary](_types_.md#dictionary)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](_associn_.md#path) |
`value` | any |
`dict` | A |

**Returns:** *A*

▸ **assocIn**<**A**>(`path`: [Path](_associn_.md#path), `value`: any): *function*

Defined in assocIn.ts:16

**Type parameters:**

▪ **A**: *[Dictionary](_types_.md#dictionary)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](_associn_.md#path) |
`value` | any |

**Returns:** *function*

▸ (`dict`: A): *A*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | A |
