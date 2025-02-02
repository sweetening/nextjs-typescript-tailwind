export default function Footer() {
  return (
    <>
      <footer className="bg-none w-full py-24 self-end">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
            <a
              href="https://www.linkedin.com/in/sanja-wetzel"
              className="transition ease-in-out delay-50 text-gray-600 hover:text-purple-500 duration-200"
            >
              <svg
                width="24"
                height="24"
                aria-label="linkedIn"
                fill="currentColor"
                className="text-xl hover:text-purple-500 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
