[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["unionBy"](_unionby_.md)

# External module: "unionBy"

## Index

### Functions

* [unionBy](_unionby_.md#unionby)

## Functions

###  unionBy

▸ **unionBy**<**A**, **B**>(`cmp`: [Mappable](_types_.md#mappable)‹A, B›, `a`: A[], `b`: A[]): *A[]*

*Defined in [unionBy.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/unionBy.ts#L3)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`cmp` | [Mappable](_types_.md#mappable)‹A, B› |
`a` | A[] |
`b` | A[] |

**Returns:** *A[]*

▸ **unionBy**<**A**, **B**>(`cmp`: [Mappable](_types_.md#mappable)‹A, B›, `a`: A[]): *function*

*Defined in [unionBy.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/unionBy.ts#L4)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`cmp` | [Mappable](_types_.md#mappable)‹A, B› |
`a` | A[] |

**Returns:** *function*

▸ (`b`: A[]): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`b` | A[] |

▸ **unionBy**<**A**, **B**>(`cmp`: [Mappable](_types_.md#mappable)‹A, B›): *function*

*Defined in [unionBy.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/unionBy.ts#L5)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`cmp` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *function*

▸ (`a`: A[]): *function*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A[] |

▸ (`b`: A[]): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`b` | A[] |
