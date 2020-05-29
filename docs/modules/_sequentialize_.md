[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["sequentialize"](_sequentialize_.md)

# External module: "sequentialize"

## Index

### Functions

* [sequentialize](_sequentialize_.md#sequentialize)

## Functions

###  sequentialize

▸ **sequentialize**<**A**, **B**>(`fn`: function, `coll`: A[]): *Promise‹B[]›*

*Defined in [src/sequentialize.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/d50fca4/src/sequentialize.ts#L3)*

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

▸ **sequentialize**<**A**, **B**>(`fn`: function): *function*

*Defined in [src/sequentialize.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/d50fca4/src/sequentialize.ts#L8)*

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
