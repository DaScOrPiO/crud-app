import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <section>
        <div className="footer flex w-screen bg-black items-center p-4 text-white">
          <div className="w-1/4 flex justify-end">
            <div className="flex w-2/4 h-1/4">
              <Image
                src={require("../images/work-in-progress.png")}
                alt=""
                quality={100}
                className="max-w-full"
              />
            </div>
          </div>

          <div className="w-3/4 p-2 flex flex-col">
            <h2 className="text-2xl font-bold">Start Organising tasks Now!</h2>
            <p className="mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              distinctio
            </p>

            <div className="flex mt-5 md:flex-row flex-col">
              <nav>
                <ul className="flex lg:flex-row flex-col">
                  <li className="lg:ml-2 fom">
                    <Link className="text-2xl font-bold" href="/">
                      Home
                    </Link>
                  </li>

                  <li className="lg:ml-8 fom">
                    <Link className="text-2xl font-bold" href="/">
                      About us
                    </Link>
                  </li>

                  <li className="lg:ml-8 fom">
                    <a className="text-2xl font-bold" href="">
                      My other projects
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex flex-col md:ml-60 fom">
                <div className="flex md:justify-center">
                  <Link href="/">
                    <Image
                      src={require("../images/twitter.png")}
                      alt=""
                      width={25}
                      className="invert"
                    />
                  </Link>

                  <Link href="/">
                    <Image
                      src={require("../images/instagram.png")}
                      alt=""
                      width={25}
                      className="ml-4 invert"
                    />
                  </Link>

                  <Link href="/">
                    <Image
                      src={require("../images/linkedin.png")}
                      alt=""
                      width={25}
                      className="ml-4 invert"
                    />
                  </Link>
                </div>
                <div className="mt-3">&copy; 2023 by DaScOrPiO</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
