//Next
import Head from "next/head";
//Components
import { Layout } from "@/components/layout";
import { SettingsNav } from "@/components/settings/settings-nav";

export default function Settings(){

  

  return (
    <>

      <Head>
        <title>Settings | Neero</title>
      </Head>

      <Layout>

        <section className="bg-gray-50 dark:bg-gray-900 h-full ">
          <div className="w-full border-b">
            <div className="p-4 mx-auto  lg:px-6">
              <h2 className="text-2xl font-bold">
                Settings
              </h2>
            </div>
          </div>
          <div className="p-4 mx-auto  lg:px-6">
            <div className="row">
              <div className="hidden md:block col-2">
                <SettingsNav/>
              </div>
              <div className="col">
                <div className="bg-white rounded-lg h-full border p-5">
                  <div className="row">
                    <div className="col-12 mb-5">
                      <div className="row border-b">
                        <div className="col mb-5">
                          <div className="flex items-center">
                            <h3 className="text-base font-semibold mr-2">
                              Card URL Shortener
                            </h3>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">PRO</span>
                          </div>
                        </div>
                        <div className="col mb-5">
                          <>
                            <button
                              id="dropdownDefaultButton"
                              data-dropdown-toggle="dropdown"
                              className="text-gray-700 border bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
                              type="button"
                            >
                              my.manychat.com{" "}
                              <svg
                                className="w-4 h-4 ml-2"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                            {/* Dropdown menu */}
                            <div
                              id="dropdown"
                              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-44"
                            >
                              <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                              >
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    my.manychat.com
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    shortener is disabled
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </>

                        </div>
                        <div className="col mb-5">
                          <p className="text-base text-gray-500">
                            All the data in Manychat will be displayed and exported according to this timezone. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-5">
                      <div className="row border-b">
                        <div className="col mb-5">
                          <div className="flex items-center">
                            <h3 className="text-base font-semibold mr-2">
                              Account Time Zone
                            </h3>
                          </div>
                        </div>
                        <div className="col mb-5">
                          <>
                            <button
                              id="dropdownSearchButton"
                              data-dropdown-toggle="dropdownSearch"
                              data-dropdown-placement="bottom"
                              className="text-gray-700 border bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
                              type="button"
                            >
                              (UTC-05:00) - Colombia Standard{" "}
                              <svg
                                className="w-4 h-4 ml-2"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                            {/* Dropdown menu */}
                            <div
                              id="dropdownSearch"
                              className="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700"
                            >
                              <div className="p-3">
                                <label htmlFor="input-group-search" className="sr-only">
                                  Search
                                </label>
                                <div className="relative">
                                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                      aria-hidden="true"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                  <input
                                    type="text"
                                    id="input-group-search"
                                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search user"
                                  />
                                </div>
                              </div>
                              <ul
                                className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownSearchButton"
                              >
                                <li>
                                  <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                      id="checkbox-item-11"
                                      type="checkbox"
                                      defaultValue=""
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                      htmlFor="checkbox-item-11"
                                      className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                      Bonnie Green
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                      defaultChecked
                                      id="checkbox-item-12"
                                      type="checkbox"
                                      defaultValue=""
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                      htmlFor="checkbox-item-12"
                                      className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                      Jese Leos
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                      id="checkbox-item-13"
                                      type="checkbox"
                                      defaultValue=""
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                      htmlFor="checkbox-item-13"
                                      className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                      Michael Gough
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                      id="checkbox-item-14"
                                      type="checkbox"
                                      defaultValue=""
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                      htmlFor="checkbox-item-14"
                                      className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                      Robert Wall
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                      id="checkbox-item-15"
                                      type="checkbox"
                                      defaultValue=""
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                      htmlFor="checkbox-item-15"
                                      className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                      Joseph Mcfall
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                      id="checkbox-item-16"
                                      type="checkbox"
                                      defaultValue=""
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                      htmlFor="checkbox-item-16"
                                      className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                      Leslie Livingston
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                      id="checkbox-item-17"
                                      type="checkbox"
                                      defaultValue=""
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                      htmlFor="checkbox-item-17"
                                      className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                      Roberta Casas
                                    </label>
                                  </div>
                                </li>
                              </ul>
                              <a
                                href="#"
                                className="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline"
                              >
                                <svg
                                  className="w-5 h-5 mr-1"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z" />
                                </svg>
                                Delete user
                              </a>
                            </div>
                          </>
                        </div>
                        <div className="col mb-5">
                          <p className="text-base text-gray-500">
                            If you disable link shortening, we won’t be able to provide the Click-Through Rate (CTR) data
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-5">
                      <div className="row border-b">
                        <div className="col mb-5">
                          <div className="flex items-center">
                            <h3 className="text-base font-semibold mr-2">
                              Clone to Another Page
                            </h3>
                          </div>
                        </div>
                        <div className="col mb-5">
                          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Clone This Bot</button>
                        </div>
                        <div className="col mb-5">
                          <p className="text-base text-gray-500">
                            Transfer all content of this bot to another page
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-5">
                      <div className="row border-b">
                        <div className="col mb-5">
                          <div className="flex items-center">
                            <h3 className="text-base font-semibold mr-2">
                              Use as Template
                            </h3>
                          </div>
                        </div>
                        <div className="col mb-5">
                          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Bot Template</button>
                        </div>
                        <div className="col mb-5">
                          <p className="text-base text-gray-500">
                            Create a snapshot of this bot and share it via link
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-5">
                      <div className="row border-b">
                        <div className="col mb-5">
                          <div className="flex items-center">
                            <h3 className="text-base font-semibold mr-2">
                              Contacts Visibility
                            </h3>
                          </div>
                        </div>
                        <div className="col mb-5">
                          <div className="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show only subscribed contacts</label>
                          </div>
                        </div>
                        <div className="col mb-5">
                          <p className="text-base text-gray-500">
                            Hide all deleted and unsubscribed contacts and visitors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-5">
                      <div className="row">
                        <div className="col mb-5">
                          <div className="flex items-center">
                            <h3 className="text-base font-semibold mr-2">
                              Leave Account
                            </h3>
                          </div>
                        </div>
                        <div className="col mb-5">
                          <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-red-500 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Leave</button>

                        </div>
                        <div className="col mb-5">
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

      </Layout>
    </>
  )
}