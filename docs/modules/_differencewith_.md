[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["differenceWith"](_differencewith_.md)

# External module: "differenceWith"

## Index

### Functions

* [differenceWith](_differencewith_.md#differencewith)

## Functions

###  differenceWith

▸ **differenceWith**<**A**, **B**>(`toKey`: [Mappable](_types_.md#mappable)‹A, B›, `setA`: A[], `setB`: A[]): *A[]*

*Defined in [src/differenceWith.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/differenceWith.ts#L3)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`toKey` | [Mappable](_types_.md#mappable)‹A, B› |
`setA` | A[] |
`setB` | A[] |

**Returns:** *A[]*

▸ **differenceWith**<**A**, **B**>(`toKey`: [Mappable](_types_.md#mappable)‹A, B›, `setA`: A[]): *function*

*Defined in [src/differenceWith.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/differenceWith.ts#L8)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`toKey` | [Mappable](_types_.md#mappable)‹A, B› |
`setA` | A[] |

**Returns:** *function*

▸ (`setB`: A[]): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`setB` | A[] |

▸ **differenceWith**<**A**, **B**>(`toKey`: [Mappable](_types_.md#mappable)‹A, B›): *function*

*Defined in [src/differenceWith.ts:12](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/differenceWith.ts#L12)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`toKey` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *function*

▸ (`setA`: A[]): *function*

**Parameters:**

Name | Type |
------ | ------ |
`setA` | A[] |

▸ (`setB`: A[]): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`setB` | A[] |
