const BREAKPOINTS = {
  SMALL: 768,
  MEDIUM: 1112,
  LARGE: 1440,
  XLARGE: 1680,
};

export const MEDIA = {
  SMALL_ONLY: `screen and (max-width: ${BREAKPOINTS.SMALL}px)`,
  MEDIUM_ONLY: `screen and (min-width: ${BREAKPOINTS.SMALL + 1}px) and (max-width: ${
    BREAKPOINTS.MEDIUM
  }px)`,
  SMALL_AND_MEDIUM_ONLY: `screen and (max-width: ${BREAKPOINTS.MEDIUM}px)`,
  LARGE_ONLY: `screen and (min-width: ${BREAKPOINTS.MEDIUM + 1}px) and (max-width: ${
    BREAKPOINTS.LARGE
  }px)`,
  XLARGE_ONLY: `screen and (min-width: ${BREAKPOINTS.LARGE + 1}px) and (max-width: ${
    BREAKPOINTS.XLARGE
  }px)`,
  MEDIUM_UP: `screen and (min-width: ${BREAKPOINTS.SMALL + 1}px)`,
  LARGE_UP: `screen and (min-width: ${BREAKPOINTS.MEDIUM + 1}px)`,
  XLARGE_UP: `screen and (min-width: ${BREAKPOINTS.LARGE + 1}px)`,
};
