import React, { useState } from "react";
import "antd/dist/reset.css";
import { DatePicker, Form } from "antd";

const DateDropdown = () => {
  const [dateRange, setDateRange] = useState([]);

  const handleDateChange = (dates) => {
    // If dates array is not empty
    if (dates && dates.length === 2) {
      const [startDate, endDate] = dates;
      console.log("Start Date:", startDate,endDate);
    }
    setDateRange(dates);
  };

  const datePickerStyle = {
    width: "18rem",
  };

  return (
    <DatePicker.RangePicker
      style={datePickerStyle}
      format="MMM Do, YYYY"
      value={dateRange}
      separator={"-"}
      onChange={handleDateChange}
      allowClear={false}
    />
  );
};

export default DateDropdown;
