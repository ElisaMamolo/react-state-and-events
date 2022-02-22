//function component

function WeatherWidget(props) {
  //get props.celsius from app.js
  let temperature = props.celsius;
  //we will recevive the unit and define conditional variable boolean
  const unitIsFahrenheit = props.unit === "F";

  if (unitIsFahrenheit) {
    temperature = props.celsius * 1.8 + 32;
  }

  return (
    <div className="WeatherWidget">
      <span>{props.icon}</span>
      <h3>{props.city}</h3>
      <h2>
        {temperature} °{props.unit}
      </h2>
    </div>
  );
}

export default WeatherWidget;
