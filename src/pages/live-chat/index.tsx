//Components
import { Layout } from "@/components/layout";
import Head from "next/head";

export default function LiveChat() {
  return (
    <>

      <Head>
        <title>Live Chat | Neero</title>
      </Head>

      <Layout>

        <div className="max-w-6xl mx-auto p-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="row">
              <div className="col-auto flex flex-col h-full ml-3">
                <div className="bg-white w-full h-full">
                  <div className="w-full flex justify-between items-center bg-white dark:bg-gray-800  border-b py-6 px-4">
                    <button className="flex justify-center items-center w-10 h-10 border-none hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white text-gray-700 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border-none text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full py-2.5 px-5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search in Messages"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                  <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                      <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Abiertos</a>
                    </li>
                    <li className="mr-2">
                      <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Perdidos</a>
                    </li> 
                    <li className="mr-2">
                      <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Cerrados</a>
                    </li>
                  </ul>
                </div>

                <div className="flex-grow h-full pt-4">
                  
                  <article className="p-6 mb-6 text-base bg-white  border-b dark:bg-gray-900 cursor-pointer hover:bg-blue-500 transition-all duration-300 group hover:scale-105 hover:translate-x-4 hover:rounded-lg">
                    <footer className="flex justify-between items-center  mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white group-hover:text-white">
                          <div className="relative mr-2">
                            <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt=""/>
                            <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                          </div>
                          Michael Gough
                        </p>
                        <p className="text-sm text-gray-600 group-hover:text-white dark:text-gray-400">
                          <time dateTime="2022-02-08" title="February 8th, 2022">
                            Feb. 8, 2022
                          </time>
                        </p>
                      </div>
                    </footer>
                  </article>

                  <article className="p-6 mb-6 text-base bg-white  border-b dark:bg-gray-900 cursor-pointer hover:bg-blue-500 transition-all duration-300 group hover:scale-105 hover:translate-x-4 hover:rounded-lg">
                    <footer className="flex justify-between items-center  mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white group-hover:text-white">
                          <div className="relative mr-2">
                            <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt=""/>
                            <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                          </div>
                          Michael Gough
                        </p>
                        <p className="text-sm text-gray-600 group-hover:text-white dark:text-gray-400">
                          <time dateTime="2022-02-08" title="February 8th, 2022">
                            Feb. 8, 2022
                          </time>
                        </p>
                      </div>
                    </footer>
                  </article>

                  <article className="p-6 mb-6 text-base bg-white  border-b dark:bg-gray-900 cursor-pointer hover:bg-blue-500 transition-all duration-300 group hover:scale-105 hover:translate-x-4 hover:rounded-lg">
                    <footer className="flex justify-between items-center  mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white group-hover:text-white">
                          <div className="relative mr-2">
                            <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt=""/>
                            <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                          </div>
                          Michael Gough
                        </p>
                        <p className="text-sm text-gray-600 group-hover:text-white dark:text-gray-400">
                          <time dateTime="2022-02-08" title="February 8th, 2022">
                            Feb. 8, 2022
                          </time>
                        </p>
                      </div>
                    </footer>
                  </article>

                  <article className="p-6 mb-6 text-base bg-white  border-b dark:bg-gray-900 cursor-pointer hover:bg-blue-500 transition-all duration-300 group hover:scale-105 hover:translate-x-4 hover:rounded-lg">
                    <footer className="flex justify-between items-center  mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white group-hover:text-white">
                          <div className="relative mr-2">
                            <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt=""/>
                            <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                          </div>
                          Michael Gough
                        </p>
                        <p className="text-sm text-gray-600 group-hover:text-white dark:text-gray-400">
                          <time dateTime="2022-02-08" title="February 8th, 2022">
                            Feb. 8, 2022
                          </time>
                        </p>
                      </div>
                    </footer>
                  </article>

                  <article className="p-6 mb-6 text-base bg-white  border-b dark:bg-gray-900 cursor-pointer hover:bg-blue-500 transition-all duration-300 group hover:scale-105 hover:translate-x-4 hover:rounded-lg">
                    <footer className="flex justify-between items-center  mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white group-hover:text-white">
                          <div className="relative mr-2">
                            <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt=""/>
                            <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                          </div>
                          Michael Gough
                        </p>
                        <p className="text-sm text-gray-600 group-hover:text-white dark:text-gray-400">
                          <time dateTime="2022-02-08" title="February 8th, 2022">
                            Feb. 8, 2022
                          </time>
                        </p>
                      </div>
                    </footer>
                  </article>

                  <article className="p-6 mb-6 text-base bg-white  border-b dark:bg-gray-900 cursor-pointer hover:bg-blue-500 transition-all duration-300 group hover:scale-105 hover:translate-x-4 hover:rounded-lg">
                    <footer className="flex justify-between items-center  mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white group-hover:text-white">
                          <div className="relative mr-2">
                            <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt=""/>
                            <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                          </div>
                          Michael Gough
                        </p>
                        <p className="text-sm text-gray-600 group-hover:text-white dark:text-gray-400">
                          <time dateTime="2022-02-08" title="February 8th, 2022">
                            Feb. 8, 2022
                          </time>
                        </p>
                      </div>
                    </footer>
                  </article>

                </div>

              </div>
              <div className="col h-full">
                <div className="w-full flex justify-between items-center bg-white dark:bg-gray-800 border-b border-l py-6 px-8">
                  <button className="flex justify-center items-center w-10 h-10 border-none hover:bg-gray-100 text-gray-700 dark:hover:bg-gray-700 dark:text-white rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <span className="text-gray-600 dark:text-white  font-semibold text-center ">
                    Ina Roberson
                  </span>
                  <button className="flex justify-center items-center w-10 h-10 border-none hover:bg-gray-100 text-gray-700 dark:hover:bg-gray-700 dark:text-white rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col w-full h-full border-l">
                  <div className="flex-grow h-full p-6">
                    <article className="p-6 mb-6 text-base bg-green-50 rounded-lg dark:bg-green-600 border border-green-200 max-w-2xl ml-auto">
                      <footer className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                            <img
                              className="mr-2 w-6 h-6 rounded-full"
                              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                              alt="Michael Gough"
                            />
                            Michael Gough
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-200">
                            <time dateTime="2022-02-08" title="February 8th, 2022">
                              Feb. 8, 2022
                            </time>
                          </p>
                        </div>
                        <button
                          id="dropdownComment1Button"
                          data-dropdown-toggle="dropdownComment1"
                          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          type="button"
                        >
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          </svg>
                          <span className="sr-only">Comment settings</span>
                        </button>
                        {/* Dropdown menu */}
                        <div
                          id="dropdownComment1"
                          className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                        >
                          <ul
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownMenuIconHorizontalButton"
                          >
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Edit
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Remove
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Report
                              </a>
                            </li>
                          </ul>
                        </div>
                      </footer>
                      <p className="text-gray-500 dark:text-gray-200 text-right">
                        Very straight-to-point article. Really worth time reading. Thank you! But
                        tools are just the instruments for the UX designers. The knowledge of the
                        design tools are as important as the creation of the design strategy.
                      </p>
                      <div className="flex justify-end items-center mt-4 space-x-4">
                        <button
                          type="button"
                          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-200"
                        >
                          <svg
                            aria-hidden="true"
                            className="mr-1 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                          11 Likes
                        </button>
                        <button
                          type="button"
                          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-200"
                        >
                          <svg
                            aria-hidden="true"
                            className="mr-1 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Reply
                        </button>
                      </div>
                    </article>

                    <article className="p-6 mb-6 text-base bg-blue-50 rounded-lg dark:bg-blue-700 border border-blue-200 max-w-2xl mr-auto">
                      <footer className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                            <img
                              className="mr-2 w-6 h-6 rounded-full"
                              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                              alt="Jese Leos"
                            />
                            Jese Leos
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-200">
                            <time  dateTime="2022-02-12" title="February 12th, 2022">
                              Feb. 12, 2022
                            </time>
                          </p>
                        </div>
                        <button
                          id="dropdownComment2Button"
                          data-dropdown-toggle="dropdownComment2"
                          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          type="button"
                        >
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          </svg>
                          <span className="sr-only">Comment settings</span>
                        </button>
                        {/* Dropdown menu */}
                        <div
                          id="dropdownComment2"
                          className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                        >
                          <ul
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownMenuIconHorizontalButton"
                          >
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Edit
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Remove
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Report
                              </a>
                            </li>
                          </ul>
                        </div>
                      </footer>
                      <p className="text-gray-500 dark:text-gray-200">
                        Much appreciated! Glad you liked it ☺️
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <button
                          type="button"
                          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-200"
                        >
                          <svg
                            aria-hidden="true"
                            className="mr-1 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                          3 Likes
                        </button>
                        <button
                          type="button"
                          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-200"
                        >
                          <svg
                            aria-hidden="true"
                            className="mr-1 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Reply
                        </button>
                      </div>
                    </article>

                    <article className="p-6 mb-6 text-base bg-green-50 rounded-lg dark:bg-green-700 border border-green-200 max-w-2xl ml-auto">
                      <footer className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                            <img
                              className="mr-2 w-6 h-6 rounded-full"
                              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                              alt="Bonnie Green"
                            />
                            Bonnie Green
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-200">
                            <time dateTime="2022-03-12" title="March 12th, 2022">
                              Mar. 12, 2022
                            </time>
                          </p>
                        </div>
                        <button
                          id="dropdownComment3Button"
                          data-dropdown-toggle="dropdownComment3"
                          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          type="button"
                        >
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          </svg>
                          <span className="sr-only">Comment settings</span>
                        </button>
                        {/* Dropdown menu */}
                        <div
                          id="dropdownComment3"
                          className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                        >
                          <ul
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownMenuIconHorizontalButton"
                          >
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Edit
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Remove
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Report
                              </a>
                            </li>
                          </ul>
                        </div>
                      </footer>
                      <p className="text-gray-500 dark:text-gray-200 text-right">
                        The article covers the essentials, challenges, myths and stages the UX
                        designer should consider while creating the design strategy.
                      </p>
                      <div className="flex justify-end items-center mt-4 space-x-4">
                        <button
                          type="button"
                          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-200"
                        >
                          <svg
                            aria-hidden="true"
                            className="mr-1 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                          24 Likes
                        </button>
                        <button
                          type="button"
                          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-200"
                        >
                          <svg
                            aria-hidden="true"
                            className="mr-1 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Reply
                        </button>
                      </div>
                    </article>
                  </div>
                  <form className="p-6">
                    <div className="mb-4 w-full bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                      <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                        <label htmlFor="comment" className="sr-only">
                          Your comment
                        </label>
                        <textarea
                          id="comment"
                          rows={2}
                          className="px-0 resize-none w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                          placeholder="Write a comment..."
                          required
                          defaultValue={""}
                        />
                      </div>
                      <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                        <div className="flex pl-0 space-x-1 sm:pl-2">
                          <button
                            type="button"
                            className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Attach file</span>
                          </button>
                          <button
                            type="button"
                            className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Set location</span>
                          </button>
                          <button
                            type="button"
                            className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">Upload image</span>
                          </button>
                        </div>
                        <button
                          type="submit"
                          className="flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                        >
                          <span>Post comment</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-3">
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                          </svg>

                        </button>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>

      </Layout>
    </>
  )
}