import Head from "next/head";
import { GrLinkTop } from "react-icons/gr";
import Layout from "../components/layout";

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
              In Spring 2020, after many years of experience in the hospitality
              industry and a{" "}
              <a
                href="https://youtu.be/0usF9fycCSE"
                className="text-purple-900 font-bold tracking-tight"
              >
                Bachelor of Music
              </a>{" "}
              in classical voice performance from San Francisco State
              University, I began my career in web development by joining{" "}
              <a
                href="https://www.lewagon.com/berlin"
                className="text-purple-900 font-bold tracking-tight"
              >
                Le Wagon Berlin
              </a>{" "}
              for a 9 week intensive bootcamp. I studied{" "}
              <b>
                Ruby, Ruby on Rails, Javascript, HTML5, CSS3, SCSS, SQLite,
                PostgreSQL, git, Github, Heroku, REST,{" "}
              </b>
              and <b>Test Driven Development</b>. During that time I built my
              first apps and in the process discovered my passion for creating
              digital products, nurtured my creativity in web design, and
              expanded my knowledge of programming languages.
            </p>
            <br></br>
            <p>
              I continued my studies with University of Helsinki's{" "}
              <a
                href="https://fullstackopen.com/en/"
                className="text-purple-900 font-bold tracking-tight"
              >
                Full Stack Open
              </a>{" "}
              2020 program, a Javascript-based web development course focusing
              on <b>React, Redux, node.js</b> and <b> Typescript</b>.
            </p>
            <br></br>
            <p>
              Like any modern web developer, I've since supplemented my
              education with Udemy courses,{" "}
              <a
                href="https://wesbos.com/"
                className="text-purple-900 font-bold tracking-tight"
              >
                Wes Bos
              </a>{" "}
              courses, YouTube tutorials, and Hackathon projects.
            </p>
            <br></br>
            <p>
              Presently I am working at{" "}
              <a
                href="https://www.spreadshirt.de/selbst-gestalten"
                className="text-purple-900 font-bold tracking-tight"
              >
                Spreadshirt
              </a>{" "}
              in Leipzig, Germany as a junior software engineer. I am also
              available for freelance work on a contractual basis.
            </p>
            <br></br>
            <p>
              I am always seeking opportunities to collaborate, especially with
              people and organizations that share a strong commitment to social
              causes, particularly those that create opportunities for trans and
              nonbinary people and women globally. If you would like to speak
              more about building a website or app together, singing together,
              or going for a bike ride, please get in touch!
            </p>
          </section>
          <a
            href="/about-me"
            className="flex md:px-40 px-12 text-purple-900 font-bold tracking-tight pb-8"
          >
            <GrLinkTop className="mr-2 mt-1" />
            <h2>Back to top</h2>
          </a>
        </div>
      </Layout>
    </>
  );
}
