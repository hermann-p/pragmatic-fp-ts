[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["string"](_string_.md)

# External module: "string"

## Index

### Type aliases

* [ReplacementFunction](_string_.md#replacementfunction)

### Variables

* [matches](_string_.md#const-matches)

### Functions

* [replace](_string_.md#const-replace)
* [split](_string_.md#const-split)
* [test](_string_.md#const-test)
* [toLower](_string_.md#const-tolower)
* [toUpper](_string_.md#const-toupper)

## Type aliases

###  ReplacementFunction

Ƭ **ReplacementFunction**: *function*

*Defined in [string.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/string.ts#L4)*

#### Type declaration:

▸ (`substring`: string, ...`args`: any[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`substring` | string |
`...args` | any[] |

## Variables

### `Const` matches

• **matches**: *test* =  test

*Defined in [string.ts:12](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/string.ts#L12)*

## Functions

### `Const` replace

▸ **replace**(`pattern`: string | RegExp): *(Anonymous function)*

*Defined in [string.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/string.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | string &#124; RegExp |

**Returns:** *(Anonymous function)*

___

### `Const` split

▸ **split**(`delimiter`: [MaybeType](_types_.md#maybetype)‹string›): *(Anonymous function)*

*Defined in [string.ts:17](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/string.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`delimiter` | [MaybeType](_types_.md#maybetype)‹string› |

**Returns:** *(Anonymous function)*

___

### `Const` test

▸ **test**(`regex`: RegExp): *[Predicate](_types_.md#predicate)‹string›*

*Defined in [string.ts:10](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/string.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`regex` | RegExp |

**Returns:** *[Predicate](_types_.md#predicate)‹string›*

___

### `Const` toLower

▸ **toLower**(`str`: [MaybeType](_types_.md#maybetype)‹string›): *[Just](../classes/_maybe_.just.md)‹string› | [Nothing](../classes/_maybe_.nothing.md)‹string›*

*Defined in [string.ts:15](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/string.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | [MaybeType](_types_.md#maybetype)‹string› |

**Returns:** *[Just](../classes/_maybe_.just.md)‹string› | [Nothing](../classes/_maybe_.nothing.md)‹string›*

___

### `Const` toUpper

▸ **toUpper**(`str`: [MaybeType](_types_.md#maybetype)‹string›): *[Just](../classes/_maybe_.just.md)‹string› | [Nothing](../classes/_maybe_.nothing.md)‹string›*

*Defined in [string.ts:14](https://github.com/hermann-p/pragmatic-fp-ts/blob/f962e01/src/string.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | [MaybeType](_types_.md#maybetype)‹string› |

**Returns:** *[Just](../classes/_maybe_.just.md)‹string› | [Nothing](../classes/_maybe_.nothing.md)‹string›*
