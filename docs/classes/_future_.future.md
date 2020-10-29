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

* [bindDefault](_future_.future.md#private-binddefault)
* [bindError](_future_.future.md#private-binderror)
* [value](_future_.future.md#private-value)

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

*Defined in [src/Future.ts:20](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`bindDefault` | [Mappable](../modules/_types_.md#mappable)‹any, M› |
`bindError` | [Mappable](../modules/_types_.md#mappable)‹any, M› |
`value` | M &#124; Promise‹M› |

**Returns:** *[Future](_future_.future.md)*

## Properties

### `Private` bindDefault

• **bindDefault**: *[Mappable](../modules/_types_.md#mappable)‹any, M›*

*Defined in [src/Future.ts:19](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L19)*

___

### `Private` bindError

• **bindError**: *[Mappable](../modules/_types_.md#mappable)‹any, M›*

*Defined in [src/Future.ts:20](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L20)*

___

### `Private` value

• **value**: *Promise‹M›*

*Defined in [src/Future.ts:18](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L18)*

## Methods

###  _

▸ **_**<**U**, **TO**>(`f`: [Mappable](../modules/_types_.md#mappable)‹T, U | Promise‹U››, `errorHint?`: string | Error): *M extends Either<T, Error> ? FutureEither<TO> : FutureMaybe<TO>*

*Defined in [src/Future.ts:28](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L28)*

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

*Defined in [src/Future.ts:75](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Effect](../modules/_types_.md#effect)‹T› |

**Returns:** *M extends Either<T, Error> ? FutureEither<T> : FutureMaybe<T>*

___

###  effectAsync

▸ **effectAsync**(`f`: [Effect](../modules/_types_.md#effect)‹T›): *M extends Either<T, Error> ? FutureEither<T> : FutureMaybe<T>*

*Defined in [src/Future.ts:92](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Effect](../modules/_types_.md#effect)‹T› |

**Returns:** *M extends Either<T, Error> ? FutureEither<T> : FutureMaybe<T>*

___

###  filter

▸ **filter**(`pred`: [Mappable](../modules/_types_.md#mappable)‹T, boolean | Promise‹Boolean››, `errorHint?`: string | Error): *M extends Either<T, Error> ? FutureEither<T> : FutureMaybe<T>*

*Defined in [src/Future.ts:59](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Mappable](../modules/_types_.md#mappable)‹T, boolean &#124; Promise‹Boolean›› |
`errorHint?` | string &#124; Error |

**Returns:** *M extends Either<T, Error> ? FutureEither<T> : FutureMaybe<T>*

___

###  getMonad

▸ **getMonad**(): *Promise‹M›*

*Defined in [src/Future.ts:105](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L105)*

**Returns:** *Promise‹M›*

___

###  getReason

▸ **getReason**(): *Promise‹void | [NilError](_types_.nilerror.md)‹››*

*Defined in [src/Future.ts:109](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L109)*

**Returns:** *Promise‹void | [NilError](_types_.nilerror.md)‹››*

___

###  getValue

▸ **getValue**(): *Promise‹T›*

*Defined in [src/Future.ts:101](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L101)*

**Returns:** *Promise‹T›*

___

###  getValueOr

▸ **getValueOr**(`alt`: T): *Promise‹T›*

*Defined in [src/Future.ts:97](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`alt` | T |

**Returns:** *Promise‹T›*

___

###  match

▸ **match**<**B**, **MT**, **TO**>(`matcher`: MT): *M extends Either<any, Error> ? FutureEither<TO> : FutureMaybe<TO>*

*Defined in [src/Future.ts:83](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/Future.ts#L83)*

**Type parameters:**

▪ **B**

▪ **MT**

▪ **TO**

**Parameters:**

Name | Type |
------ | ------ |
`matcher` | MT |

**Returns:** *M extends Either<any, Error> ? FutureEither<TO> : FutureMaybe<TO>*
