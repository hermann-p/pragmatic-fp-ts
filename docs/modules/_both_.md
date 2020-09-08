[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["both"](_both_.md)

# External module: "both"

## Index

### Functions

* [both](_both_.md#both)

## Functions

###  both

▸ **both**<**A**>(`p1`: [Predicate](_types_.md#predicate)‹A›, `p2`: [Predicate](_types_.md#predicate)‹A›, `value`: A): *boolean*

*Defined in [src/both.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/ce213e6/src/both.ts#L5)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`p1` | [Predicate](_types_.md#predicate)‹A› |
`p2` | [Predicate](_types_.md#predicate)‹A› |
`value` | A |

**Returns:** *boolean*

▸ **both**<**A**>(`p1`: [Predicate](_types_.md#predicate)‹A›, `p2`: [Predicate](_types_.md#predicate)‹A›): *function*

*Defined in [src/both.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/ce213e6/src/both.ts#L6)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`p1` | [Predicate](_types_.md#predicate)‹A› |
`p2` | [Predicate](_types_.md#predicate)‹A› |

**Returns:** *function*

▸ (`value`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ **both**<**A**>(`p1`: [Predicate](_types_.md#predicate)‹A›): *function*

*Defined in [src/both.ts:10](https://github.com/hermann-p/pragmatic-fp-ts/blob/ce213e6/src/both.ts#L10)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`p1` | [Predicate](_types_.md#predicate)‹A› |

**Returns:** *function*

▸ (`p2`: [Predicate](_types_.md#predicate)‹A›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`p2` | [Predicate](_types_.md#predicate)‹A› |

▸ (`value`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
