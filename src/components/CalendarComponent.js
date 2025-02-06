import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";

function CalendarComponent() {
  const specialEvents = {
    "2025-02-14": { title: "Maha Shivaratri", description: "A grand celebration with special poojas and night-long worship." },
    "2025-03-25": { title: "Rama Navami", description: "Celebrating the birth of Lord Rama with devotional songs and rituals." },
    "2025-08-15": { title: "Independence Day & Special Pooja", description: "A patriotic celebration alongside temple rituals." },
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [eventData, setEventData] = useState(null);

  const handleDateClick = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    if (specialEvents[formattedDate]) {
      setSelectedDate(formattedDate);
      setEventData(specialEvents[formattedDate]);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-black">Temple Calendar</h2>
      <div className="bg-white shadow-md p-4 rounded-lg">
        <Calendar
          onClickDay={handleDateClick}
          tileContent={({ date }) => {
            const formattedDate = date.toISOString().split("T")[0];
            return specialEvents[formattedDate] ? (
              <div className="flex justify-center items-center">
                <span className="bg-red-700  font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  {date.getDate()}
                </span>
              </div>
            ) : null;
          }}
          className="rounded-lg"
        style={{color:"black"}}/>
      </div>

      {selectedDate && (
        <Dialog open={!!selectedDate} onOpenChange={() => setSelectedDate(null)}>
          <DialogContent className="bg-white p-6 rounded-lg shadow-lg">
            <DialogTitle className="text-lg font-bold text-black">{eventData?.title}</DialogTitle>
            <p className="text-black mt-2">{eventData?.description}</p>
          </DialogContent>
        </Dialog>
      )}

      <button type="button" className="mt-4 px-4 py-2 bg-red-700 text-white rounded-lg shadow-lg">
        <Link className="nav-link text-decoration-none" to="/calendar">View Full Calendar</Link>
      </button>
    </div>
  );
}

export default CalendarComponent;
