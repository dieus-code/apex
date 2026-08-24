import { IoChevronDown } from "react-icons/io5";

function TransactionLabels() {
  return (
    <div className="mx-6 grid h-10 grid-cols-[40px_minmax(0,2.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.3fr)_40px] items-center rounded-lg bg-slate-50 px-3 text-[11px] font-medium text-slate-500">
      {/* Checkbox */}
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 accent-indigo-600"
      />

      {/* To / From */}
      <div className="flex min-w-0 items-center gap-1">
        <span>To / From</span>
        <IoChevronDown className="text-[10px]" />
      </div>

      {/* Amount */}
      <div className="flex min-w-0 items-center gap-1">
        <span>Amount</span>
        <IoChevronDown className="text-[10px]" />
      </div>

      {/* Account */}
      <div className="flex min-w-0 items-center gap-1">
        <span>Account</span>
        <IoChevronDown className="text-[10px]" />
      </div>

      {/* Date */}
      <div className="flex min-w-0 items-center gap-1">
        <span>Date & Time</span>
        <IoChevronDown className="text-[10px]" />
      </div>

      {/* Payment */}
      <div className="flex min-w-0 items-center gap-1">
        <span>Payment Method</span>
        <IoChevronDown className="text-[10px]" />
      </div>

      {/* Menu */}
      <div />
    </div>
  );
}

export default TransactionLabels;
