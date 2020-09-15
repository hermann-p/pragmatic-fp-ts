[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["lenses"](_lenses_.md)

# External module: "lenses"

## Index

### Type aliases

* [Lens](_lenses_.md#lens)
* [LensGetter](_lenses_.md#lensgetter)
* [LensPath](_lenses_.md#lenspath)
* [LensSetter](_lenses_.md#lenssetter)

### Functions

* [lens](_lenses_.md#lens)
* [lensIndex](_lenses_.md#lensindex)
* [lensPath](_lenses_.md#lenspath)
* [lensProp](_lenses_.md#lensprop)
* [over](_lenses_.md#over)
* [set](_lenses_.md#set)
* [view](_lenses_.md#view)

## Type aliases

###  Lens

Ƭ **Lens**: *object*

*Defined in [src/lenses.ts:14](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/lenses.ts#L14)*

#### Type declaration:

* **set**: *[LensSetter](_lenses_.md#lenssetter)‹TData, TValue›*

* **view**: *[LensGetter](_lenses_.md#lensgetter)‹TData, TValue›*

___

###  LensGetter

Ƭ **LensGetter**: *function*

*Defined in [src/lenses.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/lenses.ts#L11)*

#### Type declaration:

▸ (`data`: TData): *TValue*

**Parameters:**

Name | Type |
------ | ------ |
`data` | TData |

___

###  LensPath

Ƭ **LensPath**: *string | number[]*

*Defined in [src/lenses.ts:117](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/lenses.ts#L117)*

___

###  LensSetter

Ƭ **LensSetter**: *function*

*Defined in [src/lenses.ts:12](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/lenses.ts#L12)*

#### Type declaration:

▸ (`value`: TValue, `data`: TData): *TData*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TValue |
`data` | TData |

## Functions

###  lens

▸ **lens**<**TData**, **TValue**>(`getter`: [LensGetter](_lenses_.md#lensgetter)‹TData, TValue›, `setter`: [LensSetter](_lenses_.md#lenssetter)‹TData, TValue›): *[Lens](_lenses_.md#lens)‹TData, TValue›*

*Defined in [src/lenses.ts:19](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/lenses.ts#L19)*

**Type parameters:**

▪ **TData**

▪ **TValue**

**Parameters:**

Name | Type |
------ | ------ |
`getter` | [LensGetter](_lenses_.md#lensgetter)‹TData, TValue› |
`setter` | [LensSetter](_lenses_.md#lenssetter)‹TData, TValue› |

**Returns:** *[Lens](_lenses_.md#lens)‹TData, TValue›*

___

###  lensIndex

▸ **lensIndex**<**T**>(`idx`: number): *object*

*Defined in [src/lenses.ts:111](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/lenses.ts#L111)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`idx` | number |

**Returns:** *object*

* **set**: *[LensSetter](_lenses_.md#lenssetter)‹TData, TValue›*

* **view**: *[LensGetter](_lenses_.md#lensgetter)‹TData, TValue›*

___

###  lensPath

▸ **lensPath**<**TValue**, **TData**>(`path`: [LensPath](_lenses_.md#lenspath)): *object*

*Defined in [src/lenses.ts:118](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/lenses.ts#L118)*

**Type parameters:**

▪ **TValue**

▪ **TData**

**Parameters:**

Name | Type |
------ | ------ |
`path` | [LensPath](_lenses_.md#lenspath) |

**Returns:** *object*

* **set**: *[LensSetter](_lenses_.md#lenssetter)‹TData, TValue›*

* **view**: *[LensGetter](_lenses_.md#lensgetter)‹TData, TValue›*

___

###  lensProp

▸ **lensProp**<**TValue**, **TData**>(`propName`: string): *object*

*Defined in [src/lenses.ts:103](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/lenses.ts#L103)*

**Type parameters:**

▪ **TValue**

▪ **TData**: *__type*

**Parameters:**

Name | Type |
------ | ------ |
`propName` | string |

**Returns:** *object*

* **set**: *[LensSetter](_lenses_.md#lenssetter)‹TData, TValue›*

* **view**: *[LensGetter](_lenses_.md#lensgetter)‹TData, TValue›*

___

###  over

▸ **over**<**TData**, **TValue**>(`lens`: [Lens](_lenses_.md#lens)‹TData, TValue›, `fn`: [Endomorphism](_types_.md#endomorphism)‹TValue›, `data`: TData): *TData*

*Defined in [src/lenses.ts:75](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/lenses.ts#L75)*

**Type parameters:**

▪ **TData**

▪ **TValue**

**Parameters:**

Name | Type |
------ | ------ |
`lens` | [Lens](_lenses_.md#lens)‹TData, TValue› |
`fn` | [Endomorphism](_types_.md#endomorphism)‹TValue› |
`data` | TData |

**Returns:** *TData*

▸ **over**<**TData**, **TValue**>(`lens`: [Lens](_lenses_.md#lens)‹TData, TValue›, `fn`: [Endomorphism](_types_.md#endomorphism)‹TValue›): *function*

*Defined in [src/lenses.ts:80](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/lenses.ts#L80)*

**Type parameters:**

▪ **TData**

▪ **TValue**

**Parameters:**

Name | Type |
------ | ------ |
`lens` | [Lens](_lenses_.md#lens)‹TData, TValue› |
`fn` | [Endomorphism](_types_.md#endomorphism)‹TValue› |

**Returns:** *function*

▸ (`data`: TData): *TData*

**Parameters:**

Name | Type |
------ | ------ |
`data` | TData |

▸ **over**<**TData**, **TValue**>(`lens`: [Lens](_lenses_.md#lens)‹TData, TValue›): *function*

*Defined in [src/lenses.ts:84](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/lenses.ts#L84)*

**Type parameters:**

▪ **TData**

▪ **TValue**

**Parameters:**

Name | Type |
------ | ------ |
`lens` | [Lens](_lenses_.md#lens)‹TData, TValue› |

**Returns:** *function*

▸ (`fn`: [Endomorphism](_types_.md#endomorphism)‹TValue›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Endomorphism](_types_.md#endomorphism)‹TValue› |

▸ (`data`: TData): *TData*

**Parameters:**

Name | Type |
------ | ------ |
`data` | TData |

___

###  set

▸ **set**<**TData**, **TValue**>(`lens`: [Lens](_lenses_.md#lens)‹TData, TValue›, `value`: TValue, `data`: TData): *TData*

*Defined in [src/lenses.ts:45](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/lenses.ts#L45)*

**Type parameters:**

▪ **TData**

▪ **TValue**

**Parameters:**

Name | Type |
------ | ------ |
`lens` | [Lens](_lenses_.md#lens)‹TData, TValue› |
`value` | TValue |
`data` | TData |

**Returns:** *TData*

▸ **set**<**TData**, **TValue**>(`lens`: [Lens](_lenses_.md#lens)‹TData, TValue›, `value`: TValue): *function*

*Defined in [src/lenses.ts:50](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/lenses.ts#L50)*

**Type parameters:**

▪ **TData**

▪ **TValue**

**Parameters:**

Name | Type |
------ | ------ |
`lens` | [Lens](_lenses_.md#lens)‹TData, TValue› |
`value` | TValue |

**Returns:** *function*

▸ (`data`: TData): *TData*

**Parameters:**

Name | Type |
------ | ------ |
`data` | TData |

▸ **set**<**TData**, **TValue**>(`lens`: [Lens](_lenses_.md#lens)‹TData, TValue›): *function*

*Defined in [src/lenses.ts:54](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/lenses.ts#L54)*

**Type parameters:**

▪ **TData**

▪ **TValue**

**Parameters:**

Name | Type |
------ | ------ |
`lens` | [Lens](_lenses_.md#lens)‹TData, TValue› |

**Returns:** *function*

▸ (`value`: TValue): *function*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TValue |

▸ (`data`: TData): *TData*

**Parameters:**

Name | Type |
------ | ------ |
`data` | TData |

___

###  view

▸ **view**<**TData**, **TValue**>(`lens`: [Lens](_lenses_.md#lens)‹TData, TValue›, `data`: TData): *TValue*

*Defined in [src/lenses.ts:29](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/lenses.ts#L29)*

**Type parameters:**

▪ **TData**

▪ **TValue**

**Parameters:**

Name | Type |
------ | ------ |
`lens` | [Lens](_lenses_.md#lens)‹TData, TValue› |
`data` | TData |

**Returns:** *TValue*

▸ **view**<**TData**, **TValue**>(`lens`: [Lens](_lenses_.md#lens)‹TData, TValue›): *function*

*Defined in [src/lenses.ts:33](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/lenses.ts#L33)*

**Type parameters:**

▪ **TData**

▪ **TValue**

**Parameters:**

Name | Type |
------ | ------ |
`lens` | [Lens](_lenses_.md#lens)‹TData, TValue› |

**Returns:** *function*

▸ (`data`: TData): *TValue*

**Parameters:**

Name | Type |
------ | ------ |
`data` | TData |
