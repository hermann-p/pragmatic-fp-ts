[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["prop"](_prop_.md)

# External module: "prop"

## Index

### Type aliases

* [Input](_prop_.md#input)

### Functions

* [prop](_prop_.md#prop)

## Type aliases

###  Input

Ƭ **Input**: *[Dictionary](_types_.md#dictionary) | any[]*

*Defined in [src/prop.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/4c86847/src/prop.ts#L3)*

## Functions

###  prop

▸ **prop**<**A**>(`path`: [SelectorPath](_types_.md#selectorpath), `input`: [Input](_prop_.md#input)): *A*

*Defined in [src/prop.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/4c86847/src/prop.ts#L4)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`path` | [SelectorPath](_types_.md#selectorpath) |
`input` | [Input](_prop_.md#input) |

**Returns:** *A*

▸ **prop**<**A**>(`path`: [SelectorPath](_types_.md#selectorpath)): *function*

*Defined in [src/prop.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/4c86847/src/prop.ts#L5)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`path` | [SelectorPath](_types_.md#selectorpath) |

**Returns:** *function*

▸ (`input`: [Input](_prop_.md#input)): *A*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Input](_prop_.md#input) |
