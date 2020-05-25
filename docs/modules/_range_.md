[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["range"](_range_.md)

# External module: "range"

## Index

### Type aliases

* [MNum](_range_.md#mnum)

### Functions

* [getValueOr](_range_.md#const-getvalueor)
* [range](_range_.md#range)

## Type aliases

###  MNum

Ƭ **MNum**: *number*

Defined in range.ts:3

## Functions

### `Const` getValueOr

▸ **getValueOr**(`alt`: number, `v`: [MNum](_range_.md#mnum)): *number*

Defined in range.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`alt` | number |
`v` | [MNum](_range_.md#mnum) |

**Returns:** *number*

___

###  range

▸ **range**(`start`: [MNum](_range_.md#mnum), `end`: [MNum](_range_.md#mnum)): *number[]*

Defined in range.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`start` | [MNum](_range_.md#mnum) |
`end` | [MNum](_range_.md#mnum) |

**Returns:** *number[]*

▸ **range**(`start`: [MNum](_range_.md#mnum)): *function*

Defined in range.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`start` | [MNum](_range_.md#mnum) |

**Returns:** *function*

▸ (`end`: [MNum](_range_.md#mnum)): *number[]*

**Parameters:**

Name | Type |
------ | ------ |
`end` | [MNum](_range_.md#mnum) |
