[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["compose"](../modules/_compose_.md) › [Compose](_compose_.compose.md)

# Class: Compose <**A, B**>

Composes unary functions from right to left, using infix/monadic binding style

```
const fn = compose(inc)._(Math.abs)
fn(-5) //: 6
```

## Type parameters

▪ **A**

▪ **B**

## Hierarchy

* Function

  ↳ **Compose**

## Index

### Constructors

* [constructor](_compose_.compose.md#constructor)

### Properties

* [arguments](_compose_.compose.md#arguments)
* [caller](_compose_.compose.md#caller)
* [fn](_compose_.compose.md#fn)
* [length](_compose_.compose.md#length)
* [name](_compose_.compose.md#name)
* [prototype](_compose_.compose.md#prototype)
* [Function](_compose_.compose.md#static-function)

### Methods

* [[Symbol.hasInstance]](_compose_.compose.md#[symbol.hasinstance])
* [_](_compose_.compose.md#_)
* [apply](_compose_.compose.md#apply)
* [bind](_compose_.compose.md#bind)
* [call](_compose_.compose.md#call)
* [toString](_compose_.compose.md#tostring)

## Constructors

###  constructor

\+ **new Compose**(`fn`: [Mappable](../modules/_types_.md#mappable)‹A, B›): *[Compose](_compose_.compose.md)*

*Defined in [src/compose.ts:13](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/compose.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹A, B› |

**Returns:** *[Compose](_compose_.compose.md)*

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

*Defined in [src/compose.ts:13](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/compose.ts#L13)*

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

▸ **_**<**C**>(`prevFn`: [Mappable](../modules/_types_.md#mappable)‹C, A›): *[Compose](_compose_.compose.md)‹C, B›*

*Defined in [src/compose.ts:24](https://github.com/hermann-p/pragmatic-fp-ts/blob/6562256/src/compose.ts#L24)*

**Type parameters:**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`prevFn` | [Mappable](../modules/_types_.md#mappable)‹C, A› |

**Returns:** *[Compose](_compose_.compose.md)‹C, B›*

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
