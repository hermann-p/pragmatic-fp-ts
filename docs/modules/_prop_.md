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

*Defined in [prop.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/prop.ts#L3)*

## Functions

###  prop

▸ **prop**<**A**>(`lens`: [LensPath](_types_.md#lenspath), `input`: [Input](_prop_.md#input)): *A*

*Defined in [prop.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/prop.ts#L4)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`lens` | [LensPath](_types_.md#lenspath) |
`input` | [Input](_prop_.md#input) |

**Returns:** *A*

▸ **prop**<**A**>(`lens`: [LensPath](_types_.md#lenspath)): *function*

*Defined in [prop.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/prop.ts#L5)*

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
