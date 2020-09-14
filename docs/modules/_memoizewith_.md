[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["memoizeWith"](_memoizewith_.md)

# External module: "memoizeWith"

## Index

### Functions

* [memoizeWith](_memoizewith_.md#memoizewith)

## Functions

###  memoizeWith

▸ **memoizeWith**<**A**, **B**, **C**>(`toKey`: [Mappable](_types_.md#mappable)‹A, C›, `fn`: [Mappable](_types_.md#mappable)‹A, B›): *[Mappable](_types_.md#mappable)‹A, B›*

*Defined in [src/memoizeWith.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/d79a7fd/src/memoizeWith.ts#L3)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`toKey` | [Mappable](_types_.md#mappable)‹A, C› |
`fn` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *[Mappable](_types_.md#mappable)‹A, B›*

▸ **memoizeWith**<**A**, **C**>(`toKey`: [Mappable](_types_.md#mappable)‹A, C›): *function*

*Defined in [src/memoizeWith.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/d79a7fd/src/memoizeWith.ts#L7)*

**Type parameters:**

▪ **A**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`toKey` | [Mappable](_types_.md#mappable)‹A, C› |

**Returns:** *function*

▸ <**B**>(`fn`: [Mappable](_types_.md#mappable)‹A, B›): *[Mappable](_types_.md#mappable)‹A, B›*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](_types_.md#mappable)‹A, B› |
