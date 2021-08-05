/**
 * Returns media query
 * @param {number} breakpoint - Number for breakpoint in px
 * @param {string} styles - CSS Styles
*/
export const media = (breakpoint, styles) =>
  `
  @media (max-width: ${breakpoint}px){
    ${styles}
  }`;

export default media;
