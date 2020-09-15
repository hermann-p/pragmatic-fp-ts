[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["clamp"](_clamp_.md)

# External module: "clamp"

## Index

### Type aliases

* [Sortable](_clamp_.md#sortable)

### Functions

* [clamp](_clamp_.md#clamp)

## Type aliases

###  Sortable

Ƭ **Sortable**: *string | number | Date*

*Defined in [src/clamp.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/clamp.ts#L5)*

## Functions

###  clamp

▸ **clamp**<**A**>(`min`: A, `max`: A, `value`: A): *A*

*Defined in [src/clamp.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/clamp.ts#L6)*

**Type parameters:**

▪ **A**: *[Sortable](_clamp_.md#sortable)*

**Parameters:**

Name | Type |
------ | ------ |
`min` | A |
`max` | A |
`value` | A |

**Returns:** *A*

▸ **clamp**<**A**>(`min`: A, `max`: A): *function*

*Defined in [src/clamp.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/clamp.ts#L7)*

**Type parameters:**

▪ **A**: *[Sortable](_clamp_.md#sortable)*

**Parameters:**

Name | Type |
------ | ------ |
`min` | A |
`max` | A |

**Returns:** *function*

▸ <**B**>(`value`: B): *B*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ **clamp**<**A**>(`min`: A): *function*

*Defined in [src/clamp.ts:13](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/clamp.ts#L13)*

**Type parameters:**

▪ **A**: *[Sortable](_clamp_.md#sortable)*

**Parameters:**

Name | Type |
------ | ------ |
`min` | A |

**Returns:** *function*

▸ <**B**>(`max`: B): *function*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`max` | B |

▸ <**C**>(`value`: C): *C*

**Type parameters:**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`value` | C |
