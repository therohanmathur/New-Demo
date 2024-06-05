import React, { useRef, useEffect, useState } from "react";
import Highcharts from "highcharts";
import funnel from "highcharts/modules/funnel";
import highchartsMore from "highcharts/highcharts-more";
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

// Initialize Highcharts modules
funnel(Highcharts);
highchartsMore(Highcharts);

// Disable Highcharts watermark
Highcharts.setOptions({
  credits: {
    enabled: false,
  },
});

const data = [
  { name: "Visitors", value: 1000, fill: "#8884d8" },
  { name: "Sign-ups", value: 800, fill: "#83a6ed" },
  { name: "Active Users", value: 600, fill: "#8dd1e1" },
  { name: "Purchases", value: 400, fill: "#82ca9d" },
  { name: "Returning Customers", value: 200, fill: "#a4de6c" },
];

const ResizableFunnelChart = () => {
  const [height, setHeight] = useState(400);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      Highcharts.chart(chartRef.current, {
        chart: {
          type: "funnel",
        },
        title: {
          text: "Filter Funnel Chart",
        },
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b> ({point.y:.0f})",
            },
            neckWidth: "30%",
            neckHeight: "25%",
          },
        },
        series: [
          {
            name: "Steps",
            data: data.map(({ name, value }) => [name, value]),
          },
        ],
      });
    }
  }, [data]);

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
      <div ref={chartRef} style={{ width: "100%", height: "100%" }} />
    </ResizableBox>
  );
};

export default ResizableFunnelChart;
