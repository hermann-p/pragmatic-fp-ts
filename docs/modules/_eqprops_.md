[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["eqProps"](_eqprops_.md)

# External module: "eqProps"

## Index

### Functions

* [eqProps](_eqprops_.md#eqprops)

## Functions

###  eqProps

▸ **eqProps**<**V**, **K**>(`propName`: K, `a`: V, `b`: V): *boolean*

*Defined in [src/eqProps.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/ce213e6/src/eqProps.ts#L5)*

**Type parameters:**

▪ **V**: *__type*

▪ **K**: *keyof V*

**Parameters:**

Name | Type |
------ | ------ |
`propName` | K |
`a` | V |
`b` | V |

**Returns:** *boolean*

▸ **eqProps**<**T**, **K**>(`propName`: K, `a`: T): *function*

*Defined in [src/eqProps.ts:10](https://github.com/hermann-p/pragmatic-fp-ts/blob/ce213e6/src/eqProps.ts#L10)*

**Type parameters:**

▪ **T**: *__type*

▪ **K**: *keyof T*

**Parameters:**

Name | Type |
------ | ------ |
`propName` | K |
`a` | T |

**Returns:** *function*

▸ (`b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`b` | T |

▸ **eqProps**<**K**>(`propName`: K): *function*

*Defined in [src/eqProps.ts:14](https://github.com/hermann-p/pragmatic-fp-ts/blob/ce213e6/src/eqProps.ts#L14)*

**Type parameters:**

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`propName` | K |

**Returns:** *function*

▸ <**T**>(`a`: T): *function*

**Type parameters:**

▪ **T**: *__type*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |

▸ (`b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`b` | T |
