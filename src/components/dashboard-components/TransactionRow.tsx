import { IoEllipsisVertical } from "react-icons/io5";

import {
  RiLineChartLine,
  RiPieChartLine,
  RiComputerLine,
  RiGlobalLine,
  RiArrowRightUpLine,
  RiArrowLeftDownLine,
  RiBankLine,
} from "react-icons/ri";

interface TransactionRowProps {
  type: "investment" | "avatar" | "stock" | "freelance";
  avatar?: string;
  name: string;
  amount: string;
  account: string;
  date: string;
  method: "Wire" | "Money Transfer" | "ACH";
}

function TransactionRow({
  type,
  avatar,
  name,
  amount,
  account,
  date,
  method,
}: TransactionRowProps) {
  return (
    <div className="grid h-[44px] w-full grid-cols-[40px_minmax(0,2.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.3fr)_40px] items-center border-b border-gray-100 px-6 text-sm">
      {/* Checkbox */}
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 accent-indigo-600"
      />

      {/* Name + Icon */}
      <div className="flex min-w-0 items-center gap-3">
        {type === "avatar" ? (
          <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full">
            <img
              src={avatar}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200">
            {type === "investment" && (
              <RiLineChartLine className="h-4 w-4 text-slate-600" />
            )}

            {type === "stock" && (
              <RiPieChartLine className="h-4 w-4 text-slate-600" />
            )}

            {type === "freelance" && (
              <RiComputerLine className="h-4 w-4 text-slate-600" />
            )}
          </div>
        )}

        {/* Same styling for every transaction name */}
        <span className="truncate text-sm font-normal leading-5 text-slate-700">
          {name}
        </span>
      </div>

      {/* Amount */}
      <span
        className={`truncate text-sm font-normal leading-5 ${
          amount.startsWith("-") ? "text-slate-600" : "text-slate-700"
        }`}
      >
        {amount}
      </span>

      {/* Account */}
      <span className="truncate text-sm font-normal leading-5 text-slate-500">
        {account}
      </span>

      {/* Date */}
      <span className="truncate text-sm font-normal leading-5 text-slate-500">
        {date}
      </span>

      {/* Payment Method */}
      <div className="flex min-w-0 items-center gap-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200">
          {method === "Wire" && (
            <RiGlobalLine className="h-4 w-4 text-slate-600" />
          )}

          {method === "Money Transfer" && name === "James Brown" && (
            <RiArrowRightUpLine className="h-4 w-4 text-slate-600" />
          )}

          {method === "Money Transfer" && name === "Sophia Williams" && (
            <RiArrowLeftDownLine className="h-4 w-4 text-slate-600" />
          )}

          {method === "ACH" && (
            <RiBankLine className="h-4 w-4 text-slate-600" />
          )}
        </div>

        <span className="truncate text-sm font-normal leading-5 text-slate-600">
          {method}
        </span>
      </div>

      {/* Menu */}
      <button className="flex items-center justify-center">
        <IoEllipsisVertical className="text-slate-400 hover:text-slate-600" />
      </button>
    </div>
  );
}

export default TransactionRow;

