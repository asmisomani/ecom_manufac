import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function TertiaryNav() {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.toLocaleString("en-US", { month: "long" });
  let year = newDate.getFullYear();
  let day = newDate.getDay();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[newDate.getDay()];

  return (
    <div className="tertnav">
      <h6>
        {date} {month} , {n}
      </h6>
    </div>
  );
}
