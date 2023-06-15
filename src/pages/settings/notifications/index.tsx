//Next
import Head from "next/head";
//Components
import { Layout } from "@/components/layout";
import { SettingsNav } from "@/components/settings/settings-nav";

export default function Notifications(){

  return (
    <>

      <Head>
        <title>Notifications | Neero</title>
      </Head>

      <Layout>

        <section className="bg-gray-50 dark:bg-gray-900 h-full ">
          <div className="w-full border-b">
            <div className="p-4 mx-auto max-w-7xl lg:px-6">
              <h2 className="text-2xl font-bold">
                Settings
              </h2>
            </div>
          </div>
          <div className="p-4 mx-auto max-w-7xl lg:px-6">
            <div className="row">
              <div className="hidden md:block col-2">
                <SettingsNav/>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col-12 mb-4">
                    <div className="bg-white rounded-lg border p-5">
                      <div className="row">
                        <div className="col-12 mb-5">
                          <div className="row">
                            <div className="col mb-5">
                              <div className="flex items-center">
                                <h3 className="text-base font-semibold mr-2">
                                  'Notify Assignees' Action
                                </h3>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">PRO</span>
                              </div>
                            </div>
                            <div className="col mb-5">
                              
                              <>
                                <div className="flex items-center mb-2">
                                  <input
                                    id="default-checkbox"
                                    type="checkbox"
                                    defaultValue=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    htmlFor="default-checkbox"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    Messenger
                                  </label>
                                </div>
                                <div className="flex items-center mb-2">
                                  <input
                                    defaultChecked
                                    id="checked-checkbox"
                                    type="checkbox"
                                    defaultValue=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    htmlFor="checked-checkbox"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    SMS
                                  </label>
                                </div>
                                <div className="flex items-center mb-2">
                                  <input
                                    defaultChecked
                                    id="checked-checkbox"
                                    type="checkbox"
                                    defaultValue=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    htmlFor="checked-checkbox"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    Email
                                  </label>
                                </div>
                                <div className="flex items-center mb-2">
                                  <input
                                    defaultChecked
                                    id="checked-checkbox"
                                    type="checkbox"
                                    defaultValue=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    htmlFor="checked-checkbox"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    Mobile push notification
                                  </label>
                                </div>
                              </>


                            </div>
                            <div className="col mb-5">
                              <p className="text-base text-gray-500">
                                Enable to let Manychat send you notifications when a contact performs a specific action in your broadcasts, welcome messages, opt-in messages, etc.
                                <br />
                                <br />
                                Download Manychat application to receive push notifications and stay informed.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-4">
                    <div className="bg-white rounded-lg border p-5">
                      <div className="row ">
                        <div className="col-12 mb-5">
                          <div className="row border-b">
                            <div className="col mb-5">
                              <div className="flex items-center">
                                <h3 className="text-base font-semibold mr-2">
                                  Live Chat Desktop Notifications
                                </h3>
                              </div>
                            </div>
                            <div className="col mb-5">
                              <>
                                <h3 className="text-lg font-semibold mb-3">
                                  Notify me when
                                </h3>
                                <div className="flex items-center mb-2">
                                  <input
                                    id="default-checkbox"
                                    type="checkbox"
                                    defaultValue=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    htmlFor="default-checkbox"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    I get a new message from a conversation assigned to me
                                  </label>
                                </div>
                                <div className="flex items-center mb-2">
                                  <input
                                    defaultChecked
                                    id="checked-checkbox"
                                    type="checkbox"
                                    defaultValue=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    htmlFor="checked-checkbox"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    There is a new conversation in unassigned folder
                                  </label>
                                </div>
                                <div className="flex items-center mb-2">
                                  <input
                                    defaultChecked
                                    id="checked-checkbox"
                                    type="checkbox"
                                    defaultValue=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    htmlFor="checked-checkbox"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    A conversation is assigned to me
                                  </label>
                                </div>
                              </>


                            </div>
                            <div className="col mb-5">
                              <p className="text-base text-gray-500">
                                Enable instant popup notifications on your desktop about new messages and assigned conversations. If you don't see the notifications, check your system settings if notifications are on.
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
                                  Live Chat Channel Notifications
                                </h3>
                              </div>
                            </div>
                            <div className="col mb-5">
                              <>
                                <h3 className="text-lg font-semibold mb-3">
                                  Notify me when
                                </h3>
                                <div className="flex items-center mb-2">
                                  <input
                                    id="default-checkbox"
                                    type="checkbox"
                                    defaultValue=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    htmlFor="default-checkbox"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    A conversation is assigned to me
                                  </label>
                                </div>
                              </>
                            </div>
                            <div className="col mb-5">
                              <p className="text-base text-gray-500">
                                Live Chat notifications to help you support your audience and track leads in channels connected below e.g. Mail, SMS, Telegram.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="bg-white rounded-lg border p-5">
                      <div className="row">
                        <div className="col-12 mb-5">
                          <div className="row border-b">
                            <div className="col mb-5">
                              <div className="flex items-center">
                                <h3 className="text-base font-semibold mr-2">
                                  Messenger Notifications
                                </h3>
                              </div>
                            </div>
                            <div className="col mb-5">
                              <div
                                id="alert-additional-content-4"
                                className="p-4 mb-4 text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
                                role="alert"
                              >
                                <div className="flex items-center">
                                  <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="sr-only">Info</span>
                                  <h3 className="text-lg font-medium">Please note</h3>
                                </div>
                                <div className="mt-2 mb-4 text-sm">
                                  If you see this text, the button that should be shown instead is not working. Please subscribe to the bot manually by messaging it on Facebook
                                </div>
                              </div>

                            </div>
                            <div className="col mb-5">
                              <p className="text-base text-gray-500">
                                Opt-in to your bot to be able to receive bot notifications in Messenger and to preview bot content
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 mb-5">
                          <div className="row border-b">
                            <div className="col mb-5">
                              <div className="flex items-center">
                                <h3 className="text-base font-semibold mr-2">
                                  My Telegram for Notifications
                                </h3>
                              </div>
                            </div>
                            <div className="col mb-5">
                              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Subscribe With Telegram</button>

                            </div>
                            <div className="col mb-5">
                              <p className="text-base text-gray-500">
                                Opt-in to our bot to be able to receive bot notifications in Telegram
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 mb-5">
                          <div className="row border-b">
                            <div className="col mb-5">
                              <div className="flex items-center">
                                <h3 className="text-base font-semibold mr-2">
                                  My Email for Notifications
                                </h3>
                              </div>
                            </div>
                            <div className="col mb-5">
                              <div className="row">
                                <div className="col-md-6 mb-4">
                                  <div>
                                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required/>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full">update</button>
                                </div>
                              </div>
                            </div>
                            <div className="col mb-5">
                              
                            </div>
                          </div>
                        </div>
                        <div className="col-12 mb-5">
                          <div className="row">
                            <div className="col mb-5">
                              <div className="flex items-center">
                                <h3 className="text-base font-semibold mr-2">
                                  My Phone Number for Notifications
                                </h3>
                              </div>
                            </div>
                            <div className="col mb-5">
                              <div className="row">
                                <div className="col-md-6 mb-4">
                                  <div>
                                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter phone" required/>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full" disabled>Save</button>
                                </div>
                                <div className="col-12">
                                  <div className="flex mb-4">
                                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" disabled/>
                                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300">I confirm that the phone number is owned by me and I give permission me SMS notifications.</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col mb-5">
                              <p className="text-base text-gray-500">
                                Add your phone number to receive SMS notifications. Please note that you will be charged for every SMS notification.
                              </p>
                            </div>
                          </div>
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