"use client"

const AddingTripPage = () => {
  return (
    <div className="flex p-6 h-screen bg-background">
      <aside className="w-64 bg-card shadow p-4 flex flex-col justify-between">
        <div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded mb-6 w-full">+ Add New Trip</button>
          <nav className="space-y-4">
            <a href="#" className="flex items-center text-foreground hover:text-orange-500">
              <span className="ml-2">Dashboard</span>
            </a>
            <a href="#" className="flex items-center text-foreground hover:text-orange-500">
              <span className="ml-2">Add New Trip</span>
            </a>
            <a href="#" className="flex items-center text-foreground hover:text-orange-500">
              <span className="ml-2">Settings</span>
            </a>
            <a href="#" className="flex items-center text-foreground hover:text-orange-500">
              <span className="ml-2">Logout</span>
            </a>
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-foreground">Add New Trip</h2>
          <div className="flex items-center space-x-4"></div>
        </header>
        <section className="mb-12">
          <h3 className="text-lg font-semibold mb-4 text-foreground">My Trips</h3>
          <table className="w-full text-left border">
            <thead>
              <tr className="bg-muted">
                <th className="p-2 text-foreground">Destination</th>
                <th className="p-2 text-foreground">Travel Date</th>
                <th className="p-2 text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-2 text-foreground">Jerusalem</td>
                <td className="p-2 text-foreground">2025-06-15</td>
                <td className="p-2">
                  <span className="text-orange-500 bg-orange-50 dark:bg-orange-900/20 border rounded px-2 py-1 text-sm font-medium">
                    Pending
                  </span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-2 text-foreground">Jenin</td>
                <td className="p-2 text-foreground">2025-07-20</td>
                <td className="p-2">
                  <span className="text-green-500 bg-green-50 dark:bg-green-900/20 border rounded px-2 py-1 text-sm font-medium">
                    Approved
                  </span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-2 text-foreground">Ramallah</td>
                <td className="p-2 text-foreground">2025-06-10</td>
                <td className="p-2">
                  <span className="text-red-500 bg-red-50 dark:bg-red-900/20 border rounded px-2 py-1 text-sm font-medium">
                    Cancelled
                  </span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-2 text-foreground">Hebron</td>
                <td className="p-2 text-foreground">2026-09-05</td>
                <td className="p-2">
                  <span className="text-green-500 bg-green-50 dark:bg-green-900/20 border rounded px-2 py-1 text-sm font-medium">
                    Approved
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="bg-card p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Add Trip</h3>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" placeholder="Destination" className="border p-2 rounded bg-background text-foreground" />
            <input
              type="text"
              placeholder="Start Date"
              className="border p-2 rounded bg-background text-foreground"
              onFocus={(e) => {
                e.target.type = "date"
                e.target.showPicker && e.target.showPicker()
              }}
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.type = "text"
                }
              }}
            />
            <input
              type="text"
              placeholder="End Date"
              className="border p-2 rounded bg-background text-foreground"
              onFocus={(e) => {
                e.target.type = "date"
                e.target.showPicker && e.target.showPicker()
              }}
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.type = "text"
                }
              }}
            />
            <textarea
              placeholder="Notes"
              className="border p-2 rounded md:col-span-3 bg-background text-foreground"
            ></textarea>
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded md:col-span-3">
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default AddingTripPage
