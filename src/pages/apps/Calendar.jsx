import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  Month,
  WorkWeek,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../../data/dummy";
import { Header } from "../../components";

const Calendar = () => {
  return (
    <div className="m-2 md:md-10 mt-24 p-2 md:p-10 bg-white dark:bg-boxdark rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
