
import {RGB} from '../src/RGB';

describe('utils.RGB', () => {
    it('Simple Construction', () => {
        let color = new RGB();
        expect(color.toString()).toBe('rgb(0,0,0)');
    });

    it('construction red', () => {
        let color = new RGB(255, 0, 0);
        expect(color.toString()).toBe('rgb(255,0,0)');
    });

    it('construction green', () => {
        let color = new RGB(0, 255, 0);
        expect(color.toString()).toBe('rgb(0,255,0)');
    });

    it('construction blue', () => {
        let color = new RGB(0, 0, 255);
        expect(color.toString()).toBe('rgb(0,0,255)');
    });

    it('construction transparent', () => {
        let color = new RGB(0, 0, 0);
        expect(color.toString()).toBe('rgb(0,0,0)');
    });

    it('fromRGBString red', () => {
        let color = RGB.fromRGBString('rgb(255,0,0)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.toString()).toBe('rgb(255,0,0)');
    });

    it('fromRGBString green', () => {
        let color = RGB.fromRGBString('rgb(0,255,0)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(0);
        expect(color.toString()).toBe('rgb(0,255,0)');
    });

    it('fromRGBString blue', () => {
        let color = RGB.fromRGBString('rgb(0,0,255)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(255);
        expect(color.toString()).toBe('rgb(0,0,255)');
    });

    it('fromRGBString black', () => {
        let color = RGB.fromRGBString('rgb(0,0,0)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.toString()).toBe('rgb(0,0,0)');
    });

    it('fromRGBString white', () => {
        let color = RGB.fromRGBString('rgb(255,255,255)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.toString()).toBe('rgb(255,255,255)');
    });
    
    it('fromRGBString red', () => {
        let color = RGB.fromRGBString('rgb(255,0,0)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.toString()).toBe('rgb(255,0,0)');
    });

    it('fromRGBString green', () => {
        let color = RGB.fromRGBString('rgb(0,255,0)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(0);
        expect(color.toString()).toBe('rgb(0,255,0)');
    });

    it('fromRGBString blue', () => {
        let color = RGB.fromRGBString('rgb(0,0,255)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(255);
        expect(color.toString()).toBe('rgb(0,0,255)');
    });

    it('fromRGBString black', () => {
        let color = RGB.fromRGBString('rgb(0,0,0)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.toString()).toBe('rgb(0,0,0)');
    });

    it('fromRGBString white', () => {
        let color = RGB.fromRGBString('rgb(255,255,255)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.toString()).toBe('rgb(255,255,255)');
    });

    it('fromRGBString 50% opacity', () => {
        let color = RGB.fromRGBString('rgb(255,255,255)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.toString()).toBe('rgb(255,255,255)');
    });
    
    it('fromHexString red', () => {
        let color = RGB.fromHexString('#FF0000');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.toString()).toBe('rgb(255,0,0)');
    });

    it('fromHexString green', () => {
        let color = RGB.fromHexString('#00FF00');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(0);
        expect(color.toString()).toBe('rgb(0,255,0)');
    });

    it('fromHexString blue', () => {
        let color = RGB.fromHexString('#0000FF');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(255);
        expect(color.toString()).toBe('rgb(0,0,255)');
    });

    it('fromHexString black', () => {
        let color = RGB.fromHexString('#000000');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.toString()).toBe('rgb(0,0,0)');
    });

    it('fromHexString white', () => {
        let color = RGB.fromHexString('#FFFFFF');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.toString()).toBe('rgb(255,255,255)');
    });

    it('fromHexString (shorthand) red', () => {
        let color = RGB.fromHexString('#F00');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.toString()).toBe('rgb(255,0,0)');
    });

    it('fromHexString (shorthand) green', () => {
        let color = RGB.fromHexString('#0F0');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(0);
        expect(color.toString()).toBe('rgb(0,255,0)');
    });

    it('fromHexString (shorthand) blue', () => {
        let color = RGB.fromHexString('#00F');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(255);
        expect(color.toString()).toBe('rgb(0,0,255)');
    });

    it('fromHexString (shorthand) black', () => {
        let color = RGB.fromHexString('#000');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.toString()).toBe('rgb(0,0,0)');
    });

    it('fromHexString (shorthand) white', () => {
        let color = RGB.fromHexString('#FFF');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.toString()).toBe('rgb(255,255,255)');
    });

    it('randomize', () => {
        let c1 = RGB.random();
        let c2 = RGB.random();
        expect(c1).not.toEqual(c2);
    });

    it('fromString rgb', () => {
        let c = RGB.fromString('rgb(0,0,0)');
        expect(c.getRed()).toBe(0);
        expect(c.getGreen()).toBe(0);
        expect(c.getBlue()).toBe(0);
        expect(c.toString()).toBe('rgb(0,0,0)');
    });

    it('fromString rgb', () => {
        let c = RGB.fromString('rgb(0,0,0)');
        expect(c.getRed()).toBe(0);
        expect(c.getGreen()).toBe(0);
        expect(c.getBlue()).toBe(0);
        expect(c.toString()).toBe('rgb(0,0,0)');
    });

    it('fromString hex', () => {
        let c = RGB.fromString('#000000');
        expect(c.getRed()).toBe(0);
        expect(c.getGreen()).toBe(0);
        expect(c.getBlue()).toBe(0);
        expect(c.toString()).toBe('rgb(0,0,0)');
    });

    it('fromString (shorthand) hex', () => {
        let c = RGB.fromString('#000');
        expect(c.getRed()).toBe(0);
        expect(c.getGreen()).toBe(0);
        expect(c.getBlue()).toBe(0);
        expect(c.toString()).toBe('rgb(0,0,0)');
    });

    it('clone is not the same instance as the original', () => {
        let c = RGB.fromString('#fff');
        let clone = c.clone();
        expect(c).not.toBe(clone);
        expect(clone.getRed()).toBe(255);
        expect(clone.getGreen()).toBe(255);
        expect(clone.getBlue()).toBe(255);
        expect(clone.toString()).toBe(c.toString());
    });
    
    it('fromHex red', () => {
        let color = RGB.fromHex(0xFF0000);
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.toString()).toBe('rgb(255,0,0)');
    });

    it('fromHex green', () => {
        let color = RGB.fromHex(0x00FF00);
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(0);
        expect(color.toString()).toBe('rgb(0,255,0)');
    });

    it('fromHex blue', () => {
        let color = RGB.fromHex(0x0000FF);
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(255);
        expect(color.toString()).toBe('rgb(0,0,255)');
    });

    it('fromHex black', () => {
        let color = RGB.fromHex(0x000000);
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.toString()).toBe('rgb(0,0,0)');
    });

    it('fromHex white', () => {
        let color = RGB.fromHex(0xFFFFFF);
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.toString()).toBe('rgb(255,255,255)');
    });

    it('setRed', () => {
        let c = RGB.random();
        c.setRed(255);
        expect(c.getRed()).toBe(255);
    });

    it('setGreen', () => {
        let c = RGB.random();
        c.setGreen(255);
        expect(c.getGreen()).toBe(255);
    });

    it('setBlue', () => {
        let c = RGB.random();
        c.setBlue(255);
        expect(c.getBlue()).toBe(255);
    });

    it('toRGBObject', () => {
        let c = new RGB(200, 200, 200);
        let obj = c.toRGBObject();
        expect(obj.r).toBe(200);
        expect(obj.g).toBe(200);
        expect(obj.b).toBe(200);
    });

    it('lighten', () => {
        let c = new RGB(100, 100, 100);
        c = c.lighten(0.1);
        expect(c.getRed()).toBe(110);
        expect(c.getGreen()).toBe(110);
        expect(c.getBlue()).toBe(110);
    });

    it('darken', () => {
        let c = new RGB(100, 100, 100);
        c = c.darken(0.1);
        expect(c.getRed()).toBe(90);
        expect(c.getGreen()).toBe(90);
        expect(c.getBlue()).toBe(90);
    });

    it('toHexString', () => {
        let c = new RGB(255, 255, 255);
        expect(c.toHexString()).toBe('#FFFFFF');
    });
});
