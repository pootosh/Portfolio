import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font my-0" style ={{backgroundColor:"beige" }}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
                    {/* <img src="./Logo/MyLogoFinal.png" width="40" height="40" /> */}
                
                    <span className="ml-3 text-xl">POOTOSH</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 text-gray-900 hover:text-gray-900" to="/about" >About</Link>
                    {/* <a className="mr-5 hover:text-gray-900">Blog</a> */}
                    <Link className="mr-5 text-gray-900 hover:text-gray-500" to="/resume"  >Resume</Link>
                    <a className="mr-5 text-gray-900 hover:text-gray-500" href="https://github.com/pootosh" rel="noreferrer" target="_blank">GitHub</a>
                </nav>

                {/* <a className="mr-5 hover:text-black-900" href="./Pages/Contact/contact.html" target="_blank">
                    <button
                        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 resumeButton" >
                        Contact
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </a> */}
            </div>
        </header>
    </>
  );
};
