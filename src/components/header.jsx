import moment from "moment/moment";

export default function Header() {
  const date = moment(new Date()).format(`DD/MM/YYYY`);

  return (
    <header
      className="header flex justify-between
     text-white w-full items-end lg:mx-4 px-2"
    >
      <h2 className="text-center text-2xl">Projects</h2>
      <h2 className="text-center text-2xl">{date}</h2>
    </header>
  );
}
