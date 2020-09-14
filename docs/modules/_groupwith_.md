[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["groupWith"](_groupwith_.md)

# External module: "groupWith"

## Index

### Functions

* [groupWith](_groupwith_.md#groupwith)
* [performGrouping](_groupwith_.md#const-performgrouping)

## Functions

###  groupWith

▸ **groupWith**<**A**>(`isEqual`: [Equality](_types_.md#equality)‹A›, `coll`: A[]): *A[][]*

*Defined in [src/groupWith.ts:18](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/groupWith.ts#L18)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`isEqual` | [Equality](_types_.md#equality)‹A› |
`coll` | A[] |

**Returns:** *A[][]*

▸ **groupWith**<**A**>(`isEqual`: [Equality](_types_.md#equality)‹A›): *function*

*Defined in [src/groupWith.ts:19](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/groupWith.ts#L19)*

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

*Defined in [src/groupWith.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/groupWith.ts#L3)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`cmp` | [Equality](_types_.md#equality)‹A› |
`elems` | A[] |

**Returns:** *A[][]*
