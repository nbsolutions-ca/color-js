
import {RGB} from './RGB';
import {Hex} from '@nbsolutions/hex';
import {IRGB} from './IRGB';
import {IRGBA} from './IRGBA';

// const RED_MASK: number = 0xFF000000;
// const GREEN_MASK: number = 0xFF0000;
// const BLUE_MASK: number = 0xFF00;
// const ALPHA_MASK: number = 0xFF;

export class RGBA extends RGB {
    private $a: number;

    /**
     * 
     * @param r Integer between 0 and 255. Represents the Red byte.
     * @param g Integer between 0 and 255. Represents the Green byte.
     * @param b Integer between 0 and 255. Represents the Blue byte.
     * @param a Integer between 0 and 255. Represents the Alpha byte. Defaults to 255.
     */
    public constructor(r?: number, g?: number, b?: number, a?: number) {
        super(r, g, b);

        if (a === undefined || a === null || a < 0 || a > 255) {
            this.$a = 255;
        }
        else {
            this.$a = a;
        }
    }

    /**
     * Sets the alpha channel of this color
     * 
     * @param {Number} a A value between 0 and 255
     */
    public setAlpha(a: number): void {
        this.$a = a;
    }

    /**
     * Gets the alpha channel of this color
     */
    public getAlpha(): number {
        return this.$a;
    }

    /**
     * Returns the numerical value of this color.
     */
    public valueOf(): number {
        return (
            ((this.getRed() << 24) +
            (this.getGreen() << 16) +
            (this.getBlue() << 8) +
            (this.getAlpha())) >>> 0
        );
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
        return `rgba(${this.getRed()},${this.getGreen()},${this.getBlue()},${this.getAlpha() / 255})`;
    }

    /**
     * Returns the numerical value of this color.
     */
    public toHex(includeAlpha?: boolean): number {
        return this.valueOf();
    }

    /**
     * Returns a hex string
     */
    public toHexString(): string {
        return '#' + Hex.toString(this.toHex(), 8);
    }

