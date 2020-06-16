[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["pipe"](../modules/_pipe_.md) › [PipeFunction](_pipe_.pipefunction.md)

# Class: PipeFunction <**A, B, A, B**>

## Type parameters

▪ **A**

▪ **B**

▪ **A**

▪ **B**

## Hierarchy

* Function

  ↳ **PipeFunction**

## Callable

▸ (`input`: A): *B*

*Defined in [src/pipe.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/pipe.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | A |

**Returns:** *B*

## Index

### Constructors

* [constructor](_pipe_.pipefunction.md#constructor)

### Properties

* [arguments](_pipe_.pipefunction.md#arguments)
* [caller](_pipe_.pipefunction.md#caller)
* [fn](_pipe_.pipefunction.md#fn)
* [length](_pipe_.pipefunction.md#length)
* [name](_pipe_.pipefunction.md#name)
* [prototype](_pipe_.pipefunction.md#prototype)
* [Function](_pipe_.pipefunction.md#static-function)

### Methods

* [[Symbol.hasInstance]](_pipe_.pipefunction.md#[symbol.hasinstance])
* [_](_pipe_.pipefunction.md#_)
* [apply](_pipe_.pipefunction.md#apply)
* [bind](_pipe_.pipefunction.md#bind)
* [call](_pipe_.pipefunction.md#call)
* [toString](_pipe_.pipefunction.md#tostring)

## Constructors

###  constructor

\+ **new PipeFunction**(`fn`: [Mappable](../modules/_types_.md#mappable)‹A, B›): *[PipeFunction](_pipe_.pipefunction.md)*

*Defined in [src/pipe.ts:9](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/pipe.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](../modules/_types_.md#mappable)‹A, B› |

**Returns:** *[PipeFunction](_pipe_.pipefunction.md)*

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

*Defined in [src/pipe.ts:9](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/pipe.ts#L9)*

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

▸ **_**<**C**>(`nextFn`: [Mappable](../modules/_types_.md#mappable)‹B, C›): *[PipeFunction](_pipe_.pipefunction.md)‹A, C›*

*Defined in [src/pipe.ts:5](https://github.com/hermann-p/pragmatic-fp-ts/blob/d13f3c1/src/pipe.ts#L5)*

**Type parameters:**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`nextFn` | [Mappable](../modules/_types_.md#mappable)‹B, C› |

**Returns:** *[PipeFunction](_pipe_.pipefunction.md)‹A, C›*

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
