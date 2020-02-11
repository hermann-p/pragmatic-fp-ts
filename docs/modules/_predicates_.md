[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["predicates"](_predicates_.md)

# External module: "predicates"

## Index

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

## Functions

### `Const` isArray

▸ **isArray**(`value`: unknown): *value is unknown[]*

*Defined in [predicates.ts:13](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/predicates.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is unknown[]*

___

### `Const` isEither

▸ **isEither**(`value`: unknown): *value is Either<unknown, unknown>*

*Defined in [predicates.ts:41](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/predicates.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Either<unknown, unknown>*

___

### `Const` isEmpty

▸ **isEmpty**(`coll`: string | Object | unknown[]): *boolean*

*Defined in [predicates.ts:21](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/predicates.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | string &#124; Object &#124; unknown[] |

**Returns:** *boolean*

___

### `Const` isFunction

▸ **isFunction**(`value`: unknown): *value is Function*

*Defined in [predicates.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/predicates.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Function*

___

### `Const` isJust

▸ **isJust**(`value`: unknown): *value is Maybe<unknown>*

*Defined in [predicates.ts:31](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/predicates.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Maybe<unknown>*

___

### `Const` isLeft

▸ **isLeft**(`value`: unknown): *value is Either<unknown, unknown>*

*Defined in [predicates.ts:39](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/predicates.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Either<unknown, unknown>*

___

### `Const` isMaybe

▸ **isMaybe**(`value`: unknown): *value is Maybe<unknown>*

*Defined in [predicates.ts:34](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/predicates.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Maybe<unknown>*

___

### `Const` isMonad

▸ **isMonad**(`value`: unknown): *value is Monad<unknown>*

*Defined in [predicates.ts:58](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/predicates.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Monad<unknown>*

___

### `Const` isNil

▸ **isNil**(`value`: unknown): *boolean*

*Defined in [predicates.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/predicates.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *boolean*

___

### `Const` isNotEmpty

▸ **isNotEmpty**(`coll`: string | Object | unknown[]): *boolean*

*Defined in [predicates.ts:28](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/predicates.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | string &#124; Object &#124; unknown[] |

**Returns:** *boolean*

___

### `Const` isNothing

▸ **isNothing**(`value`: unknown): *value is Maybe<unknown>*

*Defined in [predicates.ts:32](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/predicates.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Maybe<unknown>*

___

### `Const` isNumber

▸ **isNumber**(`value`: unknown): *value is number*

*Defined in [predicates.ts:15](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/predicates.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is number*

___

### `Const` isObject

▸ **isObject**(`value`: unknown): *value is object*

*Defined in [predicates.ts:18](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/predicates.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is object*

___

### `Const` isRight

▸ **isRight**(`value`: unknown): *value is Either<unknown, unknown>*

*Defined in [predicates.ts:37](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/predicates.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is Either<unknown, unknown>*

___

### `Const` isSome

▸ **isSome**(`value`: unknown): *boolean*

*Defined in [predicates.ts:61](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/predicates.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *boolean*

___

### `Const` isString

▸ **isString**(`value`: unknown): *value is string*

*Defined in [predicates.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/predicates.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *value is string*
