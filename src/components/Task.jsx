import Image from "next/image";
import { MdDone } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";

export default function Task({
  children,
  style,
  edit,
  deleteTask,
  status,
  renderDone,
}) {
  return (
    <div
      style={style}
      className="flex flex-col rounded-lg task my-6 mx-5 p-4 hover:cursor-pointer 
      hover:shadow-xl transition duration-500 ease-in-out"
    >
      <div className="flex justify-between">
        <h2>{status}</h2>
        <span onClick={edit} className="hover:cursor-pointer">
          {renderDone ? (
            <MdDone color="green" size="25px" />
          ) : (
            <AiOutlineEdit color="white" size="25px" />
          )}
        </span>
      </div>

      <div className="mt-4">{children}</div>

      <div className="flex justify-end mt-2" onClick={deleteTask}>
        <Image src={require("../images/Delete-btn.png")} alt="" quality={100} />
      </div>
    </div>
  );
}
