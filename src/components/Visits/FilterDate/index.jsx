import React, { useState } from "react";
import css from "./style.module.css";
import moment from "moment";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const FilterDate = ({ visitData, setFilteredData }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));

  // const handleStartDate = (e) => {
  //   setStartDate(e.target.value);
  //   filterDate();
  // };

  const handleEndDate = (e) => {
    setEndDate(e.target.value);
    filterDate();
  };

  const filterDate = () => {
    const startTimestamp = moment(startDate).startOf("day").valueOf();
    const endTimestamp = moment(endDate).startOf("day").valueOf();

    console.log("visitData", visitData);
    const filteredData = visitData.filter(
      (item) =>
        item.timestamp >= startTimestamp && item.timestamp <= endTimestamp
    );

    console.log("filteredData", filteredData);
    setFilteredData(filteredData);
  };

  return (
    <div className={css.input__wrapper}>
      <DatePicker
        className={css.start__date}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        
      />

<DatePicker
        className={css.end__date}
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        
      />
    </div>
  );
};

export default FilterDate;
