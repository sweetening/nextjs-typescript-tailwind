import Head from "next/head";

export default function Work() {
  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <div className="container mx-auto mt-12">
        <section className="text-lg container mx-auto text-left md:px-12 px-6 pb-20">
          <h3 className="text-2xl font-bold tracking-tighter max-w-lg my-4 pb-6">
            Present
          </h3>
          <img
            className="w-full"
            src="https://spreadshirt-res.cloudinary.com/images/f_auto,q_auto/v1729073910/PR/Mayra/53958338005_d52d332d7d_o-2/53958338005_d52d332d7d_o-2.jpg?_i=AA"
            alt="press photo for Spreadshirt"
          ></img>
          <h4 className="text-2xl font-semibold tracking-tighter pt-4">
            Spread Group
          </h4>
          <h5 className="text-xl font-md tracking-tightest pb-6">
            Software Engineer
          </h5>
          <p>
            I am a software engineer at{" "}
            <a
              className="underline hover:text-purple-500"
              href="https://www.spreadshirt.com/"
            >
              Spreadshirt
            </a>
            , a custom apparel e-commerce company based in Leipzig, Germany. I
            primarily work with React + Typescript, Next.js, Redux,
            Commercetools, Amplience, Javascript, CSS Modules, Freemarker, plus
            Playwright and Cypress for testing. The organization uses Gitlab and
            Jira as well as Microsoft Teams for agile communication, sprint
            planning, and cross-team collaboration. My team is responsible for
            maintaining the products that sustain the D2C businesses,
            implementing features, replacing legacy code, fixing bugs, improving
            accessibility, and QA testing. Currently we are focusing on moving
            our legacy CMS to Amplience, and rebuilding our checkout system with
            Commercetools.
          </p>
        </section>
        <section className="text-lg container mx-auto text-left md:px-12 px-6 pb-20">
          <h3 className="text-2xl font-bold tracking-tighter max-w-lg my-4 pb-6">
            Past
          </h3>
          <img
            alt="INES Berlin"
            src="/images/ines-berlin.png"
            className="w-full"
          />
          <h4 className="text-2xl font-semibold tracking-tighter pt-4">
            INES Berlin
          </h4>
          <h5 className="text-xl font-md tracking-tightest pb-6">
            Freelance Web Developer
          </h5>
          <p>
            I worked on a contractual basis for{" "}
            <a
              className="underline decoration-sky-500 hover:text-purple-500"
              href="https://ines-berlin.de/"
            >
              INES Berlin
            </a>
            , restructuring and updating their website built with AngularJS and
            Java. My tasks included editing JSON and Bibtex data, editing team
            portraits, responsive design, and QA testing.
          </p>
          <img
            className="w-full pt-20"
            src="https://marikoreed.com/wp-content/uploads/2015/03/sfmoma_web_06.jpg"
            alt="SFMOMA Blue Bottle"
          ></img>
          <h4 className="text-2xl font-semibold tracking-tighter pt-4">
            Blue Bottle Coffee
          </h4>
          <h5 className="text-xl font-md tracking-tightest pb-6">
            Retail Manager
          </h5>
          <p>
            I began as a barista and quickly moved into a retail manager role
            during my time working for{" "}
            <a
              className="underline decoration-sky-500 hover:text-purple-500"
              href="https://bluebottlecoffee.com/"
            >
              Blue Bottle Coffee
            </a>
            . I was responsible for staffing, inventory management, quality
            control, serving delicious coffee, and maintaining professional
            networks between the café and our proprietors. Since my past work
            experience was entirely based in the service industry, I consider
            this my first career role.
          </p>
        </section>
      </div>
    </>
  );
}
