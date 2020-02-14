[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["functools"](_functools_.md)

# External module: "functools"

## Index

### Variables

* [invert](_functools_.md#const-invert)

### Functions

* [complement](_functools_.md#const-complement)
* [constantly](_functools_.md#const-constantly)
* [flip](_functools_.md#const-flip)
* [identity](_functools_.md#const-identity)
* [ifElse](_functools_.md#const-ifelse)
* [negate](_functools_.md#const-negate)
* [not](_functools_.md#const-not)
* [unless](_functools_.md#const-unless)
* [when](_functools_.md#const-when)

## Variables

### `Const` invert

• **invert**: *complement* =  complement

*Defined in [functools.ts:19](https://github.com/hermann-p/pragmatic-fp-ts/blob/f524289/src/functools.ts#L19)*

Return the complement of a predicate.
complement(isEmpty)([]) === true

## Functions

### `Const` complement

▸ **complement**<**T**>(`pred`: [Predicate](_types_.md#predicate)‹T›): *[Predicate](_types_.md#predicate)‹T›*

*Defined in [functools.ts:14](https://github.com/hermann-p/pragmatic-fp-ts/blob/f524289/src/functools.ts#L14)*

Return the complement of a predicate.
complement(isEmpty)([]) === true

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *[Predicate](_types_.md#predicate)‹T›*

___

### `Const` constantly

▸ **constantly**<**T**>(`value`: T): *(Anonymous function)*

*Defined in [functools.ts:65](https://github.com/hermann-p/pragmatic-fp-ts/blob/f524289/src/functools.ts#L65)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *(Anonymous function)*

___

### `Const` flip

▸ **flip**<**A**, **B**, **C**>(`fn`: function): *(Anonymous function)*

*Defined in [functools.ts:37](https://github.com/hermann-p/pragmatic-fp-ts/blob/f524289/src/functools.ts#L37)*

Call fn with inverted arguments

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **fn**: *function*

▸ (`b`: B): *function*

**Parameters:**

Name | Type |
------ | ------ |
`b` | B |

▸ (`a`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *(Anonymous function)*

___

### `Const` identity

▸ **identity**<**T**>(`a`: T): *T*

*Defined in [functools.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/f524289/src/functools.ts#L8)*

mathematical identity.
const identity = a => a

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |

**Returns:** *T*

___

### `Const` ifElse

▸ **ifElse**<**A**, **B**>(`pred`: [Predicate](_types_.md#predicate)‹A›): *(Anonymous function)*

*Defined in [functools.ts:46](https://github.com/hermann-p/pragmatic-fp-ts/blob/f524289/src/functools.ts#L46)*

composable if-else-switch

const tellIfItIsNil = ifElse(isNil)(() => "it is nil")(() => "it is not nil")
tellIfItIsNil(null)  ->  "it is nil"
tellIfItIsNil(1)     ->  "it is not nil"

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹A› |

**Returns:** *(Anonymous function)*

___

### `Const` negate

▸ **negate**(`val`: number | [Maybe](_maybe_.md#maybe)‹number›): *[Just](../classes/_maybe_.just.md)‹number› | [Nothing](../classes/_maybe_.nothing.md)‹number›*

*Defined in [functools.ts:32](https://github.com/hermann-p/pragmatic-fp-ts/blob/f524289/src/functools.ts#L32)*

Negate a number

**Parameters:**

Name | Type |
------ | ------ |
`val` | number &#124; [Maybe](_maybe_.md#maybe)‹number› |

**Returns:** *[Just](../classes/_maybe_.just.md)‹number› | [Nothing](../classes/_maybe_.nothing.md)‹number›*

___

### `Const` not

▸ **not**(`val`: any): *boolean*

*Defined in [functools.ts:24](https://github.com/hermann-p/pragmatic-fp-ts/blob/f524289/src/functools.ts#L24)*

Invert truthyness

**Parameters:**

Name | Type |
------ | ------ |
`val` | any |

**Returns:** *boolean*

___

### `Const` unless

▸ **unless**<**T**>(`pred`: [Predicate](_types_.md#predicate)‹T›): *(Anonymous function)*

*Defined in [functools.ts:60](https://github.com/hermann-p/pragmatic-fp-ts/blob/f524289/src/functools.ts#L60)*

applies elseFn only when pred is false

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *(Anonymous function)*

___

### `Const` when

▸ **when**<**T**>(`pred`: [Predicate](_types_.md#predicate)‹T›): *(Anonymous function)*

*Defined in [functools.ts:54](https://github.com/hermann-p/pragmatic-fp-ts/blob/f524289/src/functools.ts#L54)*

applies ifFn only when pred is true

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *(Anonymous function)*
