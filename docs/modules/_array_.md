[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["array"](_array_.md)

# External module: "array"

## Index

### Variables

* [first](_array_.md#const-first)
* [includes](_array_.md#const-includes)
* [last](_array_.md#const-last)
* [size](_array_.md#const-size)

### Functions

* [__mapOr](_array_.md#const-__mapor)
* [__reverse](_array_.md#const-__reverse)
* [__sortBy](_array_.md#const-__sortby)
* [__take](_array_.md#const-__take)
* [__takeWhile](_array_.md#const-__takewhile)
* [append](_array_.md#append)
* [butLast](_array_.md#const-butlast)
* [conj](_array_.md#const-conj)
* [cons](_array_.md#const-cons)
* [contains](_array_.md#contains)
* [count](_array_.md#const-count)
* [countBy](_array_.md#countby)
* [filter](_array_.md#filter)
* [find](_array_.md#find)
* [flatMap](_array_.md#const-flatmap)
* [flatten](_array_.md#const-flatten)
* [groupBy](_array_.md#groupby)
* [head](_array_.md#const-head)
* [insertAt](_array_.md#insertat)
* [isIn](_array_.md#isin)
* [join](_array_.md#const-join)
* [map](_array_.md#const-map)
* [mapJust](_array_.md#const-mapjust)
* [mapOr](_array_.md#const-mapor)
* [prepend](_array_.md#const-prepend)
* [range](_array_.md#const-range)
* [reduce](_array_.md#const-reduce)
* [reject](_array_.md#reject)
* [removeAt](_array_.md#removeat)
* [rest](_array_.md#const-rest)
* [reverse](_array_.md#const-reverse)
* [sortBy](_array_.md#const-sortby)
* [tail](_array_.md#const-tail)
* [take](_array_.md#const-take)
* [takeWhile](_array_.md#const-takewhile)

## Variables

### `Const` first

• **first**: *head* =  head

*Defined in [array.ts:18](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L18)*

returns first element of an array

___

### `Const` includes

• **includes**: *[contains](_array_.md#contains)* =  contains

*Defined in [array.ts:204](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L204)*

___

### `Const` last

• **last**: *tail* =  tail

*Defined in [array.ts:28](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L28)*

returns last element of an array

___

### `Const` size

• **size**: *count* =  count

*Defined in [array.ts:366](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L366)*

## Functions

### `Const` __mapOr

▸ **__mapOr**<**A**, **B**>(`def`: B, `fn`: [Mappable](_types_.md#mappable)‹A, B› | [Mappable](_types_.md#mappable)‹A, [Maybe](_maybe_.md#maybe)‹B››): *(Anonymous function)*

*Defined in [array.ts:113](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L113)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`def` | B |
`fn` | [Mappable](_types_.md#mappable)‹A, B› &#124; [Mappable](_types_.md#mappable)‹A, [Maybe](_maybe_.md#maybe)‹B›› |

**Returns:** *(Anonymous function)*

___

### `Const` __reverse

▸ **__reverse**<**T**>(`coll`: Array‹T›): *Array‹T›*

*Defined in [array.ts:30](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L30)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`coll` | Array‹T› |

**Returns:** *Array‹T›*

___

### `Const` __sortBy

▸ **__sortBy**<**A**, **B**>(`compare`: [Mappable](_types_.md#mappable)‹A, B›): *(Anonymous function)*

*Defined in [array.ts:77](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L77)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`compare` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *(Anonymous function)*

___

### `Const` __take

▸ **__take**<**T**>(`n`: number): *(Anonymous function)*

*Defined in [array.ts:43](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L43)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *(Anonymous function)*

___

### `Const` __takeWhile

▸ **__takeWhile**<**T**>(`pred`: [Predicate](_types_.md#predicate)‹T›): *(Anonymous function)*

*Defined in [array.ts:61](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L61)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *(Anonymous function)*

___

###  append

▸ **append**<**A**>(`tailColl`: [MaybeType](_types_.md#maybetype)‹A[]›): *function*

*Defined in [array.ts:230](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L230)*

Concatenate two strings or arrays
Read as append(this)(to that) -> append([3,4])([1,2]) === [1,2,3,4]

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`tailColl` | [MaybeType](_types_.md#maybetype)‹A[]› |

**Returns:** *function*

▸ (`headColl`: [MaybeType](_types_.md#maybetype)‹A[]›): *[Maybe](_maybe_.md#maybe)‹A[]›*

**Parameters:**

Name | Type |
------ | ------ |
`headColl` | [MaybeType](_types_.md#maybetype)‹A[]› |

▸ **append**(`tail`: [MaybeType](_types_.md#maybetype)‹string›): *function*

*Defined in [array.ts:231](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L231)*

**Parameters:**

Name | Type |
------ | ------ |
`tail` | [MaybeType](_types_.md#maybetype)‹string› |

**Returns:** *function*

▸ (`head`: [MaybeType](_types_.md#maybetype)‹string›): *[Maybe](_maybe_.md#maybe)‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`head` | [MaybeType](_types_.md#maybetype)‹string› |

___

### `Const` butLast

▸ **butLast**<**A**>(`coll`: [MaybeType](_types_.md#maybetype)‹A[]›): *[Just](../classes/_maybe_.just.md)‹A[]› | [Nothing](../classes/_maybe_.nothing.md)‹A[]›*

*Defined in [array.ts:261](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L261)*

return all but last element of an array

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [MaybeType](_types_.md#maybetype)‹A[]› |

**Returns:** *[Just](../classes/_maybe_.just.md)‹A[]› | [Nothing](../classes/_maybe_.nothing.md)‹A[]›*

___

### `Const` conj

▸ **conj**<**A**>(`elem`: [MaybeType](_types_.md#maybetype)‹A›): *(Anonymous function)*

*Defined in [array.ts:214](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L214)*

Insert a single element after last element of an array

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`elem` | [MaybeType](_types_.md#maybetype)‹A› |

**Returns:** *(Anonymous function)*

___

### `Const` cons

▸ **cons**<**A**>(`elem`: [MaybeType](_types_.md#maybetype)‹A›): *(Anonymous function)*

*Defined in [array.ts:209](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L209)*

Insert a single element before first element of an array

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`elem` | [MaybeType](_types_.md#maybetype)‹A› |

**Returns:** *(Anonymous function)*

___

###  contains

▸ **contains**<**A**>(`elem`: [MaybeType](_types_.md#maybetype)‹A›): *function*

*Defined in [array.ts:199](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L199)*

test if array or string coll has an element elem
contains("o")("word") === true
contains(1)([1,2,3]) === true

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`elem` | [MaybeType](_types_.md#maybetype)‹A› |

**Returns:** *function*

▸ (`coll`: [MaybeType](_types_.md#maybetype)‹A[]›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [MaybeType](_types_.md#maybetype)‹A[]› |

▸ **contains**(`elem`: [MaybeType](_types_.md#maybetype)‹string›): *function*

*Defined in [array.ts:200](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L200)*

**Parameters:**

Name | Type |
------ | ------ |
`elem` | [MaybeType](_types_.md#maybetype)‹string› |

**Returns:** *function*

▸ (`coll`: [MaybeType](_types_.md#maybetype)‹string›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [MaybeType](_types_.md#maybetype)‹string› |

___

### `Const` count

▸ **count**(`coll`: [MaybeType](_types_.md#maybetype)‹unknown[] | string›): *[Just](../classes/_maybe_.just.md)‹number› | [Nothing](../classes/_maybe_.nothing.md)‹number›*

*Defined in [array.ts:365](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L365)*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [MaybeType](_types_.md#maybetype)‹unknown[] &#124; string› |

**Returns:** *[Just](../classes/_maybe_.just.md)‹number› | [Nothing](../classes/_maybe_.nothing.md)‹number›*

___

###  countBy

▸ **countBy**<**T**>(`key`: string): *function*

*Defined in [array.ts:368](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L368)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *function*

▸ (`elems`: [MaybeType](_types_.md#maybetype)‹T[]›): *[Maybe](_maybe_.md#maybe)‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`elems` | [MaybeType](_types_.md#maybetype)‹T[]› |

▸ **countBy**<**T**>(`calcCount`: [Mappable](_types_.md#mappable)‹T, string›): *function*

*Defined in [array.ts:371](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L371)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`calcCount` | [Mappable](_types_.md#mappable)‹T, string› |

**Returns:** *function*

▸ (`elems`: [MaybeType](_types_.md#maybetype)‹T[]›): *[Maybe](_maybe_.md#maybe)‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`elems` | [MaybeType](_types_.md#maybetype)‹T[]› |

▸ **countBy**<**T**>(`calcGroup`: [Mappable](_types_.md#mappable)‹T, number›): *function*

*Defined in [array.ts:374](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L374)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`calcGroup` | [Mappable](_types_.md#mappable)‹T, number› |

**Returns:** *function*

▸ (`elems`: [MaybeType](_types_.md#maybetype)‹T[]›): *[Maybe](_maybe_.md#maybe)‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`elems` | [MaybeType](_types_.md#maybetype)‹T[]› |

___

###  filter

▸ **filter**<**A**>(`pred`: [Predicate](_types_.md#predicate)‹A›): *function*

*Defined in [array.ts:156](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L156)*

return a new array with all elements from coll for which pred is true

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹A› |

**Returns:** *function*

▸ (`coll`: [MaybeType](_types_.md#maybetype)‹A[]›): *[Maybe](_maybe_.md#maybe)‹A[]›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [MaybeType](_types_.md#maybetype)‹A[]› |

▸ **filter**<**A**>(`pred`: [Predicate](_types_.md#predicate)‹[Maybe](_maybe_.md#maybe)‹A››): *function*

*Defined in [array.ts:157](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L157)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹[Maybe](_maybe_.md#maybe)‹A›› |

**Returns:** *function*

▸ (`coll`: [MaybeType](_types_.md#maybetype)‹A[]›): *[Maybe](_maybe_.md#maybe)‹A[]›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [MaybeType](_types_.md#maybetype)‹A[]› |

___

###  find

▸ **find**<**T**>(`predicate`: [Predicate](_types_.md#predicate)‹T›): *(Anonymous function)*

*Defined in [array.ts:308](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L308)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *(Anonymous function)*

___

### `Const` flatMap

▸ **flatMap**<**A**, **B**>(`fn`: [Mappable](_types_.md#mappable)‹A, B | B[]› | [Mappable](_types_.md#mappable)‹A, [Maybe](_maybe_.md#maybe)‹B | B[]››): *(Anonymous function)*

*Defined in [array.ts:396](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L396)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](_types_.md#mappable)‹A, B &#124; B[]› &#124; [Mappable](_types_.md#mappable)‹A, [Maybe](_maybe_.md#maybe)‹B &#124; B[]›› |

**Returns:** *(Anonymous function)*

___

### `Const` flatten

▸ **flatten**<**T**>(`coll`: [MaybeType](_types_.md#maybetype)‹unknown[]›): *[Maybe](_maybe_.md#maybe)‹T[]›*

*Defined in [array.ts:382](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L382)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [MaybeType](_types_.md#maybetype)‹unknown[]› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹T[]›*

___

###  groupBy

▸ **groupBy**<**T**>(`key`: string): *function*

*Defined in [array.ts:340](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L340)*

**Type parameters:**

▪ **T**: *[Dictionary](../interfaces/_types_.dictionary.md)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *function*

▸ (`elems`: [MaybeType](_types_.md#maybetype)‹T[]›): *[Maybe](_maybe_.md#maybe)‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`elems` | [MaybeType](_types_.md#maybetype)‹T[]› |

▸ **groupBy**<**T**>(`calcGroup`: [Mappable](_types_.md#mappable)‹T, string›): *function*

*Defined in [array.ts:343](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L343)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`calcGroup` | [Mappable](_types_.md#mappable)‹T, string› |

**Returns:** *function*

▸ (`elems`: [MaybeType](_types_.md#maybetype)‹T[]›): *[Maybe](_maybe_.md#maybe)‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`elems` | [MaybeType](_types_.md#maybetype)‹T[]› |

▸ **groupBy**<**T**>(`calcGroup`: [Mappable](_types_.md#mappable)‹T, number›): *function*

*Defined in [array.ts:346](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L346)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`calcGroup` | [Mappable](_types_.md#mappable)‹T, number› |

**Returns:** *function*

▸ (`elems`: [MaybeType](_types_.md#maybetype)‹T[]›): *[Maybe](_maybe_.md#maybe)‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`elems` | [MaybeType](_types_.md#maybetype)‹T[]› |

___

### `Const` head

▸ **head**<**T**>(`coll`: Array‹T› | [Maybe](_maybe_.md#maybe)‹Array‹T››): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [array.ts:11](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L11)*

returns first element of an array

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`coll` | Array‹T› &#124; [Maybe](_maybe_.md#maybe)‹Array‹T›› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹T›*

___

###  insertAt

▸ **insertAt**<**A**>(`index`: [MaybeType](_types_.md#maybetype)‹number›): *function*

*Defined in [array.ts:272](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L272)*

insert element elem at position n in array coll

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`index` | [MaybeType](_types_.md#maybetype)‹number› |

**Returns:** *function*

▸ (`elem`: [MaybeType](_types_.md#maybetype)‹A›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`elem` | [MaybeType](_types_.md#maybetype)‹A› |

▸ (`coll`: [MaybeType](_types_.md#maybetype)‹A[]›): *[Maybe](_maybe_.md#maybe)‹A[]›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [MaybeType](_types_.md#maybetype)‹A[]› |

___

###  isIn

▸ **isIn**(`coll`: [MaybeType](_types_.md#maybetype)‹string›): *function*

*Defined in [array.ts:185](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L185)*

test if elem is a member of array or string coll
isIn("word")("o") === true
isIn([1,2,3])(1) === true

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [MaybeType](_types_.md#maybetype)‹string› |

**Returns:** *function*

▸ (`elem`: [MaybeType](_types_.md#maybetype)‹string›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`elem` | [MaybeType](_types_.md#maybetype)‹string› |

▸ **isIn**<**A**>(`coll`: [MaybeType](_types_.md#maybetype)‹A[]›): *function*

*Defined in [array.ts:186](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L186)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [MaybeType](_types_.md#maybetype)‹A[]› |

**Returns:** *function*

▸ (`elem`: [MaybeType](_types_.md#maybetype)‹A›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`elem` | [MaybeType](_types_.md#maybetype)‹A› |

___

### `Const` join

▸ **join**<**A**>(`delimiter`: [MaybeType](_types_.md#maybetype)‹string›): *(Anonymous function)*

*Defined in [array.ts:221](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L221)*

Join all array elements by delimiter string
join("-")([1,2,3]) === "1-2-3"

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`delimiter` | [MaybeType](_types_.md#maybetype)‹string› | "" |

**Returns:** *(Anonymous function)*

___

### `Const` map

▸ **map**<**A**, **B**>(`fn`: [Mappable](_types_.md#mappable)‹A, B› | [Mappable](_types_.md#mappable)‹A, [Maybe](_maybe_.md#maybe)‹B››): *(Anonymous function)*

*Defined in [array.ts:98](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L98)*

Map Mappable over a collection. Safe in the collection itself, not
its values

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](_types_.md#mappable)‹A, B› &#124; [Mappable](_types_.md#mappable)‹A, [Maybe](_maybe_.md#maybe)‹B›› |

**Returns:** *(Anonymous function)*

___

### `Const` mapJust

▸ **mapJust**<**A**, **B**>(`fn`: [Mappable](_types_.md#mappable)‹A, B› | [Mappable](_types_.md#mappable)‹A, [Maybe](_maybe_.md#maybe)‹B››): *(Anonymous function)*

*Defined in [array.ts:135](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L135)*

Map Mappable over a collection, filtering out Nothings

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Mappable](_types_.md#mappable)‹A, B› &#124; [Mappable](_types_.md#mappable)‹A, [Maybe](_maybe_.md#maybe)‹B›› |

**Returns:** *(Anonymous function)*

___

### `Const` mapOr

▸ **mapOr**<**A**, **B**>(`defaultValue`: B): *(Anonymous function)*

*Defined in [array.ts:123](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L123)*

Map Mappable over a collection. Safe in the collection and its values

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`defaultValue` | B |

**Returns:** *(Anonymous function)*

___

### `Const` prepend

▸ **prepend**<**A**>(`headColl`: [MaybeType](_types_.md#maybetype)‹A[]›): *(Anonymous function)*

*Defined in [array.ts:247](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L247)*

Concatenate two strings or arrays
Read a prepend(this)(to that) -> prepend( [1,2])([3,4]) === [1,2,3,4]

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`headColl` | [MaybeType](_types_.md#maybetype)‹A[]› |

**Returns:** *(Anonymous function)*

___

### `Const` range

▸ **range**(`start`: [MaybeType](_types_.md#maybetype)‹number›): *(Anonymous function)*

*Defined in [array.ts:323](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L323)*

**Parameters:**

Name | Type |
------ | ------ |
`start` | [MaybeType](_types_.md#maybetype)‹number› |

**Returns:** *(Anonymous function)*

___

### `Const` reduce

▸ **reduce**<**A**, **B**>(`fn`: function): *(Anonymous function)*

*Defined in [array.ts:316](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L316)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`accum`: B, `nextValue`: A, `index`: number, `fullColl`: A[]): *B*

**Parameters:**

Name | Type |
------ | ------ |
`accum` | B |
`nextValue` | A |
`index` | number |
`fullColl` | A[] |

**Returns:** *(Anonymous function)*

___

###  reject

▸ **reject**<**A**>(`pred`: [Predicate](_types_.md#predicate)‹A›): *function*

*Defined in [array.ts:174](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L174)*

return a new array with all elements from coll where pred is false

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹A› |

**Returns:** *function*

▸ (`coll`: [MaybeType](_types_.md#maybetype)‹A[]›): *[Maybe](_maybe_.md#maybe)‹A[]›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [MaybeType](_types_.md#maybetype)‹A[]› |

▸ **reject**<**A**>(`pred`: [Predicate](_types_.md#predicate)‹[Maybe](_maybe_.md#maybe)‹A››): *function*

*Defined in [array.ts:175](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L175)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹[Maybe](_maybe_.md#maybe)‹A›› |

**Returns:** *function*

▸ (`coll`: [MaybeType](_types_.md#maybetype)‹A[]›): *[Maybe](_maybe_.md#maybe)‹A[]›*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [MaybeType](_types_.md#maybetype)‹A[]› |

___

###  removeAt

▸ **removeAt**<**A**>(`n`: [MaybeType](_types_.md#maybetype)‹number›): *(Anonymous function)*

*Defined in [array.ts:293](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L293)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`n` | [MaybeType](_types_.md#maybetype)‹number› |

**Returns:** *(Anonymous function)*

___

### `Const` rest

▸ **rest**<**A**>(`coll`: [MaybeType](_types_.md#maybetype)‹A[]›): *[Just](../classes/_maybe_.just.md)‹A[]› | [Nothing](../classes/_maybe_.nothing.md)‹A[]›*

*Defined in [array.ts:253](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L253)*

return all but first element of an array

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [MaybeType](_types_.md#maybetype)‹A[]› |

**Returns:** *[Just](../classes/_maybe_.just.md)‹A[]› | [Nothing](../classes/_maybe_.nothing.md)‹A[]›*

___

### `Const` reverse

▸ **reverse**<**T**>(`coll`: Array‹T› | [Maybe](_maybe_.md#maybe)‹Array‹T››): *[Maybe](_maybe_.md#maybe)‹Array‹T››*

*Defined in [array.ts:40](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L40)*

Reverse elements of an array
reverse([1,2,3])  ->  [3,2,1]

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`coll` | Array‹T› &#124; [Maybe](_maybe_.md#maybe)‹Array‹T›› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹Array‹T››*

___

### `Const` sortBy

▸ **sortBy**<**A**, **B**>(`compare`: [Mappable](_types_.md#mappable)‹A, B›): *(Anonymous function)*

*Defined in [array.ts:87](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L87)*

Sort array elements by comparing values generated from elements by compare function

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`compare` | [Mappable](_types_.md#mappable)‹A, B› |

**Returns:** *(Anonymous function)*

___

### `Const` tail

▸ **tail**<**T**>(`coll`: Array‹T› | [Maybe](_maybe_.md#maybe)‹Array‹T››): *[Maybe](_maybe_.md#maybe)‹T›*

*Defined in [array.ts:23](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L23)*

returns last element of an array

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`coll` | Array‹T› &#124; [Maybe](_maybe_.md#maybe)‹Array‹T›› |

**Returns:** *[Maybe](_maybe_.md#maybe)‹T›*

___

### `Const` take

▸ **take**(`n`: number | [Maybe](_maybe_.md#maybe)‹number›): *(Anonymous function)*

*Defined in [array.ts:52](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L52)*

get n first elements from an array

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; [Maybe](_maybe_.md#maybe)‹number› |

**Returns:** *(Anonymous function)*

___

### `Const` takeWhile

▸ **takeWhile**<**T**>(`pred`: [Predicate](_types_.md#predicate)‹T›): *(Anonymous function)*

*Defined in [array.ts:70](https://github.com/hermann-p/pragmatic-fp-ts/blob/fe04635/src/array.ts#L70)*

take elements from array while pred is true

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *(Anonymous function)*
