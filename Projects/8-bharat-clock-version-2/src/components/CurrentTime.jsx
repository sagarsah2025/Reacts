import { useEffect, useState } from "react";

let CurrentTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        console.log("Interval has been setup");
        const IntervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(IntervalId);
            console.log("Cancelled the interval");
        };
    }, []);

    return (
      <p className="lead">
        This is the Current Time: {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </p>
    );
  };
  export default CurrentTime;
  