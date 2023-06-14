//React
import { useState } from "react";
//Components
import { Layout } from "@/components/layout";
import { Modal } from "@/components/Modal";
import { PhoneNumberInput } from "@/components/phoneNumberInput";
//Externals
import classNames from "classnames";

export default function Contacts() {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [isOpenAddTag, setIsOpenAddTag] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  }

  const handleToggleModalDetail = () => {
    setIsOpenDetail(!isOpenDetail);
  }

  const handleToggleModalAddTag = () => {
    setIsOpenAddTag(!isOpenAddTag);
  }

  const handleToggleModalFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  }

  return(
    <>
      <Layout>
        <section className="bg-gray-50 dark:bg-gray-900 h-full ">
          <div className="w-full border-b mb-10">
            <div className="p-4 mx-auto max-w-screen-xl lg:px-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  Contacts
                </h2>
                <button onClick={handleToggleModal} type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Create New Contact</button>
              </div>
            </div>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center p-4 bg-white dark:bg-gray-900">
            <div className="relative">
              <button
                onClick={handleToggleModalFilter}
                id="filterDropdownButton"
                data-dropdown-toggle="filterDropdown"
                type="button"
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4 mr-2 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                  />
                </svg>
                Filter
              </button>
              <div 
                id="dropdownSearch"
                className={classNames('z-10 absolute top-full bg-white rounded-lg shadow w-60 dark:bg-gray-700', {'hidden': !isOpenFilter})}
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
                      placeholder="Search filter"
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
              </div>
            </div>

              <label htmlFor="table-search" className="sr-only">
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
                  id="table-search-users"
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for users"
                />
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Avatar
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Susbscribed
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                  </th>
                  <td className="px-6 py-4">
                    <div className="text-base font-semibold">Neil Sims</div>
                    <div className="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </div>
                  </td>
                  <td className="px-6 py-4">Male</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />{" "}
                      Online
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      4 months ago
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      role="button"
                      onClick={handleToggleModalDetail}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      See detail
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                  </th>
                  <td className="px-6 py-4">
                    <div className="text-base font-semibold">Neil Sims</div>
                    <div className="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </div>
                  </td>
                  <td className="px-6 py-4">Male</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />{" "}
                      Online
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      4 months ago
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      role="button"
                      onClick={handleToggleModalDetail}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      See detail
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                  </th>
                  <td className="px-6 py-4">
                    <div className="text-base font-semibold">Neil Sims</div>
                    <div className="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </div>
                  </td>
                  <td className="px-6 py-4">Male</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />{" "}
                      Online
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      4 months ago
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      role="button"
                      onClick={handleToggleModalDetail}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      See detail
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>
      </Layout>

      <Modal isOpen={isOpen} onClose={handleToggleModal} size={'max-w-2xl'}>
        <div className="bg-white rounded-lg p-5">
          {/* Modal header */}
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Create New Contact
            </h3>
            <button
              onClick={handleToggleModal}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
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
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <form action="#">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:max-w-xl mx-auto px-3">
                <p className="text-center text-gray-500 text-lg mb-5">In order to create a contact successfully, it is mandatory to fill the Phone number or Email</p>
              </div>
            </div>

            <div className="grid gap-1 mb-4">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Type your first name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Type your last name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <PhoneNumberInput />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gender
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <div className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="link-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I agree with the{" "}
                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
              </div>
              
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              
              <button
                onClick={handleToggleModal}
                data-modal-toggle="createProductModal"
                type="button"
                className="w-full justify-center sm:w-auto text-gray-500 inline-flex items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                <svg
                  className="mr-1 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Discard
              </button>
              <button
                onClick={handleToggleModal}
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="mr-1 -ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Create
              </button>

            </div>
          </form>
        </div>
      </Modal>

      <Modal isOpen={isOpenDetail} onClose={handleToggleModalDetail} size={'max-w-3xl'}>
        {/* Modal content */}
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          {/* Modal header */}
          <div className="flex justify-between mb-4 rounded-t sm:mb-5">
            <div className="flex items-center">
              <img
                className="w-12 h-12 mr-2 rounded-full sm:mr-4"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                alt="Helene avatar"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900 md:text-xl dark:text-white">
                  Javier Polo
                </h3>
                <p className="text-base font-light text-gray-500 dark:text-gray-400">
                  Moderator
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={handleToggleModalDetail}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="readUserModal"
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
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
          </div>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <dl>
              <dt className="sr-only">Role</dt>
              <dd className="flex items-center mb-2 font-light text-gray-500 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <span className="text-green-400">Subscribed</span>
                <span>
                  {" "}
                  (Unsubscribe)
                </span>
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="flex items-center mb-2 font-light text-gray-500 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span >Contact Time: Unknown</span>
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="flex items-center mb-2 font-light text-gray-500 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
                <span >264219214</span>
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="flex items-center mb-2 font-light text-gray-500 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <span >Opted-In for WhatsApp</span>
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="flex items-center mb-5 font-light text-gray-500 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span >573114242222</span>
              </dd>
              <button
                type="button"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Start Chat
              </button>
            </dl>
            <div className="">
              <div className="border-b px-4 pb-4 mb-2 relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xl font-semibold">
                    Contact Tags
                  </span>
                  <button
                    onClick={handleToggleModalAddTag}
                    id="dropdownSearchButton"
                    data-dropdown-toggle="dropdownSearch"
                    data-dropdown-placement="bottom"
                    className="text-blue-700 bg-transparent hover:bg-blue-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    Add Tag{" "}
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
                    className={classNames('z-10 absolute top-1/2 left-1/2 bg-white rounded-lg shadow w-60 dark:bg-gray-700', {'hidden': !isOpenAddTag})}
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
                          placeholder="Search tag"
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
                  </div>
                </div>
                <span
                  id="badge-dismiss-default"
                  className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300"
                >
                  Tagg
                  <button
                    type="button"
                    className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                    data-dismiss-target="#badge-dismiss-default"
                    aria-label="Remove"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Remove badge</span>
                  </button>
                </span>

              </div>
              <div className="border-b p-4 mb-2">
                <p className="text-xl font-semibold mb-3">
                  Opted In through
                </p>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Direct</span>
              </div>
              <div className="flex justify-between items-center border-b p-4 mb-2">
                <span className="text-xl font-semibold">
                  Custom Fields
                </span>
                <a role="button" className="text-blue-500">Manage Custom Fields</a>
              </div>
            </div>
            {/* <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Biography
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                Hello, I'm Helene Engels, USA Designer, Creating things that stand
                out, Featured by Adobe, Figma, Webflow and others, Daily design
                tips &amp; resources, Exploring Web3.
              </dd>
            </dl> */}
          </div>
        </div>
      </Modal>




    </>
  )
  
}