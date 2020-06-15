[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["update"](_update_.md)

# External module: "update"

## Index

### Functions

* [update](_update_.md#update)
* [updateArray](_update_.md#const-updatearray)

## Functions

###  update

▸ **update**<**TInput**, **A**, **B**>(`propName`: string, `fn`: [Endomorphism](_types_.md#endomorphism)‹A›, `dict`: TInput): *TInput*

*Defined in [src/update.ts:9](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/update.ts#L9)*

**Type parameters:**

▪ **TInput**: *[Dictionary](_types_.md#dictionary)*

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`propName` | string |
`fn` | [Endomorphism](_types_.md#endomorphism)‹A› |
`dict` | TInput |

**Returns:** *TInput*

▸ **update**<**A**>(`propName`: string, `fn`: [Endomorphism](_types_.md#endomorphism)‹A›): *function*

*Defined in [src/update.ts:15](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/update.ts#L15)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`propName` | string |
`fn` | [Endomorphism](_types_.md#endomorphism)‹A› |

**Returns:** *function*

▸ <**TInput**>(`dict`: TInput): *TInput*

**Type parameters:**

▪ **TInput**: *[Dictionary](_types_.md#dictionary)*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | TInput |

▸ **update**(`propName`: string): *function*

*Defined in [src/update.ts:20](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/update.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`propName` | string |

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

▪ **TInput**: *[Dictionary](_types_.md#dictionary)*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | TInput |

▸ **update**<**A**>(`index`: number, `fn`: [Endomorphism](_types_.md#endomorphism)‹A›, `coll`: A[]): *A[]*

*Defined in [src/update.ts:26](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/update.ts#L26)*

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

*Defined in [src/update.ts:28](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/update.ts#L28)*

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

*Defined in [src/update.ts:33](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/update.ts#L33)*

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

*Defined in [src/update.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/update.ts#L3)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |
`fn` | [Endomorphism](_types_.md#endomorphism)‹A› |
`arr` | A[] |

**Returns:** *A[]*
