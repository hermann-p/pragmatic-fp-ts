[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["getOr"](_getor_.md)

# External module: "getOr"

## Index

### Type aliases

* [Input](_getor_.md#input)

### Functions

* [getOr](_getor_.md#getor)

## Type aliases

###  Input

Ƭ **Input**: *any[] | [Dictionary](_types_.md#dictionary)*

*Defined in [src/getOr.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/a1a02fb/src/getOr.ts#L3)*

## Functions

###  getOr

▸ **getOr**<**A**>(`alt`: A, `path`: [SelectorPath](_types_.md#selectorpath), `input`: [Input](_getor_.md#input)): *A*

*Defined in [src/getOr.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/a1a02fb/src/getOr.ts#L5)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`alt` | A |
`path` | [SelectorPath](_types_.md#selectorpath) |
`input` | [Input](_getor_.md#input) |

**Returns:** *A*

▸ **getOr**<**A**>(`alt`: A, `path`: [SelectorPath](_types_.md#selectorpath)): *function*

*Defined in [src/getOr.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/a1a02fb/src/getOr.ts#L6)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`alt` | A |
`path` | [SelectorPath](_types_.md#selectorpath) |

**Returns:** *function*

▸ (`input`: [Input](_getor_.md#input)): *A*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Input](_getor_.md#input) |

▸ **getOr**<**A**>(`alt`: A): *function*

*Defined in [src/getOr.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/a1a02fb/src/getOr.ts#L7)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`alt` | A |

**Returns:** *function*

▸ (`path`: [SelectorPath](_types_.md#selectorpath)): *function*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [SelectorPath](_types_.md#selectorpath) |

▸ (`input`: [Input](_getor_.md#input)): *A*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Input](_getor_.md#input) |
