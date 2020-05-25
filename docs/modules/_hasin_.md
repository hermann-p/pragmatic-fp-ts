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

Defined in hasIn.ts:10

## Functions

### `Const` checkIfPathExists

▸ **checkIfPathExists**(`path`: [ObjKey](_hasin_.md#objkey)[], `obj`: any): *boolean*

Defined in hasIn.ts:3

**Parameters:**

Name | Type |
------ | ------ |
`path` | [ObjKey](_hasin_.md#objkey)[] |
`obj` | any |

**Returns:** *boolean*

___

###  hasIn

▸ **hasIn**(`path`: [ObjKey](_hasin_.md#objkey)[], `dict`: [Dictionary](_types_.md#dictionary)): *boolean*

Defined in hasIn.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`path` | [ObjKey](_hasin_.md#objkey)[] |
`dict` | [Dictionary](_types_.md#dictionary) |

**Returns:** *boolean*

▸ **hasIn**(`path`: [ObjKey](_hasin_.md#objkey)[]): *function*

Defined in hasIn.ts:12

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
