// import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import "./FullCalendarComponent.css";

// function FullCalendarComponent() {
//   const [events, setEvents] = useState([
//     { title: "Republic Day", date: "2025-01-26", backgroundColor: "red" },
//     { title: "Maha Shivaratri", date: "2025-02-14", backgroundColor: "red" },
//     { title: "Rama Navami", date: "2025-03-25", backgroundColor: "red" },
//     { title: "Independence Day", date: "2025-08-15", backgroundColor: "red" },
//   ]);

//   return (
//     <div className="calendar-container">
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         events={events}
//         headerToolbar={{
//           left: "prev,next today",
//           center: "title",
//           right: "dayGridMonth,timeGridWeek,timeGridDay",
//         }}
//         editable={true}
//         selectable={true}
//       />
//     </div>
//   );
// }

// export default FullCalendarComponent;
