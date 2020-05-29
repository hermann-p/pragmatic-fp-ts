[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["zipMap"](_zipmap_.md)

# External module: "zipMap"

## Index

### Functions

* [zipMap](_zipmap_.md#zipmap)

## Functions

###  zipMap

▸ **zipMap**<**A**, **B**, **C**>(`fn`: [Mappable](_types_.md#mappable)‹[A, B], C›, `as`: A[], `bs`: B[]): *C[]*

*Defined in [src/zipMap.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/zipMap.ts#L3)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](_types_.md#mappable)‹[A, B], C› |
`as` | A[] |
`bs` | B[] |

**Returns:** *C[]*

▸ **zipMap**<**A**, **B**, **C**>(`fn`: [Mappable](_types_.md#mappable)‹[A, B], C›, `as`: A[]): *function*

*Defined in [src/zipMap.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/zipMap.ts#L4)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](_types_.md#mappable)‹[A, B], C› |
`as` | A[] |

**Returns:** *function*

▸ (`bs`: B[]): *C[]*

**Parameters:**

Name | Type |
------ | ------ |
`bs` | B[] |

▸ **zipMap**<**A**, **B**, **C**>(`fn`: [Mappable](_types_.md#mappable)‹[A, B], C›): *function*

*Defined in [src/zipMap.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/893c172/src/zipMap.ts#L8)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](_types_.md#mappable)‹[A, B], C› |

**Returns:** *function*

▸ (`as`: A[]): *function*

**Parameters:**

Name | Type |
------ | ------ |
`as` | A[] |

▸ (`bs`: B[]): *C[]*

**Parameters:**

Name | Type |
------ | ------ |
`bs` | B[] |
