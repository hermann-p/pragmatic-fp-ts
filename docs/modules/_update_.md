[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["update"](_update_.md)

# External module: "update"

## Index

### Functions

* [update](_update_.md#update)
* [updateArray](_update_.md#const-updatearray)

## Functions

###  update

▸ **update**<**TInput**, **K**>(`propName`: K, `fn`: [Endomorphism](_types_.md#endomorphism)‹TInput[K]›, `dict`: TInput): *TInput*

*Defined in [src/update.ts:9](https://github.com/hermann-p/pragmatic-fp-ts/blob/ce213e6/src/update.ts#L9)*

**Type parameters:**

▪ **TInput**: *__type*

▪ **K**: *keyof TInput*

**Parameters:**

Name | Type |
------ | ------ |
`propName` | K |
`fn` | [Endomorphism](_types_.md#endomorphism)‹TInput[K]› |
`dict` | TInput |

**Returns:** *TInput*

▸ **update**<**K**, **A**>(`propName`: K, `fn`: [Endomorphism](_types_.md#endomorphism)‹A›): *function*

*Defined in [src/update.ts:15](https://github.com/hermann-p/pragmatic-fp-ts/blob/ce213e6/src/update.ts#L15)*

**Type parameters:**

▪ **K**: *string*

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`propName` | K |
`fn` | [Endomorphism](_types_.md#endomorphism)‹A› |

**Returns:** *function*

▸ <**TInput**>(`dict`: TInput): *TInput*

**Type parameters:**

▪ **TInput**: *Record‹K, A›*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | TInput |

▸ **update**<**K**>(`propName`: K): *function*

*Defined in [src/update.ts:20](https://github.com/hermann-p/pragmatic-fp-ts/blob/ce213e6/src/update.ts#L20)*

**Type parameters:**

▪ **K**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`propName` | K |

**Returns:** *function*

▸ <**A**>(`fn`: [Endomorphism](_types_.md#endomorphism)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Endomorphism](_types_.md#endomorphism)‹A› |

▸ <**TInput**>(`dict`: TInput): *TInput*

**Type parameters:**

▪ **TInput**: *Record‹K, A›*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | TInput |

▸ **update**<**A**>(`index`: number, `fn`: [Endomorphism](_types_.md#endomorphism)‹A›, `coll`: A[]): *A[]*

*Defined in [src/update.ts:24](https://github.com/hermann-p/pragmatic-fp-ts/blob/ce213e6/src/update.ts#L24)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`fn` | [Endomorphism](_types_.md#endomorphism)‹A› |
`coll` | A[] |

**Returns:** *A[]*

▸ **update**<**A**>(`index`: number, `fn`: [Endomorphism](_types_.md#endomorphism)‹A›): *function*

*Defined in [src/update.ts:26](https://github.com/hermann-p/pragmatic-fp-ts/blob/ce213e6/src/update.ts#L26)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`fn` | [Endomorphism](_types_.md#endomorphism)‹A› |

**Returns:** *function*

▸ (`coll`: A[]): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | A[] |

▸ **update**(`propName`: number): *function*

*Defined in [src/update.ts:28](https://github.com/hermann-p/pragmatic-fp-ts/blob/ce213e6/src/update.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`propName` | number |

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

___

### `Const` updateArray

▸ **updateArray**<**A**>(`idx`: number, `fn`: [Endomorphism](_types_.md#endomorphism)‹A›, `arr`: A[]): *A[]*

*Defined in [src/update.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/ce213e6/src/update.ts#L3)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |
`fn` | [Endomorphism](_types_.md#endomorphism)‹A› |
`arr` | A[] |

**Returns:** *A[]*
