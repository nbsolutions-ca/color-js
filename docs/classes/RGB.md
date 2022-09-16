[@nbsolutions/color - v1.2.0](../README.md) / [Exports](../modules.md) / RGB

# Class: RGB

A class that represents a color.
Provides tools to manipate colors.

## Hierarchy

- **`RGB`**

  ↳ [`RGBA`](RGBA.md)

## Table of contents

### Constructors

- [constructor](RGB.md#constructor)

### Methods

- [clone](RGB.md#clone)
- [darken](RGB.md#darken)
- [getBlue](RGB.md#getblue)
- [getGreen](RGB.md#getgreen)
- [getRed](RGB.md#getred)
- [lighten](RGB.md#lighten)
- [setBlue](RGB.md#setblue)
- [setGreen](RGB.md#setgreen)
- [setRed](RGB.md#setred)
- [toHex](RGB.md#tohex)
- [toHexString](RGB.md#tohexstring)
- [toRGBObject](RGB.md#torgbobject)
- [toRGBString](RGB.md#torgbstring)
- [toString](RGB.md#tostring)
- [valueOf](RGB.md#valueof)
- [fromHex](RGB.md#fromhex)
- [fromHexString](RGB.md#fromhexstring)
- [fromRGBString](RGB.md#fromrgbstring)
- [fromString](RGB.md#fromstring)
- [random](RGB.md#random)

## Constructors

### constructor

• **new RGB**(`r?`, `g?`, `b?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r?` | `number` | Integer between 0 and 255. Represents red. |
| `g?` | `number` | Integer between 0 and 255. Represents green. |
| `b?` | `number` | Integer between 0 and 255. Represents blue. //  * |

#### Defined in

[RGB.ts:22](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L22)

## Methods

### clone

▸ **clone**(): [`RGB`](RGB.md)

Returns a copy of this `Color`

#### Returns

[`RGB`](RGB.md)

#### Defined in

[RGB.ts:394](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L394)

___

### darken

▸ **darken**(`percent`): [`RGB`](RGB.md)

Darkens the brightness of this color.

Does not change the current instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent` | `number` |

#### Returns

[`RGB`](RGB.md)

#### Defined in

[RGB.ts:346](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L346)

___

### getBlue

▸ **getBlue**(): `number`

Gets the blue channel of this color

#### Returns

`number`

#### Defined in

[RGB.ts:227](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L227)

___

### getGreen

▸ **getGreen**(): `number`

Gets the green channel of this color

#### Returns

`number`

#### Defined in

[RGB.ts:210](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L210)

___

### getRed

▸ **getRed**(): `number`

Gets the red channel of this color

#### Returns

`number`

#### Defined in

[RGB.ts:193](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L193)

___

### lighten

▸ **lighten**(`percent`): [`RGB`](RGB.md)

Increases the brightness of this color.

Does not change the current instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent` | `number` |

#### Returns

[`RGB`](RGB.md)

#### Defined in

[RGB.ts:317](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L317)

___

### setBlue

▸ **setBlue**(`b`): [`RGB`](RGB.md)

Sets the green channel of this color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | `number` | A value between 0 and 255 |

#### Returns

[`RGB`](RGB.md)

#### Defined in

[RGB.ts:219](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L219)

___

### setGreen

▸ **setGreen**(`g`): [`RGB`](RGB.md)

Sets the green channel of this color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `g` | `number` | A value between 0 and 255 |

#### Returns

[`RGB`](RGB.md)

#### Defined in

[RGB.ts:202](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L202)

___

### setRed

▸ **setRed**(`r`): [`RGB`](RGB.md)

Sets the red channel of this color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | A value between 0 and 255 |

#### Returns

[`RGB`](RGB.md)

#### Defined in

[RGB.ts:185](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L185)

___

### toHex

▸ **toHex**(): `number`

Returns the numerical value of this color.

#### Returns

`number`

#### Defined in

[RGB.ts:274](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L274)

___

### toHexString

▸ **toHexString**(): `string`

Returns a hex string

#### Returns

`string`

#### Defined in

[RGB.ts:281](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L281)

___

### toRGBObject

▸ **toRGBObject**(): [`IRGB`](../interfaces/IRGB.md)

Returns an IRGBA object.

__Note:__ This ignores the alpha channel.

#### Returns

[`IRGB`](../interfaces/IRGB.md)

#### Defined in

[RGB.ts:290](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L290)

___

### toRGBString

▸ **toRGBString**(): `string`

Returns a rgb string

#### Returns

`string`

#### Defined in

[RGB.ts:260](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L260)

___

### toString

▸ **toString**(): `string`

Returns a stringified version of this `Color`

#### Returns

`string`

#### Defined in

[RGB.ts:371](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L371)

___

### valueOf

▸ **valueOf**(): `number`

Returns the numerical value of this color.

__Note:__ This ignores the alpha channel.

#### Returns

`number`

#### Defined in

[RGB.ts:253](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L253)

___

### fromHex

▸ `Static` **fromHex**(`hex`): [`RGB`](RGB.md)

**`Example`**

```typescript
let white: Color = Color.fromHex(0xFFFFFF);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `number` | A number |

#### Returns

[`RGB`](RGB.md)

#### Defined in

[RGB.ts:118](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L118)

___

### fromHexString

▸ `Static` **fromHexString**(`hex`): [`RGB`](RGB.md)

Builds a `Color` from a hex string.

Both 3 and 6 character formats are allowed.

**`Example`**

```typescript
let white: Color = Color.fromHexString("#FFFFFF");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | The hex string; |

#### Returns

[`RGB`](RGB.md)

#### Defined in

[RGB.ts:88](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L88)

___

### fromRGBString

▸ `Static` **fromRGBString**(`rgbString`): [`RGB`](RGB.md)

Builds a `Color` from a RGB string.

**`Example`**

```typescript
let white: Color = Color.fromRGBString("rgb(255, 255, 255)");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rgbString` | `string` | The RGB string; e.g: rgb(255, 255, 255) |

#### Returns

[`RGB`](RGB.md)

#### Defined in

[RGB.ts:43](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L43)

___

### fromString

▸ `Static` **fromString**(`str`): [`RGB`](RGB.md)

Returns a `Color` a hex string, rgb string, or rgba string.

**`Example`**

```typescript
let red: Color = Color.fromString('#FF0000');
let green: Color = Color.fromString('rgb(0, 255, 0)');
let blue: Color = Color.fromString('rgba(0, 0, 255, 1)');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`RGB`](RGB.md)

#### Defined in

[RGB.ts:134](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L134)

___

### random

▸ `Static` **random**(): [`RGB`](RGB.md)

Gives a psuedo-random color

**`Example`**

```typescript
let random: Color = Color.random();
```

#### Returns

[`RGB`](RGB.md)

#### Defined in

[RGB.ts:157](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/RGB.ts#L157)
