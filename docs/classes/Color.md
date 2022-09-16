[@nbsolutions/color - v1.2.0](../README.md) / [Exports](../modules.md) / Color

# Class: Color

A class that represents a color.
Provides tools to manipate colors.

**`Deprecated`**

Use RGBA instead

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

[Color.ts:25](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L25)

## Methods

### clone

▸ **clone**(): [`Color`](Color.md)

Returns a copy of this `Color`

#### Returns

[`Color`](Color.md)

#### Defined in

[Color.ts:407](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L407)

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

[Color.ts:359](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L359)

___

### getAlpha

▸ **getAlpha**(): `number`

Gets the alpha channel of this color

#### Returns

`number`

#### Defined in

[Color.ts:248](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L248)

___

### getBlue

▸ **getBlue**(): `number`

Gets the blue channel of this color

#### Returns

`number`

#### Defined in

[Color.ts:231](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L231)

___

### getGreen

▸ **getGreen**(): `number`

Gets the green channel of this color

#### Returns

`number`

#### Defined in

[Color.ts:214](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L214)

___

### getRed

▸ **getRed**(): `number`

Gets the red channel of this color

#### Returns

`number`

#### Defined in

[Color.ts:197](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L197)

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

[Color.ts:330](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L330)

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

[Color.ts:240](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L240)

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

[Color.ts:223](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L223)

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

[Color.ts:206](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L206)

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

[Color.ts:189](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L189)

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

#### Defined in

[Color.ts:278](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L278)

___

### toHexString

▸ **toHexString**(): `string`

Returns a hex string

__Note:__ This ignores the alpha channel.

#### Returns

`string`

#### Defined in

[Color.ts:293](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L293)

___

### toKMLString

▸ **toKMLString**(): `string`

toKMLString

Returns a color code string consumable by KML: aabbggrr

https://developers.google.com/kml/documentation/kmlreference#kml-fields

#### Returns

`string`

#### Defined in

[Color.ts:395](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L395)

___

### toRGBAObject

▸ **toRGBAObject**(): [`IRGBA`](../interfaces/IRGBA.md)

Returns an IRGBA object

#### Returns

[`IRGBA`](../interfaces/IRGBA.md)

#### Defined in

[Color.ts:314](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L314)

___

### toRGBAString

▸ **toRGBAString**(): `string`

Returns a rgba string

#### Returns

`string`

#### Defined in

[Color.ts:271](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L271)

___

### toRGBObject

▸ **toRGBObject**(): [`IRGBA`](../interfaces/IRGBA.md)

Returns an IRGBA object.

__Note:__ This ignores the alpha channel.

#### Returns

[`IRGBA`](../interfaces/IRGBA.md)

#### Defined in

[Color.ts:302](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L302)

___

### toRGBString

▸ **toRGBString**(): `string`

Returns a rgb string

#### Returns

`string`

#### Defined in

[Color.ts:264](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L264)

___

### toString

▸ **toString**(): `string`

Returns a stringified version of this `Color`

#### Returns

`string`

#### Defined in

[Color.ts:384](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L384)

___

### valueOf

▸ **valueOf**(): `number`

Returns the numerical value of this color.

__Note:__ This ignores the alpha channel.

#### Returns

`number`

#### Defined in

[Color.ts:257](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L257)

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

[Color.ts:174](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L174)

___

### fromHex

▸ `Static` **fromHex**(`hex`): [`Color`](Color.md)

**`Example`**

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

[Color.ts:122](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L122)

___

### fromHexString

▸ `Static` **fromHexString**(`hex`): [`Color`](Color.md)

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

[`Color`](Color.md)

#### Defined in

[Color.ts:92](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L92)

___

### fromRGBAString

▸ `Static` **fromRGBAString**(`rgbaString`): [`Color`](Color.md)

Builds a `Color` from a RGBA string.

**`Example`**

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

[Color.ts:68](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L68)

___

### fromRGBString

▸ `Static` **fromRGBString**(`rgbString`): [`Color`](Color.md)

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

[`Color`](Color.md)

#### Defined in

[Color.ts:46](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L46)

___

### fromString

▸ `Static` **fromString**(`str`): [`Color`](Color.md)

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

[`Color`](Color.md)

#### Defined in

[Color.ts:138](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L138)

___

### random

▸ `Static` **random**(): [`Color`](Color.md)

Gives a psuedo-random color

**`Example`**

```typescript
let random: Color = Color.random();
```

#### Returns

[`Color`](Color.md)

#### Defined in

[Color.ts:161](https://github.com/nbsolutions-ca/color-js/blob/c26bf77/src/Color.ts#L161)
