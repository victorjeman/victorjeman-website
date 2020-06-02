const BREAKPOINTS = {
  SMALL: 768,
  MEDIUM: 1024,
};

export const MEDIA = {
  SMALL_ONLY: `screen and (max-width: ${BREAKPOINTS.SMALL}px)`,
  MEDIUM_ONLY: `screen and (min-width: ${BREAKPOINTS.SMALL + 1}px) and (max-width: ${
    BREAKPOINTS.MEDIUM
  }px)`,
  MEDIUM_UP: `screen and (min-width: ${BREAKPOINTS.SMALL + 1}px)`,
  LARGE_UP: `screen and (min-width: ${BREAKPOINTS.MEDIUM + 1}px)`,
};
