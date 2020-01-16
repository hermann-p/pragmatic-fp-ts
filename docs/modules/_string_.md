[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["string"](_string_.md)

# External module: "string"

## Index

### Type aliases

* [ReplacementFunction](_string_.md#replacementfunction)

### Variables

* [matches](_string_.md#const-matches)

### Functions

* [replace](_string_.md#const-replace)
* [test](_string_.md#const-test)
* [toLower](_string_.md#const-tolower)
* [toUpper](_string_.md#const-toupper)

## Type aliases

###  ReplacementFunction

Ƭ **ReplacementFunction**: *function*

Defined in string.ts:4

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

Defined in string.ts:12

## Functions

### `Const` replace

▸ **replace**(`pattern`: string | RegExp): *(Anonymous function)*

Defined in string.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | string &#124; RegExp |

**Returns:** *(Anonymous function)*

___

### `Const` test

▸ **test**(`regex`: RegExp): *[Predicate](_types_.md#predicate)‹string›*

Defined in string.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`regex` | RegExp |

**Returns:** *[Predicate](_types_.md#predicate)‹string›*

___

### `Const` toLower

▸ **toLower**(`str`: [MaybeType](_types_.md#maybetype)‹string›): *[Just](../classes/_maybe_.just.md)‹string› | [Nothing](../classes/_maybe_.nothing.md)‹string›*

Defined in string.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`str` | [MaybeType](_types_.md#maybetype)‹string› |

**Returns:** *[Just](../classes/_maybe_.just.md)‹string› | [Nothing](../classes/_maybe_.nothing.md)‹string›*

___

### `Const` toUpper

▸ **toUpper**(`str`: [MaybeType](_types_.md#maybetype)‹string›): *[Just](../classes/_maybe_.just.md)‹string› | [Nothing](../classes/_maybe_.nothing.md)‹string›*

Defined in string.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`str` | [MaybeType](_types_.md#maybetype)‹string› |

**Returns:** *[Just](../classes/_maybe_.just.md)‹string› | [Nothing](../classes/_maybe_.nothing.md)‹string›*