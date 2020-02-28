[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Either"](_either_.md)

# External module: "Either"

## Index

### Classes

* [Left](../classes/_either_.left.md)
* [Right](../classes/_either_.right.md)

### Type aliases

* [Either](_either_.md#either)
* [EitherPattern](_either_.md#eitherpattern)
* [Reason](_either_.md#reason)

### Functions

* [either](_either_.md#const-either)
* [eitherIf](_either_.md#const-eitherif)
* [eitherNullable](_either_.md#const-eithernullable)
* [left](_either_.md#const-left)
* [right](_either_.md#const-right)

## Type aliases

###  Either

Ƭ **Either**: *[Left](../classes/_either_.left.md)‹L, R› | [Right](../classes/_either_.right.md)‹L, R›*

*Defined in [Either.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L7)*

___

###  EitherPattern

Ƭ **EitherPattern**: *object*

*Defined in [Either.ts:10](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L10)*

#### Type declaration:

* **left**(): *function*

  * (`value`: [Reason](_either_.md#reason)): *B*

* **right**(): *function*

  * (`value`: A): *B*

___

###  Reason

Ƭ **Reason**: *Error | string*

*Defined in [Either.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L8)*

## Functions

### `Const` either

▸ **either**<**L**, **R**>(`value`: R | [Monad](../classes/_monad_.monad.md)‹R›): *[Either](_either_.md#either)‹L, R›*

*Defined in [Either.ts:142](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L142)*

**Type parameters:**

▪ **L**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`value` | R &#124; [Monad](../classes/_monad_.monad.md)‹R› |

**Returns:** *[Either](_either_.md#either)‹L, R›*

___

### `Const` eitherIf

▸ **eitherIf**<**Reason**, **R**>(`pred`: [Predicate](_types_.md#predicate)‹R›): *(Anonymous function)*

*Defined in [Either.ts:151](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L151)*

**Type parameters:**

▪ **Reason**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹R› |

**Returns:** *(Anonymous function)*

___

### `Const` eitherNullable

▸ **eitherNullable**<**R**>(`value`: R | [Monad](../classes/_monad_.monad.md)‹R›): *[Right](../classes/_either_.right.md)‹unknown, unknown› | [Left](../classes/_either_.left.md)‹unknown, unknown›*

*Defined in [Either.ts:164](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L164)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`value` | R &#124; [Monad](../classes/_monad_.monad.md)‹R› |

**Returns:** *[Right](../classes/_either_.right.md)‹unknown, unknown› | [Left](../classes/_either_.left.md)‹unknown, unknown›*

___

### `Const` left

▸ **left**<**L**, **R**>(`reason`: L): *[Left](../classes/_either_.left.md)‹L, R›*

*Defined in [Either.ts:140](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L140)*

**Type parameters:**

▪ **L**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`reason` | L |

**Returns:** *[Left](../classes/_either_.left.md)‹L, R›*

___

### `Const` right

▸ **right**<**L**, **R**>(`value`: R | [Monad](../classes/_monad_.monad.md)‹R›): *[Right](../classes/_either_.right.md)‹L, R›*

*Defined in [Either.ts:139](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L139)*

**Type parameters:**

▪ **L**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`value` | R &#124; [Monad](../classes/_monad_.monad.md)‹R› |

**Returns:** *[Right](../classes/_either_.right.md)‹L, R›*
