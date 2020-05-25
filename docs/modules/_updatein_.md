[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["updateIn"](_updatein_.md)

# External module: "updateIn"

## Index

### Type aliases

* [ObjKey](_updatein_.md#objkey)

### Functions

* [updateIn](_updatein_.md#updatein)

## Type aliases

###  ObjKey

Ƭ **ObjKey**: *string | number*

Defined in updateIn.ts:4

## Functions

###  updateIn

▸ **updateIn**<**TInput**, **A**, **B**>(`path`: [ObjKey](_updatein_.md#objkey)[], `fn`: [Endomorphism](_types_.md#endomorphism)‹A›, `dict`: TInput): *TInput*

Defined in updateIn.ts:5

**Type parameters:**

▪ **TInput**: *[Dictionary](_types_.md#dictionary)*

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`path` | [ObjKey](_updatein_.md#objkey)[] |
`fn` | [Endomorphism](_types_.md#endomorphism)‹A› |
`dict` | TInput |

**Returns:** *TInput*

▸ **updateIn**<**A**>(`path`: [ObjKey](_updatein_.md#objkey)[], `fn`: [Endomorphism](_types_.md#endomorphism)‹A›): *function*

Defined in updateIn.ts:11

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`path` | [ObjKey](_updatein_.md#objkey)[] |
`fn` | [Endomorphism](_types_.md#endomorphism)‹A› |

**Returns:** *function*

▸ <**TInput**>(`dict`: TInput): *TInput*

**Type parameters:**

▪ **TInput**: *[Dictionary](_types_.md#dictionary)*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | TInput |

▸ **updateIn**(`path`: [ObjKey](_updatein_.md#objkey)[]): *function*

Defined in updateIn.ts:16

**Parameters:**

Name | Type |
------ | ------ |
`path` | [ObjKey](_updatein_.md#objkey)[] |

**Returns:** *function*

▸ <**A**>(`fn`: [Endomorphism](_types_.md#endomorphism)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Endomorphism](_types_.md#endomorphism)‹A› |

▸ <**TInput**>(`dict`: TInput): *TInput*

**Type parameters:**

▪ **TInput**: *[Dictionary](_types_.md#dictionary)*

**Parameters:**

Name | Type |
------ | ------ |
`dict` | TInput |
