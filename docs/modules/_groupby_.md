[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["groupBy"](_groupby_.md)

# External module: "groupBy"

## Index

### Functions

* [groupBy](_groupby_.md#groupby)

## Functions

###  groupBy

▸ **groupBy**<**A**>(`mkGroup`: [Mappable](_types_.md#mappable)‹A, string›, `coll`: A[]): *[Dictionary](_types_.md#dictionary)‹A[]›*

*Defined in [src/groupBy.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/groupBy.ts#L3)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`mkGroup` | [Mappable](_types_.md#mappable)‹A, string› |
`coll` | A[] |

**Returns:** *[Dictionary](_types_.md#dictionary)‹A[]›*

▸ **groupBy**<**A**>(`mkGroup`: [Mappable](_types_.md#mappable)‹A, string›): *function*

*Defined in [src/groupBy.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/groupBy.ts#L7)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`mkGroup` | [Mappable](_types_.md#mappable)‹A, string› |

**Returns:** *function*

▸ (`coll`: A[]): *[Dictionary](_types_.md#dictionary)‹A[]›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | A[] |
