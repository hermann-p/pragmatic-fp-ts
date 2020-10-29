[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["reduce"](_reduce_.md)

# External module: "reduce"

## Index

### Functions

* [reduce](_reduce_.md#reduce)

## Functions

###  reduce

▸ **reduce**<**A**, **B**>(`fold`: [Foldable](_types_.md#foldable)‹A, B›, `startValue`: B, `coll`: A[]): *B*

*Defined in [src/reduce.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/reduce.ts#L3)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fold` | [Foldable](_types_.md#foldable)‹A, B› |
`startValue` | B |
`coll` | A[] |

**Returns:** *B*

▸ **reduce**<**A**, **B**>(`fold`: [Foldable](_types_.md#foldable)‹A, B›, `startValue`: B, `dict`: [Dictionary](_types_.md#dictionary)‹A›): *B*

*Defined in [src/reduce.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/reduce.ts#L4)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fold` | [Foldable](_types_.md#foldable)‹A, B› |
`startValue` | B |
`dict` | [Dictionary](_types_.md#dictionary)‹A› |

**Returns:** *B*

▸ **reduce**<**A**, **B**>(`fold`: [Foldable](_types_.md#foldable)‹A, B›, `StartValue`: B): *function*

*Defined in [src/reduce.ts:10](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/reduce.ts#L10)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fold` | [Foldable](_types_.md#foldable)‹A, B› |
`StartValue` | B |

**Returns:** *function*

▸ (`coll`: A[]): *B*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | A[] |

▸ **reduce**<**A**, **B**>(`fold`: [Foldable](_types_.md#foldable)‹A, B›, `StartValue`: B): *function*

*Defined in [src/reduce.ts:14](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/reduce.ts#L14)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fold` | [Foldable](_types_.md#foldable)‹A, B› |
`StartValue` | B |

**Returns:** *function*

▸ (`dict`: [Dictionary](_types_.md#dictionary)‹A›): *B*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | [Dictionary](_types_.md#dictionary)‹A› |

▸ **reduce**<**A**, **B**>(`fold`: [Foldable](_types_.md#foldable)‹A, B›): *function*

*Defined in [src/reduce.ts:19](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/reduce.ts#L19)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fold` | [Foldable](_types_.md#foldable)‹A, B› |

**Returns:** *function*

▸ (`StartValue`: B): *function*

**Parameters:**

Name | Type |
------ | ------ |
`StartValue` | B |

▸ (`coll`: A[]): *B*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | A[] |

▸ **reduce**<**A**, **B**>(`fold`: [Foldable](_types_.md#foldable)‹A, B›): *function*

*Defined in [src/reduce.ts:22](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/reduce.ts#L22)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fold` | [Foldable](_types_.md#foldable)‹A, B› |

**Returns:** *function*

▸ (`StartValue`: B): *function*

**Parameters:**

Name | Type |
------ | ------ |
`StartValue` | B |

▸ (`dict`: [Dictionary](_types_.md#dictionary)‹A›): *B*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | [Dictionary](_types_.md#dictionary)‹A› |
