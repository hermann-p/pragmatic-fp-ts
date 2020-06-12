[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["scan"](_scan_.md)

# External module: "scan"

## Index

### Functions

* [scan](_scan_.md#scan)

## Functions

###  scan

▸ **scan**<**A**, **B**>(`fold`: [Foldable](_types_.md#foldable)‹A, B›, `start`: B, `coll`: A[]): *B[]*

*Defined in [src/scan.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/scan.ts#L3)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fold` | [Foldable](_types_.md#foldable)‹A, B› |
`start` | B |
`coll` | A[] |

**Returns:** *B[]*

▸ **scan**<**A**, **B**>(`fold`: [Foldable](_types_.md#foldable)‹A, B›, `start`: B): *function*

*Defined in [src/scan.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/scan.ts#L4)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fold` | [Foldable](_types_.md#foldable)‹A, B› |
`start` | B |

**Returns:** *function*

▸ (`coll`: A[]): *B[]*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | A[] |

▸ **scan**<**F**>(`fold`: F): *function*

*Defined in [src/scan.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/scan.ts#L5)*

**Type parameters:**

▪ **F**: *[Foldable](_types_.md#foldable)‹any, any›*

**Parameters:**

Name | Type |
------ | ------ |
`fold` | F |

**Returns:** *function*

▸ <**B**>(`start`: B): *function*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`start` | B |

▸ (`coll`: Parameters<F>[0][]): *ReturnType‹F›[]*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | Parameters<F>[0][] |
