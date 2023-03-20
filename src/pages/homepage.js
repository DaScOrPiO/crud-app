import Dashboard from "@/components/dashboard";

export default function Homepage() {
  return (
    <div className="bg-blue-900 w-screen h-auto flex md:flex-row flex-col">
      <Dashboard />

      <div className="md:w-3/4 w-full min-h-full bg-red-400 flex flex-col px-4">
        <header className="header flex justify-between
         text-white h-1/4 w-full p-2 bg-orange-500 items-end">
          <h2 className="text-center text-2xl">Projects</h2>
          <h2 className="text-center text-2xl">20/03/2023</h2>
        </header>

        <div className="w-full h-4/5 mt-4 bg-purple-400">
          <h2>Tasks</h2>
        </div>
      </div>
    </div>
  );
}
