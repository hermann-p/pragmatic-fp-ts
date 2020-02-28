[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Maybe"](_maybe_.md)

# External module: "Maybe"

## Index

### Classes

* [Just](../classes/_maybe_.just.md)
* [Nothing](../classes/_maybe_.nothing.md)

### Type aliases

* [Maybe](_maybe_.md#maybe)
* [MaybePattern](_maybe_.md#maybepattern)

### Functions

* [just](_maybe_.md#const-just)
* [maybe](_maybe_.md#const-maybe)
* [maybeFalsy](_maybe_.md#const-maybefalsy)
* [maybeIf](_maybe_.md#const-maybeif)
* [nothing](_maybe_.md#const-nothing)

## Type aliases

###  Maybe

Ƭ **Maybe**: *[Just](../classes/_maybe_.just.md)‹T› | [Nothing](../classes/_maybe_.nothing.md)‹T›*

*Defined in [Maybe.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Maybe.ts#L8)*

___

###  MaybePattern

Ƭ **MaybePattern**: *object*

*Defined in [Maybe.ts:9](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Maybe.ts#L9)*

#### Type declaration:

* **just**(): *function*

  * (`value`: A): *B*

* **nothing**(): *function*

  * (): *B*

## Functions

### `Const` just

▸ **just**<**T**>(`value`: T): *[Just](../classes/_maybe_.just.md)‹T›*

*Defined in [Maybe.ts:122](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Maybe.ts#L122)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Just](../classes/_maybe_.just.md)‹T›*

___

### `Const` maybe

▸ **maybe**<**T**>(`value`: T | [Monad](../classes/_monad_.monad.md)‹T›): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [Maybe.ts:124](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Maybe.ts#L124)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; [Monad](../classes/_monad_.monad.md)‹T› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹T›*

___

### `Const` maybeFalsy

▸ **maybeFalsy**<**T**>(`value`: [MaybeType](_types_.md#maybetype)‹T›): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [Maybe.ts:135](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Maybe.ts#L135)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | [MaybeType](_types_.md#maybetype)‹T› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹T›*

___

### `Const` maybeIf

▸ **maybeIf**<**T**>(`predicate`: [MaybeType](_types_.md#maybetype)‹[Predicate](_types_.md#predicate)‹T››): *(Anonymous function)*

*Defined in [Maybe.ts:138](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Maybe.ts#L138)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [MaybeType](_types_.md#maybetype)‹[Predicate](_types_.md#predicate)‹T›› |

**Returns:** *(Anonymous function)*

___

### `Const` nothing

▸ **nothing**<**T**>(): *[Nothing](../classes/_maybe_.nothing.md)‹T›*

*Defined in [Maybe.ts:123](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Maybe.ts#L123)*

**Type parameters:**

▪ **T**

**Returns:** *[Nothing](../classes/_maybe_.nothing.md)‹T›*
