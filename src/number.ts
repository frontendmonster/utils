/**
 * return true if given value is numeric.
 * @param {*} x - any value
 * @returns {boolean} - value is a number
 */
export const isNumber = (x: any): boolean => typeof x === 'number' && !Number.isNaN(x);

/**
 * divide two numbers and returns fallback
 * for unexpected output
 * @param {number} dividend - dividend
 * @param {number} divisor - divisor
 * @param {*} [fallback=0] - fallback value when divisor is 0
 * @returns {number | any } if divisor isn't 0 dividend/divisor elsewhere fallback
 */
export const safeDivide = (dividend: number, divisor: number, fallback: any = 0): any =>
  isNumber(dividend / divisor) ? dividend / divisor : fallback;

/**
 * clamp a number between two values
 * @param {number} value - value to clamp
 * @param {[number, number]} [range=[0, 1]] - clamp range
 * @returns {number} clamped number
 */
export const clamp = (value: number, [min, max]: number[] = [0, 1]): number => Math.max(Math.min(value, max), min);

/**
 * returns percentage value of a number from a maximum number
 * @param {number} value - current value
 * @param {number} max - max value
 * @returns {number} cuurent / max * 100 (return 0 on fallback)
 */
export const percent = (value: number, max: number): number => clamp(safeDivide(value, max)) * 100;

/**
 * random int number between two value
 * @param {range} [range = { min = 0, max = MAX_SAFE_INTEGER }] - range of random numbers
 * @returns {number} random integer between min and max
 */
export const randomInt = ({ min = 0, max = Number.MAX_SAFE_INTEGER }: { min?: number; max?: number } = {}): number =>
  Math.floor(Math.random() * (max - min)) + min;

/**
 * parse number to integer in radix 10
 * @param {string} num number to parse
 * @returns {number} parsed number
 */
export const toInteger = (num: string): number => Number.parseInt(num, 10);

/**
 * Checks if num is between min and max (and including borders).
 * @param {number} num number check
 * @param {[number, number]} [range] - range
 * @returns {boolean} number is between min and max
 */
export const isInRange = (num: number, [min, max]: [number, number]): boolean => num - min * num - max <= 0;
