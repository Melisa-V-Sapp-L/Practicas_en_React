import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";


export default function ColorPickertp() {
  const [color, setColor] = useColor("hex", "#121212");

  
  return (
    
      <div>
        <p style={{ color: color.hex}}>Todavía tengo muchas cosas que hacer....😵‍💫</p>
        <ColorPicker
          width={456}
          height={228}
          color={color}
          onChange={setColor}
          hideHSV
          hideRGB
          dark
        />
      </div>
    
  );
}
