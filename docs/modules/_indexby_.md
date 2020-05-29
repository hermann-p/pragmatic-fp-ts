[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["indexBy"](_indexby_.md)

# External module: "indexBy"

## Index

### Functions

* [indexBy](_indexby_.md#indexby)

## Functions

###  indexBy

▸ **indexBy**<**A**>(`mkIndex`: [Mappable](_types_.md#mappable)‹A, string›, `coll`: A[]): *[Dictionary](_types_.md#dictionary)‹A›*

*Defined in [src/indexBy.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/indexBy.ts#L3)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`mkIndex` | [Mappable](_types_.md#mappable)‹A, string› |
`coll` | A[] |

**Returns:** *[Dictionary](_types_.md#dictionary)‹A›*

▸ **indexBy**<**A**>(`mkIndex`: [Mappable](_types_.md#mappable)‹A, string›): *function*

*Defined in [src/indexBy.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/indexBy.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`mkIndex` | [Mappable](_types_.md#mappable)‹A, string› |

**Returns:** *function*

▸ (`coll`: A[]): *[Dictionary](_types_.md#dictionary)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | A[] |
