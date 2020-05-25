[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["tap"](_tap_.md)

# External module: "tap"

## Index

### Functions

* [tap](_tap_.md#tap)

## Functions

###  tap

▸ **tap**<**A**, **M**>(`effect`: [Effect](_types_.md#effect)‹A›, `value`: [Monad](../classes/_types_.monad.md)‹A›): *M*

Defined in tap.ts:3

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

Defined in tap.ts:7

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

Defined in tap.ts:8

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`effect` | [Effect](_types_.md#effect)‹A› |
`value` | A |

**Returns:** *A*

▸ **tap**<**A**>(`effect`: [Effect](_types_.md#effect)‹A›): *function*

Defined in tap.ts:9

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
