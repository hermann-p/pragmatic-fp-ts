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

*Defined in [object.ts:9](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L9)*

___

###  PathType

Ƭ **PathType**: *[KeyType](_object_.md#keytype)[] | [Maybe](_maybe_.md#maybe)‹[KeyType](_object_.md#keytype)[]›*

*Defined in [object.ts:10](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L10)*

## Variables

### `Const` filterKeys

• **filterKeys**: *pickBy* =  pickBy

*Defined in [object.ts:91](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L91)*

## Functions

###  assoc

▸ **assoc**<**T**, **O**>(`propName`: [KeyType](_object_.md#keytype)): *function*

*Defined in [object.ts:149](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L149)*

**Type parameters:**

▪ **T**

▪ **O**: *[Dictionary](../interfaces/_types_.dictionary.md)*

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

*Defined in [object.ts:152](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L152)*

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

▸ **assocIn**<**T**>(`path`: [KeyType](_object_.md#keytype)[]): *(Anonymous function)*

*Defined in [object.ts:162](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L162)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | [KeyType](_object_.md#keytype)[] |

**Returns:** *(Anonymous function)*

___

### `Const` dissoc

▸ **dissoc**(`key`: [KeyType](_object_.md#keytype)): *(Anonymous function)*

*Defined in [object.ts:170](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](_object_.md#keytype) |

**Returns:** *(Anonymous function)*

___

### `Const` fromPairs

▸ **fromPairs**(`pairs`: [MaybeType](_types_.md#maybetype)‹unknown[][]›): *[Just](../classes/_maybe_.just.md)‹[Dictionary](../interfaces/_types_.dictionary.md)› | [Nothing](../classes/_maybe_.nothing.md)‹[Dictionary](../interfaces/_types_.dictionary.md)›*

*Defined in [object.ts:192](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L192)*

**Parameters:**

Name | Type |
------ | ------ |
`pairs` | [MaybeType](_types_.md#maybetype)‹unknown[][]› |

**Returns:** *[Just](../classes/_maybe_.just.md)‹[Dictionary](../interfaces/_types_.dictionary.md)› | [Nothing](../classes/_maybe_.nothing.md)‹[Dictionary](../interfaces/_types_.dictionary.md)›*

___

### `Const` get

▸ **get**<**T**>(`prop`: [KeyType](_object_.md#keytype)): *(Anonymous function)*

*Defined in [object.ts:31](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L31)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`prop` | [KeyType](_object_.md#keytype) |

**Returns:** *(Anonymous function)*

___

### `Const` getIn

▸ **getIn**(`path`: [PathType](_object_.md#pathtype)): *(Anonymous function)*

*Defined in [object.ts:19](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [PathType](_object_.md#pathtype) |

**Returns:** *(Anonymous function)*

___

### `Const` getRaw

▸ **getRaw**<**T**>(`key`: [KeyType](_object_.md#keytype), `path`: Array‹[KeyType](_object_.md#keytype)›, `obj`: [Maybe](_maybe_.md#maybe)‹[Dictionary](../interfaces/_types_.dictionary.md)›): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [object.ts:13](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L13)*

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

▸ **keys**(`obj`: [MaybeType](_types_.md#maybetype)‹[Dictionary](../interfaces/_types_.dictionary.md)›): *[Maybe](_maybe_.md#maybe)‹string[]›*

*Defined in [object.ts:35](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [MaybeType](_types_.md#maybetype)‹[Dictionary](../interfaces/_types_.dictionary.md)› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹string[]›*

___

### `Const` mapFilterValues

▸ **mapFilterValues**<**A**, **B**>(`fn`: [Mappable](_types_.md#mappable)‹A, B›): *(Anonymous function)*

*Defined in [object.ts:132](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L132)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *(Anonymous function)*

___

### `Const` mapKeys

▸ **mapKeys**(`fn`: [Endomorphism](_types_.md#endomorphism)‹string›): *(Anonymous function)*

*Defined in [object.ts:49](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Endomorphism](_types_.md#endomorphism)‹string› |

**Returns:** *(Anonymous function)*

___

### `Const` mapValues

▸ **mapValues**<**A**, **B**>(`fn`: [Mappable](_types_.md#mappable)‹A, B›): *(Anonymous function)*

*Defined in [object.ts:114](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L114)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *(Anonymous function)*

___

### `Const` pick

▸ **pick**(`keysToPick`: [MaybeType](_types_.md#maybetype)‹[KeyType](_object_.md#keytype)[]›): *(Anonymous function)*

*Defined in [object.ts:94](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`keysToPick` | [MaybeType](_types_.md#maybetype)‹[KeyType](_object_.md#keytype)[]› |

**Returns:** *(Anonymous function)*

___

### `Const` pickBy

▸ **pickBy**(`predicate`: [Predicate](_types_.md#predicate)‹string›): *(Anonymous function)*

*Defined in [object.ts:79](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_types_.md#predicate)‹string› |

**Returns:** *(Anonymous function)*

___

### `Const` pickValuesBy

▸ **pickValuesBy**(`predicate`: [Predicate](_types_.md#predicate)‹any›): *(Anonymous function)*

*Defined in [object.ts:101](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_types_.md#predicate)‹any› |

**Returns:** *(Anonymous function)*

___

### `Const` reduceKV

▸ **reduceKV**<**T**>(`reducer`: function): *(Anonymous function)*

*Defined in [object.ts:66](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L66)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **reducer**: *function*

▸ (`accum`: T, `key`: string, `value`: any): *T*

**Parameters:**

Name | Type |
------ | ------ |
`accum` | T |
`key` | string |
`value` | any |

**Returns:** *(Anonymous function)*

___

### `Const` toPairs

▸ **toPairs**(`dict`: [Dictionary](../interfaces/_types_.dictionary.md)): *[Just](../classes/_maybe_.just.md)‹any[][]› | [Nothing](../classes/_maybe_.nothing.md)‹any[][]›*

*Defined in [object.ts:199](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L199)*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | [Dictionary](../interfaces/_types_.dictionary.md) |

**Returns:** *[Just](../classes/_maybe_.just.md)‹any[][]› | [Nothing](../classes/_maybe_.nothing.md)‹any[][]›*

___

### `Const` update

▸ **update**<**A**, **B**>(`propName`: [KeyType](_object_.md#keytype)): *(Anonymous function)*

*Defined in [object.ts:176](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L176)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`propName` | [KeyType](_object_.md#keytype) |

**Returns:** *(Anonymous function)*

___

### `Const` updateIn

▸ **updateIn**<**A**, **B**>(`path`: [KeyType](_object_.md#keytype)[]): *(Anonymous function)*

*Defined in [object.ts:184](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L184)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`path` | [KeyType](_object_.md#keytype)[] |

**Returns:** *(Anonymous function)*

___

### `Const` values

▸ **values**(`obj`: [MaybeType](_types_.md#maybetype)‹[Dictionary](../interfaces/_types_.dictionary.md)›): *[Maybe](_maybe_.md#maybe)‹unknown[]›*

*Defined in [object.ts:42](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/object.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [MaybeType](_types_.md#maybetype)‹[Dictionary](../interfaces/_types_.dictionary.md)› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹unknown[]›*
