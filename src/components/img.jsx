import Image from "next/image";

export default function Img() {
  return (
    <section className="lg:w-2/4 h-screen lg:bg-blue-700 w-screen">
      <div className="w-full h-full">
        <Image
          src={require("../images/desk.gif")}
          alt="image"
          className="w-full h-full"
          priority
          quality={100}
        />
      </div>
    </section>
  );
}
