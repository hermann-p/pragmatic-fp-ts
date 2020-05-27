[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["subtract"](_subtract_.md)

# External module: "subtract"

## Index

### Functions

* [dec](_subtract_.md#dec)
* [subtract](_subtract_.md#subtract)
* [subtractFrom](_subtract_.md#subtractfrom)

## Functions

###  dec

▸ **dec**(`n`: number): *number*

*Defined in [src/subtract.ts:14](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/subtract.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *number*

___

###  subtract

▸ **subtract**(`subtrahend`: number, `minuend`: number): *number*

*Defined in [src/subtract.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/subtract.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`subtrahend` | number |
`minuend` | number |

**Returns:** *number*

▸ **subtract**(`subtrahend`: number): *function*

*Defined in [src/subtract.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/subtract.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`subtrahend` | number |

**Returns:** *function*

▸ (`minuend`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`minuend` | number |

___

###  subtractFrom

▸ **subtractFrom**(`minuend`: number, `subtrahend?`: undefined | number): *number*

*Defined in [src/subtract.ts:18](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/subtract.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`minuend` | number |
`subtrahend?` | undefined &#124; number |

**Returns:** *number*

▸ **subtractFrom**(`minuend`: number): *function*

*Defined in [src/subtract.ts:19](https://github.com/hermann-p/pragmatic-fp-ts/blob/c9716de/src/subtract.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`minuend` | number |

**Returns:** *function*

▸ (`subtrahend?`: undefined | number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`subtrahend?` | undefined &#124; number |
