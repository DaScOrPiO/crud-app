import Dashboard from "@/components/dashboard";
import Task from "@/components/Task";
import { useState, useRef, useLayoutEffect, useEffect, createRef } from "react";
import { delay, motion, AnimatePresence } from "framer-motion";
import Button from "@/components/button";
import dataObj from "../components/data.js";
import Layout from "../components/layout";
import NestedLayout from "../components/nestedLayout";
import Header from "@/components/header.jsx";

export default function Homepage() {
  const [Input, setInput] = useState([]);

  const mobileBreakPoint = 767;
  const breakPoint2 = 1023;

  const [data, setData] = useState(dataObj);

  const handleChange = (idx, e) => {
    const newInput = [...Input];
    newInput[idx] = e.target.value;
    setInput(newInput);
  };

  //Set input state for arrays = data.length
  const inputRef = data.map(() => createRef());
  const [renderDone, setRenderDone] = useState(Array(data.length).fill(false)); //bug here
  const toggle = (idx) => {
    const newRender = [...renderDone];
    newRender[idx] = !newRender[idx];
    setRenderDone(newRender);
    console.log(newRender);
  };

  const edit = (e) => {
    const test = inputRef.filter((el, i) => {
      if (i == e) return el.current;
    });
    renderDone.filter((el, i) => {
      if (i == e) return toggle(i); //bug here
    });
    test.map((el, i) => {
      if (el.current.classList.contains("no-display")) {
        el.current.classList.remove("no-display");
      } else {
        el.current.classList.add("no-display");
      }
    });
    console.log(data);
  };

  const saveTask = (e, id) => {
    const filteredData = data.filter((el, i) => {
      if (i == e) return el;
    });

    const test = inputRef.filter((el, i) => {
      if (i == e) return el.current;
    });

    test.map((el) => {
      if (el.current.value !== "") {
        const text = el.current.value;
        console.log(text);
        const newData = filteredData.map((el) => el.value).toString();
        console.log(newData);
        data.map((el, i) => {
          if (i == e) {
            el.value = text;
            const newobj = { ...el };
          }
        });
      }
    });
  };

  //Delete function
  const deleteTask = (item) => {
    const filteredData = data.filter((el, i) => i !== item);
    console.log(filteredData);
    setData(filteredData);
  };

  //unstarted tasks
  const unStarted = data.filter((el) => el.started === false);

  // Started tasks
  const started = data.filter((el) => el.started === true);

  //Completed tasks
  const completed = data.filter((el) => el.completed === true);

  return (
    <div className="mt-4 flex flex-col py-4">
      <h2 className="text-2xl font-bold mt-6 mx-4">Tasks</h2>

      <div className="flex flex-col mt-4">
        <h2 className="font-bold text-center">Not Started</h2>
        <div className="not-started flex flex-wrap">
          {unStarted.map((el, i) => {
            return (
              <Task
                key={el.idx}
                status="Not Started"
                style={{ backgroundColor: "gray" }}
                edit={() => edit(i)}
                renderDone={renderDone[i]}
                saveTasks={() => saveTask(i)}
                deleteTask={() => deleteTask(i)}
              >
                <p className="text-center">{el.value}</p>
                <input
                  type="text"
                  className="no-display change-task rounded-lg outline-0 px-2 w-full"
                  value={Input[i] || ""}
                  onChange={(e) => handleChange(i, e)}
                  ref={inputRef[i]}
                />
              </Task>
            );
          })}
        </div>

        <h2 className="font-bold text-center">In progress</h2>
        <div className="in-progress flex flex-wrap">
          {started.map((el, i) => {
            return (
              <Task
                key={el.idx}
                status="Not Started"
                style={{ backgroundColor: "yellow" }}
                edit={() => edit(i)}
                renderDone={renderDone[i]}
                saveTasks={() => saveTask(i)}
                deleteTask={() => deleteTask(i)}
              >
                <p className="text-center">{el.value}</p>
                <input
                  type="text"
                  className="no-display change-task rounded-lg outline-0 px-2 w-full"
                  value={Input[i] || ""}
                  onChange={(e) => handleChange(i, e)}
                  ref={inputRef[i]}
                />
              </Task>
            );
          })}
        </div>

        <h2 className="font-bold text-center">completed</h2>
        <div className="completed flex flex-wrap">
          {completed.map((el, i) => {
            return (
              <Task
                key={el.idx}
                status="Not Started"
                style={{ backgroundColor: "green" }}
                edit={() => edit(i)}
                renderDone={renderDone[i]}
                saveTasks={() => saveTask(i)}
                deleteTask={() => deleteTask(i)}
              >
                <p className="text-center">{el.value}</p>
                <input
                  type="text"
                  className="no-display change-task rounded-lg outline-0 px-2 w-full"
                  value={Input[i] || ""}
                  onChange={(e) => handleChange(i, e)}
                  ref={inputRef[i]}
                />
              </Task>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Homepage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
