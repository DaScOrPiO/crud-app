import Image from "next/image";
import { MdOutlineExpandMore } from "react-icons/md";
import Link from "next/link";
import { GrOverview, GrUserSettings } from "react-icons/gr";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { CgDisplayGrid } from "react-icons/cg";
import { BiCalendar } from "react-icons/bi";
import Button from "@/components/button";
import { AnimatePresence, motion } from "framer-motion";

export default function Dashboard() {
  return (
    <>
      <AnimatePresence>
        <motion.div className="sidebar lg:w-1/4 w-full flex flex-col px-4">
          <div className="logo-con w-full p-2">
            <h2 className="text-2xl mt-4 font-bold">Taskmate</h2>
            <p>Focus, priortize, Excecute</p>

            <div className="bg-gray-100 rounded-lg w-full mt-4 flex">
              <div className="rounded-full w-1/4 flex items-center justify-center">
                <Image
                  className="w-2/4 rounded-full h-3/4"
                  src={require("../images/demo-img.jpg")}
                  alt=""
                  width={100}
                />
              </div>

              <div className="w-3/5 flex flex-col items-center justify-center color">
                <h2>Irvan Moses</h2>
                <h2>Example@yahoo.com</h2>
              </div>
            </div>
          </div>

          <div className="greetings h-auto p-2 w-full mt-4">
            <h2 className="text-center text-2xl">Good morning Oladunni</h2>

            <div className="flex flex-col mt-6">
              <div className="flex justify-between mt-4">
                <h2 className="text-2xl">Menu</h2>
                <div className="text-2xl hover:text-gray-300 hover:cursor-pointer">
                  <MdOutlineExpandMore />
                </div>
              </div>

              <nav>
                <ul className="nav-container">
                  <li className="list">
                    <span className="mr-4">
                      <GrOverview />
                    </span>
                    <Link className="link" href="/about">
                      Overview
                    </Link>
                  </li>

                  <li className="list">
                    <span className="mr-4">
                      <BsReverseListColumnsReverse />
                    </span>
                    <Link className="link flex" href="#">
                      Task List
                    </Link>
                  </li>

                  <li className="list">
                    <span className="mr-4">
                      <CgDisplayGrid />
                    </span>
                    <Link className="link flex" href="">
                      Project Overview
                    </Link>
                  </li>

                  <li className="list">
                    <span className="mr-4">
                      <BiCalendar />
                    </span>
                    <Link className="link flex" href="">
                      Calendar
                    </Link>
                  </li>

                  <li className="list">
                    <span className="mr-4">
                      <GrUserSettings />
                    </span>
                    <Link className="link flex" href="">
                      Settings
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="flex justify-center mt-12 flex-col">
            <nav>
              <ul className="nav-container">
                <li className="list">
                  <span className="mr-4">😎</span>
                  <Link className="link" id="thin-font" href="">
                    personal
                  </Link>
                </li>

                <li className="list">
                  <span className="mr-4">💻</span>
                  <Link className="link flex" id="thin-font" href="">
                    Work/Studies
                  </Link>
                </li>
              </ul>
            </nav>

            <Button text="Add task" />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
