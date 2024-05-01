import React from "react";
import ReactDOM from "react-dom";
import { ParentSize } from "@visx/responsive";
import { scaleLinear } from "@visx/scale";
import { Area } from "@visx/shape";
import { curveBasis } from "@visx/curve";
import { LinearGradient } from "@visx/gradient";
import "./styles.css";

const x = (d) => d.index;
const y = (d) => Math.max(d.value, 0.25);

function range(n) {
  return Array.from(Array(n).keys());
}

function interpolatePoints(current, next) {
  if (!next) return current;
  const xStep = 0.25;
  const yStep = Math.abs(y(next) - y(current)) * 0.03;
  const yMid1 = Math.abs(y(current) - yStep);
  const yMid2 = Math.abs(y(next) + yStep);
  const xMid1 = Math.abs(x(current) + xStep);
  const xMid2 = Math.abs(x(next) - xStep);
  return [
    current,
    { index: xMid1, value: yMid1 },
    { index: xMid2, value: yMid2 }
  ];
}

function interpolateData(data) {
  return data.map((d, i) => interpolatePoints(d, data[i + 1])).flat();
}

const segments = [
  { index: 0, value: 100 },
  { index: 1, value: 50 },
  { index: 2, value: 5 },
  { index: 3, value: 0.5 },
  { index: 4, value: 0 }
];

const data = interpolateData(segments);

function FunnelChart({ width, height }) {
  const numSegments = Math.max(...segments.map(x));
  const maxValue = Math.max(...data.map(y));

  const valuePadding = 50;
  const minmax = maxValue + valuePadding;
  const padding = width / numSegments / 2;

  const xScale = scaleLinear({
    range: [0, width],
    domain: [0, numSegments]
  });
  const yScale = scaleLinear({
    range: [height, 0],
    domain: [-minmax, minmax]
  });

  const areas = [
    { pad: 0, opacity: 1 },
    { pad: 15, opacity: 0.2 },
    { pad: 30, opacity: 0.1 }
  ];

  return (
    <svg width={width} height={height}>
      <LinearGradient
        id="gradient"
        from="#2167f9"
        to="#a479ff"
        vertical={false}
      />
      <rect width={width} height={height} fill="#14134b" rx={22} />
      {areas.map((area, i) => {
        return (
          <Area
            key={`area-${i}`}
            data={data}
            curve={curveBasis}
            x={(d) => xScale(x(d))}
            y0={(d) => yScale(y(d) + area.pad)}
            y1={(d) => yScale(-y(d) - area.pad)}
            fill="url(#gradient)"
            fillOpacity={area.opacity}
            stroke="transparent"
          />
        );
      })}
      {data.map((d, i) => {
        if (!data[i + 1] || i === data.length - 1) return null;
        const r = range(numSegments);
        return (
          <React.Fragment key={`label-${i}`}>
            {r.includes(x(d)) && (
              <text
                x={xScale(x(d)) + padding}
                y={height / 2}
                dy={".33em"}
                fill="white"
                fontSize={22}
                textAnchor="middle"
              >
                {`${y(d)}%`}
              </text>
            )}
            {r.includes(x(d) + 1) && (
              <line
                x1={xScale(x(d) + 1)}
                x2={xScale(x(d) + 1)}
                y1={0}
                y2={height}
                stroke="black"
                strokeWidth={4}
              />
            )}
          </React.Fragment>
        );
      })}
    </svg>
  );
}