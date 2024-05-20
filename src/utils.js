/**
 * @param {number} alpha - The alpha value, ranging from 0 (fully transparent) to 1 (fully opaque).
 * @returns {string} The hexadecimal representation of the alpha value.
 */
function alphaToHex (alpha) {
  // Ensure the alpha value is within the valid range.
  if (alpha < 0 || alpha > 1) {
    throw new Error('Alpha value must be between 0 and 1.')
  }

  // Convert the alpha value to a number between 0 and 255.
  const alphaInt = Math.round(alpha * 255)

  // Convert the number to a hexadecimal string and pad with leading zero if necessary.
  const hex = alphaInt.toString(16).padStart(2, '0')

  return hex
}

/**
 * @param {string} color - The string of hex color without an alpha channel.
 * @param {number} alpha - The alpha value, ranging from 0 (fully transparent) to 1 (fully opaque).
 * @returns {string} A concatenated string representing the hex color and its alpha channel.
 */
export function hexWithAlpha (color, alpha) {
  return `${color}${alphaToHex(alpha)}`
}
