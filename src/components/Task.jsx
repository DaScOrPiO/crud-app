import Image from "next/image";

export default function Task({ children, style, edit, deleteTask, status }) {
  return (
    <div
      style={style}
      className="flex flex-col rounded-lg task my-6 mx-5 p-4 hover:cursor-pointer 
      hover:shadow-xl transition duration-500 ease-in-out"
    >
      <div className="flex justify-between">
        <h2>{status}</h2>
        <span onClick={edit} className="hover:cursor-pointer">
          <Image src={require("../images/Edit-btn.png")} alt="" quality={100} />
        </span>
      </div>

      <div className="mt-4">{children}</div>

      <div className="flex justify-end" onClick={deleteTask}>
        <Image src={require("../images/Delete-btn.png")} alt="" quality={100} />
      </div>
    </div>
  );
}
