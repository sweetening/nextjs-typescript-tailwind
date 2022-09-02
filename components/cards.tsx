export default function Cards() {
  return (
    <>
      <div className="w-full p-12">
        <div className="header flex items-end justify-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-90 md:w-80 cursor-pointer m-auto hover:scale-y-50">
              <a
                href="https://fantastax.herokuapp.com/"
                className="w-full block h-full"
                target="_blank"
              >
                <img
                  alt="Fantastax"
                  src="/images/fantastax.png"
                  className="max-h-90 w-full object-cover"
                />
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                  <p className="text-purple-800 text-md tracking-widest font-medium">
                    React
                  </p>
                  <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    Fantastax
                  </p>
                  <p className="text-gray-400 dark:text-gray-300 font-light text-sm">
                    Fantastax is a <b>responsive React app</b> built with{" "}
                    <b>Styled Components</b> and <b>CSS Modules</b>. Part of a
                    "Frontend Faceoff" for Spreadshirt's April Hacking Days, in
                    which I compared different styling methods.
                  </p>
                </div>
              </a>
            </div>
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-90 md:w-80 cursor-pointer m-auto hover:scale-y-50">
              <a
                href="https://welcome.proctor-webworks.com/"
                className="w-full block h-full"
                target="_blank"
              >
                <img
                  alt="Welcome Mentors"
                  src="/images/welcome.png"
                  className="max-h-90 w-full object-cover"
                />
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                  <p className="text-purple-800 text-md tracking-widest font-medium">
                    Ruby on Rails
                  </p>
                  <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    Welcome
                  </p>
                  <p className="text-gray-400 dark:text-gray-300 font-light text-sm">
                    Welcome is a <b>Rails web app</b> designed to help working
                    professionals relocating to Berlin by providing useful
                    articles, resources, and connections with mentors that have
                    already made the move.
                  </p>
                </div>
              </a>
            </div>
            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-90 md:w-80 cursor-pointer m-auto hover:scale-y-50">
              <a
                href="https://bike-match-sweetening.herokuapp.com/"
                className="w-full block h-full"
                target="_blank"
              >
                <img
                  alt="Bike Match"
                  src="/images/bikematch.png"
                  className="max-h-90 w-full object-cover"
                />
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                  <p className="text-purple-800 text-md tracking-widest font-medium">
                    Ruby on Rails
                  </p>
                  <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    Bike Match
                  </p>
                  <p className="text-gray-400 dark:text-gray-300 font-light text-sm">
                    Bike Match is a <b>Ruby on Rails</b> AirBnB clone team
                    project built in one week which pairs cyclists in Berlin
                    with bikes for rent in their preferred size and style,
                    featuring an interactive map.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
