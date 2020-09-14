[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["compose"](../modules/_compose_.md) › [ComposeFunction](_compose_.composefunction.md)

# Class: ComposeFunction <**A, B, A, B**>

Composes unary functions from right to left, using infix/monadic binding style

```
const fn = compose(inc)._(Math.abs)
fn(-5) //: 6
```

## Type parameters

▪ **A**

▪ **B**

▪ **A**

▪ **B**

## Hierarchy

* Function

  ↳ **ComposeFunction**

## Callable

▸ (`input`: A): *B*

*Defined in [src/compose.ts:12](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/compose.ts#L12)*

Composes unary functions from right to left, using infix/monadic binding style

```
const fn = compose(inc)._(Math.abs)
fn(-5) //: 6
```

**Parameters:**

Name | Type |
------ | ------ |
`input` | A |

**Returns:** *B*

## Index

### Constructors

* [constructor](_compose_.composefunction.md#constructor)

### Properties

* [arguments](_compose_.composefunction.md#arguments)
* [caller](_compose_.composefunction.md#caller)
* [fn](_compose_.composefunction.md#fn)
* [length](_compose_.composefunction.md#length)
* [name](_compose_.composefunction.md#name)
* [prototype](_compose_.composefunction.md#prototype)
* [Function](_compose_.composefunction.md#static-function)

### Methods

* [[Symbol.hasInstance]](_compose_.composefunction.md#[symbol.hasinstance])
* [_](_compose_.composefunction.md#_)
* [apply](_compose_.composefunction.md#apply)
* [bind](_compose_.composefunction.md#bind)
* [call](_compose_.composefunction.md#call)
* [toString](_compose_.composefunction.md#tostring)

## Constructors

###  constructor

\+ **new ComposeFunction**(`fn`: [Mappable](../modules/_types_.md#mappable)‹A, B›): *[ComposeFunction](_compose_.composefunction.md)*

*Defined in [src/compose.ts:18](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/compose.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹A, B› |

**Returns:** *[ComposeFunction](_compose_.composefunction.md)*

## Properties

###  arguments

• **arguments**: *any*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:302

___

###  caller

• **caller**: *Function*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:303

___

###  fn

• **fn**: *[Mappable](../modules/_types_.md#mappable)‹A, B›*

*Defined in [src/compose.ts:18](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/compose.ts#L18)*

___

###  length

• **length**: *number*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:299

___

###  name

• **name**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:97

Returns the name of the function. Function names are read-only and can not be changed.

___

###  prototype

• **prototype**: *any*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:298

___

### `Static` Function

▪ **Function**: *FunctionConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:316

## Methods

###  [Symbol.hasInstance]

▸ **[Symbol.hasInstance]**(`value`: any): *boolean*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:157

Determines whether the given value inherits from this function if this function was used
as a constructor function.

A constructor function can control which objects are recognized as its instances by
'instanceof' by overriding this method.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*

___

###  _

▸ **_**<**C**>(`after`: [Mappable](../modules/_types_.md#mappable)‹C, A›): *[ComposeFunction](_compose_.composefunction.md)‹C, B›*

*Defined in [src/compose.ts:14](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/compose.ts#L14)*

**Type parameters:**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`after` | [Mappable](../modules/_types_.md#mappable)‹C, A› |

**Returns:** *[ComposeFunction](_compose_.composefunction.md)‹C, B›*

___

###  apply

▸ **apply**(`this`: Function, `thisArg`: any, `argArray?`: any): *any*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:278

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | Function | - |
`thisArg` | any | The object to be used as the this object. |
`argArray?` | any | A set of arguments to be passed to the function.  |

**Returns:** *any*

___

###  bind

▸ **bind**(`this`: Function, `thisArg`: any, ...`argArray`: any[]): *any*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:293

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | Function | - |
`thisArg` | any | An object to which the this keyword can refer inside the new function. |
`...argArray` | any[] | A list of arguments to be passed to the new function.  |

**Returns:** *any*

___

###  call

▸ **call**(`this`: Function, `thisArg`: any, ...`argArray`: any[]): *any*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:285

Calls a method of an object, substituting another object for the current object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | Function | - |
`thisArg` | any | The object to be used as the current object. |
`...argArray` | any[] | A list of arguments to be passed to the method.  |

**Returns:** *any*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:296

Returns a string representation of a function.

**Returns:** *string*
