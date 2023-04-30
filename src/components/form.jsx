import Button from "./button";

export default function Form() {
  return (
    <section
      className="p-12 flex flex-col lg:w-2/4 h-screen w-screen 
 justify-center items-center"
    >
      <div>
        <div className="p-2">
          <h1 className="font-bold text-3xl">Get started organising tasks</h1>
          <p className="mt-2 leading-loose">
            Hi There! Are you a master at procastination, or you have alot of
            task assigned to you and don&#39;t where to begin? It is perceived
            that organizing task improve productivity by 100% so let&#39;s help
            you out.
          </p>
        </div>

        <div className="mt-12">
          <h1 className="font-bold text-black text-4xl">Login</h1>

          <form className="mt-12 px-4">
            <div className="flex flex-col md:flex-row w-full">
              <div className="fom w-full md:mr-8 md:w-2/4">
                <label htmlFor="" className="font-bold">
                  Name:
                  <input
                    className="w-full py-2 px-2 text-black rounded-md focus:outline-none"
                    type="text"
                    name=""
                  />
                </label>
              </div>

              <div className="fom w-full md:w-2/4 md:ml-8">
                <label htmlFor="password" className="font-bold">
                  Password:
                  <input
                    type="password"
                    name=""
                    className="w-full py-2 px-2 text-black rounded-md focus:outline-none"
                  />
                </label>
              </div>
            </div>
            <Button text="Sign in" />
          </form>
        </div>
      </div>
    </section>
  );
}
