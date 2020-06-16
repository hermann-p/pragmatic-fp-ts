[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["eqBy"](_eqby_.md)

# External module: "eqBy"

## Index

### Functions

* [eqBy](_eqby_.md#eqby)

## Functions

###  eqBy

▸ **eqBy**<**A**, **B**>(`toComparable`: [Mappable](_types_.md#mappable)‹A, B›, `a`: A, `b`: A): *boolean*

*Defined in [src/eqBy.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/eqBy.ts#L3)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`toComparable` | [Mappable](_types_.md#mappable)‹A, B› |
`a` | A |
`b` | A |

**Returns:** *boolean*

▸ **eqBy**<**A**, **B**>(`toComparable`: [Mappable](_types_.md#mappable)‹A, B›, `a`: A): *function*

*Defined in [src/eqBy.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/eqBy.ts#L4)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`toComparable` | [Mappable](_types_.md#mappable)‹A, B› |
`a` | A |

**Returns:** *function*

▸ (`b`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`b` | A |

▸ **eqBy**<**A**, **B**>(`toComparable`: [Mappable](_types_.md#mappable)‹A, B›): *function*

*Defined in [src/eqBy.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/eqBy.ts#L8)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`toComparable` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *function*

▸ (`a`: A, `b`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | A |

▸ **eqBy**<**A**, **B**>(`toComparable`: [Mappable](_types_.md#mappable)‹A, B›): *function*

*Defined in [src/eqBy.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/eqBy.ts#L11)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`toComparable` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *function*

▸ (`a`: A): *function*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▸ (`b`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`b` | A |
