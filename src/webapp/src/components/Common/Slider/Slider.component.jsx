const Slider = (props) => {
  const getStyles = (value, maxValue) => {
    var remainingPercent = (value / maxValue) * 100;
    var usedPercent = 100 - remainingPercent;

    return {
      right: usedPercent+"%",
      left: "0%",
    }
  }

  const SliderText = (props) => {
    switch (props.sign) {
      case "dollar":
        return (<div className="dollar">
                  <span className="sign">$</span>
                  <input type="text" value={props.value}></input>
                </div>);
        break;
      case "percent":
        return (<div className="dollar">
                  <input className="ler-value" type="text" value={props.value}></input>
                  <span className="percent">%</span>
                </div>);
        break;
      default:
        return (<input type="text" value={props.value}></input>);
        break;
    }
    return (props.dollarSign) ?
        (<div className="dollar">
          <span className="sign">$</span>
          <input type="text" value={props.value}></input>
        </div>) :
        (<input type="text" value={props.value}></input>);
  }

  return (
    <div className="slider">
      <span className="multirange one">
        <input className="range" type="range" min="0" max="0" value="0"></input>
        <input className="range" type="range" min={props.min} max={props.max} value={props.value} onChange={e => props.onChange(e.target.value)}></input>
        <span className="bar" style={getStyles(props.value, props.max)}></span>
      </span>
      <SliderText value={props.value} sign={props.sign} />
    </div>
  );
}

export default Slider;
