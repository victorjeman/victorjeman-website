const BREAKPOINTS = {
  SMALL: 48,
  MEDIUM: 70,
  LARGE: 90,
  XLARGE: 105,
};

export const MEDIA = {
  SMALL_ONLY: `screen and (max-width: ${BREAKPOINTS.SMALL}em)`,
  MEDIUM_ONLY: `screen and (min-width: ${BREAKPOINTS.SMALL + 1}em) and (max-width: ${
    BREAKPOINTS.MEDIUM
  }em)`,

  LARGE_ONLY: `screen and (min-width: ${BREAKPOINTS.MEDIUM + 1}em) and (max-width: ${
    BREAKPOINTS.LARGE
  }em)`,
  XLARGE_ONLY: `screen and (min-width: ${BREAKPOINTS.LARGE + 1}em) and (max-width: ${
    BREAKPOINTS.XLARGE
  }em)`,
  MEDIUM_DOWN: `screen and (max-width: ${BREAKPOINTS.MEDIUM}em)`,
  MEDIUM_UP: `screen and (min-width: ${BREAKPOINTS.SMALL + 1}em)`,
  LARGE_UP: `screen and (min-width: ${BREAKPOINTS.MEDIUM + 1}em)`,
  XLARGE_UP: `screen and (min-width: ${BREAKPOINTS.LARGE + 1}em)`,
};
