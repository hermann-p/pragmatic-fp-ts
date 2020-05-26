[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["Maybe"](../modules/_maybe_.md) › [Nothing](_maybe_.nothing.md)

# Class: Nothing <**A**>

## Type parameters

▪ **A**

## Hierarchy

* [Monad](_types_.monad.md)‹A›

  ↳ **Nothing**

## Index

### Methods

* [bind](_maybe_.nothing.md#bind)
* [bindM](_maybe_.nothing.md#bindm)
* [effect](_maybe_.nothing.md#effect)
* [filter](_maybe_.nothing.md#filter)
* [getValue](_maybe_.nothing.md#getvalue)
* [getValueOr](_maybe_.nothing.md#getvalueor)
* [match](_maybe_.nothing.md#match)
* [to](_maybe_.nothing.md#to)

## Methods

###  bind

▸ **bind**<**B**>(`_`: [Mappable](../modules/_types_.md#mappable)‹A, B›): *[Maybe](../modules/_maybe_.md#maybe)‹B›*

*Overrides [Monad](_types_.monad.md).[bind](_types_.monad.md#abstract-bind)*

*Defined in [Maybe.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Maybe.ts#L8)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`_` | [Mappable](../modules/_types_.md#mappable)‹A, B› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹B›*

___

###  bindM

▸ **bindM**<**B**>(`_`: [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹A›, [Monad](_types_.monad.md)‹B››): *[Maybe](../modules/_maybe_.md#maybe)‹B›*

*Overrides [Monad](_types_.monad.md).[bindM](_types_.monad.md#abstract-bindm)*

*Defined in [Maybe.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Maybe.ts#L11)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`_` | [Mappable](../modules/_types_.md#mappable)‹[Monad](_types_.monad.md)‹A›, [Monad](_types_.monad.md)‹B›› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹B›*

___

###  effect

▸ **effect**(`_`: any): *[Maybe](../modules/_maybe_.md#maybe)‹A›*

*Overrides [Monad](_types_.monad.md).[effect](_types_.monad.md#abstract-effect)*

*Defined in [Maybe.ts:17](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Maybe.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | any |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹A›*

___

###  filter

▸ **filter**(`_`: any): *[Maybe](../modules/_maybe_.md#maybe)‹A›*

*Overrides [Monad](_types_.monad.md).[filter](_types_.monad.md#abstract-filter)*

*Defined in [Maybe.ts:14](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Maybe.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | any |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹A›*

___

###  getValue

▸ **getValue**(): *A*

*Overrides [Monad](_types_.monad.md).[getValue](_types_.monad.md#abstract-getvalue)*

*Defined in [Maybe.ts:20](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Maybe.ts#L20)*

**Returns:** *A*

___

###  getValueOr

▸ **getValueOr**(`alt`: A): *A*

*Overrides [Monad](_types_.monad.md).[getValueOr](_types_.monad.md#abstract-getvalueor)*

*Defined in [Maybe.ts:23](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Maybe.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`alt` | A |

**Returns:** *A*

___

###  match

▸ **match**<**B**>(`matcher`: [MaybeMatcher](../modules/_maybe_.md#maybematcher)‹A, B›): *[Maybe](../modules/_maybe_.md#maybe)‹B›*

*Defined in [Maybe.ts:26](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/Maybe.ts#L26)*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`matcher` | [MaybeMatcher](../modules/_maybe_.md#maybematcher)‹A, B› |

**Returns:** *[Maybe](../modules/_maybe_.md#maybe)‹B›*

___

###  to

▸ **to**<**B**>(`transform`: [Transform](../modules/_types_.md#transform)‹A, B›): *ReturnType‹function›*

*Inherited from [Monad](_types_.monad.md).[to](_types_.monad.md#to)*

*Defined in [types.ts:112](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/types.ts#L112)*

**Type parameters:**

▪ **B**: *[Monad](_types_.monad.md)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`transform` | [Transform](../modules/_types_.md#transform)‹A, B› |

**Returns:** *ReturnType‹function›*
