[@nbsolutions/color - v1.1.3](../README.md) / [Exports](../modules.md) / Color

# Class: Color

A class that represents a color.
Provides tools to manipate colors.

## Table of contents

### Constructors

- [constructor](Color.md#constructor)

### Methods

- [clone](Color.md#clone)
- [darken](Color.md#darken)
- [getAlpha](Color.md#getalpha)
- [getBlue](Color.md#getblue)
- [getGreen](Color.md#getgreen)
- [getRed](Color.md#getred)
- [lighten](Color.md#lighten)
- [setAlpha](Color.md#setalpha)
- [setBlue](Color.md#setblue)
- [setGreen](Color.md#setgreen)
- [setRed](Color.md#setred)
- [toHex](Color.md#tohex)
- [toHexString](Color.md#tohexstring)
- [toKMLString](Color.md#tokmlstring)
- [toRGBAObject](Color.md#torgbaobject)
- [toRGBAString](Color.md#torgbastring)
- [toRGBObject](Color.md#torgbobject)
- [toRGBString](Color.md#torgbstring)
- [toString](Color.md#tostring)
- [valueOf](Color.md#valueof)
- [colorAlphaToColor](Color.md#coloralphatocolor)
- [fromHex](Color.md#fromhex)
- [fromHexString](Color.md#fromhexstring)
- [fromRGBAString](Color.md#fromrgbastring)
- [fromRGBString](Color.md#fromrgbstring)
- [fromString](Color.md#fromstring)
- [random](Color.md#random)

## Constructors

### constructor

• **new Color**(`r?`, `g?`, `b?`, `a?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r?` | `number` | Integer between 0 and 255. Represents red. |
| `g?` | `number` | Integer between 0 and 255. Represents green. |
| `b?` | `number` | Integer between 0 and 255. Represents blue. |
| `a?` | `number` | Float between 0 and 1. Represents alpha. |

#### Defined in

[Color.ts:22](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L22)

## Methods

### clone

▸ **clone**(): [`Color`](Color.md)

Returns a copy of this `Color`

#### Returns

[`Color`](Color.md)

#### Defined in

[Color.ts:400](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L400)

___

### darken

▸ **darken**(`percent`): [`Color`](Color.md)

Darkens the brightness of this color.

Does not change the current instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent` | `number` |

#### Returns

[`Color`](Color.md)

#### Defined in

[Color.ts:352](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L352)

___

### getAlpha

▸ **getAlpha**(): `number`

Gets the alpha channel of this color

#### Returns

`number`

#### Defined in

[Color.ts:245](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L245)

___

### getBlue

▸ **getBlue**(): `number`

Gets the blue channel of this color

#### Returns

`number`

#### Defined in

[Color.ts:228](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L228)

___

### getGreen

▸ **getGreen**(): `number`

Gets the green channel of this color

#### Returns

`number`

#### Defined in

[Color.ts:211](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L211)

___

### getRed

▸ **getRed**(): `number`

Gets the red channel of this color

#### Returns

`number`

#### Defined in

[Color.ts:194](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L194)

___

### lighten

▸ **lighten**(`percent`): [`Color`](Color.md)

Increases the brightness of this color.

Does not change the current instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent` | `number` |

#### Returns

[`Color`](Color.md)

#### Defined in

[Color.ts:323](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L323)

___

### setAlpha

▸ **setAlpha**(`a`): [`Color`](Color.md)

Sets the green channel of this color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | A value between 0 and 1 |

#### Returns

[`Color`](Color.md)

#### Defined in

[Color.ts:237](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L237)

___

### setBlue

▸ **setBlue**(`b`): [`Color`](Color.md)

Sets the green channel of this color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | `number` | A value between 0 and 255 |

#### Returns

[`Color`](Color.md)

#### Defined in

[Color.ts:220](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L220)

___

### setGreen

▸ **setGreen**(`g`): [`Color`](Color.md)

Sets the green channel of this color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `g` | `number` | A value between 0 and 255 |

#### Returns

[`Color`](Color.md)

#### Defined in

[Color.ts:203](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L203)

___

### setRed

▸ **setRed**(`r`): [`Color`](Color.md)

Sets the red channel of this color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | A value between 0 and 255 |

#### Returns

[`Color`](Color.md)

#### Defined in

[Color.ts:186](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L186)

___

### toHex

▸ **toHex**(): `number`

Returns the numerical value of this color.

__Note:__ This ignores the alpha channel.

#### Returns

`number`

#### Defined in

[Color.ts:277](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L277)

___

### toHexString

▸ **toHexString**(): `string`

Returns a hex string

__Note:__ This ignores the alpha channel.

#### Returns

`string`

#### Defined in

[Color.ts:286](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L286)

___

### toKMLString

▸ **toKMLString**(): `string`

toKMLString

Returns a color code string consumable by KML: aabbggrr

https://developers.google.com/kml/documentation/kmlreference#kml-fields

#### Returns

`string`

#### Defined in

[Color.ts:388](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L388)

___

### toRGBAObject

▸ **toRGBAObject**(): [`IRGBA`](../interfaces/IRGBA.md)

Returns an IRGBA object

#### Returns

[`IRGBA`](../interfaces/IRGBA.md)

#### Defined in

[Color.ts:307](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L307)

___

### toRGBAString

▸ **toRGBAString**(): `string`

Returns a rgba string

#### Returns

`string`

#### Defined in

[Color.ts:268](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L268)

___

### toRGBObject

▸ **toRGBObject**(): [`IRGBA`](../interfaces/IRGBA.md)

Returns an IRGBA object.

__Note:__ This ignores the alpha channel.

#### Returns

[`IRGBA`](../interfaces/IRGBA.md)

#### Defined in

[Color.ts:295](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L295)

___

### toRGBString

▸ **toRGBString**(): `string`

Returns a rgb string

#### Returns

`string`

#### Defined in

[Color.ts:261](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L261)

___

### toString

▸ **toString**(): `string`

Returns a stringified version of this `Color`

#### Returns

`string`

#### Defined in

[Color.ts:377](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L377)

___

### valueOf

▸ **valueOf**(): `number`

Returns the numerical value of this color.

__Note:__ This ignores the alpha channel.

#### Returns

`number`

#### Defined in

[Color.ts:254](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L254)

___

### colorAlphaToColor

▸ `Static` **colorAlphaToColor**(`background`, `alphaColor`): [`Color`](Color.md)

Calculates the composition of an alpha color over background color

#### Parameters

| Name | Type |
| :------ | :------ |
| `background` | [`Color`](Color.md) |
| `alphaColor` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Defined in

[Color.ts:171](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L171)

___

### fromHex

▸ `Static` **fromHex**(`hex`): [`Color`](Color.md)

**`example`**
```typescript
let white: Color = Color.fromHex(0xFFFFFF);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `number` | A number |

#### Returns

[`Color`](Color.md)

#### Defined in

[Color.ts:119](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L119)

___

### fromHexString

▸ `Static` **fromHexString**(`hex`): [`Color`](Color.md)

Builds a `Color` from a hex string.

Both 3 and 6 character formats are allowed.

**`example`**

```typescript
let white: Color = Color.fromHexString("#FFFFFF");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | The hex string; |

#### Returns

[`Color`](Color.md)

#### Defined in

[Color.ts:89](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L89)

___

### fromRGBAString

▸ `Static` **fromRGBAString**(`rgbaString`): [`Color`](Color.md)

Builds a `Color` from a RGBA string.

**`example`**

```typescript
let white: Color = Color.fromRGBAString("rgba(255, 255, 255, 1)");
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `rgbaString` | `string` |

#### Returns

[`Color`](Color.md)

#### Defined in

[Color.ts:65](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L65)

___

### fromRGBString

▸ `Static` **fromRGBString**(`rgbString`): [`Color`](Color.md)

Builds a `Color` from a RGB string.

**`example`**

```typescript
let white: Color = Color.fromRGBString("rgb(255, 255, 255)");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rgbString` | `string` | The RGB string; e.g: rgb(255, 255, 255) |

#### Returns

[`Color`](Color.md)

#### Defined in

[Color.ts:43](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L43)

___

### fromString

▸ `Static` **fromString**(`str`): [`Color`](Color.md)

Returns a `Color` a hex string, rgb string, or rgba string.

**`example`**
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

[`Color`](Color.md)

#### Defined in

[Color.ts:135](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L135)

___

### random

▸ `Static` **random**(): [`Color`](Color.md)

Gives a psuedo-random color

**`example`**
```typescript
let random: Color = Color.random();
```

#### Returns

[`Color`](Color.md)

#### Defined in

[Color.ts:158](https://github.com/nbsolutions-ca/color-js/blob/16e1535/src/Color.ts#L158)
