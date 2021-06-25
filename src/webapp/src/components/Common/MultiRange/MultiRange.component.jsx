const MultiRange = (props) => {
  const getMultiStyles = (leftValue, rightValue, maxValue) => {
    var leftPercent = (leftValue / maxValue) * 100;
    var rightPercent = (rightValue / maxValue) * 100;

    return {
      background: "linear-gradient(90deg, red "+leftPercent+"%, #E6E879 "+leftPercent+"%, #E6E879 "+rightPercent+"%, #01BB15 "+rightPercent+"%)"
    }
  }

  const handleLeftValue = (leftValue) => {
    var intValue = parseInt(leftValue);
    var newLeftValue = (leftValue >= props.rightValue) ? parseInt(props.rightValue) - 1 : intValue;
    props.leftFunction(newLeftValue);
  }

  const handleRightValue = (rightValue) => {
    var intValue = parseInt(rightValue);
    var newRightValue = (rightValue <= props.leftValue) ? parseInt(props.leftValue) + 1 : intValue;
    props.rightFunction(newRightValue);
  }

  return (
    <>
      <span className="multirange multi">
         <input className="range" type="range" min={props.min} max={props.max} value={props.leftValue} onChange={e => handleLeftValue(e.target.value)}></input>
         <input className="range" type="range" min={props.min} max={props.max} value={props.rightValue} onChange={e => handleRightValue(e.target.value)}></input>
         <span className="bar" style={getMultiStyles(props.leftValue, props.rightValue, props.max)}></span>
      </span>
      <div className="values">
        <input type="text" value={props.leftValue}></input>
        <input type="text" value={props.rightValue}></input>
        <div className="max">{props.max}</div>
      </div>
    </>
  );
}

export default MultiRange;