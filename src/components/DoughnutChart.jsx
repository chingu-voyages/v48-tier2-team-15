import * as d3 from "d3";

const DoughnutChart = ({ data, height, width }) => {
  const typeCount = {};

  data.forEach((dino) => {
    typeCount[dino.typeOfDinosaur] = (typeCount[dino.typeOfDinosaur] || 0) + 1;
  });

  const typeData = Object.entries(typeCount).map(([name, count]) => ({
    name,
    count,
  }));

  // Create pie generator
  const pie = d3
    .pie()
    .value((d) => d.count)
    .sort((a, b) => d3.ascending(a.count, b.count));

  // Create arc generator
  const arc = d3
    .arc()
    .innerRadius(100)
    .outerRadius(Math.min(width, height) / 2 - 10);

  // Create arcs
  const arcs = pie(typeData);

  // Set Color
  const color = d3.scaleOrdinal(d3.schemePaired);

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

export default DoughnutChart;
