import React, { useState } from "react";

// Sample bus schedule data
const busSchedule = {
  routes: [
    {
      routeId: "101A",
      origin: "Downtown Terminal",
      destination: "Central Park",
      schedule: [
        {
          busId: "BUS-001",
          departureTime: "08:00 AM",
          arrivalTime: "08:45 AM",
          days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          dates: ["2024-08-21", "2024-08-22", "2024-08-23"],
        },
        {
          busId: "BUS-002",
          departureTime: "09:30 AM",
          arrivalTime: "10:15 AM",
          days: ["Saturday", "Sunday"],
          dates: ["2024-08-24", "2024-08-25"],
        },
      ],
    },
    {
      routeId: "202B",
      origin: "Central Park",
      destination: "Airport",
      schedule: [
        {
          busId: "BUS-005",
          departureTime: "10:00 AM",
          arrivalTime: "11:00 AM",
          days: ["Monday", "Wednesday", "Friday"],
          dates: ["2024-08-21", "2024-08-23", "2024-08-25"],
        },
        {
          busId: "BUS-006",
          departureTime: "02:00 PM",
          arrivalTime: "03:00 PM",
          days: ["Tuesday", "Thursday", "Saturday"],
          dates: ["2024-08-22", "2024-08-24", "2024-08-26"],
        },
      ],
    },
  ],
};

// Extract unique destinations from routes
const uniqueDestinations = [
  ...new Set(busSchedule.routes.map((route) => route.destination)),
];

const BusSchedule = () => {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Function to filter trips based on selected destination and date
  const filteredRoutes = busSchedule.routes
    .map((route) => ({
      ...route,
      schedule: route.schedule.filter(
        (bus) =>
          (selectedDestination === "" || route.destination === selectedDestination) &&
          (selectedDate === "" || bus.dates.includes(selectedDate))
      ),
    }))
    .filter((route) => route.schedule.length > 0); // Remove routes without results

  return (
    <div>
      <h1>🚌 Bus Schedule</h1>

      {/* Destination Dropdown */}
      <select
        value={selectedDestination}
        onChange={(e) => setSelectedDestination(e.target.value)}
        style={{ margin: "10px", padding: "5px", width: "220px" }}
      >
        <option value="">Select a Destination</option>
        {uniqueDestinations.map((destination) => (
          <option key={destination} value={destination}>
            {destination}
          </option>
        ))}
      </select>

      {/* Date Picker */}
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        style={{ margin: "10px", padding: "5px" }}
      />

      {/* Render Filtered Bus Schedules */}
      {filteredRoutes.length > 0 ? (
        filteredRoutes.map((route) => (
          <div
            key={route.routeId}
            style={{
              border: "2px solid black",
              margin: "10px",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h2>
              Route {route.routeId}: {route.origin} ➝ {route.destination}
            </h2>
            {route.schedule.map((bus) => (
              <div
                key={bus.busId}
                style={{
                  marginLeft: "20px",
                  padding: "5px",
                  border: "1px solid gray",
                  borderRadius: "5px",
                }}
              >
                <p>
                  <strong>🚌 Bus:</strong> {bus.busId}
                </p>
                <p>
                  <strong>⏰ Departure:</strong> {bus.departureTime} |{" "}
                  <strong>Arrival:</strong> {bus.arrivalTime}
                </p>
                <p>
                  <strong>📅 Operating Days:</strong> {bus.days.join(", ")}
                </p>
                <p>
                  <strong>📌 Dates:</strong> {bus.dates.join(", ")}
                </p>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No trips found for the selected destination and date.</p>
      )}
    </div>
  );
};

export default BusSchedule;
