[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Future"](../modules/_future_.md) › [Future](_future_.future.md)

# Class: Future <**T, M**>

## Type parameters

▪ **T**

▪ **M**: *[Either](../modules/_either_.md#either)‹T› | [Maybe](../modules/_maybe_.md#maybe)‹T›*

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
* [getReason](_future_.future.md#getreason)
* [getValue](_future_.future.md#getvalue)
* [getValueOr](_future_.future.md#getvalueor)
* [match](_future_.future.md#match)

## Constructors

###  constructor

\+ **new Future**(`bindDefault`: [Mappable](../modules/_types_.md#mappable)‹any, M›, `bindError`: [Mappable](../modules/_types_.md#mappable)‹any, M›, `value`: M | Promise‹M›): *[Future](_future_.future.md)*

*Defined in [src/Future.ts:20](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/Future.ts#L20)*

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

*Defined in [src/Future.ts:19](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/Future.ts#L19)*

___

###  bindError

• **bindError**: *[Mappable](../modules/_types_.md#mappable)‹any, M›*

*Defined in [src/Future.ts:20](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/Future.ts#L20)*

___

###  value

• **value**: *Promise‹M›*

*Defined in [src/Future.ts:18](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/Future.ts#L18)*

## Methods

###  _

▸ **_**<**U**, **TO**>(`f`: [Mappable](../modules/_types_.md#mappable)‹T, U | Promise‹U››, `errorHint?`: string | Error): *M extends Either<T, Error> ? FutureEither<TO> : FutureMaybe<TO>*

*Defined in [src/Future.ts:28](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/Future.ts#L28)*

**Type parameters:**

▪ **U**

▪ **TO**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Mappable](../modules/_types_.md#mappable)‹T, U &#124; Promise‹U›› |
`errorHint?` | string &#124; Error |

**Returns:** *M extends Either<T, Error> ? FutureEither<TO> : FutureMaybe<TO>*

___

###  effect

▸ **effect**(`f`: [Effect](../modules/_types_.md#effect)‹T›): *M extends Either<T, Error> ? FutureEither<T> : FutureMaybe<T>*

*Defined in [src/Future.ts:74](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/Future.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Effect](../modules/_types_.md#effect)‹T› |

**Returns:** *M extends Either<T, Error> ? FutureEither<T> : FutureMaybe<T>*

___

###  effectAsync

▸ **effectAsync**(`f`: [Effect](../modules/_types_.md#effect)‹T›): *M extends Either<T, Error> ? FutureEither<T> : FutureMaybe<T>*

*Defined in [src/Future.ts:94](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/Future.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Effect](../modules/_types_.md#effect)‹T› |

**Returns:** *M extends Either<T, Error> ? FutureEither<T> : FutureMaybe<T>*

___

###  filter

▸ **filter**(`pred`: [Mappable](../modules/_types_.md#mappable)‹T, boolean | Promise‹Boolean››, `errorHint?`: string | Error): *M extends Either<T, Error> ? FutureEither<T> : FutureMaybe<T>*

*Defined in [src/Future.ts:58](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/Future.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Mappable](../modules/_types_.md#mappable)‹T, boolean &#124; Promise‹Boolean›› |
`errorHint?` | string &#124; Error |

**Returns:** *M extends Either<T, Error> ? FutureEither<T> : FutureMaybe<T>*

___

###  getMonad

▸ **getMonad**(): *Promise‹M›*

*Defined in [src/Future.ts:107](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/Future.ts#L107)*

**Returns:** *Promise‹M›*

___

###  getReason

▸ **getReason**(): *Promise‹void | [NilError](_types_.nilerror.md)‹››*

*Defined in [src/Future.ts:111](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/Future.ts#L111)*

**Returns:** *Promise‹void | [NilError](_types_.nilerror.md)‹››*

___

###  getValue

▸ **getValue**(): *Promise‹T›*

*Defined in [src/Future.ts:103](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/Future.ts#L103)*

**Returns:** *Promise‹T›*

___

###  getValueOr

▸ **getValueOr**(`alt`: T): *Promise‹T›*

*Defined in [src/Future.ts:99](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/Future.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`alt` | T |

**Returns:** *Promise‹T›*

___

###  match

▸ **match**<**B**, **MT**, **TO**>(`matcher`: MT): *M extends Either<any, Error> ? FutureEither<TO> : FutureMaybe<TO>*

*Defined in [src/Future.ts:82](https://github.com/hermann-p/pragmatic-fp-ts/blob/44257be/src/Future.ts#L82)*

**Type parameters:**

▪ **B**

▪ **MT**

▪ **TO**

**Parameters:**

Name | Type |
------ | ------ |
`matcher` | MT |

**Returns:** *M extends Either<any, Error> ? FutureEither<TO> : FutureMaybe<TO>*
