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

Defined in prop.ts:3

## Functions

###  prop

▸ **prop**<**A**>(`lens`: [LensPath](_types_.md#lenspath), `input`: [Input](_prop_.md#input)): *A*

Defined in prop.ts:4

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`lens` | [LensPath](_types_.md#lenspath) |
`input` | [Input](_prop_.md#input) |

**Returns:** *A*

▸ **prop**<**A**>(`lens`: [LensPath](_types_.md#lenspath)): *function*

Defined in prop.ts:5

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`lens` | [LensPath](_types_.md#lenspath) |

**Returns:** *function*

▸ (`input`: [Input](_prop_.md#input)): *A*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Input](_prop_.md#input) |
