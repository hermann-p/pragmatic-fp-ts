[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["sequentialize"](_sequentialize_.md)

# External module: "sequentialize"

## Index

### Functions

* [sequentialize](_sequentialize_.md#sequentialize)

## Functions

###  sequentialize

▸ **sequentialize**<**A**, **B**>(`fn`: function, `coll`: A[]): *Promise‹B[]›*

Defined in sequentialize.ts:3

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

Defined in sequentialize.ts:8

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
