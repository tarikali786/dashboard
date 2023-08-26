import React, { useState } from "react";
import { Header } from "../components";
import { SketchPicker,  TwitterPicker,
  ColorResult
} from "react-color";
  import "./pencil.css"
import CustomColorPicker from "./CustomColorPicker"
export const ColorPicker = () => {
  const [backgroundColor, setBackgroundColor] = useState("#f508c6");

  const colors = ["#fff", "#000", "#fdd","#9013FE","#F508C6","#0EF643", "#D27606","#1C34DF", "#81E8EB","#00fcff","#ff0","#250DF6","#0DE59C", "#f00" ];


  const handleColorChange = (color: ColorResult) => {
    setBackgroundColor(color.hex);
  };


  return (
    <div className="m-4 md:m-10 mt-10 p-2 md:p-4 bg-white rounded-3xl">
      <Header category="App" title="ColorPicker" />

      <div className="p-4 gap-4 rounded-lg  items-center mt-4 flex flex-wrap justify-between">
        
          <SketchPicker onChange={handleColorChange}
            styles={{ default: { picker: { width: "400px" } } }}
          className="w-full" />
        
        <p  style={{backgroundColor}} className="w-40 h-10 border-1 text-center mb-2 rounded-3xl "/>
          

          <CustomColorPicker
        colors={colors}
        hexCode={backgroundColor }
        onChange={handleColorChange}
      />

      
      </div>

    
      
      
      
    </div>
  );
};
