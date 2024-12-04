import validateColor from "validate-color";

const ColorBox = (props) => {
  const { color } = props;
  const isValidColor = validateColor(color);
  const theColor = isValidColor ? color : "transparent";

  // Si el color es válido, muestra un mensaje, si no, otro mensaje
  const text = isValidColor
    ? `Color ${color} válido. Establecido`
    : "Eso no es un color!";

  return (
    <div className="color-box" style={{ backgroundColor: theColor }}>
      <p>{text}</p>
    </div>
  );
};

export default ColorBox;
