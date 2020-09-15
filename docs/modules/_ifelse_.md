[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["ifElse"](_ifelse_.md)

# External module: "ifElse"

## Index

### Functions

* [ifElse](_ifelse_.md#ifelse)

## Functions

###  ifElse

▸ **ifElse**<**A**, **B**>(`condition`: [Predicate](_types_.md#predicate)‹A›, `ifPath`: [Mappable](_types_.md#mappable)‹A, B›, `elsePath`: [Mappable](_types_.md#mappable)‹A, B›, `value`: A): *B*

*Defined in [src/ifElse.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/ifElse.ts#L3)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |
`ifPath` | [Mappable](_types_.md#mappable)‹A, B› |
`elsePath` | [Mappable](_types_.md#mappable)‹A, B› |
`value` | A |

**Returns:** *B*

▸ **ifElse**<**A**, **B**>(`condition`: [Predicate](_types_.md#predicate)‹A›, `ifPath`: [Mappable](_types_.md#mappable)‹A, B›, `elsePath`: [Mappable](_types_.md#mappable)‹A, B›): *function*

*Defined in [src/ifElse.ts:10](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/ifElse.ts#L10)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |
`ifPath` | [Mappable](_types_.md#mappable)‹A, B› |
`elsePath` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *function*

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ **ifElse**<**A**, **B**>(`condition`: [Predicate](_types_.md#predicate)‹A›, `ifPath`: [Mappable](_types_.md#mappable)‹A, B›): *function*

*Defined in [src/ifElse.ts:16](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/ifElse.ts#L16)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |
`ifPath` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *function*

▸ (`elsePath`: [Mappable](_types_.md#mappable)‹A, B›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`elsePath` | [Mappable](_types_.md#mappable)‹A, B› |

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ **ifElse**<**A**, **B**>(`condition`: [Predicate](_types_.md#predicate)‹A›): *function*

*Defined in [src/ifElse.ts:21](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/ifElse.ts#L21)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |

**Returns:** *function*

▸ (`ifPath`: [Mappable](_types_.md#mappable)‹A, B›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`ifPath` | [Mappable](_types_.md#mappable)‹A, B› |

▸ (`elsePath`: [Mappable](_types_.md#mappable)‹A, B›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`elsePath` | [Mappable](_types_.md#mappable)‹A, B› |

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
