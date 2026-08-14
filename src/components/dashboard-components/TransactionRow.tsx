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
    <div className="grid grid-cols-[40px_2.2fr_1fr_1fr_1.2fr_1.3fr_40px] items-center border-b border-gray-100 px-6 py-4 text-sm">

      {/* Checkbox */}
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 accent-indigo-600"
      />

      {/* Name + Icon */}
      <div className="flex items-center gap-3">

        {/* Avatar */}
        {type === "avatar" ? (
          <div className="h-8 w-8 overflow-hidden rounded-full">
            <img
              src={avatar}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200">

            {/* Investment Return */}
            {type === "investment" && (
              <RiLineChartLine className="h-4 w-4 text-slate-600" />
            )}

            {/* Stock Dividend */}
            {type === "stock" && (
              <RiPieChartLine className="h-4 w-4 text-slate-600" />
            )}

            {/* Freelance Income */}
            {type === "freelance" && (
              <RiComputerLine className="h-4 w-4 text-slate-600" />
            )}

          </div>
        )}

        <span className="font-medium text-slate-700">
          {name}
        </span>

      </div>

      {/* Amount */}
      <span
        className={`font-medium ${
          amount.startsWith("-")
            ? "text-slate-600"
            : "text-slate-700"
        }`}
      >
        {amount}
      </span>

      {/* Account */}
      <span className="text-slate-500">
        {account}
      </span>

      {/* Date */}
      <span className="text-slate-500">
        {date}
      </span>

      {/* Payment Method */}
      <div className="flex items-center gap-2">

        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200">

          {/* Wire */}
          {method === "Wire" && (
            <RiGlobalLine className="h-4 w-4 text-slate-600" />
          )}

          {/* James Brown - Money Transfer */}
          {method === "Money Transfer" &&
            name === "James Brown" && (
              <RiArrowRightUpLine className="h-4 w-4 text-slate-600" />
            )}

          {/* Sophia Williams - Money Transfer */}
          {method === "Money Transfer" &&
            name === "Sophia Williams" && (
              <RiArrowLeftDownLine className="h-4 w-4 text-slate-600" />
            )}

          {/* ACH */}
          {method === "ACH" && (
            <RiBankLine className="h-4 w-4 text-slate-600" />
          )}

        </div>

        <span className="text-slate-600">
          {method}
        </span>

      </div>

      {/* Menu */}
      <button>
        <IoEllipsisVertical className="text-slate-400 hover:text-slate-600" />
      </button>

    </div>
  );
}

export default TransactionRow;