/* Copyright Dirk Lemstra https://github.com/dlemstra/Magick.WASM */

import { ImageMagick } from '../../src/image-magick';
import { MagickImage } from '../../src/magick-image';
import { PixelCollection } from '../../src/pixels/pixel-collection';

let image: MagickImage;

beforeEach(() => {
    ImageMagick._api = (global as any).native;
    image = new MagickImage();
    image.read('logo:');
});

afterEach(() => {
    image.dispose();
});

describe('MagickImage#pixels', () => {
    it('should dispose pixel instance', () => {
        let pixels: PixelCollection | undefined = undefined;
        image.pixels((p) => {
            pixels = p
        });

        expect(pixels).toBeDefined();
        expect(() => {
            pixels!._instance
        }).toThrowError('instance is disposed');
    });
});