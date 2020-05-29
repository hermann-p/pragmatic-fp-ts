[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["when"](_when_.md)

# External module: "when"

## Index

### Functions

* [when](_when_.md#when)

## Functions

###  when

▸ **when**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›, `ifPath`: [Endomorphism](_types_.md#endomorphism)‹A›, `value`: A): *A*

*Defined in [src/when.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/when.ts#L3)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |
`ifPath` | [Endomorphism](_types_.md#endomorphism)‹A› |
`value` | A |

**Returns:** *A*

▸ **when**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›, `ifPath`: [Endomorphism](_types_.md#endomorphism)‹A›): *function*

*Defined in [src/when.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/when.ts#L8)*

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

▸ **when**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›): *function*

*Defined in [src/when.ts:12](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/when.ts#L12)*

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
