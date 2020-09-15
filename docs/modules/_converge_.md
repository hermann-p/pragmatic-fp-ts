[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["converge"](_converge_.md)

# External module: "converge"

## Index

### Functions

* [converge](_converge_.md#converge)

## Functions

###  converge

▸ **converge**<**A**, **B**, **C**>(`join`: function, `fns`: [Mappable](_types_.md#mappable)‹A, B›[], `value`: A): *C*

*Defined in [src/converge.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/converge.ts#L7)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **join**: *function*

▸ (`vals`: B[]): *C*

**Parameters:**

Name | Type |
------ | ------ |
`vals` | B[] |

▪ **fns**: *[Mappable](_types_.md#mappable)‹A, B›[]*

▪ **value**: *A*

**Returns:** *C*

▸ **converge**<**A**, **B**, **C**>(`join`: function, `fns`: [Mappable](_types_.md#mappable)‹A, B›[]): *function*

*Defined in [src/converge.ts:12](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/converge.ts#L12)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **join**: *function*

▸ (`vals`: B[]): *C*

**Parameters:**

Name | Type |
------ | ------ |
`vals` | B[] |

▪ **fns**: *[Mappable](_types_.md#mappable)‹A, B›[]*

**Returns:** *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ **converge**<**B**, **C**>(`join`: function): *function*

*Defined in [src/converge.ts:16](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/converge.ts#L16)*

**Type parameters:**

▪ **B**

▪ **C**

**Parameters:**

▪ **join**: *function*

▸ (`vals`: B[]): *C*

**Parameters:**

Name | Type |
------ | ------ |
`vals` | B[] |

**Returns:** *function*

▸ <**A**>(`fns`: [Mappable](_types_.md#mappable)‹A, B›[]): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`fns` | [Mappable](_types_.md#mappable)‹A, B›[] |

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