    /**
     * Returns an IRGB object.
     */
    public toRGBObject(): IRGB {
        return {
            r : this.getRed(),
            g : this.getGreen(),
            b : this.getBlue()
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
     * Builds a `RGBA` from a RGB string.
     * 
     * @example
     * 
     * ```typescript
     * let white: Color = Color.fromRGBString("rgb(255, 255, 255)");
     * ```
     * 
     * @param {String} rgbString The RGB string; e.g: rgb(255, 255, 255)
     */
    public static fromRGBString(rgbString: string): RGBA {
        rgbString = rgbString.toLowerCase().replace('rgb(', '').replace(')', '');
        let rgb: string[] = rgbString.split(',');
        return new RGBA(
            parseInt(rgb[0]),
            parseInt(rgb[1]),
            parseInt(rgb[2]),
            255
        );
    }

    /**
     * Builds a `RGBA` from a RGBA string.
     * 
     * @example
     * 
     * ```typescript
     * let white: Color = Color.fromRGBAString("rgba(255, 255, 255, 1)");
     * ```
     * 
     * __Note__: Alpha percent must resolve to an integer, therefore the given
     * alpha value may not appear identical as the out alpha.
     * 
     * @param {String} rgbString The RGBA string; e.g: rgba(255, 255, 255, 0.5)
     */
    public static fromRGBAString(rgbaString: string): RGBA {
        rgbaString = rgbaString.toLowerCase().replace('rgba(', '').replace(')', '');
        let rgba: string[] = rgbaString.split(',');
        return new RGBA(
            parseInt(rgba[0]),
            parseInt(rgba[1]),
            parseInt(rgba[2]),
            Math.floor(parseFloat(rgba[3]) * 255)
        );
    }

    /**
     * Builds a `RGBA` from a hex string.
     * 
     * Both 3, 6, and 8 character formats are allowed.
     * 
     * If 3 characters are given, e.g. #F0F, it will be treated
     * as a CSS short-form hex format and the bytes will be expanded
     * to the 6 byte format, e.g: #FF00FF.
     * 
     * If 8 characters are given, e.g. #00112233, the format is treated
     * as #RRGGBBAA
     * 
     * @example
     * 
     * ```typescript
     * let white: Color = Color.fromHexString("#FFFFFF");
     * ```
     * 
     * @param {String} hex The hex string;
     */
    public static fromHexString(hex: string): RGBA {
        hex = Hex.normalize(hex);

        if (hex.length === 3) {
            hex = Hex.expand(hex);
        }

        if (hex.length !== 6 && hex.length !== 8) {
            throw new Error('Invalid hex length');
        }

        let r: string = hex.slice(0, 2);
        let g: string = hex.slice(2, 4);
        let b: string = hex.slice(4, 6);
        let a: string = 'FF';
        if (hex.length === 8) {
            a = hex.slice(6, 8);
        }

        return new RGBA(
            Hex.fromString(r),
            Hex.fromString(g),
            Hex.fromString(b),
            Hex.fromString(a)
        );
    }

    /**
     * @example
     * ```typescript
     * let white: Color = Color.fromHex(0xFFFFFFFF);
     * ```
     * 
     * @param {Number} hex A number
     */
    public static fromHex(hex: number): RGBA {
        return RGBA.fromHexString('#' + Hex.toString(hex, 8));
    }

    /**
     * Returns a `RGBA` a hex string, rgb string, or rgba string.
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
    public static fromString(str: string): RGBA {
        if (str.indexOf('#') > -1) {
            return RGBA.fromHexString(str);
        }
        else if (str.indexOf('rgb(') > -1) {
            return RGBA.fromRGBString(str);
        }
        else if (str.indexOf('rgba(') > -1) {
            return RGBA.fromRGBAString(str);
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
    public static random(randomizeAlpha?: boolean): RGBA {
        let r: number = Math.floor(Math.random() * 255);
        let g: number = Math.floor(Math.random() * 255);
        let b: number = Math.floor(Math.random() * 255);
        let a: number = 255;
        if (randomizeAlpha) {
            a = Math.floor(Math.random() * 255);
        }
        return new RGBA(r, g, b, a);
    }

    /**
     * Calculates the composition of an alpha color over background color
     * 
     * @param {RGBA} background 
     * @param {RGBA} alphaColor 
     */
    public static colorAlphaToColor(background: RGBA, alphaColor: RGBA): RGB {
        let alpha: number = alphaColor.getAlpha() / 255;

        return new RGBA(
            (1 - alpha) * background.getRed() + alpha * alphaColor.getRed(),
            (1 - alpha) * background.getGreen() + alpha * alphaColor.getGreen(),
            (1 - alpha) * background.getBlue() + alpha * alphaColor.getBlue()
        );
    }

    /**
     * Increases the brightness of this color.
     * 
     * Does not change the current instance.
     * 
     * @param {Number} percent 
     */
    public lighten(percent: number): RGBA {
        let r: number = this.getRed();
        let g: number = this.getGreen();
        let b: number = this.getBlue();

        r += Math.round(r * percent);
        g += Math.round(g * percent);
        b += Math.round(b * percent);

        if (r > 255) {
            r = 255;
        }
        if (g > 255) {
            g = 255;
        }
        if (b > 255) {
            b = 255;
        }

        return new RGBA(r, g, b, this.getAlpha());
    }

    /**
     * Darkens the brightness of this color.
     * 
     * Does not change the current instance.
     * 
     * @param {Number} percent 
     */
    public darken(percent: number): RGBA {
        let r: number = this.getRed();
        let g: number = this.getGreen();
        let b: number = this.getBlue();

        r -= Math.round(r * percent);
        g -= Math.round(g * percent);
        b -= Math.round(b * percent);

        if (r < 0) {
            r = 0;
        }
        if (g < 0) {
            g = 0;
        }
        if (b < 0) {
            b = 0;
        }

        return new RGBA(r, g, b, this.getAlpha());
    }

    /**
     * Returns a stringified version of this `RGBA`
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
            Hex.toString(this.getAlpha(), 2),
            Hex.toString(this.getBlue(), 2),
            Hex.toString(this.getGreen(), 2),
            Hex.toString(this.getRed(), 2)
        ].join('');
    }

    /**
     * Returns a copy of this `RGBA`
     */
    public clone(): RGBA {
        return new RGBA(this.getRed(), this.getGreen(), this.getBlue(), this.getAlpha());
    }
}
