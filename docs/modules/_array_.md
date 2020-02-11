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
* [filter](_array_.md#filter)
* [find](_array_.md#find)
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

*Defined in [array.ts:17](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L17)*

returns first element of an array

___

### `Const` includes

• **includes**: *[contains](_array_.md#contains)* =  contains

*Defined in [array.ts:203](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L203)*

___

### `Const` last

• **last**: *tail* =  tail

*Defined in [array.ts:27](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L27)*

returns last element of an array

___

### `Const` size

• **size**: *count* =  count

*Defined in [array.ts:365](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L365)*

## Functions

### `Const` __mapOr

▸ **__mapOr**<**A**, **B**>(`def`: B, `fn`: [Mappable](_types_.md#mappable)‹A, B› | [Mappable](_types_.md#mappable)‹A, [Maybe](_maybe_.md#maybe)‹B››): *(Anonymous function)*

*Defined in [array.ts:112](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L112)*

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

*Defined in [array.ts:29](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L29)*

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

*Defined in [array.ts:76](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L76)*

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

*Defined in [array.ts:42](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L42)*

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

*Defined in [array.ts:60](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L60)*

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

*Defined in [array.ts:229](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L229)*

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

*Defined in [array.ts:230](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L230)*

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

*Defined in [array.ts:260](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L260)*

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

*Defined in [array.ts:213](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L213)*

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

*Defined in [array.ts:208](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L208)*

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

*Defined in [array.ts:198](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L198)*

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

*Defined in [array.ts:199](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L199)*

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

*Defined in [array.ts:364](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L364)*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | [MaybeType](_types_.md#maybetype)‹unknown[] &#124; string› |

**Returns:** *[Just](../classes/_maybe_.just.md)‹number› | [Nothing](../classes/_maybe_.nothing.md)‹number›*

___

###  filter

▸ **filter**<**A**>(`pred`: [Predicate](_types_.md#predicate)‹A›): *function*

*Defined in [array.ts:155](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L155)*

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

*Defined in [array.ts:156](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L156)*

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

*Defined in [array.ts:307](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L307)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *(Anonymous function)*

___

###  groupBy

▸ **groupBy**<**T**>(`key`: string): *function*

*Defined in [array.ts:339](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L339)*

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

*Defined in [array.ts:342](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L342)*

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

*Defined in [array.ts:345](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L345)*

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

*Defined in [array.ts:10](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L10)*

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

*Defined in [array.ts:271](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L271)*

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

*Defined in [array.ts:184](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L184)*

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

*Defined in [array.ts:185](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L185)*

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

*Defined in [array.ts:220](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L220)*

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

*Defined in [array.ts:97](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L97)*

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

*Defined in [array.ts:134](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L134)*

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

*Defined in [array.ts:122](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L122)*

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

*Defined in [array.ts:246](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L246)*

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

*Defined in [array.ts:322](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L322)*

**Parameters:**

Name | Type |
------ | ------ |
`start` | [MaybeType](_types_.md#maybetype)‹number› |

**Returns:** *(Anonymous function)*

___

### `Const` reduce

▸ **reduce**<**A**, **B**>(`fn`: function): *(Anonymous function)*

*Defined in [array.ts:315](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L315)*

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

*Defined in [array.ts:173](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L173)*

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

*Defined in [array.ts:174](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L174)*

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

*Defined in [array.ts:292](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L292)*

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

*Defined in [array.ts:252](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L252)*

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

*Defined in [array.ts:39](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L39)*

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

*Defined in [array.ts:86](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L86)*

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

*Defined in [array.ts:22](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L22)*

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

*Defined in [array.ts:51](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L51)*

get n first elements from an array

**Parameters:**

Name | Type |
------ | ------ |
`n` | number &#124; [Maybe](_maybe_.md#maybe)‹number› |

**Returns:** *(Anonymous function)*

___

### `Const` takeWhile

▸ **takeWhile**<**T**>(`pred`: [Predicate](_types_.md#predicate)‹T›): *(Anonymous function)*

*Defined in [array.ts:69](https://github.com/hermann-p/pragmatic-fp-ts/blob/8ef41a8/src/array.ts#L69)*

take elements from array while pred is true

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`pred` | [Predicate](_types_.md#predicate)‹T› |

**Returns:** *(Anonymous function)*
