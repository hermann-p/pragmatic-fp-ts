[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["unless"](_unless_.md)

# External module: "unless"

## Index

### Functions

* [unless](_unless_.md#unless)

## Functions

###  unless

▸ **unless**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›, `ifPath`: [Endomorphism](_types_.md#endomorphism)‹A›, `value`: A): *A*

*Defined in [src/unless.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/4c86847/src/unless.ts#L3)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |
`ifPath` | [Endomorphism](_types_.md#endomorphism)‹A› |
`value` | A |

**Returns:** *A*

▸ **unless**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›, `ifPath`: [Endomorphism](_types_.md#endomorphism)‹A›): *function*

*Defined in [src/unless.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/4c86847/src/unless.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |
`ifPath` | [Endomorphism](_types_.md#endomorphism)‹A› |

**Returns:** *function*

▸ (`value`: A): *A*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ **unless**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›): *function*

*Defined in [src/unless.ts:12](https://github.com/hermann-p/pragmatic-fp-ts/blob/4c86847/src/unless.ts#L12)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |

**Returns:** *function*

▸ (`ifPath`: [Endomorphism](_types_.md#endomorphism)‹A›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`ifPath` | [Endomorphism](_types_.md#endomorphism)‹A› |

▸ (`value`: A): *A*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
