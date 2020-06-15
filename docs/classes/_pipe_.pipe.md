[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["pipe"](../modules/_pipe_.md) › [Pipe](_pipe_.pipe.md)

# Class: Pipe <**A, B**>

## Type parameters

▪ **A**

▪ **B**

## Hierarchy

* Function

  ↳ **Pipe**

## Index

### Constructors

* [constructor](_pipe_.pipe.md#constructor)

### Properties

* [arguments](_pipe_.pipe.md#arguments)
* [caller](_pipe_.pipe.md#caller)
* [fn](_pipe_.pipe.md#fn)
* [length](_pipe_.pipe.md#length)
* [name](_pipe_.pipe.md#name)
* [prototype](_pipe_.pipe.md#prototype)
* [Function](_pipe_.pipe.md#static-function)

### Methods

* [[Symbol.hasInstance]](_pipe_.pipe.md#[symbol.hasinstance])
* [_](_pipe_.pipe.md#_)
* [apply](_pipe_.pipe.md#apply)
* [bind](_pipe_.pipe.md#bind)
* [call](_pipe_.pipe.md#call)
* [toString](_pipe_.pipe.md#tostring)

## Constructors

###  constructor

\+ **new Pipe**(`fn`: [Mappable](../modules/_types_.md#mappable)‹A, B›): *[Pipe](_pipe_.pipe.md)*

*Defined in [src/pipe.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/pipe.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹A, B› |

**Returns:** *[Pipe](_pipe_.pipe.md)*

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

*Defined in [src/pipe.ts:4](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/pipe.ts#L4)*

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

▸ **_**<**C**>(`nextFn`: [Mappable](../modules/_types_.md#mappable)‹B, C›): *[Pipe](_pipe_.pipe.md)‹A, C›*

*Defined in [src/pipe.ts:16](https://github.com/hermann-p/pragmatic-fp-ts/blob/472cce0/src/pipe.ts#L16)*

**Type parameters:**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`nextFn` | [Mappable](../modules/_types_.md#mappable)‹B, C› |

**Returns:** *[Pipe](_pipe_.pipe.md)‹A, C›*

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
