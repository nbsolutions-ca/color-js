
import Hex from '@nbsolutions/hex';
import {IRGBA} from './IRGBA';

/**
 * A class that represents a color.
 * Provides tools to manipate colors.
 */
export class Color {
    private _r: number;
    private _g: number;
    private _b: number;
    private _a: number;

    /**
     * 
     * @param {Number} r Integer between 0 and 255. Represents red.
     * @param {Number} g Integer between 0 and 255. Represents green.
     * @param {Number} b Integer between 0 and 255. Represents blue.
     * @param {Number} a Float between 0 and 1. Represents alpha.
     */
    public constructor(r?: number, g?: number, b?: number, a?: number) {
        this._r = r || 0;
        this._g = g || 0;
        this._b = b || 0;
        this._a = ((a === undefined || a === null) ? 1 : a) * 255;
        if (isNaN(this._a)) {
            this._a = 255;
        }
    }

    /**
     * Builds a `Color` from a RGB string.
     * 
     * @example
     * 
     * ```typescript
     * let white: Color = Color.fromRGBString("rgb(255, 255, 255)");
     * ```
     * 
     * @param {String} rgbString The RGB string; e.g: rgb(255, 255, 255)
     */
    public static fromRGBString(rgbString: string): Color {
        rgbString = rgbString.toLowerCase().replace('rgb(', '').replace(')', '');
        let rgb: Array<string> = rgbString.split(',');
        return new Color(
            parseInt(rgb[0]),
            parseInt(rgb[1]),
            parseInt(rgb[2]),
            1
        );
    }

    /**
     * Builds a `Color` from a RGBA string.
     * 
     * @example
     * 
     * ```typescript
     * let white: Color = Color.fromRGBAString("rgba(255, 255, 255, 1)");
     * ```
     * 
     * @param {String} rgbString The RGBA string; e.g: rgba(255, 255, 255, 0.5)
     */
    public static fromRGBAString(rgbaString: string): Color {
        rgbaString = rgbaString.toLowerCase().replace('rgba(', '').replace(')', '');
        let rgba: Array<string> = rgbaString.split(',');
        return new Color(
            parseInt(rgba[0]),
            parseInt(rgba[1]),
            parseInt(rgba[2]),
            parseFloat(rgba[3])
        );
    }

    /**
     * Builds a `Color` from a hex string.
     * 
     * Both 3 and 6 character formats are allowed.
     * 
     * @example
     * 
     * ```typescript
     * let white: Color = Color.fromHexString("#FFFFFF");
     * ```
     * 
     * @param {String} hex The hex string;
     */
    public static fromHexString(hex: string): Color {
        hex = Hex.normalize(hex);

        if (hex.length === 3) {
            hex = Hex.expand(hex);
        }

        if (hex.length !== 6) {
            throw new Error('Invalid hex length');
        }

        let r: string = hex.slice(0, 2);
        let g: string = hex.slice(2, 4);
        let b: string = hex.slice(4, 6);

        return new Color(
            Hex.fromString(r),
            Hex.fromString(g),
            Hex.fromString(b)
        );
    }

    /**
     * @example
     * ```typescript
     * let white: Color = Color.fromHex(0xFFFFFF);
     * ```
     * 
     * @param {Number} hex A number
     */
    public static fromHex(hex: number): Color {
        return Color.fromHexString('#' + Hex.toString(hex, 6));
    }

    /**
     * Returns a `Color` a hex string, rgb string, or rgba string.
     * 
     * @example
     * ```typescript
     * let red: Color = Color.fromString('#FF0000');
     * let green: Color = Color.fromString('rgb(0, 255, 0)');
     * let blue: Color = Color.fromString('rgba(0, 0, 255, 1)');
     * ```
     * 
     * @param {String} str 
     */
    public static fromString(str: string): Color {
        if (str.indexOf('#') > -1) {
            return Color.fromHexString(str);
        }
        else if (str.indexOf('rgb(') > -1) {
            return Color.fromRGBString(str);
        }
        else if (str.indexOf('rgba(') > -1) {
            return Color.fromRGBAString(str);
        }
        else {
            throw new Error('Unsupported color string format.');
        }
    }

    /**
     * Gives a psuedo-random color
     * 
     * @example
     * ```typescript
     * let random: Color = Color.random();
     * ```
     */
    public static random(): Color {
        let r: number = Math.floor(Math.random() * 255);
        let g: number = Math.floor(Math.random() * 255);
        let b: number = Math.floor(Math.random() * 255);
        return new Color(r, g, b);
    }

