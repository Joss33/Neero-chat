//Next
import Head from "next/head";
//Components
import { Layout } from "@/components/layout";
import { SettingsNav } from "@/components/settings/settings-nav";

export default function Messenger(){

  return (
    <>

      <Head>
        <title>Messenger | Neero</title>
      </Head>

      <Layout>

        <section className="bg-gray-50 dark:bg-gray-900 h-full ">
          <div className="w-full border-b">
            <div className="p-4 mx-auto  lg:px-6">
              <h2 className="text-2xl dark:text-white font-bold">
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
                <div className="row">
                  <div className="col-12 mb-5">
                    <h2 className="text-2xl dark:text-white font-bold">Messenger</h2>
                  </div>
                  <div className="col-12">
                    <div className="bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg h-full border p-5">
                      <div className="row">
                        <div className="col-12 col-lg-7 mx-auto">
                          <h2 className="font-bold text-2xl dark:text-white text-center mb-2">
                            Facebook Messenger chatbot #1
                          </h2>
                          <p className="text-base text-center text-gray-500 mb-5">
                            Sell products, book appointments, nurture leads, capture contact info, and build relationships all through Messenger with Manychat’s built for mobile chatbot tools. Learn more
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-auto mx-auto">
                          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Connect</button>
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