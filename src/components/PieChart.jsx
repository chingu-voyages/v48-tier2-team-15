import * as d3 from "d3";

const PieChart = ({ data, height, width }) => {
  const dietCount = {};

  data.forEach((dino) => {
    dietCount[dino.diet] = (dietCount[dino.diet] || 0) + 1;
  });

  const dietData = Object.entries(dietCount).map(([name, count]) => ({
    name,
    count,
  }));

  // Create pie generator
  const pie = d3
    .pie()
    .value((d) => d.count)
    .sort(null);

  // Create arc generator
  const arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(Math.min(width, height) / 2 - 10);

  // Create arcs
  const arcs = pie(dietData);

  // Set Color
  const color = d3.scaleSequential(d3.interpolateCool).domain([0, arcs.length]); // set domain based on the number of arcs

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs.map((arcData, index) => (
          <path key={index} d={arc(arcData)} fill={color(index)} />
        ))}
      </g>
    </svg>
  );
};

export default PieChart;
