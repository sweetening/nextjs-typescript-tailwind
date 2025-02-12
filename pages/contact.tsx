import Head from "next/head";
import Footer from "../components/footer";
import Form from "../components/form";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="container mx-auto my-16 flex justify-center">
        <Form />
      </div>
      <Footer />
    </>
  );
}
