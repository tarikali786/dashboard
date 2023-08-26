import  { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { scheduleData } from "../data/dummy"; // Adjust the import path
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

export const CalendarElement = () => {
  const [events, setEvents] = useState(
    scheduleData.map((event) => ({
      start: new Date(event.StartTime),
      end: new Date(event.EndTime),
      title: event.Subject,
      id: event.Id,
      location: event.Location,
    }))
  );

  const onCreateEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const onUpdateEvent = (updatedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  return (
    <div className="App">
      <DnDCalendar
        defaultDate={moment().toDate()}
        defaultView="month"
        events={events}
        localizer={localizer}
        selectable
        onSelectSlot={(slotInfo) => {
          const start = slotInfo.start;
          const end = slotInfo.end;
          const title = prompt("Enter event title:");
          if (title) {
            const newEvent = {
              start,
              end,
              title,
              id: new Date().getTime(),
            };
            onCreateEvent(newEvent);
          }
        }}
        onSelectEvent={(event) => {
          const newTitle = prompt("Edit event title:", event.title);
          if (newTitle !== null) {
            const updatedEvent = { ...event, title: newTitle };
            onUpdateEvent(updatedEvent);
          }
        }}
        resizable
        style={{ height: "100vh", width: "160vh", padding: "1rem" }}
      />
    </div>
  );
};
