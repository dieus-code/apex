import { IoChevronDown } from "react-icons/io5";

function TransactionLabels() {
  return (
    <div className="grid grid-cols-[40px_2.2fr_1fr_1fr_1.2fr_1.3fr_40px] items-center rounded-lg bg-slate-50 mx-6 px-3 py-3 text-[11px] font-medium text-slate-500">

      {/* Checkbox */}
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 accent-indigo-600"
      />

      {/* To / From */}
      <div className="flex items-center gap-1">
        <span>To / From</span>
        <IoChevronDown className="text-[10px]" />
      </div>

      {/* Amount */}
      <div className="flex items-center gap-1">
        <span>Amount</span>
        <IoChevronDown className="text-[10px]" />
      </div>

      {/* Account */}
      <div className="flex items-center gap-1">
        <span>Account</span>
        <IoChevronDown className="text-[10px]" />
      </div>

      {/* Date */}
      <div className="flex items-center gap-1">
        <span>Date & Time</span>
        <IoChevronDown className="text-[10px]" />
      </div>

      {/* Payment */}
      <div className="flex items-center gap-1">
        <span>Payment Method</span>
        <IoChevronDown className="text-[10px]" />
      </div>

      {/* Empty column for menu */}
      <div />
    </div>
  );
}

export default TransactionLabels;