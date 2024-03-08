[@nbsolutions/color - v1.2.2](../README.md) / [Exports](../modules.md) / RGBA

# Class: RGBA

A class that represents a color.
Provides tools to manipate colors.

## Hierarchy

- [`RGB`](RGB.md)

  ↳ **`RGBA`**

## Table of contents

### Constructors

- [constructor](RGBA.md#constructor)

### Methods

- [clone](RGBA.md#clone)
- [darken](RGBA.md#darken)
- [getAlpha](RGBA.md#getalpha)
- [getBlue](RGBA.md#getblue)
- [getGreen](RGBA.md#getgreen)
- [getRed](RGBA.md#getred)
- [lighten](RGBA.md#lighten)
- [setAlpha](RGBA.md#setalpha)
- [setBlue](RGBA.md#setblue)
- [setGreen](RGBA.md#setgreen)
- [setRed](RGBA.md#setred)
- [toHex](RGBA.md#tohex)
- [toHexString](RGBA.md#tohexstring)
- [toKMLString](RGBA.md#tokmlstring)
- [toRGBAObject](RGBA.md#torgbaobject)
- [toRGBAString](RGBA.md#torgbastring)
- [toRGBObject](RGBA.md#torgbobject)
- [toRGBString](RGBA.md#torgbstring)
- [toString](RGBA.md#tostring)
- [valueOf](RGBA.md#valueof)
- [colorAlphaToColor](RGBA.md#coloralphatocolor)
- [fromHex](RGBA.md#fromhex)
- [fromHexString](RGBA.md#fromhexstring)
- [fromRGBAString](RGBA.md#fromrgbastring)
- [fromRGBString](RGBA.md#fromrgbstring)
- [fromString](RGBA.md#fromstring)
- [random](RGBA.md#random)

## Constructors

### constructor

• **new RGBA**(`r?`, `g?`, `b?`, `a?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r?` | `number` | Integer between 0 and 255. Represents the Red byte. |
| `g?` | `number` | Integer between 0 and 255. Represents the Green byte. |
| `b?` | `number` | Integer between 0 and 255. Represents the Blue byte. |
| `a?` | `number` | Integer between 0 and 255. Represents the Alpha byte. Defaults to 255. |

#### Overrides

[RGB](RGB.md).[constructor](RGB.md#constructor)

#### Defined in

[RGBA.ts:22](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L22)

## Methods

### clone

▸ **clone**(): [`RGBA`](RGBA.md)

Returns a copy of this `RGBA`

#### Returns

[`RGBA`](RGBA.md)

#### Overrides

[RGB](RGB.md).[clone](RGB.md#clone)

#### Defined in

[RGBA.ts:364](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L364)

___

### darken

▸ **darken**(`percent`): [`RGBA`](RGBA.md)

Darkens the brightness of this color.

Does not change the current instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent` | `number` |

#### Returns

[`RGBA`](RGBA.md)

#### Overrides

[RGB](RGB.md).[darken](RGB.md#darken)

#### Defined in

[RGBA.ts:316](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L316)

___

### getAlpha

▸ **getAlpha**(): `number`

Gets the alpha channel of this color

#### Returns

`number`

#### Defined in

[RGBA.ts:45](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L45)

___

### getBlue

▸ **getBlue**(): `number`

Gets the blue channel of this color

#### Returns

`number`

#### Inherited from

[RGB](RGB.md).[getBlue](RGB.md#getblue)

#### Defined in

[RGB.ts:181](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGB.ts#L181)

___

### getGreen

▸ **getGreen**(): `number`

Gets the green channel of this color

#### Returns

`number`

#### Inherited from

[RGB](RGB.md).[getGreen](RGB.md#getgreen)

#### Defined in

[RGB.ts:164](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGB.ts#L164)

___

### getRed

▸ **getRed**(): `number`

Gets the red channel of this color

#### Returns

`number`

#### Inherited from

[RGB](RGB.md).[getRed](RGB.md#getred)

#### Defined in

[RGB.ts:147](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGB.ts#L147)

___

### lighten

▸ **lighten**(`percent`): [`RGBA`](RGBA.md)

Increases the brightness of this color.

Does not change the current instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent` | `number` |

#### Returns

[`RGBA`](RGBA.md)

#### Overrides

[RGB](RGB.md).[lighten](RGB.md#lighten)

#### Defined in

[RGBA.ts:287](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L287)

___

### setAlpha

▸ **setAlpha**(`a`): `void`

Sets the alpha channel of this color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | A value between 0 and 255 |

#### Returns

`void`

#### Defined in

[RGBA.ts:38](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L38)

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

#### Inherited from

[RGB](RGB.md).[setBlue](RGB.md#setblue)

#### Defined in

[RGB.ts:173](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGB.ts#L173)

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

#### Inherited from

[RGB](RGB.md).[setGreen](RGB.md#setgreen)

#### Defined in

[RGB.ts:156](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGB.ts#L156)

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

#### Inherited from

[RGB](RGB.md).[setRed](RGB.md#setred)

#### Defined in

[RGB.ts:139](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGB.ts#L139)

___

### toHex

▸ **toHex**(`includeAlpha?`): `number`

Returns the numerical value of this color.

#### Parameters

| Name | Type |
| :------ | :------ |
| `includeAlpha?` | `boolean` |

#### Returns

`number`

#### Overrides

[RGB](RGB.md).[toHex](RGB.md#tohex)

#### Defined in

[RGBA.ts:78](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L78)

___

### toHexString

▸ **toHexString**(): `string`

Returns a hex string

#### Returns

`string`

#### Overrides

[RGB](RGB.md).[toHexString](RGB.md#tohexstring)

#### Defined in

[RGBA.ts:85](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L85)

___

### toKMLString

▸ **toKMLString**(): `string`

toKMLString

Returns a color code string consumable by KML: aabbggrr

https://developers.google.com/kml/documentation/kmlreference#kml-fields

#### Returns

`string`

#### Defined in

[RGBA.ts:352](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L352)

___

### toRGBAObject

▸ **toRGBAObject**(): [`IRGBA`](../interfaces/IRGBA.md)

Returns an IRGBA object

#### Returns

[`IRGBA`](../interfaces/IRGBA.md)

#### Defined in

[RGBA.ts:103](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L103)

___

### toRGBAString

▸ **toRGBAString**(): `string`

Returns a rgba string

#### Returns

`string`

#### Defined in

[RGBA.ts:71](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L71)

___

### toRGBObject

▸ **toRGBObject**(): [`IRGB`](../interfaces/IRGB.md)

Returns an IRGB object.

#### Returns

[`IRGB`](../interfaces/IRGB.md)

#### Overrides

[RGB](RGB.md).[toRGBObject](RGB.md#torgbobject)

#### Defined in

[RGBA.ts:92](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L92)

___

### toRGBString

▸ **toRGBString**(): `string`

Returns a rgb string

#### Returns

`string`

#### Overrides

[RGB](RGB.md).[toRGBString](RGB.md#torgbstring)

#### Defined in

[RGBA.ts:64](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L64)

___

### toString

▸ **toString**(): `string`

Returns a stringified version of this `RGBA`

#### Returns

`string`

#### Overrides

[RGB](RGB.md).[toString](RGB.md#tostring)

#### Defined in

[RGBA.ts:341](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L341)

___

### valueOf

▸ **valueOf**(): `number`

Returns the numerical value of this color.

#### Returns

`number`

#### Overrides

[RGB](RGB.md).[valueOf](RGB.md#valueof)

#### Defined in

[RGBA.ts:52](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L52)

___

### colorAlphaToColor

▸ `Static` **colorAlphaToColor**(`background`, `alphaColor`): [`RGB`](RGB.md)

Calculates the composition of an alpha color over background color

#### Parameters

| Name | Type |
| :------ | :------ |
| `background` | [`RGBA`](RGBA.md) |
| `alphaColor` | [`RGBA`](RGBA.md) |

#### Returns

[`RGB`](RGB.md)

#### Defined in

[RGBA.ts:270](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L270)

___

### fromHex

▸ `Static` **fromHex**(`hex`): [`RGBA`](RGBA.md)

**`Example`**

```typescript
let white: Color = Color.fromHex(0xFFFFFFFF);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `number` | A number |

#### Returns

[`RGBA`](RGBA.md)

#### Overrides

[RGB](RGB.md).[fromHex](RGB.md#fromhex)

#### Defined in

[RGBA.ts:214](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L214)

___

### fromHexString

▸ `Static` **fromHexString**(`hex`): [`RGBA`](RGBA.md)

Builds a `RGBA` from a hex string.

Both 3, 6, and 8 character formats are allowed.

If 3 characters are given, e.g. #F0F, it will be treated
as a CSS short-form hex format and the bytes will be expanded
to the 6 byte format, e.g: #FF00FF.

If 8 characters are given, e.g. #00112233, the format is treated
as #RRGGBBAA

**`Example`**

```typescript
let white: Color = Color.fromHexString("#FFFFFF");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | The hex string; |

#### Returns

[`RGBA`](RGBA.md)

#### Overrides

[RGB](RGB.md).[fromHexString](RGB.md#fromhexstring)

#### Defined in

[RGBA.ts:179](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L179)

___

### fromRGBAString

▸ `Static` **fromRGBAString**(`rgbaString`): [`RGBA`](RGBA.md)

Builds a `RGBA` from a RGBA string.

**`Example`**

```typescript
let white: Color = Color.fromRGBAString("rgba(255, 255, 255, 1)");
```

__Note__: Alpha percent must resolve to an integer, therefore the given
alpha value may not appear identical as the out alpha.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rgbaString` | `string` |

#### Returns

[`RGBA`](RGBA.md)

#### Defined in

[RGBA.ts:148](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L148)

___

### fromRGBString

▸ `Static` **fromRGBString**(`rgbString`): [`RGBA`](RGBA.md)

Builds a `RGBA` from a RGB string.

**`Example`**

```typescript
let white: Color = Color.fromRGBString("rgb(255, 255, 255)");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rgbString` | `string` | The RGB string; e.g: rgb(255, 255, 255) |

#### Returns

[`RGBA`](RGBA.md)

#### Overrides

[RGB](RGB.md).[fromRGBString](RGB.md#fromrgbstring)

#### Defined in

[RGBA.ts:123](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L123)

___

### fromString

▸ `Static` **fromString**(`str`): [`RGBA`](RGBA.md)

Returns a `RGBA` a hex string, rgb string, or rgba string.

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

[`RGBA`](RGBA.md)

#### Overrides

[RGB](RGB.md).[fromString](RGB.md#fromstring)

#### Defined in

[RGBA.ts:230](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L230)

___

### random

▸ `Static` **random**(`randomizeAlpha?`): [`RGBA`](RGBA.md)

Gives a psuedo-random color

**`Example`**

```typescript
let random: Color = Color.random();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `randomizeAlpha?` | `boolean` |

#### Returns

[`RGBA`](RGBA.md)

#### Overrides

[RGB](RGB.md).[random](RGB.md#random)

#### Defined in

[RGBA.ts:253](https://github.com/nbsolutions-ca/color-js/blob/90a57c4/src/RGBA.ts#L253)
