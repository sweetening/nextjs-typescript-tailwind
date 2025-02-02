import Head from "next/head";
import Layout from "../components/layout";
import Footer from "../components/footer";

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <Layout home>
        <div className="container mx-auto mt-12">
          <section className="text-lg container mx-auto md:px-40 px-12 pb-20">
            <p>
              I'm a frontend dev with 5 years experience in Next.js, React +
              Typescript, and Javascript. I am passionate about building
              beautiful, accessible digital products that scale, and I strive to
              be a friendly, motivated colleague. I am always seeking
              opportunities to collaborate, especially with people and
              organizations that share a strong commitment to social causes.
            </p>
            <br></br>
            <p>
              I began my career in web development by joining Le Wagon, the #1
              web development bootcamp in the world, for a 9 week intensive
              bootcamp. I studied Ruby, Ruby on Rails, Javascript, HTML5, CSS3,
              SCSS, SQLite, PostgreSQL, git, Github, Heroku, REST, and Test
              Driven Development. I continued my studies with University of
              Helsinki's Full Stack Open program, a Javascript-based web
              development course focusing on React, Redux, node.js and
              Typescript.
            </p>
          </section>
        </div>
      </Layout>
      <Footer />
    </>
  );
}
