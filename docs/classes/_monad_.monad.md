[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Monad"](../modules/_monad_.md) › [Monad](_monad_.monad.md)

# Class: Monad <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Monad**

  ↳ [Just](_maybe_.just.md)

## Implemented by

* [Left](_either_.left.md)
* [Nothing](_maybe_.nothing.md)
* [Right](_either_.right.md)

## Index

### Methods

* [bind](_monad_.monad.md#abstract-bind)
* [effect](_monad_.monad.md#abstract-effect)
* [getValue](_monad_.monad.md#abstract-getvalue)
* [getValueOr](_monad_.monad.md#abstract-getvalueor)
* [isMonad](_monad_.monad.md#abstract-ismonad)
* [match](_monad_.monad.md#abstract-match)

## Methods

### `Abstract` bind

▸ **bind**<**B**>(`fn`: [Mappable](../modules/_types_.md#mappable)‹T, B | [Monad](_monad_.monad.md)‹B››): *[Monad](_monad_.monad.md)‹B›*

*Defined in [Monad.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/e1dc667/src/Monad.ts#L4)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹T, B &#124; [Monad](_monad_.monad.md)‹B›› |

**Returns:** *[Monad](_monad_.monad.md)‹B›*

___

### `Abstract` effect

▸ **effect**(`fn`: [Effect](../modules/_types_.md#effect)‹T›): *[Monad](_monad_.monad.md)‹T›*

*Defined in [Monad.ts:9](https://github.com/hermann-p/pragmatic-fp-ts/blob/e1dc667/src/Monad.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Effect](../modules/_types_.md#effect)‹T› |

**Returns:** *[Monad](_monad_.monad.md)‹T›*

___

### `Abstract` getValue

▸ **getValue**(): *T*

*Defined in [Monad.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/e1dc667/src/Monad.ts#L5)*

**Returns:** *T*

___

### `Abstract` getValueOr

▸ **getValueOr**(`alternate`: T): *T*

*Defined in [Monad.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/e1dc667/src/Monad.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`alternate` | T |

**Returns:** *T*

___

### `Abstract` isMonad

▸ **isMonad**(): *boolean*

*Defined in [Monad.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/e1dc667/src/Monad.ts#L8)*

**Returns:** *boolean*

___

### `Abstract` match

▸ **match**(`matches`: [MatchPattern](../interfaces/_types_.matchpattern.md)‹T›): *[Monad](_monad_.monad.md)‹any›*

*Defined in [Monad.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/e1dc667/src/Monad.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`matches` | [MatchPattern](../interfaces/_types_.matchpattern.md)‹T› |

**Returns:** *[Monad](_monad_.monad.md)‹any›*
