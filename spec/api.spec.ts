/* eslint-disable @typescript-eslint/no-unused-vars */

import * as api from '../src/api';
import {RGB} from '../src/RGB';
import {RGBA} from '../src/RGBA';
import {Color} from '../src/Color';

describe('Public API', () => {
    it('RGB', () => {
        expect(RGB).toBe(api.RGB);
    });

    it('RGBA', () => {
        expect(RGBA).toBe(api.RGBA);
    });

    it('Color', () => {
        expect(Color).toBe(api.Color);
    });

    it('Color (default)', () => {
        expect(Color).toBe(api.default);
    });

    it('IRGB', () => {
        let test: api.IRGB = null;
    });

    it('IRGBA', () => {
        let test: api.IRGBA = null;
    });
});
