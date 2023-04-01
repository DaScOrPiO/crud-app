import Dashboard from "@/components/dashboard";
import Task from "@/components/Task";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { delay, motion, AnimatePresence } from "framer-motion";

export default function Homepage() {
  const [Width, setWidth] = useState(globalThis.window?.innerWidth);
  const [Nav, setNav] = useState(false);
  const ref = useRef();

  const mobileBreakPoint = 767;
  const breakPoint2 = 1023;

  const showNav = () => {
    setNav((prev) => !prev);
    const element = ref.current;

    if (!Nav) {
      element.classList.add("no-display");
    }

    if (Width <= mobileBreakPoint && !Nav) {
      element.classList.remove("no-display");
    }

    if (Width <= breakPoint2 && Nav) {
      element.classList.remove("no-display", "mobile-animate");
    }
  };

  useLayoutEffect(() => {
    const element = ref.current;
    console.log(ref.current);
    if (Width <= mobileBreakPoint) {
      window.addEventListener(
        "resize",
        setWidth((prev) => prev)
      );

      element.classList.add("no-display");
    } else if (Width <= breakPoint2) {
      window.addEventListener(
        "resize",
        setWidth((prev) => prev)
      );

      element.classList.add("no-display");
    } else {
      element.classList.remove("no-display");
    }
  }, [Width]);

  useEffect(() => {
    const handleLinkClick = (e) => {
      if (
        (Width <= mobileBreakPoint && ref.current.contains(e.target)) ||
        (Width <= breakPoint2 && ref.current.contains(e.target))
      ) {
        ref.current.classList.add("no-display");
      }
    };
    document.addEventListener("click", handleLinkClick);

    return () => document.removeEventListener("click", handleLinkClick);
  }, [Width, mobileBreakPoint]);

  const handleClickOutside = (e) => {
    if (
      (Width <= mobileBreakPoint && !ref.current.contains(e.target) && !Nav) ||
      (Width <= breakPoint2 && !ref.current.contains(e.target) && !Nav)
    ) {
      ref.current.classList.add("no-display");
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  };

  return (
    <div
      className="page-container bg-blue-900 w-screen flex md:flex-row flex-col"
      onClick={handleClickOutside}
    >
      <AnimatePresence>
        <motion.div ref={ref}>
          <Dashboard
            state={Nav}
            width={Width}
            mobileBreakPoint={mobileBreakPoint}
            breakPoint2={breakPoint2}
          />
        </motion.div>
      </AnimatePresence>

      <i className="icon z-10" onClick={showNav}>
        {Nav ? (
          <GrClose size={50} className="close" />
        ) : (
          <RxHamburgerMenu size={50} />
        )}
      </i>

      <div className="page-items bg-red-400 flex flex-col px-4 py-4">
        <header
          className="header flex justify-between
         text-white w-full p-2 bg-orange-500 items-end"
        >
          <h2 className="text-center text-2xl">Projects</h2>
          <h2 className="text-center text-2xl">20/03/2023</h2>
        </header>

        <div className="w-full mt-4 bg-purple-400 flex flex-col py-4">
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
