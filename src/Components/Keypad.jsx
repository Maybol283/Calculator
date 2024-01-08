import { Row, Col, Container } from "react-bootstrap";
import "./Keypad.css";
import { useState } from "react";

function Keypad() {
  const [PreCal, SetPreCal] = useState("0");
  const [Calc, SetCalc] = useState(0);

  const handleClick = (value) => {
    if (value === "AC") {
      // Reset both PreCal and Calc to "0" when AC is pressed
      SetPreCal("0");
      SetCalc("0");
    } else if (value === "=") {
      // Calculate the result when "=" is pressed
      handleCalc(PreCal);
    } else {
      // Update PreCal with the new value, unless it's currently "0"
      // In that case, replace "0" with the new value
      const newPreCal = PreCal === "0" ? value : PreCal + value;
      SetPreCal(newPreCal);
    }
  };

  const handleCalc = (PreCal) => {
    try {
      // Evaluate the expression
      const result = eval(PreCal);

      // Update the Calc state with the result
      SetCalc(result);
    } catch (error) {
      // Handle any errors, for example, when the expression is not valid
      console.error("Error in calculation: ", error);
      SetCalc("Error");
    }
  };

  const rows = [
    ["AC", "="],
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "/"],
    ["0", ".", "*"],
  ];

  return (
    <Container fluid className="bg-subtle container1">
      <Row>
        <Col className="bg-black text-warning p-0 m-0">{PreCal}</Col>
      </Row>
      <Row>
        <Col className="bg-black text-white p-0 m-0">{Calc}</Col>
      </Row>

      {rows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((item, colIndex) => (
            <Col
              className="m-0 p-0"
              key={colIndex}
              xs={item === "0" ? 6 : undefined}
            >
              <button onClick={() => handleClick(item)}>
                {item === "*" ? "x" : item}
              </button>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default Keypad;
