
import {Color} from '../src/Color';

describe('utils.Color', () => {
    it('Simple Construction', () => {
        let color = new Color();
        expect(color.toString()).toBe('rgba(0,0,0,1)');
    });

    it('construction red', () => {
        let color = new Color(255, 0, 0);
        expect(color.toString()).toBe('rgba(255,0,0,1)');
    });

    it('construction green', () => {
        let color = new Color(0, 255, 0);
        expect(color.toString()).toBe('rgba(0,255,0,1)');
    });

    it('construction blue', () => {
        let color = new Color(0, 0, 255);
        expect(color.toString()).toBe('rgba(0,0,255,1)');
    });

    it('construction transparent', () => {
        let color = new Color(0, 0, 0, 0);
        expect(color.toString()).toBe('rgba(0,0,0,0)');
    });

    it('fromRGBString red', () => {
        let color = Color.fromRGBString('rgb(255,0,0)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(255,0,0,1)');
    });

    it('fromRGBString green', () => {
        let color = Color.fromRGBString('rgb(0,255,0)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(0,255,0,1)');
    });

    it('fromRGBString blue', () => {
        let color = Color.fromRGBString('rgb(0,0,255)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(0,0,255,1)');
    });

    it('fromRGBString black', () => {
        let color = Color.fromRGBString('rgb(0,0,0)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(0,0,0,1)');
    });

    it('fromRGBString white', () => {
        let color = Color.fromRGBString('rgb(255,255,255)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(255,255,255,1)');
    });
    
    it('fromRGBAString red', () => {
        let color = Color.fromRGBAString('rgba(255,0,0,1)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(255,0,0,1)');
    });

    it('fromRGBAString green', () => {
        let color = Color.fromRGBAString('rgba(0,255,0,1)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(0,255,0,1)');
    });

    it('fromRGBAString blue', () => {
        let color = Color.fromRGBAString('rgba(0,0,255,1)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(0,0,255,1)');
    });

    it('fromRGBAString black', () => {
        let color = Color.fromRGBAString('rgba(0,0,0,1)');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(0,0,0,1)');
    });

    it('fromRGBAString white', () => {
        let color = Color.fromRGBAString('rgba(255,255,255,1)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(255,255,255,1)');
    });

    it('fromRGBAString transparent', () => {
        let color = Color.fromRGBAString('rgba(255,255,255,0)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(0);
        expect(color.toString()).toBe('rgba(255,255,255,0)');
    });

    it('fromRGBAString 50% opacity', () => {
        let color = Color.fromRGBAString('rgba(255,255,255,0.5)');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(0.5);
        expect(color.toString()).toBe('rgba(255,255,255,0.5)');
    });
    
    it('fromHexString red', () => {
        let color = Color.fromHexString('#FF0000');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(255,0,0,1)');
    });

    it('fromHexString green', () => {
        let color = Color.fromHexString('#00FF00');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(0,255,0,1)');
    });

    it('fromHexString blue', () => {
        let color = Color.fromHexString('#0000FF');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(0,0,255,1)');
    });

    it('fromHexString black', () => {
        let color = Color.fromHexString('#000000');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(0,0,0,1)');
    });

    it('fromHexString white', () => {
        let color = Color.fromHexString('#FFFFFF');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(255,255,255,1)');
    });

    it('fromHexString (shorthand) red', () => {
        let color = Color.fromHexString('#F00');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(255,0,0,1)');
    });

    it('fromHexString (shorthand) green', () => {
        let color = Color.fromHexString('#0F0');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(0,255,0,1)');
    });

    it('fromHexString (shorthand) blue', () => {
        let color = Color.fromHexString('#00F');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(0,0,255,1)');
    });

    it('fromHexString (shorthand) black', () => {
        let color = Color.fromHexString('#000');
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(0,0,0,1)');
    });

    it('fromHexString (shorthand) white', () => {
        let color = Color.fromHexString('#FFF');
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(255,255,255,1)');
    });

    it('randomize', () => {
        let c1 = Color.random();
        let c2 = Color.random();
        expect(c1).not.toEqual(c2);
    });

    it('fromString rgb', () => {
        let c = Color.fromString('rgb(0,0,0)');
        expect(c.getRed()).toBe(0);
        expect(c.getGreen()).toBe(0);
        expect(c.getBlue()).toBe(0);
        expect(c.getAlpha()).toBe(1);
        expect(c.toString()).toBe('rgba(0,0,0,1)');
    });

    it('fromString rgba', () => {
        let c = Color.fromString('rgba(0,0,0,0.5)');
        expect(c.getRed()).toBe(0);
        expect(c.getGreen()).toBe(0);
        expect(c.getBlue()).toBe(0);
        expect(c.getAlpha()).toBe(0.5);
        expect(c.toString()).toBe('rgba(0,0,0,0.5)');
    });

    it('fromString hex', () => {
        let c = Color.fromString('#000000');
        expect(c.getRed()).toBe(0);
        expect(c.getGreen()).toBe(0);
        expect(c.getBlue()).toBe(0);
        expect(c.getAlpha()).toBe(1);
        expect(c.toString()).toBe('rgba(0,0,0,1)');
    });

    it('fromString (shorthand) hex', () => {
        let c = Color.fromString('#000');
        expect(c.getRed()).toBe(0);
        expect(c.getGreen()).toBe(0);
        expect(c.getBlue()).toBe(0);
        expect(c.getAlpha()).toBe(1);
        expect(c.toString()).toBe('rgba(0,0,0,1)');
    });

    it('clone is not the same instance as the original', () => {
        let c = Color.fromString('#fff');
        let clone = c.clone();
        expect(c).not.toBe(clone);
        expect(clone.getRed()).toBe(255);
        expect(clone.getGreen()).toBe(255);
        expect(clone.getBlue()).toBe(255);
        expect(clone.getAlpha()).toBe(1);
        expect(clone.toString()).toBe(c.toString());
    });
    
    it('fromHex red', () => {
        let color = Color.fromHex(0xFF0000);
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(255,0,0,1)');
    });

    it('fromHex green', () => {
        let color = Color.fromHex(0x00FF00);
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(0,255,0,1)');
    });

    it('fromHex blue', () => {
        let color = Color.fromHex(0x0000FF);
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(0,0,255,1)');
    });

    it('fromHex black', () => {
        let color = Color.fromHex(0x000000);
        expect(color.getRed()).toBe(0);
        expect(color.getGreen()).toBe(0);
        expect(color.getBlue()).toBe(0);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(0,0,0,1)');
    });

    it('fromHex white', () => {
        let color = Color.fromHex(0xFFFFFF);
        expect(color.getRed()).toBe(255);
        expect(color.getGreen()).toBe(255);
        expect(color.getBlue()).toBe(255);
        expect(color.getAlpha()).toBe(1);
        expect(color.toString()).toBe('rgba(255,255,255,1)');
    });

    it('setRed', () => {
        let c = Color.random();
        c.setRed(255);
        expect(c.getRed()).toBe(255);
    });

    it('setGreen', () => {
        let c = Color.random();
        c.setGreen(255);
        expect(c.getGreen()).toBe(255);
    });

    it('setBlue', () => {
        let c = Color.random();
        c.setBlue(255);
        expect(c.getBlue()).toBe(255);
    });

    it('setAlpha', () => {
        let c = Color.random();
        c.setAlpha(0.5);
        expect(c.getAlpha()).toBe(0.5);
    });

    it('toRGBObject', () => {
        let c = new Color(200, 200, 200);
        let obj = c.toRGBObject();
        expect(obj.r).toBe(200);
        expect(obj.g).toBe(200);
        expect(obj.b).toBe(200);
    });

    it('lighten', () => {
        let c = new Color(100, 100, 100);
        c = c.lighten(0.1);
        expect(c.getRed()).toBe(110);
        expect(c.getGreen()).toBe(110);
        expect(c.getBlue()).toBe(110);
    });

    it('darken', () => {
        let c = new Color(100, 100, 100);
        c = c.darken(0.1);
        expect(c.getRed()).toBe(90);
        expect(c.getGreen()).toBe(90);
        expect(c.getBlue()).toBe(90);
    });

    it('toHexString', () => {
        let c = new Color(255, 255, 255);
        expect(c.toHexString()).toBe('#FFFFFF');
    });
});
