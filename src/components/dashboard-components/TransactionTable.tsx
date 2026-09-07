import TransactionHeader from "./TransactionHeader";
import TransactionLabels from "./TransactionLabels";
import TransactionRow from "./TransactionRow";
import james from "../../assets/james.png";
import sophia from "../../assets/sophia.png";

function TransactionTable() {
 return (
    <div className="mt-6 w-full min-h-[332px] flex flex-col">
      {/* Header section */}
      <TransactionHeader />

      {/* Responsive scrollable container */}
      <div className="w-full overflow-x-auto overflow-y-auto max-h-[380px] rounded-lg border border-[#E1E4EA] bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Enforce a minimum width so columns don't collapse on mobile */}
        <div className="min-w-[600px] w-full">
          <TransactionLabels />

          <div className="divide-y divide-[#E1E4EA]">
        <TransactionRow
          type="investment"
          name="Investment Return"
          amount="$560.00"
          account="Checking"
          date="12 September"
          method="Wire"
        />

        <TransactionRow
          type="avatar"
          avatar={james}
          name="James Brown"
          amount="-$35.20"
          account="Ops Payroll"
          date="12 September"
          method="Money Transfer"
        />

        <TransactionRow
          type="stock"
          name="Stock Dividend"
          amount="$1250.00"
          account="AP"
          date="12 September"
          method="ACH"
        />

        <TransactionRow
          type="avatar"
          avatar={sophia}
          name="Sophia Williams"
          amount="$150.00"
          account="Checking"
          date="12 September"
          method="Money Transfer"
        />

        <TransactionRow
          type="freelance"
          name="Freelance Income"
          amount="$250.00"
          account="Checking"
          date="12 September"
          method="ACH"
        />
        </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionTable;

