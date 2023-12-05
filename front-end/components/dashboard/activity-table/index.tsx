
import { Activity, columns } from "./columns"
import { DataTable } from "./data-table"

const data: Activity[] = [
  {
    id: "1",
    date: new Date("05-25-2023"),
    description: "Pagamento de conta de luz",
    value: 250.00,
    type: "expense"
  },
  {
    id: "2",
    date: new Date("05-26-2023"),
    description: "Pagamento internet",
    value: 100.00,
    type: "expense"
  },
  {
    id: "3",
    date: new Date("05-27-2023"),
    description: "Pagamento de aluguel",
    value: 2500.00,
    type: "expense"
  },
  {
    id: "4",
    date: new Date("05-28-2023"),
    description: "Salário",
    value: 2000,
    type: "revenue"
  },
]

function getData(): Activity[] {
  // Fetch data from your API here.
  return data;
}

export function ActivityTable() {
  const data = getData()

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
