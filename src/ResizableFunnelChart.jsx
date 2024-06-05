import React, { useState } from "react";
import {
  ResponsiveContainer,
  FunnelChart,
  Funnel,
  LabelList,
  Tooltip,
} from "recharts";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltV } from "@fortawesome/free-solid-svg-icons";
import "./ResizableFunnelChart.css";

const data = [
  { name: "Step 1", value: 100, fill: "#8884d8" },
  { name: "Step 2", value: 80, fill: "#83a6ed" },
  { name: "Step 3", value: 60, fill: "#8dd1e1" },
  { name: "Step 4", value: 40, fill: "#82ca9d" },
  { name: "Step 5", value: 20, fill: "#a4de6c" },
];

const ResizableFunnelChart = () => {
  const [height, setHeight] = useState(400);

  const onResize = (event, { size }) => {
    setHeight(size.height);
  };

  return (
    <ResizableBox
      width="100%"
      height={height}
      axis="y"
      minConstraints={[300, 100]}
      maxConstraints={[300, 600]}
      onResize={onResize}
      handle={
        <span className="custom-resizable-handle">
          <FontAwesomeIcon icon={faArrowsAltV} />
        </span>
      }
    >
      <ResponsiveContainer width="100%" height="100%">
        <FunnelChart>
          <Tooltip />
          <Funnel dataKey="value" data={data} isAnimationActive>
            <LabelList
              position="right"
              fill="#000"
              stroke="none"
              dataKey="name"
            />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </ResizableBox>
  );
};

export default ResizableFunnelChart;
