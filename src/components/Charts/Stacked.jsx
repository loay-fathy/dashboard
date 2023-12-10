import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  StackingColumnSeries,
  Category,
  Tooltip,
} from "@syncfusion/ej2-react-charts/src";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";

const Stacked = ({ width, height }) => {
  const { currentMode, currentColor } = useStateContext();

  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
      background={currentMode === "Dark" ? "#33373E" : ""}
    >
      <Inject services={[Tooltip, Legend, StackingColumnSeries, Category]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective
            key={index}
            {...item}
            fill={
              item.coloring === true
                ? currentColor
                : currentMode === "Dark"
                ? "rgb(229 231 235)"
                : "rgb(64, 64, 65)"
            }
          />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
