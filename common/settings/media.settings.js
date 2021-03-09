const BREAKPOINTS = {
  SMALL: 768,
  MEDIUM: 1120,
  LARGE: 1200,
  XLARGE: 1400,
};

export const MEDIA = {
  SMALL_ONLY: `screen and (max-width: ${BREAKPOINTS.SMALL}px)`,
  MEDIUM_ONLY: `screen and (min-width: ${BREAKPOINTS.SMALL + 1}px) and (max-width: ${
    BREAKPOINTS.MEDIUM
  }px)`,

  LARGE_ONLY: `screen and (min-width: ${BREAKPOINTS.MEDIUM + 1}px) and (max-width: ${
    BREAKPOINTS.LARGE
  }px)`,
  XLARGE_ONLY: `screen and (min-width: ${BREAKPOINTS.LARGE + 1}px) and (max-width: ${
    BREAKPOINTS.XLARGE
  }px)`,
  MEDIUM_DOWN: `screen and (max-width: ${BREAKPOINTS.MEDIUM}px)`,
  MEDIUM_UP: `screen and (min-width: ${BREAKPOINTS.SMALL + 1}px)`,
  LARGE_DOWN: `screen and (max-width: ${BREAKPOINTS.LARGE}px)`,
  LARGE_UP: `screen and (min-width: ${BREAKPOINTS.MEDIUM + 1}px)`,
  XLARGE_UP: `screen and (min-width: ${BREAKPOINTS.LARGE + 1}px)`,
};
