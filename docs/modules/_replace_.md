[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["replace"](_replace_.md)

# External module: "replace"

## Index

### Type aliases

* [Replace](_replace_.md#replace)
* [Replacer](_replace_.md#replacer)

### Functions

* [replace](_replace_.md#replace)

## Type aliases

###  Replace

Ƭ **Replace**: *string | RegExp*

*Defined in [src/replace.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/replace.ts#L3)*

___

###  Replacer

Ƭ **Replacer**: *string | [Endomorphism](_types_.md#endomorphism)‹string›*

*Defined in [src/replace.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/replace.ts#L4)*

## Functions

###  replace

▸ **replace**(`what`: [Replace](_replace_.md#replace), `by`: [Replacer](_replace_.md#replacer), `where`: string): *string*

*Defined in [src/replace.ts:6](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/replace.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`what` | [Replace](_replace_.md#replace) |
`by` | [Replacer](_replace_.md#replacer) |
`where` | string |

**Returns:** *string*

▸ **replace**(`what`: [Replace](_replace_.md#replace), `by`: [Replacer](_replace_.md#replacer)): *function*

*Defined in [src/replace.ts:7](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/replace.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`what` | [Replace](_replace_.md#replace) |
`by` | [Replacer](_replace_.md#replacer) |

**Returns:** *function*

▸ (`where`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`where` | string |

▸ **replace**(`what`: [Replace](_replace_.md#replace)): *function*

*Defined in [src/replace.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/ae00bcd/src/replace.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`what` | [Replace](_replace_.md#replace) |

**Returns:** *function*

▸ (`by`: [Replacer](_replace_.md#replacer)): *function*

**Parameters:**

Name | Type |
------ | ------ |
`by` | [Replacer](_replace_.md#replacer) |

▸ (`where`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`where` | string |
