

import Hex from '@nbsolutions/hex';
import {IRGB} from './IRGB';

/**
 * A class that represents a color.
 * Provides tools to manipate colors.
 */
export class RGB {
    private $r: number;
    private $g: number;
    private $b: number;

    /**
     * 
     * @param {Number} r Integer between 0 and 255. Represents red.
     * @param {Number} g Integer between 0 and 255. Represents green.
     * @param {Number} b Integer between 0 and 255. Represents blue.
     */
    public constructor(r?: number, g?: number, b?: number) {
        this.$r = Math.round(r || 0);
        this.$g = Math.round(g || 0);
        this.$b = Math.round(b || 0);
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
    public static fromRGBString(rgbString: string): RGB {
        rgbString = rgbString.toLowerCase().replace('rgb(', '').replace(')', '');
        let rgb: string[] = rgbString.split(',');
        return new RGB(
            parseInt(rgb[0]),
            parseInt(rgb[1]),
            parseInt(rgb[2])
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
    public static fromHexString(hex: string): RGB {
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

        return new RGB(
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
    public static fromHex(hex: number): RGB {
        return RGB.fromHexString('#' + Hex.toString(hex, 6));
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
    public static fromString(str: string): RGB {
        if (str.indexOf('#') > -1) {
            return RGB.fromHexString(str);
        }
        else if (str.indexOf('rgb(') > -1) {
            return RGB.fromRGBString(str);
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
    public static random(): RGB {
        let r: number = Math.floor(Math.random() * 255);
        let g: number = Math.floor(Math.random() * 255);
        let b: number = Math.floor(Math.random() * 255);
        return new RGB(r, g, b);
    }

    /**
     * Sets the red channel of this color
     * 
     * @param {Number} r A value between 0 and 255
     */
    public setRed(r: number): RGB {
        this.$r = r;
        return this;
    }

    /**
     * Gets the red channel of this color
     */
    public getRed(): number {
        return this.$r;
    }

    /**
     * Sets the green channel of this color
     * 
     * @param {Number} g A value between 0 and 255
     */
    public setGreen(g: number): RGB {
        this.$g = g;
        return this;
    }

    /**
     * Gets the green channel of this color
     */
    public getGreen(): number {
        return this.$g;
    }

    /**
     * Sets the green channel of this color
     * 
     * @param {Number} b A value between 0 and 255
     */
    public setBlue(b: number): RGB {
        this.$b = b;
        return this;
    }

    /**
     * Gets the blue channel of this color
     */
    public getBlue(): number {
        return this.$b;
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
     * Returns the numerical value of this color.
     */
    public toHex(): number {
        return this.valueOf();
    }

    /**
     * Returns a hex string
     */
    public toHexString(): string {
        return '#' + Hex.toString(this.toHex(), 6);
    }

    /**
     * Returns an IRGBA object.
     * 
     * __Note:__ This ignores the alpha channel.
     */
    public toRGBObject(): IRGB {
        return {
            r : this.getRed(),
            g : this.getGreen(),
            b : this.getBlue()
        };
    }

    /**
     * Increases the brightness of this color.
     * 
     * Does not change the current instance.
     * 
     * @param {Number} percent 
     */
    public lighten(percent: number): RGB {
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

        return new RGB(r, g, b);
    }

    /**
     * Darkens the brightness of this color.
     * 
     * Does not change the current instance.
     * 
     * @param {Number} percent 
     */
    public darken(percent: number): RGB {
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

        return new RGB(r, g, b);
    }

    /**
     * Returns a stringified version of this `Color`
     */
    public toString(): string {
        return this.toRGBString();
    }

    /**
     * Returns a copy of this `Color`
     */
    public clone(): RGB {
        return new RGB(this.$r, this.$g, this.$b);
    }
}
