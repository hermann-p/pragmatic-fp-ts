[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["object"](_object_.md)

# External module: "object"

## Index

### Type aliases

* [KeyType](_object_.md#keytype)
* [PathType](_object_.md#pathtype)

### Variables

* [filterKeys](_object_.md#const-filterkeys)

### Functions

* [assoc](_object_.md#const-assoc)
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
* [toPairs](_object_.md#const-topairs)
* [update](_object_.md#const-update)
* [updateIn](_object_.md#const-updatein)

## Type aliases

###  KeyType

Ƭ **KeyType**: *string | number*

*Defined in [object.ts:9](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L9)*

___

###  PathType

Ƭ **PathType**: *[KeyType](_object_.md#keytype)[] | [Maybe](_maybe_.md#maybe)‹[KeyType](_object_.md#keytype)[]›*

*Defined in [object.ts:10](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L10)*

## Variables

### `Const` filterKeys

• **filterKeys**: *pickBy* =  pickBy

*Defined in [object.ts:70](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L70)*

## Functions

### `Const` assoc

▸ **assoc**<**T**>(`propName`: [KeyType](_object_.md#keytype)): *(Anonymous function)*

*Defined in [object.ts:128](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L128)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`propName` | [KeyType](_object_.md#keytype) |

**Returns:** *(Anonymous function)*

___

### `Const` assocIn

▸ **assocIn**<**T**>(`path`: [KeyType](_object_.md#keytype)[]): *(Anonymous function)*

*Defined in [object.ts:136](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L136)*

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

*Defined in [object.ts:144](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L144)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | [KeyType](_object_.md#keytype) |

**Returns:** *(Anonymous function)*

___

### `Const` fromPairs

▸ **fromPairs**(`pairs`: [MaybeType](_types_.md#maybetype)‹unknown[][]›): *[Just](../classes/_maybe_.just.md)‹[Dictionary](../interfaces/_types_.dictionary.md)› | [Nothing](../classes/_maybe_.nothing.md)‹[Dictionary](../interfaces/_types_.dictionary.md)›*

*Defined in [object.ts:166](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L166)*

**Parameters:**

Name | Type |
------ | ------ |
`pairs` | [MaybeType](_types_.md#maybetype)‹unknown[][]› |

**Returns:** *[Just](../classes/_maybe_.just.md)‹[Dictionary](../interfaces/_types_.dictionary.md)› | [Nothing](../classes/_maybe_.nothing.md)‹[Dictionary](../interfaces/_types_.dictionary.md)›*

___

### `Const` get

▸ **get**<**T**>(`prop`: [KeyType](_object_.md#keytype)): *(Anonymous function)*

*Defined in [object.ts:31](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L31)*

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

*Defined in [object.ts:19](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [PathType](_object_.md#pathtype) |

**Returns:** *(Anonymous function)*

___

### `Const` getRaw

▸ **getRaw**<**T**>(`key`: [KeyType](_object_.md#keytype), `path`: Array‹[KeyType](_object_.md#keytype)›, `obj`: [Maybe](_maybe_.md#maybe)‹[Dictionary](../interfaces/_types_.dictionary.md)›): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [object.ts:13](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L13)*

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

*Defined in [object.ts:35](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [MaybeType](_types_.md#maybetype)‹[Dictionary](../interfaces/_types_.dictionary.md)› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹string[]›*

___

### `Const` mapFilterValues

▸ **mapFilterValues**<**A**, **B**>(`fn`: [Mappable](_types_.md#mappable)‹A, B›): *(Anonymous function)*

*Defined in [object.ts:111](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L111)*

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

*Defined in [object.ts:42](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Endomorphism](_types_.md#endomorphism)‹string› |

**Returns:** *(Anonymous function)*

___

### `Const` mapValues

▸ **mapValues**<**A**, **B**>(`fn`: [Mappable](_types_.md#mappable)‹A, B›): *(Anonymous function)*

*Defined in [object.ts:93](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L93)*

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

*Defined in [object.ts:73](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`keysToPick` | [MaybeType](_types_.md#maybetype)‹[KeyType](_object_.md#keytype)[]› |

**Returns:** *(Anonymous function)*

___

### `Const` pickBy

▸ **pickBy**(`predicate`: [Predicate](_types_.md#predicate)‹string›): *(Anonymous function)*

*Defined in [object.ts:58](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_types_.md#predicate)‹string› |

**Returns:** *(Anonymous function)*

___

### `Const` pickValuesBy

▸ **pickValuesBy**(`predicate`: [Predicate](_types_.md#predicate)‹any›): *(Anonymous function)*

*Defined in [object.ts:80](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_types_.md#predicate)‹any› |

**Returns:** *(Anonymous function)*

___

### `Const` toPairs

▸ **toPairs**(`dict`: [Dictionary](../interfaces/_types_.dictionary.md)): *[Just](../classes/_maybe_.just.md)‹any[][]› | [Nothing](../classes/_maybe_.nothing.md)‹any[][]›*

*Defined in [object.ts:173](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L173)*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | [Dictionary](../interfaces/_types_.dictionary.md) |

**Returns:** *[Just](../classes/_maybe_.just.md)‹any[][]› | [Nothing](../classes/_maybe_.nothing.md)‹any[][]›*

___

### `Const` update

▸ **update**<**A**, **B**>(`propName`: [KeyType](_object_.md#keytype)): *(Anonymous function)*

*Defined in [object.ts:150](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L150)*

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

*Defined in [object.ts:158](https://github.com/hermann-p/pragmatic-fp-ts/blob/65824d2/src/object.ts#L158)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`path` | [KeyType](_object_.md#keytype)[] |

**Returns:** *(Anonymous function)*
