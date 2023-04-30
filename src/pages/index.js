import Head from "next/head";
import Img from "@/components/img";
import "../styles/Home.module.scss";
import Form from "@/components/form";
import Layout from "@/components/layout";

export default function Home() {
  const handleChange = () => {};

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="flex lg:flex-row flex-col bg-gray-400">
          <Img />
          <Form />
        </section>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
