[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["where"](_where_.md)

# External module: "where"

## Index

### Functions

* [where](_where_.md#where)

## Functions

###  where

▸ **where**<**A**>(`pattern`: [Dictionary](_types_.md#dictionary)‹[Predicate](_types_.md#predicate)‹A››, `dict`: [Dictionary](_types_.md#dictionary)‹A›): *boolean*

*Defined in [where.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/where.ts#L3)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | [Dictionary](_types_.md#dictionary)‹[Predicate](_types_.md#predicate)‹A›› |
`dict` | [Dictionary](_types_.md#dictionary)‹A› |

**Returns:** *boolean*

▸ **where**<**A**>(`pattern`: [Dictionary](_types_.md#dictionary)‹[Predicate](_types_.md#predicate)‹A››): *function*

*Defined in [where.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/where.ts#L7)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | [Dictionary](_types_.md#dictionary)‹[Predicate](_types_.md#predicate)‹A›› |

**Returns:** *function*

▸ (`dict`: [Dictionary](_types_.md#dictionary)‹A›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | [Dictionary](_types_.md#dictionary)‹A› |
