// import React, { useState } from "react";
// import CalendarComponent from "react-calendar"; // Renaming the imported component
// import "react-calendar/dist/Calendar.css";
// import { Link } from "react-router-dom";
// import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// function CalendarPage() {
//   const specialEvents = {
//     "2025-02-14": { title: "Maha Shivaratri", description: "A grand celebration with special poojas and night-long worship." },
//     "2025-03-25": { title: "Rama Navami", description: "Celebrating the birth of Lord Rama with devotional songs and rituals." },
//     "2025-08-15": { title: "Independence Day & Special Pooja", description: "A patriotic celebration alongside temple rituals." },
//   };

//   const [selectedDate, setSelectedDate] = useState(null);
//   const [eventData, setEventData] = useState(null);

//   const handleDateClick = (date) => {
//     const formattedDate = date.toISOString().split("T")[0];
//     if (specialEvents[formattedDate]) {
//       setSelectedDate(formattedDate);
//       setEventData(specialEvents[formattedDate]);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center p-4">
//       <h2 className="text-xl font-bold mb-4">Temple Calendar</h2>
//       <CalendarComponent
//         onClickDay={handleDateClick}
//         tileContent={({ date, view }) => {
//           const formattedDate = date.toISOString().split("T")[0];
//           return specialEvents[formattedDate] ? <div className="text-red-500 font-bold">●</div> : null;
//         }}
//       />

//       {selectedDate && (
//         <Dialog open={true} onOpenChange={() => setSelectedDate(null)}>
//           <DialogContent>
//             <DialogTitle>{eventData.title}</DialogTitle>
//             <p>{eventData.description}</p>
//           </DialogContent>
//         </Dialog>
//       )}

//       <button type="button" className="btn" style={{ backgroundColor: "#F8F0E3" }}>
//         <Link className="nav-link text-decoration-none" to="/calendar" style={{ color: "#8e0f24" }}>
//           Click here
//         </Link>
//       </button>
//     </div>
//   );
// }

// export default CalendarPage;
