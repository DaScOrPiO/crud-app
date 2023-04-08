import Dashboard from "@/components/dashboard";
import Task from "@/components/Task";
import { useState, useRef, useLayoutEffect, useEffect, createRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { delay, motion, AnimatePresence } from "framer-motion";
import { data } from "autoprefixer";
import moment from "moment/moment";

export default function Homepage() {
  const [Width, setWidth] = useState(globalThis.window?.innerWidth);
  const [Nav, setNav] = useState(false);
  const ref = useRef();
  const iconRef = useRef();
  const [Input, setInput] = useState("");
  const data = [
    {
      idx: 1,
      value: "task one",
    },
    {
      idx: 2,
      value: "task two",
    },
    {
      idx: 3,
      value: "Task three",
    },
    {
      idx: 4,
      value: "Task four",
    },
    {
      idx: 5,
      value: "task five",
    },
    {
      idx: 6,
      value: "task six",
    },
    {
      idx: 7,
      value: "task seven",
    },
  ];

  const mobileBreakPoint = 767;
  const breakPoint2 = 1023;

  const showNav = () => {
    setNav((prev) => !prev);
    const element = ref.current;

    if (Width <= mobileBreakPoint && Nav) {
      element.classList.remove("no-display");
    }

    if (Width <= breakPoint2 && Nav) {
      element.classList.remove("no-display");
    }
  };

  useLayoutEffect(() => {
    const element = ref.current;
    console.log(ref.current);
    if (Width <= mobileBreakPoint && !Nav) {
      window.addEventListener(
        "resize",
        setWidth((prev) => prev)
      );

      element.classList.add("no-display");
    } else if (Width <= breakPoint2 && !Nav) {
      window.addEventListener(
        "resize",
        setWidth((prev) => prev)
      );

      element.classList.add("no-display");
    } else {
      element.classList.remove("no-display");
    }
  }, [Width, Nav]);

  const date = moment(new Date()).format(`DD/MM/YYYY`);

  const handleClickOutside = (e) => {
    if (
      (Width <= mobileBreakPoint &&
        !ref.current.contains(e.target) &&
        !Nav &&
        !iconRef.current.contains(e.target)) ||
      (Width <= breakPoint2 &&
        !ref.current.contains(e.target) &&
        !Nav &&
        !iconRef.current.contains(e.target))
    ) {
      setNav(false);
      ref.current.classList.add("no-display");
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const inputRef = data.map(() => createRef())
  const edit = () => {
    // if (inputRef.current.classList.contains("no-display")) {
    //   inputRef.current.classList.remove("no-display");
    // } else {
    //   inputRef.current.classList.add("no-display");
    // }

    inputRef.forEach((el, i) => {
      if (el.current.classList.contains("no-display")) {
        el.current.classList.remove("no-display");
      } else {
        el.current.classList.add("no-display");
      }
    });
  };

  return (
    <div
      className="page-container w-screen flex md:flex-row flex-col"
      onClick={handleClickOutside}
    >
      <AnimatePresence>
        <motion.div ref={ref}>
          <Dashboard />
        </motion.div>
      </AnimatePresence>

      <i className="icon z-10" onClick={showNav} ref={iconRef}>
        {Nav ? (
          <AiOutlineClose size={50} color="white" className="close" />
        ) : (
          <RxHamburgerMenu size={50} color="white" />
        )}
      </i>

      <div className="page-items flex flex-col px-4 py-4">
        <header
          className="header flex justify-between
         text-white w-full p-2 items-end"
        >
          <h2 className="text-center text-2xl">Projects</h2>
          <h2 className="text-center text-2xl">{date}</h2>
        </header>

        <div className="w-full mt-4 flex flex-col py-4">
          <h2 className="text-2xl font-bold mt-6">Tasks</h2>

          <div className="flex flex-col mt-4">
            <h2 className="font-bold text-center">Not Started</h2>
            <div className="not-started flex flex-wrap">
              {data.map((el, i) => {
                return (
                  <Task
                    key={el.idx}
                    status="Not Started"
                    style={{ backgroundColor: "gray" }}
                    edit={edit}
                  >
                    <p className="text-center">{el.value}</p>
                    <input
                      type="text"
                      className="no-display change-task rounded-lg outline-0 px-2 w-full"
                      name="Input"
                      value={Input}
                      onChange={handleChange}
                      ref={inputRef[i]}
                    />
                  </Task>
                );
              })}
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
