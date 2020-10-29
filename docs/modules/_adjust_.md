[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["adjust"](_adjust_.md)

# External module: "adjust"

## Index

### Functions

* [adjust](_adjust_.md#adjust)

## Functions

###  adjust

▸ **adjust**<**A**>(`idx`: number, `fn`: [Endomorphism](_types_.md#endomorphism)‹A›, `coll`: A[]): *A[]*

*Defined in [src/adjust.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/adjust.ts#L5)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |
`fn` | [Endomorphism](_types_.md#endomorphism)‹A› |
`coll` | A[] |

**Returns:** *A[]*

▸ **adjust**<**A**>(`idx`: number, `fn`: [Endomorphism](_types_.md#endomorphism)‹A›): *function*

*Defined in [src/adjust.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/adjust.ts#L6)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |
`fn` | [Endomorphism](_types_.md#endomorphism)‹A› |

**Returns:** *function*

▸ (`coll`: A[]): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | A[] |

▸ **adjust**(`idx`: number): *function*

*Defined in [src/adjust.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/adjust.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |

**Returns:** *function*

▸ <**A**>(`fn`: [Endomorphism](_types_.md#endomorphism)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Endomorphism](_types_.md#endomorphism)‹A› |

▸ (`coll`: A[]): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | A[] |
