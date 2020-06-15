[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["eitherOr"](_eitheror_.md)

# External module: "eitherOr"

## Index

### Functions

* [eitherOr](_eitheror_.md#eitheror)

## Functions

###  eitherOr

▸ **eitherOr**<**A**, **B**>(`f`: [Mappable](_types_.md#mappable)‹A, B›, `g`: [Mappable](_types_.md#mappable)‹A, B›, `value`: A): *B*

*Defined in [src/eitherOr.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/eitherOr.ts#L5)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Mappable](_types_.md#mappable)‹A, B› |
`g` | [Mappable](_types_.md#mappable)‹A, B› |
`value` | A |

**Returns:** *B*

▸ **eitherOr**<**A**, **B**>(`f`: [Mappable](_types_.md#mappable)‹A, B›, `g`: [Mappable](_types_.md#mappable)‹A, B›): *function*

*Defined in [src/eitherOr.ts:10](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/eitherOr.ts#L10)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Mappable](_types_.md#mappable)‹A, B› |
`g` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *function*

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ **eitherOr**<**A**, **B**>(`f`: [Mappable](_types_.md#mappable)‹A, B›): *function*

*Defined in [src/eitherOr.ts:14](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/eitherOr.ts#L14)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *function*

▸ (`g`: [Mappable](_types_.md#mappable)‹A, B›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`g` | [Mappable](_types_.md#mappable)‹A, B› |

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
