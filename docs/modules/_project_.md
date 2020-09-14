[pragmatic-fp-ts](../README.md) › [Globals](../globals.md) › ["project"](_project_.md)

# External module: "project"

## Index

### Functions

* [project](_project_.md#project)

## Functions

###  project

▸ **project**<**V**, **K**>(`keys`: K[], `coll`: V[]): *Pick‹V, K›[]*

*Defined in [src/project.ts:3](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/project.ts#L3)*

**Type parameters:**

▪ **V**: *__type*

▪ **K**: *keyof V*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | K[] |
`coll` | V[] |

**Returns:** *Pick‹V, K›[]*

▸ **project**<**V**, **K**>(`keys`: K[]): *function*

*Defined in [src/project.ts:8](https://github.com/hermann-p/pragmatic-fp-ts/blob/ff16101/src/project.ts#L8)*

**Type parameters:**

▪ **V**: *__type*

▪ **K**: *keyof V*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | K[] |

**Returns:** *function*

▸ (`coll`: V[]): *Pick‹V, K›[]*

**Parameters:**

Name | Type |
------ | ------ |
`coll` | V[] |
