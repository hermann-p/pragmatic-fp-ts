[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["groupWith"](_groupwith_.md)

# External module: "groupWith"

## Index

### Functions

* [groupWith](_groupwith_.md#groupwith)
* [performGrouping](_groupwith_.md#const-performgrouping)

## Functions

###  groupWith

▸ **groupWith**<**A**>(`isEqual`: [Equality](_types_.md#equality)‹A›, `coll`: A[]): *A[][]*

Defined in groupWith.ts:18

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`isEqual` | [Equality](_types_.md#equality)‹A› |
`coll` | A[] |

**Returns:** *A[][]*

▸ **groupWith**<**A**>(`isEqual`: [Equality](_types_.md#equality)‹A›): *function*

Defined in groupWith.ts:19

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`isEqual` | [Equality](_types_.md#equality)‹A› |

**Returns:** *function*

▸ (`coll`: A[]): *A[][]*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | A[] |

___

### `Const` performGrouping

▸ **performGrouping**<**A**>(`cmp`: [Equality](_types_.md#equality)‹A›, `elems`: A[]): *A[][]*

Defined in groupWith.ts:3

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`cmp` | [Equality](_types_.md#equality)‹A› |
`elems` | A[] |

**Returns:** *A[][]*
