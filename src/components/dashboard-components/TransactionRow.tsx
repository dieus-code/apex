import {
  IoEllipsisVertical,
  IoArrowUp,
  IoArrowBack,
} from "react-icons/io5";

import {
  HiOutlineBuildingLibrary,
} from "react-icons/hi2";

import {
  LuClock3,
  LuLaptop,
} from "react-icons/lu";

import { TbWorld } from "react-icons/tb";

interface TransactionRowProps {
  type: "investment" | "avatar" | "stock" | "freelance";
  name: string;
  amount: string;
  account: string;
  date: string;
  method: "Wire" | "Money Transfer" | "ACH";
}

function TransactionRow({
  type,
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

        {/* Avatar Placeholder */}
        {type === "avatar" && (
          <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center text-xs text-slate-500">
            IMG
          </div>
        )}

        {/* Investment */}
        {type === "investment" && (
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200">
            <LuClock3 className="text-slate-500 text-sm" />
          </div>
        )}

        {/* Stock */}
        {type === "stock" && (
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200">
            <LuClock3 className="text-slate-500 text-sm" />
          </div>
        )}

        {/* Freelance */}
        {type === "freelance" && (
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200">
            <LuLaptop className="text-slate-500 text-sm" />
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

        {method === "Wire" && (
          <TbWorld className="text-slate-500" />
        )}

        {method === "Money Transfer" && (
          <IoArrowUp className="text-slate-500 rotate-45" />
        )}

        {method === "ACH" && (
          <HiOutlineBuildingLibrary className="text-slate-500" />
        )}

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