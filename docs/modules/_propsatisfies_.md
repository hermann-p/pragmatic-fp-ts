[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["propSatisfies"](_propsatisfies_.md)

# External module: "propSatisfies"

## Index

### Type aliases

* [Input](_propsatisfies_.md#input)
* [Path](_propsatisfies_.md#path)

### Functions

* [propSatisfies](_propsatisfies_.md#propsatisfies)

## Type aliases

###  Input

Ƭ **Input**: *any[] | [Dictionary](_types_.md#dictionary)*

*Defined in [src/propSatisfies.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/propSatisfies.ts#L4)*

___

###  Path

Ƭ **Path**: *string | number | string | number[]*

*Defined in [src/propSatisfies.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/propSatisfies.ts#L3)*

## Functions

###  propSatisfies

▸ **propSatisfies**(`path`: [Path](_propsatisfies_.md#path), `pred`: [Predicate](_types_.md#predicate)‹any›, `input`: [Input](_propsatisfies_.md#input)): *boolean*

*Defined in [src/propSatisfies.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/propSatisfies.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](_propsatisfies_.md#path) |
`pred` | [Predicate](_types_.md#predicate)‹any› |
`input` | [Input](_propsatisfies_.md#input) |

**Returns:** *boolean*

▸ **propSatisfies**(`path`: [Path](_propsatisfies_.md#path), `pred`: [Predicate](_types_.md#predicate)‹any›): *function*

*Defined in [src/propSatisfies.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/propSatisfies.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](_propsatisfies_.md#path) |
`pred` | [Predicate](_types_.md#predicate)‹any› |

**Returns:** *function*

▸ (`input`: [Input](_propsatisfies_.md#input)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Input](_propsatisfies_.md#input) |

▸ **propSatisfies**(`path`: [Path](_propsatisfies_.md#path)): *function*

*Defined in [src/propSatisfies.ts:15](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/propSatisfies.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](_propsatisfies_.md#path) |

**Returns:** *function*

▸ (`pred`: [Predicate](_types_.md#predicate)‹any›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹any› |

▸ (`input`: [Input](_propsatisfies_.md#input)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Input](_propsatisfies_.md#input) |