    /**
     * Calculates the composition of an alpha color over background color
     * 
     * @param {Color} background 
     * @param {Color} alphaColor 
     */
    public static colorAlphaToColor(background: Color, alphaColor: Color): Color {
        let alpha: number = alphaColor.getAlpha();

        return new Color(
            (1 - alpha) * background.getRed() + alpha * alphaColor.getRed(),
            (1 - alpha) * background.getGreen() + alpha * alphaColor.getGreen(),
            (1 - alpha) * background.getBlue() + alpha * alphaColor.getBlue()
        );
    }

    /**
     * Sets the red channel of this color
     * 
     * @param {Number} r A value between 0 and 255
     */
    public setRed(r: number): Color {
        this._r = r;
        return this;
    }

    /**
     * Gets the red channel of this color
     */
    public getRed(): number {
        return this._r;
    }

    /**
     * Sets the green channel of this color
     * 
     * @param {Number} g A value between 0 and 255
     */
    public setGreen(g: number): Color {
        this._g = g;
        return this;
    }

    /**
     * Gets the green channel of this color
     */
    public getGreen(): number {
        return this._g;
    }

    /**
     * Sets the green channel of this color
     * 
     * @param {Number} b A value between 0 and 255
     */
    public setBlue(b: number): Color {
        this._b = b;
        return this;
    }

    /**
     * Gets the blue channel of this color
     */
    public getBlue(): number {
        return this._b;
    }

    /**
     * Sets the green channel of this color
     * 
     * @param {Number} a A value between 0 and 1
     */
    public setAlpha(a: number): Color {
        this._a = a * 255;
        return this;
    }

    /**
     * Gets the alpha channel of this color
     */
    public getAlpha(): number {
        return this._a / 255;
    }

    /**
     * Returns the numerical value of this color.
     * 
     * __Note:__ This ignores the alpha channel.
     */
    public valueOf(): number {
        return (this.getRed() << 16) + (this.getGreen() << 8) + this.getBlue();
    }

    /**
     * Returns a rgb string
     */
    public toRGBString(): string {
        return `rgb(${this.getRed()},${this.getGreen()},${this.getBlue()})`;
    }

    /**
     * Returns a rgba string
     */
    public toRGBAString(): string {
        return `rgba(${this.getRed()},${this.getGreen()},${this.getBlue()},${this.getAlpha()})`;
    }

    /**
     * Returns the numerical value of this color.
     * 
     * __Note:__ This ignores the alpha channel.
     */
    public toHex(): number {
        return this.valueOf();
    }

    /**
     * Returns a hex string
     * 
     * __Note:__ This ignores the alpha channel.
     */
    public toHexString(): string {
        return '#' + Hex.toString(this.toHex(), 6);
    }

    /**
     * Returns an IRGBA object.
     * 
     * __Note:__ This ignores the alpha channel.
     */
    public toRGBObject(): IRGBA {
        return {
            r : this.getRed(),
            g : this.getGreen(),
            b : this.getBlue(),
            a: null
        };
    }

    /**
     * Returns an IRGBA object
     */
    public toRGBAObject(): IRGBA {
        return {
            r : this.getRed(),
            g : this.getGreen(),
            b : this.getBlue(),
            a : this.getAlpha()
        };
    }

    /**
     * Increases the brightness of this color.
     * 
     * Does not change the current instance.
     * 
     * @param {Number} percent 
     */
    public lighten(percent: number): Color {
        let r: number = this.getRed();
        let g: number = this.getGreen();
        let b: number = this.getBlue();

        r += r * percent;
        g += g * percent;
        b += b * percent;

        if (r > 255) {
            r = 255;
        }
        if (g > 255) {
            g = 255;
        }
        if (b > 255) {
            b = 255;
        }

        return new Color(r, g, b, this.getAlpha());
    }

    /**
     * Darkens the brightness of this color.
     * 
     * Does not change the current instance.
     * 
     * @param {Number} percent 
     */
    public darken(percent: number): Color {
        let r: number = this.getRed();
        let g: number = this.getGreen();
        let b: number = this.getBlue();

        r -= r * percent;
        g -= g * percent;
        b -= b * percent;

        if (r < 0) {
            r = 0;
        }
        if (g < 0) {
            g = 0;
        }
        if (b < 0) {
            b = 0;
        }

        return new Color(r, g, b, this.getAlpha());
    }

    /**
     * Returns a stringified version of this `Color`
     */
    public toString(): string {
        return this.toRGBAString();
    }

    /**
     * toKMLString
     * 
     * Returns a color code string consumable by KML: aabbggrr
     * 
     * https://developers.google.com/kml/documentation/kmlreference#kml-fields
     */
    public toKMLString(): string {
        return [
            Hex.toString(this._a, 2),
            Hex.toString(this._b, 2),
            Hex.toString(this._g, 2),
            Hex.toString(this._r, 2)
        ].join('');
    }

    /**
     * Returns a copy of this `Color`
     */
    public clone(): Color {
        return Color.fromString(this.toString());
    }
}
