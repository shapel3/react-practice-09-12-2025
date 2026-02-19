import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  parseISO,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  differenceInMilliseconds,
  sub,
} from "date-fns";

const TimerBack = (props) => {
  const { title, dateStr } = props;
  const date = parseISO(dateStr);
  const [timeReminder, setTimeReminder] = useState("");

  useEffect(() => {
    const idInterval = setInterval(() => {
      const now = new Date();
      const days = differenceInDays(date, now);
      const hours = differenceInHours(sub(date, { days }), now);
      const minutes = differenceInMinutes(sub(date, { days, hours }), now);
      const seconds = differenceInSeconds(
        sub(date, { days, hours, minutes }),
        now,
      );
      const miliseconds = differenceInMilliseconds(
        sub(date, { days, hours, minutes, seconds }),
        now,
      );
      if (
        days <= 0 &&
        hours <= 0 &&
        minutes <= 0 &&
        seconds <= 0 &&
        miliseconds <= 0
      ) {
        setInterval("Time out!");
      } else {
        setTimeReminder(
          `${days} days, ${hours}:${minutes}:${seconds}:${miliseconds}`,
        );
      }
    }, 1000);
    return () => {
      clearInterval(idInterval);
    };
  }, [date]);
  return (
    <div>
      <h2>Timer Back to {title}</h2>
      <h2>{dateStr}</h2>
      <h2>reminder: {timeReminder}</h2>
    </div>
  );
};

TimerBack.propTypes = {
  title: PropTypes.string,
  dateStr: PropTypes.string,
};

export default TimerBack;

//  1 option
// const now = new Date();
// const secRemainder = differenceInSeconds(date,now);
// setTimeReminder(secRemainder)
// oprion 2
//   setTimeReminder(formatDistanceToNow(date))

//option 3
