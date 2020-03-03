[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["object"](_object_.md)

# External module: "object"

## Index

### Type aliases

* [KeyType](_object_.md#keytype)
* [PathType](_object_.md#pathtype)

### Variables

* [filterKeys](_object_.md#const-filterkeys)

### Functions

* [assoc](_object_.md#assoc)
* [assocIn](_object_.md#const-associn)
* [dissoc](_object_.md#const-dissoc)
* [fromPairs](_object_.md#const-frompairs)
* [get](_object_.md#const-get)
* [getIn](_object_.md#const-getin)
* [getRaw](_object_.md#const-getraw)
* [keys](_object_.md#const-keys)
* [mapFilterValues](_object_.md#const-mapfiltervalues)
* [mapKeys](_object_.md#const-mapkeys)
* [mapValues](_object_.md#const-mapvalues)
* [pick](_object_.md#const-pick)
* [pickBy](_object_.md#const-pickby)
* [pickValuesBy](_object_.md#const-pickvaluesby)
* [reduceKV](_object_.md#const-reducekv)
* [toPairs](_object_.md#const-topairs)
* [update](_object_.md#const-update)
* [updateIn](_object_.md#const-updatein)
* [values](_object_.md#const-values)

## Type aliases

###  KeyType

Ƭ **KeyType**: *string | number*

*Defined in [object.ts:9](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L9)*

___

###  PathType

Ƭ **PathType**: *[KeyType](_object_.md#keytype)[] | [Maybe](_maybe_.md#maybe)‹[KeyType](_object_.md#keytype)[]›*

*Defined in [object.ts:10](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L10)*

## Variables

### `Const` filterKeys

• **filterKeys**: *pickBy* =  pickBy

*Defined in [object.ts:93](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L93)*

## Functions

###  assoc

▸ **assoc**<**O**, **T**>(`propName`: [KeyType](_object_.md#keytype)): *function*

*Defined in [object.ts:160](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L160)*

**Type parameters:**

▪ **O**: *[Dictionary](../interfaces/_types_.dictionary.md)*

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`propName` | [KeyType](_object_.md#keytype) |

**Returns:** *function*

▸ (`value`: [MaybeType](_types_.md#maybetype)‹T›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [MaybeType](_types_.md#maybetype)‹T› |

▸ (`dict`: [MaybeType](_types_.md#maybetype)‹O›): *[Maybe](_maybe_.md#maybe)‹O›*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | [MaybeType](_types_.md#maybetype)‹O› |

▸ **assoc**<**T**>(`key`: number): *function*

*Defined in [object.ts:163](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L163)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | number |

**Returns:** *function*

▸ (`value`: T): *function*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

▸ (`arr`: [MaybeType](_types_.md#maybetype)‹T[]›): *[Maybe](_maybe_.md#maybe)‹T[]›*

**Parameters:**

Name | Type |
------ | ------ |
`arr` | [MaybeType](_types_.md#maybetype)‹T[]› |

___

### `Const` assocIn

▸ **assocIn**<**T**, **U**>(`path`: [KeyType](_object_.md#keytype)[]): *(Anonymous function)*

*Defined in [object.ts:173](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L173)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`path` | [KeyType](_object_.md#keytype)[] |

**Returns:** *(Anonymous function)*

___

### `Const` dissoc

▸ **dissoc**<**T**>(`key`: [KeyType](_object_.md#keytype)): *(Anonymous function)*

*Defined in [object.ts:181](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L181)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](_object_.md#keytype) |

**Returns:** *(Anonymous function)*

___

### `Const` fromPairs

▸ **fromPairs**<**T**>(`pairs`: [MaybeType](_types_.md#maybetype)‹unknown[][]›): *[Just](../classes/_maybe_.just.md)‹T› | [Nothing](../classes/_maybe_.nothing.md)‹T›*

*Defined in [object.ts:203](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L203)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

**Parameters:**

Name | Type |
------ | ------ |
`pairs` | [MaybeType](_types_.md#maybetype)‹unknown[][]› |

**Returns:** *[Just](../classes/_maybe_.just.md)‹T› | [Nothing](../classes/_maybe_.nothing.md)‹T›*

___

### `Const` get

▸ **get**<**T**, **U**>(`prop`: [KeyType](_object_.md#keytype)): *(Anonymous function)*

*Defined in [object.ts:31](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L31)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`prop` | [KeyType](_object_.md#keytype) |

**Returns:** *(Anonymous function)*

___

### `Const` getIn

▸ **getIn**(`path`: [PathType](_object_.md#pathtype)): *(Anonymous function)*

*Defined in [object.ts:19](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [PathType](_object_.md#pathtype) |

**Returns:** *(Anonymous function)*

___

### `Const` getRaw

▸ **getRaw**<**T**>(`key`: [KeyType](_object_.md#keytype), `path`: Array‹[KeyType](_object_.md#keytype)›, `obj`: [Maybe](_maybe_.md#maybe)‹[Dictionary](../interfaces/_types_.dictionary.md)›): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [object.ts:13](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L13)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](_object_.md#keytype) |
`path` | Array‹[KeyType](_object_.md#keytype)› |
`obj` | [Maybe](_maybe_.md#maybe)‹[Dictionary](../interfaces/_types_.dictionary.md)› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹T›*

___

### `Const` keys

▸ **keys**<**T**>(`obj`: [MaybeType](_types_.md#maybetype)‹T›): *[Maybe](_maybe_.md#maybe)‹string[]›*

*Defined in [object.ts:35](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L35)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [MaybeType](_types_.md#maybetype)‹T› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹string[]›*

___

### `Const` mapFilterValues

▸ **mapFilterValues**<**T**, **U**, **A**, **B**>(`fn`: [Mappable](_types_.md#mappable)‹A, B›): *(Anonymous function)*

*Defined in [object.ts:143](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L143)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

▪ **U**: *[Dictionary](../interfaces/_types_.dictionary.md)*

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *(Anonymous function)*

___

### `Const` mapKeys

▸ **mapKeys**<**T**, **U**>(`fn`: [Endomorphism](_types_.md#endomorphism)‹string›): *(Anonymous function)*

*Defined in [object.ts:49](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L49)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

▪ **U**: *[Dictionary](../interfaces/_types_.dictionary.md)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Endomorphism](_types_.md#endomorphism)‹string› |

**Returns:** *(Anonymous function)*

___

### `Const` mapValues

▸ **mapValues**<**T**, **U**, **A**, **B**>(`fn`: [Mappable](_types_.md#mappable)‹A, B›): *(Anonymous function)*

*Defined in [object.ts:125](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L125)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

▪ **U**: *[Dictionary](../interfaces/_types_.dictionary.md)*

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *(Anonymous function)*

___

### `Const` pick

▸ **pick**<**T**, **U**>(`keysToPick`: [MaybeType](_types_.md#maybetype)‹[KeyType](_object_.md#keytype)[]›): *(Anonymous function)*

*Defined in [object.ts:96](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L96)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

▪ **U**: *[Dictionary](../interfaces/_types_.dictionary.md)*

**Parameters:**

Name | Type |
------ | ------ |
`keysToPick` | [MaybeType](_types_.md#maybetype)‹[KeyType](_object_.md#keytype)[]› |

**Returns:** *(Anonymous function)*

___

### `Const` pickBy

▸ **pickBy**<**T**, **U**>(`predicate`: [Predicate](_types_.md#predicate)‹string›): *(Anonymous function)*

*Defined in [object.ts:79](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L79)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

▪ **U**: *[Dictionary](../interfaces/_types_.dictionary.md)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_types_.md#predicate)‹string› |

**Returns:** *(Anonymous function)*

___

### `Const` pickValuesBy

▸ **pickValuesBy**<**T**, **U**>(`predicate`: [Predicate](_types_.md#predicate)‹any›): *(Anonymous function)*

*Defined in [object.ts:110](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L110)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

▪ **U**: *[Dictionary](../interfaces/_types_.dictionary.md)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_types_.md#predicate)‹any› |

**Returns:** *(Anonymous function)*

___

### `Const` reduceKV

▸ **reduceKV**<**T**, **U**>(`reducer`: function): *(Anonymous function)*

*Defined in [object.ts:66](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L66)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

▪ **U**

**Parameters:**

▪ **reducer**: *function*

▸ (`accum`: U, `key`: string, `value`: any): *U*

**Parameters:**

Name | Type |
------ | ------ |
`accum` | U |
`key` | string |
`value` | any |

**Returns:** *(Anonymous function)*

___

### `Const` toPairs

▸ **toPairs**<**T**>(`dict`: T): *[Just](../classes/_maybe_.just.md)‹any[][]› | [Nothing](../classes/_maybe_.nothing.md)‹any[][]›*

*Defined in [object.ts:210](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L210)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | T |

**Returns:** *[Just](../classes/_maybe_.just.md)‹any[][]› | [Nothing](../classes/_maybe_.nothing.md)‹any[][]›*

___

### `Const` update

▸ **update**<**T**, **A**, **B**>(`propName`: [KeyType](_object_.md#keytype)): *(Anonymous function)*

*Defined in [object.ts:187](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L187)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`propName` | [KeyType](_object_.md#keytype) |

**Returns:** *(Anonymous function)*

___

### `Const` updateIn

▸ **updateIn**<**T**, **A**, **B**>(`path`: [KeyType](_object_.md#keytype)[]): *(Anonymous function)*

*Defined in [object.ts:195](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L195)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`path` | [KeyType](_object_.md#keytype)[] |

**Returns:** *(Anonymous function)*

___

### `Const` values

▸ **values**<**T**>(`obj`: [MaybeType](_types_.md#maybetype)‹T›): *[Maybe](_maybe_.md#maybe)‹unknown[]›*

*Defined in [object.ts:42](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/object.ts#L42)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [MaybeType](_types_.md#maybetype)‹T› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹unknown[]›*
