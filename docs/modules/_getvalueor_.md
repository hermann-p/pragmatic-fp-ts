[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["getValueOr"](_getvalueor_.md)

# External module: "getValueOr"

## Index

### Functions

* [getValueOr](_getvalueor_.md#getvalueor)

## Functions

###  getValueOr

▸ **getValueOr**<**T**>(`alt`: T, `candidate`: [MonadType](_types_.md#monadtype)‹T› | undefined): *T*

*Defined in [getValueOr.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/getValueOr.ts#L3)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`alt` | T |
`candidate` | [MonadType](_types_.md#monadtype)‹T› &#124; undefined |

**Returns:** *T*

▸ **getValueOr**<**T**>(`alt`: T): *function*

*Defined in [getValueOr.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/getValueOr.ts#L4)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`alt` | T |

**Returns:** *function*

▸ (`candidate`: [MonadType](_types_.md#monadtype)‹T› | undefined): *T*

**Parameters:**

Name | Type |
------ | ------ |
`candidate` | [MonadType](_types_.md#monadtype)‹T› &#124; undefined |
