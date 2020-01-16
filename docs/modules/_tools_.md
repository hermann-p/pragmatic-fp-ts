[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["tools"](_tools_.md)

# External module: "tools"

## Index

### Functions

* [getMonadValue](_tools_.md#const-getmonadvalue)
* [toInteger](_tools_.md#const-tointeger)
* [toNumber](_tools_.md#const-tonumber)
* [toString](_tools_.md#const-tostring)

## Functions

### `Const` getMonadValue

▸ **getMonadValue**<**T**>(`input`: [Monad](../classes/_monad_.monad.md)‹T› | T, `alternate?`: T): *T*

*Defined in [tools.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/7d47b68/src/tools.ts#L5)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`input` | [Monad](../classes/_monad_.monad.md)‹T› &#124; T |
`alternate?` | T |

**Returns:** *T*

___

### `Const` toInteger

▸ **toInteger**(`value`: unknown): *[Just](../classes/_maybe_.just.md)‹number› | [Nothing](../classes/_maybe_.nothing.md)‹number›*

*Defined in [tools.ts:22](https://github.com/hermann-p/pragmatic-fp-ts/blob/7d47b68/src/tools.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *[Just](../classes/_maybe_.just.md)‹number› | [Nothing](../classes/_maybe_.nothing.md)‹number›*

___

### `Const` toNumber

▸ **toNumber**(`value`: unknown): *[Just](../classes/_maybe_.just.md)‹number› | [Nothing](../classes/_maybe_.nothing.md)‹number›*

*Defined in [tools.ts:17](https://github.com/hermann-p/pragmatic-fp-ts/blob/7d47b68/src/tools.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *[Just](../classes/_maybe_.just.md)‹number› | [Nothing](../classes/_maybe_.nothing.md)‹number›*

___

### `Const` toString

▸ **toString**(`value`: unknown): *[Just](../classes/_maybe_.just.md)‹string› | [Nothing](../classes/_maybe_.nothing.md)‹string›*

*Defined in [tools.ts:27](https://github.com/hermann-p/pragmatic-fp-ts/blob/7d47b68/src/tools.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

**Returns:** *[Just](../classes/_maybe_.just.md)‹string› | [Nothing](../classes/_maybe_.nothing.md)‹string›*
