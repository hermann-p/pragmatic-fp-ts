[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Either"](../modules/_either_.md) › [Right](_either_.right.md)

# Class: Right <**L, R**>

## Type parameters

▪ **L**

▪ **R**

## Hierarchy

* **Right**

## Implements

* [Monad](_monad_.monad.md)‹R›

## Index

### Constructors

* [constructor](_either_.right.md#constructor)

### Properties

* [value](_either_.right.md#private-value)

### Methods

* [bind](_either_.right.md#bind)
* [bindM](_either_.right.md#bindm)
* [effect](_either_.right.md#effect)
* [filter](_either_.right.md#filter)
* [getReason](_either_.right.md#getreason)
* [getValue](_either_.right.md#getvalue)
* [getValueOr](_either_.right.md#getvalueor)
* [isLeft](_either_.right.md#isleft)
* [isMonad](_either_.right.md#ismonad)
* [isRight](_either_.right.md#isright)
* [match](_either_.right.md#match)
* [toMaybe](_either_.right.md#tomaybe)
* [toString](_either_.right.md#tostring)

## Constructors

###  constructor

\+ **new Right**(`value`: R | [Monad](_monad_.monad.md)‹R›): *[Right](_either_.right.md)*

*Defined in [Either.ts:16](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | R &#124; [Monad](_monad_.monad.md)‹R› |

**Returns:** *[Right](_either_.right.md)*

## Properties

### `Private` value

• **value**: *R*

*Defined in [Either.ts:16](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L16)*

## Methods

###  bind

▸ **bind**<**R2**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹R, R2 | [Either](../modules/_either_.md#either)‹R, R2››): *[Either](../modules/_either_.md#either)‹[Reason](../modules/_either_.md#reason), R2›*

*Defined in [Either.ts:20](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L20)*

**Type parameters:**

▪ **R2**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹R, R2 &#124; [Either](../modules/_either_.md#either)‹R, R2›› |

**Returns:** *[Either](../modules/_either_.md#either)‹[Reason](../modules/_either_.md#reason), R2›*

___

###  bindM

▸ **bindM**<**R2**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹[Monad](_monad_.monad.md)‹R›, R2 | [Either](../modules/_either_.md#either)‹R, R2››): *[Either](../modules/_either_.md#either)‹[Reason](../modules/_either_.md#reason), R2›*

*Defined in [Either.ts:28](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L28)*

**Type parameters:**

▪ **R2**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹[Monad](_monad_.monad.md)‹R›, R2 &#124; [Either](../modules/_either_.md#either)‹R, R2›› |

**Returns:** *[Either](../modules/_either_.md#either)‹[Reason](../modules/_either_.md#reason), R2›*

___

###  effect

▸ **effect**(`fx`: [Effect](../modules/_types_.md#effect)‹R›): *[Either](../modules/_either_.md#either)‹L, R›*

*Defined in [Either.ts:62](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`fx` | [Effect](../modules/_types_.md#effect)‹R› |

**Returns:** *[Either](../modules/_either_.md#either)‹L, R›*

___

###  filter

▸ **filter**(`predicate`: [Predicate](../modules/_types_.md#predicate)‹R›): *[Either](../modules/_either_.md#either)‹L, R›*

*Defined in [Either.ts:39](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](../modules/_types_.md#predicate)‹R› |

**Returns:** *[Either](../modules/_either_.md#either)‹L, R›*

___

###  getReason

▸ **getReason**(): *L*

*Defined in [Either.ts:59](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L59)*

**Returns:** *L*

___

###  getValue

▸ **getValue**(): *R*

*Defined in [Either.ts:53](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L53)*

**Returns:** *R*

___

###  getValueOr

▸ **getValueOr**(): *R*

*Defined in [Either.ts:56](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L56)*

**Returns:** *R*

___

###  isLeft

▸ **isLeft**(): *boolean*

*Defined in [Either.ts:74](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L74)*

**Returns:** *boolean*

___

###  isMonad

▸ **isMonad**(): *boolean*

*Defined in [Either.ts:71](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L71)*

**Returns:** *boolean*

___

###  isRight

▸ **isRight**(): *boolean*

*Defined in [Either.ts:77](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L77)*

**Returns:** *boolean*

___

###  match

▸ **match**<**R2**>(`pattern`: [EitherPattern](../modules/_either_.md#eitherpattern)‹R, R2›): *[Either](../modules/_either_.md#either)‹L, R2›*

*Defined in [Either.ts:31](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L31)*

**Type parameters:**

▪ **R2**

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | [EitherPattern](../modules/_either_.md#eitherpattern)‹R, R2› |

**Returns:** *[Either](../modules/_either_.md#either)‹L, R2›*

___

###  toMaybe

▸ **toMaybe**(): *[Maybe](../modules/_maybe_.md#maybe)‹R›*

*Defined in [Either.ts:80](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L80)*

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹R›*

___

###  toString

▸ **toString**(): *string*

*Defined in [Either.ts:83](https://github.com/hermann-p/pragmatic-fp-ts/blob/2f49fce/src/Either.ts#L83)*

**Returns:** *string*
