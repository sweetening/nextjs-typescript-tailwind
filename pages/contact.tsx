import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Form from "../components/form";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar></Navbar>
      <div className="container mx-auto mt-16 flex justify-center">
        <Form></Form>
      </div>
      <Footer></Footer>
    </>
  );
}
