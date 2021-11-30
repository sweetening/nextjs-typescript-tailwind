import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-lg container mx-auto px-48">
        <p>
          In Spring 2020, after 17 years of working in the hospitality industry
          and a Bachelor of Music degree in classical voice performance from San
          Francisco State University, I began my career in web development by
          joining Le Wagon Berlin for a 9 week intensive bootcamp. I studied
          Ruby, Ruby on Rails, Javascript, HTML5, CSS3, SCSS, SQLite,
          PostgreSQL, git, Github, Heroku, REST, and Test Driven Development.
          During that time I built my first apps and in the process discovered
          my passion for creating digital products, nurtured my creativity in
          web design, and expanded my knowledge of programming languages.
        </p>
        <br></br>
        <p>
          I continued my studies with University of Helsinki's Full Stack Open
          2020 program, a Javascript-based web development course focusing on
          React, Redux, node.js, MongoDB, GraphQL, and Typescript.
        </p>
        <br></br>
        <p>
          Like any modern web developer, I've since supplemented my education
          with Udemy and{" "}
          <a href="https://wesbos.com/" className="text-blue-300">
            Wes Bos
          </a>{" "}
          courses.
        </p>
        <br></br>
        <p>
          Presently I am working at Spreadshirt in Leipzig, Germany as a junior
          software engineer. I am also available for freelance work on a
          contractual basis.
        </p>
        <br></br>
        <p>
          I am always seeking opportunities to collaborate, especially with
          people and organizations that share a strong commitment to social
          causes, particularly those that create opportunities for trans and
          nonbinary people and women globally. If you would like to speak more
          about building a website or app together, please get in touch via the
          form below!
        </p>
      </section>
    </Layout>
  );
}
