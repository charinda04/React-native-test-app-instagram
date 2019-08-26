// @flow

/**
 * Generate Ancon primary color with an opacity
 * @param  {number} opacity Opacity percentage value
 * @return {string}         The RGBA value of the Ancon primary color
 */
const anconPrimaryColor = (opacity: number = 100): string => {
  return `rgba(196, 67, 52, ${opacity / 100})`;
};

// propozer pink colors
const darkPink =  'rgba(245, 0, 80, 1)';
const mediumPink =  'rgba(245, 8, 102, 1)';
const lightPink =  'rgba(255, 117, 134, 0.5)';
const backgroundGreyPink =  'rgba(230, 230, 234, 1)';
const grey =  'rgba(119, 119, 119, 0.4)';

// const grey =  'rgba(114, 109, 109, 1)';

// White and black are defined separately because we may need it across many types
const disabledOpacity = 0.34;
const white = 'rgba(255, 255, 255, 1)';
const black = 'rgba(0, 0, 0, 1)';
const transparentBlack = 'rgba(0, 0, 0, 0.34)';
const borderColor = 'rgba(0, 0, 0, 0.1)';

const lightGray = 'rgba(224, 224, 224, 1)';
const lightGrayDisabled = `rgba(224, 224, 224, ${disabledOpacity})`;

const jimLightGray = 'rgba(200, 209, 211, 0.3)';
const jimGray = 'rgba(200, 209, 211, 1)';

const anconRed = 'rgba(195, 66, 51, 1)';

/**
   * App colors
   * @type {Object}
   */
export default {
  borders: {

  },
  shadows: {
    gray: 'rgba(0, 0, 0, 0.16)',
    disabledOverlay: 'rgba(255,255,255,0.6)',
    lightDisabledOverlay: 'rgba(255,255,255,0.2)',
    black,
  },
  icons: {
    anconRed,
    gray: 'rgba(110, 140, 160, 1)',
    transparentWhite: 'rgba(255, 255, 255, 0.5)',
  },
  backgrounds: {
    brandGradient: {
      begin: anconPrimaryColor(),
      end: anconRed,
    },

    orderStatusGray: jimGray,
    orderStatusBlue: 'rgba(109, 138, 158, 1)',
    orderStatusOrange: 'rgba(217, 125, 84, 1)',
    orderStatusRed: 'rgba(191, 64, 49, 1)',
    blackish: 'rgba(0, 0, 0, 0.8)',
    amber: 'rgba(240,163,10,1 )',
  },
  font: {
    transparentLightGray: 'rgba(110, 140, 160, 0.3)',
    overlayTransparentBlack: 'rgba(0, 0, 0, 0.15)',
    active: anconPrimaryColor(),
    dark: 'rgba(38, 38, 38, 1)',
    darkDisabled: `rgba(38, 38, 38,  ${disabledOpacity})`,
    light: 'rgba(117, 117, 117, 1)',
    lightDisabled: `rgba(117, 117, 117, ${disabledOpacity})`,
    white,
    extremelyDarkGray: 'rgba(51, 72, 86, 1)',
    gray: 'rgba(110, 140, 160, 1)',
    lightGray,
    titleDark: 'rgba(27, 28, 32, 1)',
    positive: 'rgba(8, 119, 62, 1)',
    negative: anconPrimaryColor(),
    anotherOption: 'rgba(84, 119, 170, 1)', // TODO:Change later
    blue: 'rgba(110, 140, 160, 1)',
    darkBlue: 'rgba(51, 72, 86, 1)',
    red: 'rgba(195, 66, 51, 1)',
    anconRed,
    darkerGray: 'rgba(122, 149, 168, 1)',
    settingsBlue: 'rgba(50, 71, 85, 1)',
    amber: 'rgba(240,163,10,1 )',
    transparentWhite: 'rgba(255, 255, 255, 0.5)',
  },
  colorPalette: {
    primary: anconPrimaryColor(),
    accent: anconPrimaryColor(50),
    accentLight: anconPrimaryColor(14),
  },

  // added to support group item colors. can remove them later after editing
  colors: {
    accentColor: '#0084ff',
    inactiveGreyColor: '#626262',
    lightGreyCOlor: '#7f8c8d',
    separator: '#bdc3c7',
    white: 'white',
    black: 'black',
    grey: 'grey',
    green: 'green',
    onlineGreen: '#2ecc71',
    lightWhite: '#f9f9f9',
  },

  // Generic colors to be used anywhere
  white,
  black,
  transparent: '#ffffff00',
  transparentBlack,
  borderColor,
  jimGray,
  darkPink,
  mediumPink,
  lightPink,
  backgroundGreyPink,
  grey,
};

