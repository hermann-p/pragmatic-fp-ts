[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["tap"](_tap_.md)

# External module: "tap"

## Index

### Functions

* [tap](_tap_.md#tap)

## Functions

###  tap

▸ **tap**<**A**, **M**>(`effect`: [Effect](_types_.md#effect)‹A›, `value`: [Monad](../classes/_types_.monad.md)‹A›): *M*

*Defined in [src/tap.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/87551e7/src/tap.ts#L3)*

**Type parameters:**

▪ **A**

▪ **M**: *[Monad](../classes/_types_.monad.md)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`effect` | [Effect](_types_.md#effect)‹A› |
`value` | [Monad](../classes/_types_.monad.md)‹A› |

**Returns:** *M*

▸ **tap**<**A**, **M**>(`effect`: [Effect](_types_.md#effect)‹A›): *function*

*Defined in [src/tap.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/87551e7/src/tap.ts#L7)*

**Type parameters:**

▪ **A**

▪ **M**: *[Monad](../classes/_types_.monad.md)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`effect` | [Effect](_types_.md#effect)‹A› |

**Returns:** *function*

▸ (`value`: A): *M*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ **tap**<**A**>(`effect`: [Effect](_types_.md#effect)‹A›, `value`: A): *A*

*Defined in [src/tap.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/87551e7/src/tap.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`effect` | [Effect](_types_.md#effect)‹A› |
`value` | A |

**Returns:** *A*

▸ **tap**<**A**>(`effect`: [Effect](_types_.md#effect)‹A›): *function*

*Defined in [src/tap.ts:9](https://github.com/hermann-p/pragmatic-fp-ts/blob/87551e7/src/tap.ts#L9)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`effect` | [Effect](_types_.md#effect)‹A› |

**Returns:** *function*

▸ (`value`: A): *A*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
