[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["propEq"](_propeq_.md)

# External module: "propEq"

## Index

### Type aliases

* [Input](_propeq_.md#input)
* [Path](_propeq_.md#path)

### Functions

* [propEq](_propeq_.md#propeq)

## Type aliases

###  Input

Ƭ **Input**: *any[] | [Dictionary](_types_.md#dictionary)*

*Defined in [propEq.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/propEq.ts#L4)*

___

###  Path

Ƭ **Path**: *string | number | string | number[]*

*Defined in [propEq.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/propEq.ts#L3)*

## Functions

###  propEq

▸ **propEq**(`path`: [Path](_propeq_.md#path), `value`: any, `input`: [Input](_propeq_.md#input)): *boolean*

*Defined in [propEq.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/propEq.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](_propeq_.md#path) |
`value` | any |
`input` | [Input](_propeq_.md#input) |

**Returns:** *boolean*

▸ **propEq**(`path`: [Path](_propeq_.md#path), `value`: any): *function*

*Defined in [propEq.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/propEq.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](_propeq_.md#path) |
`value` | any |

**Returns:** *function*

▸ (`input`: [Input](_propeq_.md#input)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Input](_propeq_.md#input) |

▸ **propEq**(`path`: [Path](_propeq_.md#path)): *function*

*Defined in [propEq.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/65c599f/src/propEq.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](_propeq_.md#path) |

**Returns:** *function*

▸ (`value`: any): *function*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

▸ (`input`: [Input](_propeq_.md#input)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Input](_propeq_.md#input) |
