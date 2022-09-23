import { Dispatch, SetStateAction } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { monthNames } from "../../utils";

interface ICalendarHeaderProps {
  currentMonth: number;
  setCurrentMonth: Dispatch<SetStateAction<number>>;
}

const CalendarHeader = ({
  currentMonth,
  setCurrentMonth,
}: ICalendarHeaderProps) => {
  const month = monthNames[currentMonth];
  return (
    <div className="m-auto">
      <div className="w-full px-2 h-20 flex justify-center items-center">
        <button
          onClick={() => setCurrentMonth((currentMonth as number) - 1)}
          aria-label={"previous_month"}
        >
          <ArrowLeftIcon className="h-5 w-5 text-primary" />
        </button>
        <p className="text-xl tracking-wider w-28 text-center font-sans text-primary">
          {month}
        </p>
        <button
          onClick={() => setCurrentMonth((currentMonth as number) + 1)}
          aria-label={"next_month"}
        >
          <ArrowRightIcon className="h-5 w-5 text-primary" />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
