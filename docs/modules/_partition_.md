[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["partition"](_partition_.md)

# External module: "partition"

## Index

### Functions

* [partition](_partition_.md#partition)

## Functions

###  partition

▸ **partition**<**A**>(`by`: [Predicate](_types_.md#predicate)‹A›, `coll`: A[]): *object*

*Defined in [src/partition.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/partition.ts#L3)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`by` | [Predicate](_types_.md#predicate)‹A› |
`coll` | A[] |

**Returns:** *object*

* **f**: *A[]*

* **t**: *A[]*

▸ **partition**<**A**>(`by`: [Predicate](_types_.md#predicate)‹A›): *function*

*Defined in [src/partition.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/partition.ts#L4)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`by` | [Predicate](_types_.md#predicate)‹A› |

**Returns:** *function*

▸ (`coll`: A[]): *object*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | A[] |

* **f**: *A[]*

* **t**: *A[]*
