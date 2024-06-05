import React from "react";

const VennDiagram = ({
  width = 400,
  height = 200,
  circleRadius = 100,
  overlap = 150,
  textFontSize = 12,
}) => {
  const centerX1 = circleRadius;
  const centerX2 = circleRadius + overlap;
  const centerY = circleRadius;

  return (
    <svg width={width} height={height}>
      <circle
        cx={centerX1}
        cy={centerY}
        r={circleRadius}
        fill="rgba(173, 216, 230, 0.5)"
      />
      <circle
        cx={centerX2}
        cy={centerY}
        r={circleRadius}
        fill="rgba(144, 238, 144, 0.5)"
      />
      <text
        x={centerX1}
        y={centerY}
        textAnchor="middle"
        dy=".3em"
        fontSize={textFontSize}
      >
        Influencer Segment
      </text>
      <text
        x={centerX2}
        y={centerY}
        textAnchor="middle"
        dy=".3em"
        fontSize={textFontSize}
      >
        Webinar Segment
      </text>
    </svg>
  );
};

export default VennDiagram;
