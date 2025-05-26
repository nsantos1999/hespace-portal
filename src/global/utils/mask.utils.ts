export class MaskUtils {
  private static patternNumber = "9";
  static apply(mask: string, value: string) {
    const valueCleaned = String(value).replaceAll(/\D/g, "");

    let stringFormatted = [];
    let valueIndex = 0;

    for (let letterIndex = 0; letterIndex <= mask.length; letterIndex++) {
      if (valueCleaned.length < valueIndex + 1) {
        break;
      }

      if (mask[letterIndex] === this.patternNumber) {
        stringFormatted[letterIndex] = valueCleaned[valueIndex];
        valueIndex++;
        continue;
      }

      stringFormatted[letterIndex] = mask[letterIndex];
    }

    return stringFormatted.join("");
  }
}
