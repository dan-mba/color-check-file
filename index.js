import ColorContrastChecker from 'color-contrast-checker';
import icons from './icons.json' assert { type: "json" };


const ccc = new ColorContrastChecker();
const fontSize = 16;
const bgColor = "#000000"

for (let key in icons) {
  if (ccc.isLevelAA(icons[key], bgColor, fontSize)) {
    console.log(`${key} does not meet AA contrast`)
  }
}
