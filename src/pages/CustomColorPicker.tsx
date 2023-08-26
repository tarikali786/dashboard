
import React, { MouseEvent } from "react";
import { ColorResult, CustomPicker, HSLColor } from "react-color";
import {
  Saturation,
  EditableInput,
  Hue
} from "react-color/lib/components/common";
import tinycolor2 from "tinycolor2";

const inputStyles = {
  input: {
    border: "1px solid black",
    padding: "10px",
    fontSize: "15px",
    color: "#000"
  }
};
const inlineStyles = {
  container: {
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    width: "400px",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "white"
    // margin: "auto"
  },
  pointer: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "rgb(248, 248, 248)",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
  },
  slider: {
    width: "8px",
    borderRadius: "1px",
    height: "20px",
    boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
    background: "#fff",
    transform: "translateX(-2px)"
  },
  saturation: {
    width: "100%",
    paddingBottom: "75%",
    position: "relative",
    overflow: "hidden"
  },
  swatchCircle: {
    minWidth: 20,
    minHeight: 20,
    margin: "1px 2px",
    cursor: "pointer",
    boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
    borderRadius: "50%"
  }
};

const onPointerMouseDown = (event: MouseEvent<HTMLDivElement>) => {
  const pointer = document.querySelector(".custom-pointer") as HTMLDivElement;
  const pointerContainer = pointer?.parentElement as HTMLDivElement;
  if (pointerContainer) {
    pointerContainer.style.top = event.clientY + "px";
    pointerContainer.style.left = event.clientX + "px";
  }
};

const CustomSlider = () => {
  return <div style={inlineStyles.slider} />;
};

const CustomPointer = () => {
  return <div className="custom-pointer" style={inlineStyles.pointer} />;
};

interface Props {
  colors?: string[];
  hexCode: string;
  onChange: (color: ColorResult) => void;
}
interface State {
  hsl: { h: number; s: number; l: number };
  hsv: { h: number; s: number; v: number };
  hex: string;
}

class CustomColorPicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hsl: {
        h: 0,
        s: 0,
        l: 0
      },
      hsv: {
        h: 0,
        s: 0,
        v: 0
      },
      hex: "aaaaaa"
    };
  }

  UNSAFE_componentWillMount() {
    const color = tinycolor2(this.props.hexCode);
    this.setState({
      hsv: color.toHsv(),
      hsl: color.toHsl(),
      hex: color.toHex()
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    if (nextProps.hexCode !== this.state.hex) {
      const color = tinycolor2(nextProps.hexCode);
      this.setState({
        hsv: color.toHsv(),
        hsl: color.toHsl(),
        hex: color.toHex()
      });
    }
  }

  handleHueChange = (hue: HSLColor) => {
    this.setState({
      hsl: hue
    });
  };

  handleSaturationChange = (hsv: ColorResult) => {
    // console.log("hsv: ", hsv);
    const color = tinycolor2(hsv);
    console.log("hsv to color: ", color);
    this.props.onChange(hsv);
    const input = document.body.getElementsByTagName("input");
    if (input[5]) {
      input[5].value = color.toHex();
    }
    this.setState({
      hsl: color.toHsl()
    });
  };

  displayColorSwatches = (colors: string[]) => {
    return colors.map((color) => {
      return (
        <div
          onClick={() => this.props.onChange(color)}
          key={color}
          style={{ ...inlineStyles.swatchCircle, backgroundColor: color }}
        />
      );
    });
  };

  render() {
    return (
      <div style={inlineStyles.container}>
        <div style={inlineStyles.saturation} onMouseDown={onPointerMouseDown}>
          <Saturation
            hsl={this.state.hsl}
            hsv={this.state.hsv}
            pointer={CustomPointer}
            onChange={this.handleSaturationChange}
          />
        </div>
        <div
          style={{
            height: 20,
            position: "relative",
            margin: "10px 0px",
            width: "100%"
          }}
        >
          <Hue
            hsl={this.state.hsl}
            pointer={CustomSlider}
            // @ts-ignore
            onChange={this.handleHueChange}
            direction={"horizontal"}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "2px 0"
          }}
        >
          <span
            style={{
              color: "#000",
              fontSize: "15px",
              marginRight: "10px",
              marginTop: 2,
              marginLeft: 3
            }}
          >
            Hex
          </span>
          <EditableInput
            style={inputStyles}
            value={this.state.hex}
            onChange={this.props.onChange}
          />
        </div>
        {this.props.colors?.length && (
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              padding: 3,
              marginTop: "25px"
            }}
          >
            {this.displayColorSwatches(this.props.colors!)}
          </div>
        )}
      </div>
    );
  }
}

// @ts-ignore
export default CustomPicker(CustomColorPicker);
