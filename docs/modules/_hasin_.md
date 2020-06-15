[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["hasIn"](_hasin_.md)

# External module: "hasIn"

## Index

### Type aliases

* [ObjKey](_hasin_.md#objkey)

### Functions

* [checkIfPathExists](_hasin_.md#const-checkifpathexists)
* [hasIn](_hasin_.md#hasin)

## Type aliases

###  ObjKey

Ƭ **ObjKey**: *string | number*

*Defined in [src/hasIn.ts:10](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/hasIn.ts#L10)*

## Functions

### `Const` checkIfPathExists

▸ **checkIfPathExists**(`path`: [ObjKey](_hasin_.md#objkey)[], `obj`: any): *boolean*

*Defined in [src/hasIn.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/hasIn.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [ObjKey](_hasin_.md#objkey)[] |
`obj` | any |

**Returns:** *boolean*

___

###  hasIn

▸ **hasIn**(`path`: [ObjKey](_hasin_.md#objkey)[], `dict`: [Dictionary](_types_.md#dictionary)): *boolean*

*Defined in [src/hasIn.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/hasIn.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [ObjKey](_hasin_.md#objkey)[] |
`dict` | [Dictionary](_types_.md#dictionary) |

**Returns:** *boolean*

▸ **hasIn**(`path`: [ObjKey](_hasin_.md#objkey)[]): *function*

*Defined in [src/hasIn.ts:12](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/hasIn.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [ObjKey](_hasin_.md#objkey)[] |

**Returns:** *function*

▸ (`dict`: [Dictionary](_types_.md#dictionary)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | [Dictionary](_types_.md#dictionary) |
