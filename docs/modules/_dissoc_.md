[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["dissoc"](_dissoc_.md)

# External module: "dissoc"

## Index

### Functions

* [dissoc](_dissoc_.md#dissoc)

## Functions

###  dissoc

▸ **dissoc**<**A**, **K**>(`propName`: K, `dict`: A): *Omit‹A, K›*

*Defined in [src/dissoc.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/dissoc.ts#L6)*

**Type parameters:**

▪ **A**: *__type*

▪ **K**: *keyof A*

**Parameters:**

Name | Type |
------ | ------ |
`propName` | K |
`dict` | A |

**Returns:** *Omit‹A, K›*

▸ **dissoc**<**K**>(`propName`: K): *function*

*Defined in [src/dissoc.ts:10](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/dissoc.ts#L10)*

**Type parameters:**

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`propName` | K |

**Returns:** *function*

▸ <**A**>(`dict`: A): *Omit‹A, K›*

**Type parameters:**

▪ **A**: *__type*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | A |
