import { Color } from '../src/Color.js';

console.log('🧪 Running unit tests...');

// Test HEX conversions
const testHex = "#a1b2c3";
const testNum = 0xA1B2C3;

console.assert(Color.hexToNumber(testHex) === testNum, 'hexToNumber failed');
console.assert(Color.numberToHexRgb(testNum) === testHex, 'numberToHexRgb failed');

// Test RGB conversions
const rgb = { r: 161, g: 178, b: 195 };
console.assert(Color.rgbToNumber(rgb.r, rgb.g, rgb.b) === testNum, 'rgbToNumber failed');

const convertedRgb = Color.numberToRgb(testNum);
console.assert(
    convertedRgb.r === rgb.r && convertedRgb.g === rgb.g && convertedRgb.b === rgb.b,
    'numberToRgb failed'
);

// Test validation
console.assert(Color.isHex("#abc") === true, 'isHex short RGB failed');
console.assert(Color.isHex("#a1b2c3") === true, 'isHex RGB failed');
console.assert(Color.isHex("#xyz123") === false, 'isHex invalid failed');

console.log('✅ All tests passed!');