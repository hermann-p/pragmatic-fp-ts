[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["tryCatch"](_trycatch_.md)

# External module: "tryCatch"

## Index

### Type aliases

* [Catcher](_trycatch_.md#catcher)

### Functions

* [tryCatch](_trycatch_.md#trycatch)

## Type aliases

###  Catcher

Ƭ **Catcher**: *function | function*

Defined in tryCatch.ts:3

## Functions

###  tryCatch

▸ **tryCatch**<**A**, **B**>(`tryer`: [Mappable](_types_.md#mappable)‹A, B›, `catcher`: [Catcher](_trycatch_.md#catcher)‹A, B›, `value`: A): *B*

Defined in tryCatch.ts:5

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`tryer` | [Mappable](_types_.md#mappable)‹A, B› |
`catcher` | [Catcher](_trycatch_.md#catcher)‹A, B› |
`value` | A |

**Returns:** *B*

▸ **tryCatch**<**A**, **B**>(`tryer`: [Mappable](_types_.md#mappable)‹A, B›, `catcher`: [Catcher](_trycatch_.md#catcher)‹A, B›): *function*

Defined in tryCatch.ts:11

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`tryer` | [Mappable](_types_.md#mappable)‹A, B› |
`catcher` | [Catcher](_trycatch_.md#catcher)‹A, B› |

**Returns:** *function*

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ **tryCatch**<**A**, **B**>(`tryer`: [Mappable](_types_.md#mappable)‹A, B›): *function*

Defined in tryCatch.ts:16

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`tryer` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *function*

▸ (`catcher`: [Catcher](_trycatch_.md#catcher)‹A, B›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`catcher` | [Catcher](_trycatch_.md#catcher)‹A, B› |

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
