[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["splitEvery"](_splitevery_.md)

# External module: "splitEvery"

## Index

### Functions

* [splitEvery](_splitevery_.md#splitevery)

## Functions

###  splitEvery

▸ **splitEvery**<**A**>(`n`: number, `coll`: A[]): *A[][]*

*Defined in [src/splitEvery.ts:1](https://github.com/hermann-p/pragmatic-fp-ts/blob/d79a7fd/src/splitEvery.ts#L1)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`coll` | A[] |

**Returns:** *A[][]*

▸ **splitEvery**<**A**>(`n`: number, `text`: string): *string[]*

*Defined in [src/splitEvery.ts:2](https://github.com/hermann-p/pragmatic-fp-ts/blob/d79a7fd/src/splitEvery.ts#L2)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`text` | string |

**Returns:** *string[]*

▸ **splitEvery**(`n`: number): *function*

*Defined in [src/splitEvery.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/d79a7fd/src/splitEvery.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *function*

▸ <**A**>(`input`: A | A[]): *A extends string ? string[] : A[][]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`input` | A &#124; A[] |
