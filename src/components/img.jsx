import Image from "next/image";

export default function Img() {
  return (
    <section className="lg:w-2/4 lg:h-screen h-1/4 w-screen">
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
