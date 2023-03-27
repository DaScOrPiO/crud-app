import Dashboard from "@/components/dashboard";
import Task from "@/components/Task";
// import { useState, useLayoutEffect, useRef } from "react";

export default function Homepage() {
  // const [Height, setHeight] = useState(0);
  // const ref = useRef(null);

  // useLayoutEffect(() => {
  //   setHeight(ref.current.offsetHeight);
  // }, []);

  return (
    <div className="page-container bg-blue-900 w-screen flex md:flex-row flex-col">
      <Dashboard />

      <div
        className="page-items bg-red-400 flex flex-col px-4 py-4"
        // style={{ height: Height }}
      >
        <header
          className="header flex justify-between
         text-white w-full p-2 bg-orange-500 items-end"
        >
          <h2 className="text-center text-2xl">Projects</h2>
          <h2 className="text-center text-2xl">20/03/2023</h2>
        </header>

        <div
          className="w-full mt-4 bg-purple-400 flex flex-col py-4"
          // style={{ height: `calc(100% - ${Height})` }}
        >
          <h2 className="text-2xl font-bold mt-6">Tasks</h2>

          <div className="flex flex-col mt-4">
            <h2 className="font-bold text-center">Not Started</h2>
            <div className="not-started flex flex-wrap">
              <Task status="Not Started" style={{ backgroundColor: "gray" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "gray" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "gray" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "gray" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "gray" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "gray" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "gray" }}>
                Task One
              </Task>
            </div>

            <h2 className="font-bold text-center">In progress</h2>
            <div className="in-progress flex flex-wrap">
              <Task status="Not Started" style={{ backgroundColor: "yellow" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "yellow" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "yellow" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "yellow" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "yellow" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "yellow" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "yellow" }}>
                Task One
              </Task>
            </div>

            <h2 className="font-bold text-center">completed</h2>
            <div className="completed flex flex-wrap">
              <Task status="Not Started" style={{ backgroundColor: "green" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "green" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "green" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "green" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "green" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "green" }}>
                Task One
              </Task>

              <Task status="Not Started" style={{ backgroundColor: "green" }}>
                Task One
              </Task>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
