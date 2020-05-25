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

Defined in clamp.ts:5

## Functions

###  clamp

▸ **clamp**<**A**>(`min`: A, `max`: A, `value`: A): *A*

Defined in clamp.ts:6

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

Defined in clamp.ts:7

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

Defined in clamp.ts:13

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
