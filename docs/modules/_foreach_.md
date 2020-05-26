[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["forEach"](_foreach_.md)

# External module: "forEach"

## Index

### Type aliases

* [ObjEffect](_foreach_.md#objeffect)

### Functions

* [forEach](_foreach_.md#foreach)

## Type aliases

###  ObjEffect

Ƭ **ObjEffect**: *function*

*Defined in [forEach.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/forEach.ts#L5)*

#### Type declaration:

▸ (`value`: A, `key?`: undefined | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`key?` | undefined &#124; string |

## Functions

###  forEach

▸ **forEach**<**A**>(`effect`: [Effect](_types_.md#effect)‹A›, `coll`: A[]): *A[]*

*Defined in [forEach.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/forEach.ts#L6)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`effect` | [Effect](_types_.md#effect)‹A› |
`coll` | A[] |

**Returns:** *A[]*

▸ **forEach**<**A**>(`effect`: [Effect](_types_.md#effect)‹A›, `coll`: [Dictionary](_types_.md#dictionary)‹A›): *[Dictionary](_types_.md#dictionary)‹A›*

*Defined in [forEach.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/forEach.ts#L7)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`effect` | [Effect](_types_.md#effect)‹A› |
`coll` | [Dictionary](_types_.md#dictionary)‹A› |

**Returns:** *[Dictionary](_types_.md#dictionary)‹A›*

▸ **forEach**<**A**>(`effect`: [Effect](_types_.md#effect)‹A›): *function*

*Defined in [forEach.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/16cc592/src/forEach.ts#L11)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`effect` | [Effect](_types_.md#effect)‹A› |

**Returns:** *function*

▸ <**B**>(`coll`: B): *B extends A[] ? A[] : Dictionary<A>*

**Type parameters:**

▪ **B**: *A[] | [Dictionary](_types_.md#dictionary)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | B |
