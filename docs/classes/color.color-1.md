[@nbsolutions/color - v1.0.2](../README.md) / [Exports](../modules.md) / [Color](../modules/color.md) / Color

# Class: Color

[Color](../modules/color.md).Color

A class that represents a color.
Provides tools to manipate colors.

## Table of contents

### Constructors

- [constructor](color.color-1.md#constructor)

### Methods

- [clone](color.color-1.md#clone)
- [darken](color.color-1.md#darken)
- [getAlpha](color.color-1.md#getalpha)
- [getBlue](color.color-1.md#getblue)
- [getGreen](color.color-1.md#getgreen)
- [getRed](color.color-1.md#getred)
- [lighten](color.color-1.md#lighten)
- [setAlpha](color.color-1.md#setalpha)
- [setBlue](color.color-1.md#setblue)
- [setGreen](color.color-1.md#setgreen)
- [setRed](color.color-1.md#setred)
- [toHex](color.color-1.md#tohex)
- [toHexString](color.color-1.md#tohexstring)
- [toRGBAObject](color.color-1.md#torgbaobject)
- [toRGBAString](color.color-1.md#torgbastring)
- [toRGBObject](color.color-1.md#torgbobject)
- [toRGBString](color.color-1.md#torgbstring)
- [toString](color.color-1.md#tostring)
- [valueOf](color.color-1.md#valueof)
- [colorAlphaToColor](color.color-1.md#coloralphatocolor)
- [fromHex](color.color-1.md#fromhex)
- [fromHexString](color.color-1.md#fromhexstring)
- [fromRGBAString](color.color-1.md#fromrgbastring)
- [fromRGBString](color.color-1.md#fromrgbstring)
- [fromString](color.color-1.md#fromstring)
- [random](color.color-1.md#random)

## Constructors

### constructor

\+ **new Color**(`r?`: *number*, `g?`: *number*, `b?`: *number*, `a?`: *number*): [*Color*](color.color-1.md)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`r?` | *number* | Integer between 0 and 255. Represents red.   |
`g?` | *number* | Integer between 0 and 255. Represents green.   |
`b?` | *number* | Integer between 0 and 255. Represents blue.   |
`a?` | *number* | Float between 0 and 1. Represents alpha.    |

**Returns:** [*Color*](color.color-1.md)

Defined in: [Color.ts:13](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L13)

## Methods

### clone

▸ **clone**(): [*Color*](color.color-1.md)

Returns a copy of this `Color`

**Returns:** [*Color*](color.color-1.md)

Defined in: [Color.ts:384](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L384)

___

### darken

▸ **darken**(`percent`: *number*): [*Color*](color.color-1.md)

Darkens the brightness of this color.

Does not change the current instance.

#### Parameters:

Name | Type |
:------ | :------ |
`percent` | *number* |

**Returns:** [*Color*](color.color-1.md)

Defined in: [Color.ts:352](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L352)

___

### getAlpha

▸ **getAlpha**(): *number*

Gets the alpha channel of this color

**Returns:** *number*

Defined in: [Color.ts:245](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L245)

___

### getBlue

▸ **getBlue**(): *number*

Gets the blue channel of this color

**Returns:** *number*

Defined in: [Color.ts:228](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L228)

___

### getGreen

▸ **getGreen**(): *number*

Gets the green channel of this color

**Returns:** *number*

Defined in: [Color.ts:211](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L211)

___

### getRed

▸ **getRed**(): *number*

Gets the red channel of this color

**Returns:** *number*

Defined in: [Color.ts:194](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L194)

___

### lighten

▸ **lighten**(`percent`: *number*): [*Color*](color.color-1.md)

Increases the brightness of this color.

Does not change the current instance.

#### Parameters:

Name | Type |
:------ | :------ |
`percent` | *number* |

**Returns:** [*Color*](color.color-1.md)

Defined in: [Color.ts:323](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L323)

___

### setAlpha

▸ **setAlpha**(`a`: *number*): [*Color*](color.color-1.md)

Sets the green channel of this color

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`a` | *number* | A value between 0 and 1    |

**Returns:** [*Color*](color.color-1.md)

Defined in: [Color.ts:237](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L237)

___

### setBlue

▸ **setBlue**(`b`: *number*): [*Color*](color.color-1.md)

Sets the green channel of this color

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`b` | *number* | A value between 0 and 255    |

**Returns:** [*Color*](color.color-1.md)

Defined in: [Color.ts:220](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L220)

___

### setGreen

▸ **setGreen**(`g`: *number*): [*Color*](color.color-1.md)

Sets the green channel of this color

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`g` | *number* | A value between 0 and 255    |

**Returns:** [*Color*](color.color-1.md)

Defined in: [Color.ts:203](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L203)

___

### setRed

▸ **setRed**(`r`: *number*): [*Color*](color.color-1.md)

Sets the red channel of this color

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`r` | *number* | A value between 0 and 255    |

**Returns:** [*Color*](color.color-1.md)

Defined in: [Color.ts:186](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L186)

___

### toHex

▸ **toHex**(): *number*

Returns the numerical value of this color.

__Note:__ This ignores the alpha channel.

**Returns:** *number*

Defined in: [Color.ts:277](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L277)

___

### toHexString

▸ **toHexString**(): *string*

Returns a hex string

__Note:__ This ignores the alpha channel.

**Returns:** *string*

Defined in: [Color.ts:286](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L286)

___

### toRGBAObject

▸ **toRGBAObject**(): [*IRGBA*](../interfaces/irgba.irgba-1.md)

Returns an IRGBA object

**Returns:** [*IRGBA*](../interfaces/irgba.irgba-1.md)

Defined in: [Color.ts:307](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L307)

___

### toRGBAString

▸ **toRGBAString**(): *string*

Returns a rgba string

**Returns:** *string*

Defined in: [Color.ts:268](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L268)

___

### toRGBObject

▸ **toRGBObject**(): [*IRGBA*](../interfaces/irgba.irgba-1.md)

Returns an IRGBA object.

__Note:__ This ignores the alpha channel.

**Returns:** [*IRGBA*](../interfaces/irgba.irgba-1.md)

Defined in: [Color.ts:295](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L295)

___

### toRGBString

▸ **toRGBString**(): *string*

Returns a rgb string

**Returns:** *string*

Defined in: [Color.ts:261](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L261)

___

### toString

▸ **toString**(): *string*

Returns a stringified version of this `Color`

**Returns:** *string*

Defined in: [Color.ts:377](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L377)

___

### valueOf

▸ **valueOf**(): *number*

Returns the numerical value of this color.

__Note:__ This ignores the alpha channel.

**Returns:** *number*

Defined in: [Color.ts:254](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L254)

___

### colorAlphaToColor

▸ `Static`**colorAlphaToColor**(`background`: [*Color*](color.color-1.md), `alphaColor`: [*Color*](color.color-1.md)): [*Color*](color.color-1.md)

Calculates the composition of an alpha color over background color

#### Parameters:

Name | Type |
:------ | :------ |
`background` | [*Color*](color.color-1.md) |
`alphaColor` | [*Color*](color.color-1.md) |

**Returns:** [*Color*](color.color-1.md)

Defined in: [Color.ts:171](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L171)

___

### fromHex

▸ `Static`**fromHex**(`hex`: *number*): [*Color*](color.color-1.md)

**`example`** 
```typescript
let white: Color = Color.fromHex(0xFFFFFF);
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`hex` | *number* | A number    |

**Returns:** [*Color*](color.color-1.md)

Defined in: [Color.ts:119](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L119)

___

### fromHexString

▸ `Static`**fromHexString**(`hex`: *string*): [*Color*](color.color-1.md)

Builds a `Color` from a hex string.

Both 3 and 6 character formats are allowed.

**`example`** 

```typescript
let white: Color = Color.fromHexString("#FFFFFF");
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`hex` | *string* | The hex string;    |

**Returns:** [*Color*](color.color-1.md)

Defined in: [Color.ts:89](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L89)

___

### fromRGBAString

▸ `Static`**fromRGBAString**(`rgbaString`: *string*): [*Color*](color.color-1.md)

Builds a `Color` from a RGBA string.

**`example`** 

```typescript
let white: Color = Color.fromRGBAString("rgba(255, 255, 255, 1)");
```

#### Parameters:

Name | Type |
:------ | :------ |
`rgbaString` | *string* |

**Returns:** [*Color*](color.color-1.md)

Defined in: [Color.ts:65](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L65)

___

### fromRGBString

▸ `Static`**fromRGBString**(`rgbString`: *string*): [*Color*](color.color-1.md)

Builds a `Color` from a RGB string.

**`example`** 

```typescript
let white: Color = Color.fromRGBString("rgb(255, 255, 255)");
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`rgbString` | *string* | The RGB string; e.g: rgb(255, 255, 255)    |

**Returns:** [*Color*](color.color-1.md)

Defined in: [Color.ts:43](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L43)

___

### fromString

▸ `Static`**fromString**(`str`: *string*): [*Color*](color.color-1.md)

Returns a `Color` a hex string, rgb string, or rgba string.

**`example`** 
```typescript
let red: Color = Color.fromString('#FF0000');
let green: Color = Color.fromString('rgb(0, 255, 0)');
let blue: Color = Color.fromString('rgba(0, 0, 255, 1)');
```

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** [*Color*](color.color-1.md)

Defined in: [Color.ts:135](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L135)

___

### random

▸ `Static`**random**(): [*Color*](color.color-1.md)

Gives a psuedo-random color

**`example`** 
```typescript
let random: Color = Color.random();
```

**Returns:** [*Color*](color.color-1.md)

Defined in: [Color.ts:158](https://github.com/nbsolutions-ca/color/blob/16e934c/src/Color.ts#L158)
