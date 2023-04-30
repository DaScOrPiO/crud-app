import Dashboard from "./dashboard";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useRef, useLayoutEffect } from "react";
import dataObj from "./data";

export default function Navigation({ dataArr }) {
  const [Width, setWidth] = useState(globalThis.window?.innerWidth);
  const [Nav, setNav] = useState(false);

  const [renderDone, setRenderDone] = useState(
    Array(dataArr.length).fill(false)
  ); //b
  const [Input, setInput] = useState([]);
  const iconRef = useRef();

  const [data, setData] = useState(dataObj);
  const updateData = (newdata) => {
    setData(newdata);
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

  const ref = useRef();

  const mobileBreakPoint = 767;
  const breakPoint2 = 1023;

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

  return (
    <>
      <div
        ref={ref}
        className="page-container w-screen flex md:flex-row flex-col"
        onClick={handleClickOutside}
      >
        <Dashboard
          data={data}
          updateData={updateData}
          input={Input}
          setinput={setInput}
          renderDone={renderDone}
          setRenderDone={setRenderDone}
        />
      </div>

      <i className="icon z-10" onClick={showNav} ref={iconRef}>
        {Nav ? (
          <AiOutlineClose size={50} color="white" className="close" />
        ) : (
          <RxHamburgerMenu size={50} color="white" />
        )}
      </i>
    </>
  );
}
