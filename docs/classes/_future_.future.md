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

*Defined in [src/Future.ts:18](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/Future.ts#L18)*

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

*Defined in [src/Future.ts:17](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/Future.ts#L17)*

___

###  bindError

• **bindError**: *[Mappable](../modules/_types_.md#mappable)‹any, M›*

*Defined in [src/Future.ts:18](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/Future.ts#L18)*

___

###  value

• **value**: *Promise‹M›*

*Defined in [src/Future.ts:16](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/Future.ts#L16)*

## Methods

###  _

▸ **_**<**U**, **TO**>(`f`: [Mappable](../modules/_types_.md#mappable)‹T, U | Promise‹U››, `errorHint?`: string | Error): *[Future](_future_.future.md)‹TO, M extends Either<T, Error> ? Either<TO, Error> : Maybe<TO>›*

*Defined in [src/Future.ts:26](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/Future.ts#L26)*

**Type parameters:**

▪ **U**

▪ **TO**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Mappable](../modules/_types_.md#mappable)‹T, U &#124; Promise‹U›› |
`errorHint?` | string &#124; Error |

**Returns:** *[Future](_future_.future.md)‹TO, M extends Either<T, Error> ? Either<TO, Error> : Maybe<TO>›*

___

###  effect

▸ **effect**(`f`: [Effect](../modules/_types_.md#effect)‹T›): *[Future](_future_.future.md)‹T, M›*

*Defined in [src/Future.ts:64](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/Future.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Effect](../modules/_types_.md#effect)‹T› |

**Returns:** *[Future](_future_.future.md)‹T, M›*

___

###  effectAsync

▸ **effectAsync**(`f`: [Effect](../modules/_types_.md#effect)‹T›): *[Future](_future_.future.md)‹T, M›*

*Defined in [src/Future.ts:72](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/Future.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Effect](../modules/_types_.md#effect)‹T› |

**Returns:** *[Future](_future_.future.md)‹T, M›*

___

###  filter

▸ **filter**(`pred`: [Mappable](../modules/_types_.md#mappable)‹T, boolean | Promise‹Boolean››, `errorHint?`: string | Error): *[Future](_future_.future.md)‹T, M›*

*Defined in [src/Future.ts:51](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/Future.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Mappable](../modules/_types_.md#mappable)‹T, boolean &#124; Promise‹Boolean›› |
`errorHint?` | string &#124; Error |

**Returns:** *[Future](_future_.future.md)‹T, M›*

___

###  getMonad

▸ **getMonad**(): *Promise‹M›*

*Defined in [src/Future.ts:85](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/Future.ts#L85)*

**Returns:** *Promise‹M›*

___

###  getValue

▸ **getValue**(): *Promise‹T›*

*Defined in [src/Future.ts:81](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/Future.ts#L81)*

**Returns:** *Promise‹T›*

___

###  getValueOr

▸ **getValueOr**(`alt`: T): *Promise‹T›*

*Defined in [src/Future.ts:77](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/Future.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`alt` | T |

**Returns:** *Promise‹T›*
