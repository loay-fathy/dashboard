import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  Highlight,
  SeriesDirective,
  Inject,
  Tooltip,
  DateTime,
  AreaSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";

export let data1 = [
  {
    Period: new Date(2021, 10, 14),
    US_InflationRate: 2.2,
    IN_InflationRate: 0.8,
  },
  {
    Period: new Date(2021, 10, 15),
    US_InflationRate: 2.0,
    IN_InflationRate: 1.7,
  },
  {
    Period: new Date(2021, 10, 16),
    US_InflationRate: 2.8,
    IN_InflationRate: 1.8,
  },
  {
    Period: new Date(2021, 10, 17),
    US_InflationRate: 1.6,
    IN_InflationRate: 2.1,
  },
  {
    Period: new Date(2021, 10, 18),
    US_InflationRate: 2.3,
    IN_InflationRate: 2.7,
  },
  {
    Period: new Date(2021, 10, 19),
    US_InflationRate: 2.5,
    IN_InflationRate: 2.3,
  },
  {
    Period: new Date(2021, 10, 20),
    US_InflationRate: 2.9,
    IN_InflationRate: 1.7,
  },
  {
    Period: new Date(2021, 10, 21),
    US_InflationRate: 1.1,
    IN_InflationRate: 1.5,
  },
  {
    Period: new Date(2021, 10, 22),
    US_InflationRate: 1.4,
    IN_InflationRate: 0.5,
  },
  {
    Period: new Date(2021, 10, 23),
    US_InflationRate: 1.1,
    IN_InflationRate: 1.3,
  },
];

const LineChart = () => {
  return (
    <ChartComponent
      id="chart2"
      primaryXAxis={{
        valueType: "DateTime",
        labelFormat: "dd MMM",
        minimum: new Date(2021, 10, 14),
        maximum: new Date(2021, 10, 23),
        majorGridLines: { width: 0 },
        edgeLabelPlacement: "Shift",
      }}
      primaryYAxis={{
        labelFormat: "{value}MB",
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        minimum: 0,
        maximum: 5,
        interval: 1,
      }}
      tooltip={{
        enable: true,
        format: "${point.x} : <b>${point.y}</b>",
      }}
      width="auto"
      legendSettings={{ enableHighlight: true }}
      chartArea={{ border: { width: 0 } }}
      title="Data Consumption"
    >
      <Inject services={[AreaSeries, DateTime, Legend, Tooltip, Highlight]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data1}
          xName="Period"
          yName="US_InflationRate"
          name="Andrew"
          opacity={0.5}
          marker={{
            visible: true,
            height: 7,
            width: 7,
            shape: "Circle",
            isFilled: true,
          }}
          type="Area"
          width={2}
          border={{ width: 2 }}
        ></SeriesDirective>
        <SeriesDirective
          dataSource={data1}
          xName="Period"
          yName="IN_InflationRate"
          name="Thomas"
          marker={{
            visible: true,
            height: 7,
            width: 7,
            shape: "Circle",
            isFilled: true,
          }}
          opacity={0.5}
          type="Area"
          width={2}
          border={{ width: 2 }}
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
