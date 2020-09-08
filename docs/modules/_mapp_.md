[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["mapP"](_mapp_.md)

# External module: "mapP"

## Index

### Functions

* [mapP](_mapp_.md#mapp)

## Functions

###  mapP

▸ **mapP**<**A**, **B**>(`fn`: function, `coll`: A[]): *Promise‹B[]›*

*Defined in [src/mapP.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/ce213e6/src/mapP.ts#L3)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: A): *Promise‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **coll**: *A[]*

**Returns:** *Promise‹B[]›*

▸ **mapP**<**A**, **B**>(`fn`: function): *function*

*Defined in [src/mapP.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/ce213e6/src/mapP.ts#L8)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: A): *Promise‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *function*

▸ (`coll`: A[]): *Promise‹B[]›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | A[] |
