import { IoSearchOutline } from "react-icons/io5";

function TransactionHeader() {
  return (
    <div className="flex flex-col md:flex-row min-h-[76px] md:h-[76px] w-full items-start md:items-center justify-between px-4 sm:px-6 py-4 md:py-5 gap-3 md:gap-0">
      {/* Left Side */}
      <div>
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200">
            <span className="text-xs">🕒</span>
          </div>

          <h2 className="text-sm font-semibold text-slate-800">
            Recent Transactions
          </h2>
        </div>

        <p className="ml-9 mt-1 text-xs text-slate-400">
          Display the recent transactions in the table below.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Search Box */}
        <div className="relative">
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="h-9 w-56 rounded-lg border border-gray-200 bg-white pl-9 pr-10 text-sm outline-none focus:border-indigo-500"
          />

          {/* Keyboard Shortcut */}
          <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-400">
            ⌘1
          </span>
        </div>

        {/* Button */}
        <button className="h-9 rounded-lg border border-gray-200 px-4 text-sm font-medium text-slate-600 hover:bg-gray-50">
          See all
        </button>
      </div>
    </div>
  );
}

export default TransactionHeader;

