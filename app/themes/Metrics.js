// @flow
import {Dimensions, PixelRatio} from 'react-native';
import Memoize from 'memoize-one';

const {width, height} = Dimensions.get('window');

/**
 * Viewport width
 * @type {Number}
 */
export const viewportWidth = width;

/**
 * Viewport height
 * @type {Number}
 */
export const viewportHeight = height;

/**
 * Viewport width of the design
 */
const designViewPortWidth = 375;

export const calculateMetric = Memoize((value: number) => {
  return (value / designViewPortWidth) * viewportWidth;
});

export const margin = calculateMetric(16);

export const smallMargin = calculateMetric(8);

// This probably should be more sophisticated than this.
// But here's a start.
// We classify xxhdpi (or below) devices as "small".
export const smallDisplay = PixelRatio.get() <= 3;

/**
 * App dimensions
 * @type {Object}
 */
export default {
  font: {
    massive: '18rem',
    primary: '16rem',
    giant: '15rem',
    large: '14rem',
    medium: '13rem',
    regular: '12rem',
    small: '11rem',
    tiny: '10rem',
  },
  margin: {
    primary: calculateMetric(16),
    secondary: calculateMetric(8),
  },
};

