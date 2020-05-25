[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["assoc"](_assoc_.md)

# External module: "assoc"

## Index

### Functions

* [assoc](_assoc_.md#assoc)

## Functions

###  assoc

▸ **assoc**<**A**>(`idx`: number, `value`: A, `coll`: A[]): *A[]*

Defined in assoc.ts:3

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |
`value` | A |
`coll` | A[] |

**Returns:** *A[]*

▸ **assoc**<**A**>(`idx`: number, `value`: A): *function*

Defined in assoc.ts:4

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |
`value` | A |

**Returns:** *function*

▸ (`coll`: A[]): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | A[] |

▸ **assoc**(`idx`: number): *function*

Defined in assoc.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |

**Returns:** *function*

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`coll`: A[]): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | A[] |

▸ **assoc**<**T**, **K**, **V**>(`propName`: K, `value`: V, `dict`: T): *T & Record‹K, V›*

Defined in assoc.ts:7

**Type parameters:**

▪ **T**: *__type*

▪ **K**: *string*

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`propName` | K |
`value` | V |
`dict` | T |

**Returns:** *T & Record‹K, V›*

▸ **assoc**<**K**, **V**>(`propName`: K, `value`: V): *function*

Defined in assoc.ts:12

**Type parameters:**

▪ **K**: *string*

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`propName` | K |
`value` | V |

**Returns:** *function*

▸ <**T**>(`dict`: T): *T & Record‹K, V›*

**Type parameters:**

▪ **T**: *__type*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | T |

▸ **assoc**<**K**>(`propName`: K): *function*

Defined in assoc.ts:16

**Type parameters:**

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`propName` | K |

**Returns:** *function*

▸ <**V**>(`value`: V): *function*

**Type parameters:**

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |

▸ <**T**>(`dict`: T): *T & Record‹K, V›*

**Type parameters:**

▪ **T**: *__type*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | T |
