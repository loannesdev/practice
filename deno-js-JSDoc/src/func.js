/**
 * @param {string} text - Texto original
 * @param {number} number - Número que se agregará
 * @returns {string} Cadena de texto
 */
export const appendNumber = (text, number) => {
  return `${text} ${String(number)}`;
}