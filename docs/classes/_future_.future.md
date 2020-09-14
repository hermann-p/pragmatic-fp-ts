[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Future"](../modules/_future_.md) › [Future](_future_.future.md)

# Class: Future <**T, M**>

## Type parameters

▪ **T**

▪ **M**: *[Monad](_types_.monad.md)‹T›*

## Hierarchy

* **Future**

## Index

### Constructors

* [constructor](_future_.future.md#constructor)

### Properties

* [bindDefault](_future_.future.md#binddefault)
* [bindError](_future_.future.md#binderror)
* [value](_future_.future.md#value)

### Methods

* [_](_future_.future.md#_)
* [effect](_future_.future.md#effect)
* [effectAsync](_future_.future.md#effectasync)
* [filter](_future_.future.md#filter)
* [getMonad](_future_.future.md#getmonad)
* [getValue](_future_.future.md#getvalue)
* [getValueOr](_future_.future.md#getvalueor)

## Constructors

###  constructor

\+ **new Future**(`bindDefault`: [Mappable](../modules/_types_.md#mappable)‹any, M›, `bindError`: [Mappable](../modules/_types_.md#mappable)‹any, M›, `value`: M | Promise‹M›): *[Future](_future_.future.md)*

Defined in src/Future.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`bindDefault` | [Mappable](../modules/_types_.md#mappable)‹any, M› |
`bindError` | [Mappable](../modules/_types_.md#mappable)‹any, M› |
`value` | M &#124; Promise‹M› |

**Returns:** *[Future](_future_.future.md)*

## Properties

###  bindDefault

• **bindDefault**: *[Mappable](../modules/_types_.md#mappable)‹any, M›*

Defined in src/Future.ts:17

___

###  bindError

• **bindError**: *[Mappable](../modules/_types_.md#mappable)‹any, M›*

Defined in src/Future.ts:18

___

###  value

• **value**: *Promise‹M›*

Defined in src/Future.ts:16

## Methods

###  _

▸ **_**<**U**>(`f`: [Mappable](../modules/_types_.md#mappable)‹T, U | Promise‹U››): *[Future](_future_.future.md)‹NonNullable‹U›, [Monad](_types_.monad.md)‹NonNullable‹U›››*

Defined in src/Future.ts:26

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Mappable](../modules/_types_.md#mappable)‹T, U &#124; Promise‹U›› |

**Returns:** *[Future](_future_.future.md)‹NonNullable‹U›, [Monad](_types_.monad.md)‹NonNullable‹U›››*

___

###  effect

▸ **effect**(`f`: [Effect](../modules/_types_.md#effect)‹T›): *[Future](_future_.future.md)‹T, M›*

Defined in src/Future.ts:60

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Effect](../modules/_types_.md#effect)‹T› |

**Returns:** *[Future](_future_.future.md)‹T, M›*

___

###  effectAsync

▸ **effectAsync**(`f`: [Effect](../modules/_types_.md#effect)‹T›): *[Future](_future_.future.md)‹T, M›*

Defined in src/Future.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Effect](../modules/_types_.md#effect)‹T› |

**Returns:** *[Future](_future_.future.md)‹T, M›*

___

###  filter

▸ **filter**(`pred`: [Mappable](../modules/_types_.md#mappable)‹T, boolean | Promise‹Boolean››): *[Future](_future_.future.md)‹T, M›*

Defined in src/Future.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Mappable](../modules/_types_.md#mappable)‹T, boolean &#124; Promise‹Boolean›› |

**Returns:** *[Future](_future_.future.md)‹T, M›*

___

###  getMonad

▸ **getMonad**(): *Promise‹M›*

Defined in src/Future.ts:81

**Returns:** *Promise‹M›*

___

###  getValue

▸ **getValue**(): *Promise‹T›*

Defined in src/Future.ts:77

**Returns:** *Promise‹T›*

___

###  getValueOr

▸ **getValueOr**(`alt`: T): *Promise‹T›*

Defined in src/Future.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`alt` | T |

**Returns:** *Promise‹T›*
