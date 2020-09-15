[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["getIn"](_getin_.md)

# External module: "getIn"

## Index

### Type aliases

* [ObjKey](_getin_.md#objkey)

### Functions

* [getIn](_getin_.md#getin)

## Type aliases

###  ObjKey

Ƭ **ObjKey**: *string | number*

*Defined in [src/getIn.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/getIn.ts#L4)*

## Functions

###  getIn

▸ **getIn**<**A**>(`path`: [ObjKey](_getin_.md#objkey)[], `coll`: [Dictionary](_types_.md#dictionary) | any[]): *A*

*Defined in [src/getIn.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/getIn.ts#L5)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`path` | [ObjKey](_getin_.md#objkey)[] |
`coll` | [Dictionary](_types_.md#dictionary) &#124; any[] |

**Returns:** *A*

▸ **getIn**<**A**>(`path`: [ObjKey](_getin_.md#objkey)[]): *function*

*Defined in [src/getIn.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/getIn.ts#L6)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`path` | [ObjKey](_getin_.md#objkey)[] |

**Returns:** *function*

▸ (`coll`: [Dictionary](_types_.md#dictionary) | any[]): *A*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [Dictionary](_types_.md#dictionary) &#124; any[] |
