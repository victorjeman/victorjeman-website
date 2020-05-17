const BREAKPOINTS = {
  MOBILE: 750,
  TABLET: 1024,
};

export const MEDIA = {
  MOBILE: `screen and (max-width: ${BREAKPOINTS.MOBILE}px)`,
  TABLET: `screen and (min-width: ${BREAKPOINTS.MOBILE + 1}px) and (max-width: ${BREAKPOINTS.TABLET}px)`,
  DESKTOP: `screen and (min-width: ${BREAKPOINTS.TABLET + 1}px)`,
  TABLET_DESKTOP: `screen and (min-width: ${BREAKPOINTS.MOBILE + 1}px)`,
};
