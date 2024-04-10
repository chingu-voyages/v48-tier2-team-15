import * as d3 from "d3";
import { useMemo, useRef } from "react";
import styles from "./chart.module.css";

const MARGIN_X = 100;
const MARGIN_Y = 100;
const INFLEXION_PADDING = 40;

const PieChart = ({ data, height, width }) => {
  const ref = useRef(null);
  const dietCount = {};

  data.forEach((dino) => {
    dietCount[dino.diet] = (dietCount[dino.diet] || 0) + 1;
  });

  const dietData = Object.entries(dietCount).map(([name, count]) => ({
    name,
    count,
  }));

  const radius = Math.min(width - 2 * MARGIN_X, height - 2 * MARGIN_Y) / 2;

  // Set Color
  const color = d3
    .scaleSequential(d3.interpolateCool)
    .domain([0, dietData.length]); // set domain based on the number of arcs

  const pie = useMemo(() => {
    const pieGenerator = d3.pie().value((d) => d.count);

    return pieGenerator(dietData);
  });

  const arcGenerator = d3.arc();

  const shapes = pie.map((grp, i) => {
    const sliceInfo = {
      innerRadius: 0,
      outerRadius: radius,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };

    const centroid = arcGenerator.centroid(sliceInfo);
    const slicePath = arcGenerator(sliceInfo);

    const inflexionInfo = {
      innerRadius: radius + INFLEXION_PADDING,
      outerRadius:
        i === 4
          ? radius + INFLEXION_PADDING + 40
          : radius + INFLEXION_PADDING || i === 1
          ? radius + INFLEXION_PADDING - 20
          : radius + INFLEXION_PADDING,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };

    const inflexionPoint = arcGenerator.centroid(inflexionInfo);

    const isRightLabel = inflexionPoint[0] > -10;
    const labelPosX = inflexionPoint[0] + (isRightLabel ? 30 : -30);
    const textAnchor = isRightLabel ? "start" : "end";
    const label = `${grp.data.name} (${(grp.value / 316).toFixed(2) * 100}%)`;

    return (
      <g
        key={i}
        className={styles.slice}
        onMouseEnter={() => {
          if (ref.current) {
            ref.current.classList.add(styles.hasHighlight);
          }
        }}
        onMouseLeave={() => {
          if (ref.current) {
            ref.current.classList.remove(styles.hasHighlight);
          }
        }}
      >
        <path d={slicePath} fill={color(i)} />
        <circle cx={centroid[0]} cy={centroid[1]} r={2} />
        <line
          x1={centroid[0]}
          y1={centroid[1]}
          x2={inflexionPoint[0]}
          y2={inflexionPoint[1]}
          stroke={"black"}
          fill={"black"}
        />
        <line
          x1={inflexionPoint[0]}
          y1={inflexionPoint[1]}
          x2={labelPosX}
          y2={inflexionPoint[1]}
          stroke={"black"}
          fill={"black"}
        />
        <text
          x={labelPosX + (isRightLabel ? 10 : -10)}
          y={inflexionPoint[1]}
          textAnchor={textAnchor}
          dominantBaseline="middle"
          fontSize={14}
        >
          {label}
        </text>
      </g>
    );
  });

  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      <g
        transform={`translate(${width / 2}, ${height / 2})`}
        className={styles.container}
        ref={ref}
      >
        {shapes}
      </g>
    </svg>
  );
};

export default PieChart;
