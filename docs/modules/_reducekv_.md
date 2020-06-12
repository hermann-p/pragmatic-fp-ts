[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["reduceKV"](_reducekv_.md)

# External module: "reduceKV"

## Index

### Type aliases

* [FoldKV](_reducekv_.md#foldkv)

### Functions

* [reduceKV](_reducekv_.md#reducekv)

## Type aliases

###  FoldKV

Ƭ **FoldKV**: *function*

*Defined in [src/reduceKV.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/reduceKV.ts#L3)*

#### Type declaration:

▸ (`accum`: B, `value`: A, `key`: string): *B*

**Parameters:**

Name | Type |
------ | ------ |
`accum` | B |
`value` | A |
`key` | string |

## Functions

###  reduceKV

▸ **reduceKV**<**A**, **B**>(`fold`: [FoldKV](_reducekv_.md#foldkv)‹A, B›, `start`: B, `dict`: [Dictionary](_types_.md#dictionary)‹A›): *B*

*Defined in [src/reduceKV.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/reduceKV.ts#L4)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fold` | [FoldKV](_reducekv_.md#foldkv)‹A, B› |
`start` | B |
`dict` | [Dictionary](_types_.md#dictionary)‹A› |

**Returns:** *B*

▸ **reduceKV**<**A**, **B**>(`fold`: [FoldKV](_reducekv_.md#foldkv)‹A, B›, `start`: B): *function*

*Defined in [src/reduceKV.ts:9](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/reduceKV.ts#L9)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fold` | [FoldKV](_reducekv_.md#foldkv)‹A, B› |
`start` | B |

**Returns:** *function*

▸ (`dict`: [Dictionary](_types_.md#dictionary)‹A›): *B*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | [Dictionary](_types_.md#dictionary)‹A› |

▸ **reduceKV**<**A**, **B**>(`fold`: [FoldKV](_reducekv_.md#foldkv)‹A, B›): *function*

*Defined in [src/reduceKV.ts:13](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/reduceKV.ts#L13)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fold` | [FoldKV](_reducekv_.md#foldkv)‹A, B› |

**Returns:** *function*

▸ (`start`: B): *function*

**Parameters:**

Name | Type |
------ | ------ |
`start` | B |

▸ (`dict`: [Dictionary](_types_.md#dictionary)‹A›): *B*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | [Dictionary](_types_.md#dictionary)‹A› |
