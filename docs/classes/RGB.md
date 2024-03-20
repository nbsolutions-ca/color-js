[@nbsolutions/color - v1.3.0](../README.md) / [Exports](../modules.md) / RGB

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
| `b?` | `number` | Integer between 0 and 255. Represents blue. |

#### Defined in

[RGB.ts:21](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L21)

## Methods

### clone

▸ **clone**(): [`RGB`](RGB.md)

Returns a copy of this `Color`

#### Returns

[`RGB`](RGB.md)

#### Defined in

[RGB.ts:296](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L296)

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

[RGB.ts:264](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L264)

___

### getBlue

▸ **getBlue**(): `number`

Gets the blue channel of this color

#### Returns

`number`

#### Defined in

[RGB.ts:181](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L181)

___

### getGreen

▸ **getGreen**(): `number`

Gets the green channel of this color

#### Returns

`number`

#### Defined in

[RGB.ts:164](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L164)

___

### getRed

▸ **getRed**(): `number`

Gets the red channel of this color

#### Returns

`number`

#### Defined in

[RGB.ts:147](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L147)

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

[RGB.ts:235](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L235)

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

[RGB.ts:173](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L173)

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

[RGB.ts:156](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L156)

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

[RGB.ts:139](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L139)

___

### toHex

▸ **toHex**(): `number`

Returns the numerical value of this color.

#### Returns

`number`

#### Defined in

[RGB.ts:204](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L204)

___

### toHexString

▸ **toHexString**(): `string`

Returns a hex string

#### Returns

`string`

#### Defined in

[RGB.ts:211](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L211)

___

### toRGBObject

▸ **toRGBObject**(): [`IRGB`](../interfaces/IRGB.md)

Returns an IRGBA object.

__Note:__ This ignores the alpha channel.

#### Returns

[`IRGB`](../interfaces/IRGB.md)

#### Defined in

[RGB.ts:220](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L220)

___

### toRGBString

▸ **toRGBString**(): `string`

Returns a rgb string

#### Returns

`string`

#### Defined in

[RGB.ts:197](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L197)

___

### toString

▸ **toString**(): `string`

Returns a stringified version of this `Color`

#### Returns

`string`

#### Defined in

[RGB.ts:289](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L289)

___

### valueOf

▸ **valueOf**(): `number`

Returns the numerical value of this color.

__Note:__ This ignores the alpha channel.

#### Returns

`number`

#### Defined in

[RGB.ts:190](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L190)

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

[RGB.ts:91](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L91)

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

[RGB.ts:61](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L61)

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

[RGB.ts:38](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L38)

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

[RGB.ts:107](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L107)

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

[RGB.ts:127](https://github.com/nbsolutions-ca/color-js/blob/4ed777f/src/RGB.ts#L127)
