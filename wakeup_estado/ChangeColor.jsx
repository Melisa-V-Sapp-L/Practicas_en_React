import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export default function ColorPickertp() {
  const [color, setColor] = useColor();
  return (
    <div>
      <ColorPicker
        width={200}
        height={50}
        color={color}
        onChange={setColor}
        hideHSV
        hideHEX
        hideRGB
      />
    </div>
  );
}
