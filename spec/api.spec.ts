/* eslint-disable @typescript-eslint/no-unused-vars */

import * as api from '../src/api';
import {Color} from '../src/Color';

describe('Public API', () => {
    it('Color', () => {
        expect(Color).toBe(api.Color);
    });

    it('Color (default)', () => {
        expect(Color).toBe(api.default);
    });

    it('IRGBA', () => {
        let test: api.IRGBA = null;
    });
});
