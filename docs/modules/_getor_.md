[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["getOr"](_getor_.md)

# External module: "getOr"

## Index

### Type aliases

* [Input](_getor_.md#input)
* [Lens](_getor_.md#lens)

### Functions

* [getOr](_getor_.md#getor)

## Type aliases

###  Input

Ƭ **Input**: *any[] | [Dictionary](_types_.md#dictionary)*

*Defined in [getOr.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/getOr.ts#L4)*

___

###  Lens

Ƭ **Lens**: *number | string | string | number[]*

*Defined in [getOr.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/getOr.ts#L3)*

## Functions

###  getOr

▸ **getOr**<**A**>(`alt`: A, `lens`: [Lens](_getor_.md#lens), `input`: [Input](_getor_.md#input)): *A*

*Defined in [getOr.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/getOr.ts#L6)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`alt` | A |
`lens` | [Lens](_getor_.md#lens) |
`input` | [Input](_getor_.md#input) |

**Returns:** *A*

▸ **getOr**<**A**>(`alt`: A, `lens`: [Lens](_getor_.md#lens)): *function*

*Defined in [getOr.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/getOr.ts#L7)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`alt` | A |
`lens` | [Lens](_getor_.md#lens) |

**Returns:** *function*

▸ (`input`: [Input](_getor_.md#input)): *A*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Input](_getor_.md#input) |

▸ **getOr**<**A**>(`alt`: A): *function*

*Defined in [getOr.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/getOr.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`alt` | A |

**Returns:** *function*

▸ (`lens`: [Lens](_getor_.md#lens)): *function*

**Parameters:**

Name | Type |
------ | ------ |
`lens` | [Lens](_getor_.md#lens) |

▸ (`input`: [Input](_getor_.md#input)): *A*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Input](_getor_.md#input) |
