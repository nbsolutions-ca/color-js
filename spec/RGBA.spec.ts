
import { RGB } from '../src/RGB';
import {RGBA} from '../src/RGBA';

describe('utils.RGBA', () => {
    it('Simple Construction', () => {
        let color = new RGBA();
        expect(color.toString()).toBe('rgba(0,0,0,1)');
    });

    it('construction red', () => {
        let color = new RGBA(255, 0, 0);
        expect(color.toString()).toBe('rgba(255,0,0,1)');
    });

    it('construction green', () => {
        let color = new RGBA(0, 255, 0);
        expect(color.toString()).toBe('rgba(0,255,0,1)');
    });

    it('construction blue', () => {
        let color = new RGBA(0, 0, 255);
        expect(color.toString()).toBe('rgba(0,0,255,1)');
    });

    it('construction transparent', () => {
        let color = new RGBA(0, 0, 0, 0);
        expect(color.toString()).toBe('rgba(0,0,0,0)');
    });

    it('fromRGBString red', () => {
        let color = RGBA.fromRGBString('rgb(255,0,0)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(255,0,0,1)');
    });

    it('fromRGBString green', () => {
        let color = RGBA.fromRGBString('rgb(0,255,0)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(0,255,0,1)');
    });

    it('fromRGBString blue', () => {
        let color = RGBA.fromRGBString('rgb(0,0,255)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(0,0,255,1)');
    });

    it('fromRGBString black', () => {
        let color = RGBA.fromRGBString('rgb(0,0,0)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(0,0,0,1)');
    });

    it('fromRGBString white', () => {
        let color = RGBA.fromRGBString('rgb(255,255,255)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(255,255,255,1)');
    });
    
    it('fromRGBAString red', () => {
        let color = RGBA.fromRGBAString('rgba(255,0,0,1)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(255,0,0,1)');
    });

    it('fromRGBAString green', () => {
        let color = RGBA.fromRGBAString('rgba(0,255,0,1)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(0,255,0,1)');
    });

    it('fromRGBAString blue', () => {
        let color = RGBA.fromRGBAString('rgba(0,0,255,1)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(0,0,255,1)');
    });

    it('fromRGBAString black', () => {
        let color = RGBA.fromRGBAString('rgba(0,0,0,1)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(0,0,0,1)');
    });

    it('fromRGBAString white', () => {
        let color = RGBA.fromRGBAString('rgba(255,255,255,1)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(255,255,255,1)');
    });

    it('fromRGBAString transparent', () => {
        let color = RGBA.fromRGBAString('rgba(255,255,255,0)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(0);
        expect(color.toString()).toBe('rgba(255,255,255,0)');
    });

    it('fromRGBAString 50% opacity', () => {
        let color = RGBA.fromRGBAString('rgba(255,255,255,0.5)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(127);
        expect(color.toString()).toBe('rgba(255,255,255,0.4980392156862745)');
    });
    
    it('fromHexString red', () => {
        let color = RGBA.fromHexString('#FF0000');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(255,0,0,1)');
    });

    it('fromHexString green', () => {
        let color = RGBA.fromHexString('#00FF00');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(0,255,0,1)');
    });

    it('fromHexString blue', () => {
        let color = RGBA.fromHexString('#0000FF');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(0,0,255,1)');
    });

    it('fromHexString black', () => {
        let color = RGBA.fromHexString('#000000');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(0,0,0,1)');
    });

    it('fromHexString white', () => {
        let color = RGBA.fromHexString('#FFFFFF');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(255,255,255,1)');
    });

    it('fromHexString (shorthand) red', () => {
        let color = RGBA.fromHexString('#F00');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(255,0,0,1)');
    });

    it('fromHexString (shorthand) green', () => {
        let color = RGBA.fromHexString('#0F0');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(0,255,0,1)');
    });

    it('fromHexString (shorthand) blue', () => {
        let color = RGBA.fromHexString('#00F');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(0,0,255,1)');
    });

    it('fromHexString (shorthand) black', () => {
        let color = RGBA.fromHexString('#000');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(0,0,0,1)');
    });

    it('fromHexString (shorthand) white', () => {
        let color = RGBA.fromHexString('#FFF');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(255,255,255,1)');
    });

    it('randomize', () => {
        let c1 = RGBA.random();
        let c2 = RGBA.random();
        expect(c1).not.toEqual(c2);
    });

    it('fromString rgb', () => {
        let c = RGBA.fromString('rgb(0,0,0)');
        expect(c.getRed()).toBe(0);
        expect(c.getGreen()).toBe(0);
        expect(c.getBlue()).toBe(0);
        expect(c.getAlpha()).toBe(255);
        expect(c.toString()).toBe('rgba(0,0,0,1)');
    });

    it('fromString rgba', () => {
        let c = RGBA.fromString('rgba(0,0,0,0.5)');
        expect(c.getRed()).toBe(0);
        expect(c.getGreen()).toBe(0);
        expect(c.getBlue()).toBe(0);
        expect(c.getAlpha()).toBe(127);
        expect(c.toString()).toBe('rgba(0,0,0,0.4980392156862745)');
    });

    it('fromString hex', () => {
        let c = RGBA.fromString('#000000FF');
        expect(c.getRed()).toBe(0);
        expect(c.getGreen()).toBe(0);
        expect(c.getBlue()).toBe(0);
        expect(c.getAlpha()).toBe(255);
        expect(c.toString()).toBe('rgba(0,0,0,1)');
    });

    it('fromString (shorthand) hex', () => {
        let c = RGBA.fromString('#000');
        expect(c.getRed()).toBe(0);
        expect(c.getGreen()).toBe(0);
        expect(c.getBlue()).toBe(0);
        expect(c.getAlpha()).toBe(255);
        expect(c.toString()).toBe('rgba(0,0,0,1)');
    });

    it('clone is not the same instance as the original', () => {
        let c = RGBA.fromString('#fff');
        let clone = c.clone();
        expect(c).not.toBe(clone);
        expect(clone.getRed()).toBe(255);
        expect(clone.getGreen()).toBe(255);
        expect(clone.getBlue()).toBe(255);
        expect(clone.getAlpha()).toBe(255);
        expect(clone.toString()).toBe(c.toString());
    });
    
    it('fromHex red', () => {
        let color = RGBA.fromHex(0xFF0000FF);
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(255,0,0,1)');
    });

    it('fromHex green', () => {
        let color = RGBA.fromHex(0x00FF00FF);
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(0,255,0,1)');
    });

    it('fromHex blue', () => {
        let color = RGBA.fromHex(0x0000FFFF);
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(0,0,255,1)');
    });

    it('fromHex black', () => {
        let color = RGBA.fromHex(0x000000FF);
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(0,0,0,1)');
    });

    it('fromHex white', () => {
        let color = RGBA.fromHex(0xFFFFFFFF);
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(255);
        expect(color.toString()).toBe('rgba(255,255,255,1)');
    });

    it('setRed', () => {
        let c = RGBA.random();
        c.setRed(255);
        expect(c.getRed()).toBe(255);
    });

    it('setGreen', () => {
        let c = RGBA.random();
        c.setGreen(255);
        expect(c.getGreen()).toBe(255);
    });

    it('setBlue', () => {
        let c = RGBA.random();
        c.setBlue(255);
        expect(c.getBlue()).toBe(255);
    });

    it('setAlpha', () => {
        let c = RGBA.random();
        c.setAlpha(0.5);
        expect(c.getAlpha()).toBe(0.5);
    });

    it('toRGBObject', () => {
        let c = new RGBA(200, 200, 200);
        let obj = c.toRGBObject();
        expect(obj.r).toBe(200);
        expect(obj.g).toBe(200);
        expect(obj.b).toBe(200);
    });

    it('lighten', () => {
        let c = new RGBA(100, 100, 100);
        c = c.lighten(0.1);
        expect(c.getRed()).toBe(110);
        expect(c.getGreen()).toBe(110);
        expect(c.getBlue()).toBe(110);
    });

    it('darken', () => {
        let c = new RGBA(100, 100, 100);
        c = c.darken(0.1);
        expect(c.getRed()).toBe(90);
        expect(c.getGreen()).toBe(90);
        expect(c.getBlue()).toBe(90);
    });

    it('toHexString', () => {
        let c = new RGBA(255, 255, 255);
        expect(c.toHexString()).toBe('#FFFFFFFF');
    });

    it('toKMLString', () => {
        let c = new RGBA(255, 0, 255, 128);
        expect(c.toKMLString()).toBe('80FF00FF');
    });

    it('toRGB', () => {
        let rgba: RGBA = new RGBA(1, 2, 3, 4);
        let rgb: RGB = rgba.toRGB();
        expect(rgb.getRed()).toBe(1);
        expect(rgb.getGreen()).toBe(2);
        expect(rgb.getBlue()).toBe(3);
    });
});
