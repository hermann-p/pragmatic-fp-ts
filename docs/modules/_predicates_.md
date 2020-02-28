[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["predicates"](_predicates_.md)

# External module: "predicates"

## Index

### Type aliases

* [WhereEqTemplate](_predicates_.md#whereeqtemplate)
* [WhereTemplate](_predicates_.md#wheretemplate)

### Functions

* [isArray](_predicates_.md#const-isarray)
* [isEither](_predicates_.md#const-iseither)
* [isEmpty](_predicates_.md#const-isempty)
* [isFunction](_predicates_.md#const-isfunction)
* [isJust](_predicates_.md#const-isjust)
* [isLeft](_predicates_.md#const-isleft)
* [isMaybe](_predicates_.md#const-ismaybe)
* [isMonad](_predicates_.md#const-ismonad)
* [isNil](_predicates_.md#const-isnil)
* [isNotEmpty](_predicates_.md#const-isnotempty)
* [isNothing](_predicates_.md#const-isnothing)
* [isNumber](_predicates_.md#const-isnumber)
* [isObject](_predicates_.md#const-isobject)
* [isRight](_predicates_.md#const-isright)
* [isSome](_predicates_.md#const-issome)
* [isString](_predicates_.md#const-isstring)
* [where](_predicates_.md#const-where)
* [whereEq](_predicates_.md#const-whereeq)

## Type aliases

###  WhereEqTemplate

Ƭ **WhereEqTemplate**: *object*

*Defined in [predicates.ts:71](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L71)*

#### Type declaration:

___

###  WhereTemplate

Ƭ **WhereTemplate**: *object*

*Defined in [predicates.ts:53](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L53)*

#### Type declaration:

## Functions

### `Const` isArray

▸ **isArray**(`value`: unknown): *value is unknown[]*

*Defined in [predicates.ts:16](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is unknown[]*

___

### `Const` isEither

▸ **isEither**(`value`: unknown): *value is Either<unknown, unknown>*

*Defined in [predicates.ts:44](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Either<unknown, unknown>*

___

### `Const` isEmpty

▸ **isEmpty**(`coll`: string | Object | unknown[]): *boolean*

*Defined in [predicates.ts:24](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | string &#124; Object &#124; unknown[] |

**Returns:** *boolean*

___

### `Const` isFunction

▸ **isFunction**(`value`: unknown): *value is Function*

*Defined in [predicates.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Function*

___

### `Const` isJust

▸ **isJust**(`value`: unknown): *value is Maybe<unknown>*

*Defined in [predicates.ts:34](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Maybe<unknown>*

___

### `Const` isLeft

▸ **isLeft**(`value`: unknown): *value is Either<unknown, unknown>*

*Defined in [predicates.ts:42](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Either<unknown, unknown>*

___

### `Const` isMaybe

▸ **isMaybe**(`value`: unknown): *value is Maybe<unknown>*

*Defined in [predicates.ts:37](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Maybe<unknown>*

___

### `Const` isMonad

▸ **isMonad**(`value`: unknown): *value is Monad<unknown>*

*Defined in [predicates.ts:47](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Monad<unknown>*

___

### `Const` isNil

▸ **isNil**(`value`: unknown): *boolean*

*Defined in [predicates.ts:9](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *boolean*

___

### `Const` isNotEmpty

▸ **isNotEmpty**(`coll`: string | Object | unknown[]): *boolean*

*Defined in [predicates.ts:31](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | string &#124; Object &#124; unknown[] |

**Returns:** *boolean*

___

### `Const` isNothing

▸ **isNothing**(`value`: unknown): *value is Maybe<unknown>*

*Defined in [predicates.ts:35](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Maybe<unknown>*

___

### `Const` isNumber

▸ **isNumber**(`value`: unknown): *value is number*

*Defined in [predicates.ts:18](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is number*

___

### `Const` isObject

▸ **isObject**(`value`: unknown): *value is object*

*Defined in [predicates.ts:21](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is object*

___

### `Const` isRight

▸ **isRight**(`value`: unknown): *value is Either<unknown, unknown>*

*Defined in [predicates.ts:40](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Either<unknown, unknown>*

___

### `Const` isSome

▸ **isSome**(`value`: unknown): *boolean*

*Defined in [predicates.ts:50](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *boolean*

___

### `Const` isString

▸ **isString**(`value`: unknown): *value is string*

*Defined in [predicates.ts:14](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is string*

___

### `Const` where

▸ **where**<**T**>(`template`: [MaybeType](_types_.md#maybetype)‹[WhereTemplate](_predicates_.md#wheretemplate)‹T››): *(Anonymous function)*

*Defined in [predicates.ts:54](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L54)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

**Parameters:**

Name | Type |
------ | ------ |
`template` | [MaybeType](_types_.md#maybetype)‹[WhereTemplate](_predicates_.md#wheretemplate)‹T›› |

**Returns:** *(Anonymous function)*

___

### `Const` whereEq

▸ **whereEq**<**T**>(`template`: [MaybeType](_types_.md#maybetype)‹[WhereEqTemplate](_predicates_.md#whereeqtemplate)‹T››): *(Anonymous function)*

*Defined in [predicates.ts:72](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/predicates.ts#L72)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

**Parameters:**

Name | Type |
------ | ------ |
`template` | [MaybeType](_types_.md#maybetype)‹[WhereEqTemplate](_predicates_.md#whereeqtemplate)‹T›› |

**Returns:** *(Anonymous function)*
