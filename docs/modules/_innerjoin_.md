[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["innerJoin"](_innerjoin_.md)

# External module: "innerJoin"

## Index

### Type aliases

* [MixedCmp](_innerjoin_.md#mixedcmp)

### Functions

* [innerJoin](_innerjoin_.md#innerjoin)

## Type aliases

###  MixedCmp

Ƭ **MixedCmp**: *function*

*Defined in [src/innerJoin.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/1e5cfe0/src/innerJoin.ts#L3)*

#### Type declaration:

▸ (`a`: A, `b`: B): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |

## Functions

###  innerJoin

▸ **innerJoin**<**A**, **B**>(`match`: [MixedCmp](_innerjoin_.md#mixedcmp)‹A, B›, `as`: A[], `bs`: B[]): *A & B[]*

*Defined in [src/innerJoin.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/1e5cfe0/src/innerJoin.ts#L4)*

**Type parameters:**

▪ **A**: *[Dictionary](_types_.md#dictionary)*

▪ **B**: *[Dictionary](_types_.md#dictionary)*

**Parameters:**

Name | Type |
------ | ------ |
`match` | [MixedCmp](_innerjoin_.md#mixedcmp)‹A, B› |
`as` | A[] |
`bs` | B[] |

**Returns:** *A & B[]*

▸ **innerJoin**<**A**, **B**>(`match`: [MixedCmp](_innerjoin_.md#mixedcmp)‹A, B›, `as`: A[]): *function*

*Defined in [src/innerJoin.ts:9](https://github.com/hermann-p/pragmatic-fp-ts/blob/1e5cfe0/src/innerJoin.ts#L9)*

**Type parameters:**

▪ **A**: *[Dictionary](_types_.md#dictionary)*

▪ **B**: *[Dictionary](_types_.md#dictionary)*

**Parameters:**

Name | Type |
------ | ------ |
`match` | [MixedCmp](_innerjoin_.md#mixedcmp)‹A, B› |
`as` | A[] |

**Returns:** *function*

▸ (`bs`: B[]): *A & B[]*

**Parameters:**

Name | Type |
------ | ------ |
`bs` | B[] |

▸ **innerJoin**<**A**, **B**>(`match`: [MixedCmp](_innerjoin_.md#mixedcmp)‹A, B›): *function*

*Defined in [src/innerJoin.ts:14](https://github.com/hermann-p/pragmatic-fp-ts/blob/1e5cfe0/src/innerJoin.ts#L14)*

**Type parameters:**

▪ **A**: *[Dictionary](_types_.md#dictionary)*

▪ **B**: *[Dictionary](_types_.md#dictionary)*

**Parameters:**

Name | Type |
------ | ------ |
`match` | [MixedCmp](_innerjoin_.md#mixedcmp)‹A, B› |

**Returns:** *function*

▸ (`as`: A[]): *function*

**Parameters:**

Name | Type |
------ | ------ |
`as` | A[] |

▸ (`bs`: B[]): *A & B[]*

**Parameters:**

Name | Type |
------ | ------ |
`bs` | B[] |
