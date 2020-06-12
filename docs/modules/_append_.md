[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["append"](_append_.md)

# External module: "append"

## Index

### Functions

* [append](_append_.md#append)

## Functions

###  append

▸ **append**<**A**>(`el`: A, `coll`: A[]): *A[]*

*Defined in [src/append.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/append.ts#L6)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`el` | A |
`coll` | A[] |

**Returns:** *A[]*

▸ **append**(`tail`: string, `head`: string): *string*

*Defined in [src/append.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/append.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`tail` | string |
`head` | string |

**Returns:** *string*

▸ **append**<**A**>(`tail`: A): *function*

*Defined in [src/append.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/append.ts#L8)*

**Type parameters:**

▪ **A**: *string | any*

**Parameters:**

Name | Type |
------ | ------ |
`tail` | A |

**Returns:** *function*

▸ (`head`: A | A[]): *A extends string ? string : A[]*

**Parameters:**

Name | Type |
------ | ------ |
`head` | A &#124; A[] |
