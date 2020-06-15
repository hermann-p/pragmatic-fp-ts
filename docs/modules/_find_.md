[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["find"](_find_.md)

# External module: "find"

## Index

### Functions

* [find](_find_.md#find)

## Functions

###  find

▸ **find**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›, `coll`: A[]): *A | null*

*Defined in [src/find.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/find.ts#L3)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |
`coll` | A[] |

**Returns:** *A | null*

▸ **find**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›, `dict`: [Dictionary](_types_.md#dictionary)‹A›): *A | null*

*Defined in [src/find.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/find.ts#L4)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |
`dict` | [Dictionary](_types_.md#dictionary)‹A› |

**Returns:** *A | null*

▸ **find**<**A**>(`condition`: [Predicate](_types_.md#predicate)‹A›): *function*

*Defined in [src/find.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/find.ts#L6)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Predicate](_types_.md#predicate)‹A› |

**Returns:** *function*

▸ <**B**>(`coll`: B): *B extends A[] ? A : B extends Dictionary<A> ? A : never | null*

**Type parameters:**

▪ **B**: *A[] | [Dictionary](_types_.md#dictionary)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | B |
