[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["splitAt"](_splitat_.md)

# External module: "splitAt"

## Index

### Functions

* [splitAt](_splitat_.md#splitat)

## Functions

###  splitAt

▸ **splitAt**<**A**>(`idx`: number, `coll`: A[]): *[A[], A[]]*

*Defined in [src/splitAt.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/splitAt.ts#L3)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |
`coll` | A[] |

**Returns:** *[A[], A[]]*

▸ **splitAt**(`idx`: number): *function*

*Defined in [src/splitAt.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/splitAt.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |

**Returns:** *function*

▸ <**A**>(`coll`: A[] | A): *A extends string ? [string, string] : [A[], A[]]*

**Type parameters:**

▪ **A**: *any | string*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | A[] &#124; A |

▸ **splitAt**(`idx`: number, `text`: string): *[string, string]*

*Defined in [src/splitAt.ts:10](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/splitAt.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |
`text` | string |

**Returns:** *[string, string]*

▸ **splitAt**(`idx`: number): *function*

*Defined in [src/splitAt.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/splitAt.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |

**Returns:** *function*

▸ (`text`: string): *[string, string]*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |
