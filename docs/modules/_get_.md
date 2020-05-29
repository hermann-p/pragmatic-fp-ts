[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["get"](_get_.md)

# External module: "get"

## Index

### Functions

* [get](_get_.md#get)

## Functions

###  get

▸ **get**<**A**>(`idx`: number, `coll`: A[]): *A*

*Defined in [src/get.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/d50fca4/src/get.ts#L3)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |
`coll` | A[] |

**Returns:** *A*

▸ **get**<**A**>(`idx`: number): *function*

*Defined in [src/get.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/d50fca4/src/get.ts#L4)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |

**Returns:** *function*

▸ (`coll`: A[]): *A*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | A[] |

▸ **get**<**V**, **K**>(`propName`: K, `dict`: V): *V[K]*

*Defined in [src/get.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/d50fca4/src/get.ts#L5)*

**Type parameters:**

▪ **V**: *__type*

▪ **K**: *keyof V*

**Parameters:**

Name | Type |
------ | ------ |
`propName` | K |
`dict` | V |

**Returns:** *V[K]*

▸ **get**<**K**>(`propName`: K): *function*

*Defined in [src/get.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/d50fca4/src/get.ts#L6)*

**Type parameters:**

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`propName` | K |

**Returns:** *function*

▸ <**A**, **V**>(`dict`: V): *V[K]*

**Type parameters:**

▪ **A**: *any*

▪ **V**: *Record‹K, A›*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | V |
