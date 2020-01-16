[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["logic"](_logic_.md)

# External module: "logic"

## Index

### Type aliases

* [CondTuple](_logic_.md#condtuple)

### Functions

* [allPass](_logic_.md#const-allpass)
* [cond](_logic_.md#const-cond)
* [eqShallow](_logic_.md#const-eqshallow)
* [equals](_logic_.md#const-equals)
* [every](_logic_.md#const-every)
* [some](_logic_.md#const-some)
* [somePass](_logic_.md#const-somepass)

## Type aliases

###  CondTuple

Ƭ **CondTuple**: *[[Predicate](_types_.md#predicate)‹A›, [Mappable](_types_.md#mappable)‹A, B›]*

*Defined in [logic.ts:85](https://github.com/hermann-p/pragmatic-fp-ts/blob/bc9a9d0/src/logic.ts#L85)*

## Functions

### `Const` allPass

▸ **allPass**<**T**>(`predicates`: [Predicate](_types_.md#predicate)‹T›[]): *(Anonymous function)*

*Defined in [logic.ts:42](https://github.com/hermann-p/pragmatic-fp-ts/blob/bc9a9d0/src/logic.ts#L42)*

Does the value pass all predicates in the array?

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicates` | [Predicate](_types_.md#predicate)‹T›[] |

**Returns:** *(Anonymous function)*

___

### `Const` cond

▸ **cond**<**A**, **B**>(`conditions`: [CondTuple](_logic_.md#condtuple)‹A, B›[]): *(Anonymous function)*

*Defined in [logic.ts:86](https://github.com/hermann-p/pragmatic-fp-ts/blob/bc9a9d0/src/logic.ts#L86)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`conditions` | [CondTuple](_logic_.md#condtuple)‹A, B›[] |

**Returns:** *(Anonymous function)*

___

### `Const` eqShallow

▸ **eqShallow**(`a`: [MaybeType](_types_.md#maybetype)‹unknown›): *(Anonymous function)*

*Defined in [logic.ts:74](https://github.com/hermann-p/pragmatic-fp-ts/blob/bc9a9d0/src/logic.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [MaybeType](_types_.md#maybetype)‹unknown› |

**Returns:** *(Anonymous function)*

___

### `Const` equals

▸ **equals**(`a`: [MaybeType](_types_.md#maybetype)‹unknown›): *(Anonymous function)*

*Defined in [logic.ts:66](https://github.com/hermann-p/pragmatic-fp-ts/blob/bc9a9d0/src/logic.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [MaybeType](_types_.md#maybetype)‹unknown› |

**Returns:** *(Anonymous function)*

___

### `Const` every

▸ **every**<**T**>(`pred`: [Predicate](_types_.md#predicate)‹T›): *(Anonymous function)*

*Defined in [logic.ts:50](https://github.com/hermann-p/pragmatic-fp-ts/blob/bc9a9d0/src/logic.ts#L50)*

Do all values in the array pass the predicate?

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *(Anonymous function)*

___

### `Const` some

▸ **some**<**T**>(`pred`: [Predicate](_types_.md#predicate)‹T›): *(Anonymous function)*

*Defined in [logic.ts:23](https://github.com/hermann-p/pragmatic-fp-ts/blob/bc9a9d0/src/logic.ts#L23)*

Does any value in the collection pass the predicate?
ramda calls this `any`, but we want to avoid that word in TypeScript

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *(Anonymous function)*

___

### `Const` somePass

▸ **somePass**<**T**>(`predicates`: [Predicate](_types_.md#predicate)‹T›[]): *(Anonymous function)*

*Defined in [logic.ts:12](https://github.com/hermann-p/pragmatic-fp-ts/blob/bc9a9d0/src/logic.ts#L12)*

Does any of the array of predicates pass when applied to the value?
ramda calls this `anyPass`, but we want to avoid `any` in TypeScript

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicates` | [Predicate](_types_.md#predicate)‹T›[] |

**Returns:** *(Anonymous function)*
