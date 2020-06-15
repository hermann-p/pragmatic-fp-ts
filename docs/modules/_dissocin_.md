[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["dissocIn"](_dissocin_.md)

# External module: "dissocIn"

## Index

### Type aliases

* [Lens](_dissocin_.md#lens)

### Functions

* [dissocIn](_dissocin_.md#dissocin)

## Type aliases

###  Lens

Ƭ **Lens**: *string[]*

*Defined in [src/dissocIn.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/dissocIn.ts#L6)*

## Functions

###  dissocIn

▸ **dissocIn**<**A**>(`path`: [Lens](_dissocin_.md#lens), `dict`: A): *A*

*Defined in [src/dissocIn.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/dissocIn.ts#L7)*

**Type parameters:**

▪ **A**: *__type | any[]*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Lens](_dissocin_.md#lens) |
`dict` | A |

**Returns:** *A*

▸ **dissocIn**(`path`: [Lens](_dissocin_.md#lens)): *function*

*Defined in [src/dissocIn.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/dissocIn.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Lens](_dissocin_.md#lens) |

**Returns:** *function*

▸ <**A**>(`dict`: A): *A*

**Type parameters:**

▪ **A**: *__type*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | A |
