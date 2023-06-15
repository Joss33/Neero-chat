//React
import { useState } from "react";

//Components
import { Layout } from "@/components/layout";
import { Modal } from "@/components/Modal";
import Head from "next/head";

export default function Home() {

  const [isOpenModalConnectChannel, setIsModalConnectChannel] = useState(false);
  const [isOpenModalSolutionsConvert, setIsModalSolutionsConvert] = useState(false);
  const [isOpenModalSolutionsUseStories, setIsModalSolutionsUseStories] = useState(false);
  const [isOpenModalSolutionsShowYourSite, setIsModalSolutionsShowYourSite] = useState(false);

  const handleToggleModalConnectChannel = () => {
    setIsModalConnectChannel(!isOpenModalConnectChannel);
  };

  const handleToggleModalSolutionsConvert = () => {
    setIsModalSolutionsConvert(!isOpenModalSolutionsConvert);
  };

  const handleToggleModalSolutionsUseStories = () => {
    setIsModalSolutionsUseStories(!isOpenModalSolutionsUseStories);
  };

  const handleToggleModalSolutionsShowYourSite = () => {
    setIsModalSolutionsShowYourSite(!isOpenModalSolutionsShowYourSite);
  };
  
  return (
    <>
      <Head>
        <title>Home | Neero</title>
      </Head>

      <Layout>
        <section className="bg-gray-50 dark:bg-gray-900 h-full ">
          <div className="w-full border-b">
            <div className="p-4 mx-auto  lg:px-6">
              <h2 className="text-2xl font-bold">
                Home
              </h2>
            </div>
          </div>
          <div className="py-8 px-4 mx-auto  lg:py-16 lg:px-6">
              <div className="mb-4 lg:mb-8">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Hello, Cristian!</h2>
                  <button type="button" onClick={handleToggleModalConnectChannel} className="text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Connect Channels</button>
                  <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Try our campaign solutions for multiple uses</p>
              </div> 
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-5">
                  <article className="p-4 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
                      <a role="button" onClick={handleToggleModalSolutionsConvert}>
                          <img className="mb-5 rounded-lg" src="https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/manychat/quickcampaign/qc/big_9cad6a1fa2a70558455624a8c4f6ab8e.png" alt="office laptop working"/>
                      </a>
                      <h2 className="my-2 text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
                          <a role="button" onClick={handleToggleModalSolutionsConvert}>Convert your Instagram Comments into Sales</a>
                      </h2>
                      <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                        </svg>

                        <div className="font-medium text-gray-500 text-sm dark:text-white">
                            <div>5,150 Installs</div>
                        </div>
                      </div>
                  </article>
                  <article className="p-4 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
                      <a role="button" onClick={handleToggleModalSolutionsUseStories}>
                          <img className="mb-5 rounded-lg" src="https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/manychat/quickcampaign/qc/big_beb1a8ff776f4271610fda7c35851be9.png" alt="Google HQ"/>
                      </a>
                      <h2 className="my-2 text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
                          <a role="button" onClick={handleToggleModalSolutionsUseStories}>Use Instagram Stories to Generate More Leads</a>
                      </h2>
                      <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                        </svg>
                          <div className="font-medium text-gray-500 text-sm dark:text-white">
                              <div>5,899 Installs</div>
                          </div>
                      </div>
                  </article>
                  <article className="p-4 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
                      <a role="button" onClick={handleToggleModalSolutionsShowYourSite}>
                          <img className="mb-5 rounded-lg" src="https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/manychat/quickcampaign/qc/big_0d3b6694ecf2317a5ccf9279f8f7424b.png" alt="office laptops"/>
                      </a>
                      <h2 className="my-2 text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
                          <a role="button" onClick={handleToggleModalSolutionsShowYourSite}>Show off your site to new visitors</a>
                      </h2>
                      <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                        </svg>
                          <div className="font-medium text-gray-500 text-sm dark:text-white">
                              <div>5,475 Installs</div>
                          </div>
                      </div>
                  </article>
              </div>
              <ul className="flex flex-col">
                <h3 className="text-base font-semibold mb-4">
                  Useful resources
                </h3>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">Help Center</a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">Comunity</a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">Hire an Agency</a>
                </li>
              </ul>
          </div>
        </section>
      </Layout>

      <Modal isOpen={isOpenModalConnectChannel} onClose={handleToggleModalConnectChannel} size={'max-w-5xl'}>
        {/* Modal content */}
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          {/* Modal header */}
          <div className="flex justify-between mb-4 rounded-t sm:mb-5">
            <div className="text-center text-lg text-gray-900 md:text-xl dark:text-white">
              <h3 className="font-semibold text-center">Connect Channel</h3>
            </div>
            <div>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="readProductModal"
                onClick={handleToggleModalConnectChannel}
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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-5">
            <div className="p-4 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow">
              <dl>
                <dt className="text-center mb-2 font-semibold text-gray-900 dark:text-white">
                  Facebook
                </dt>
                <dd className="text-center mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                  Build relationships with customers through interactive and tailored content.
                </dd>
                <button
                  type="button"
                  className="text-white block items-center mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Reconnect
                </button>
              </dl>
            </div>
            <div className="p-4 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow">
              <dl>
                <dt className="text-center mb-2 font-semibold text-gray-900 dark:text-white">
                  Facebook
                </dt>
                <dd className="text-center mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                  Build relationships with customers through interactive and tailored content.
                </dd>
                <button
                  type="button"
                  className="text-white block items-center mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Reconnect
                </button>
              </dl>
            </div>
            <div className="p-4 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow">
              <dl>
                <dt className="text-center mb-2 font-semibold text-gray-900 dark:text-white">
                  Instagram
                </dt>
                <dd className="text-center mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                  Supercharge your Instagram marketing with messaging automation.
                </dd>
                <button
                  type="button"
                  className="text-white block items-center mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Connect
                </button>
              </dl>
            </div>
            <div className="p-4 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow">
              <dl>
                <dt className="text-center mb-2 font-semibold text-gray-900 dark:text-white">
                  WhatsApp
                </dt>
                <dd className="text-center mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                  Use the world's most popular messaging app to chat and engage your customers.
                </dd>
                <button
                  type="button"
                  className="text-white block items-center mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Connect
                </button>
              </dl>
            </div>
            <div className="p-4 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow">
              <dl>
                <dt className="text-center mb-2 font-semibold text-gray-900 dark:text-white">
                  SMS
                </dt>
                <dd className="text-center mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                  Collect phone numbers and reengage your contacts via text.
                </dd>
                <button
                  type="button"
                  className="text-white block items-center mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Connect
                </button>
              </dl>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isOpenModalSolutionsConvert} onClose={handleToggleModalSolutionsConvert} size={'max-w-5xl'}>
        {/* Modal content */}
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          {/* Modal header */}
          
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">

            <div className="">
              <span className="text-xs text-gray-500 mb-5">Instagram</span>
              <h2 className="text-3xl font-bold mb-10">
                Convert your Instagram Comments into Sales
              </h2>

              <p className="text-base font-semibold mb-3">Business Value</p>
              <p className="text-base mb-5">
                Convert comments into sales by sending your followers a text and a link to buy your products or register for your webinars or events. Maximize your social media presence and drive traffic to your website, leading to higher sales and revenue.
              </p> 

              <p className="text-base font-semibold mb-3">How does it work?</p>

              <ul className="list-decimal pl-5 mb-10">
                <li>
                  Convert comments into sales by sending your followers a text and a link to buy your products or register for your webinars or events.
                </li>
                <li>
                  Maximize your social media presence and drive traffic to your website, leading to higher sales and revenue.
                </li>
              </ul>

              <button
                onClick={handleToggleModalSolutionsConvert}
                type="button"
                className="text-white block ml-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Set Up Template
              </button>

            </div>
            <div className="bg-gray-50">
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
                <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                  <video className="_video_1xyi1_70" src="https://manychat-storage.s3.eu-central-1.amazonaws.com/manychat/ca/2023/04/17/d0f23e2ebc41f28599b6c3bbad7533ce/RPReplay_Final1681392644.mov" autoPlay loop></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isOpenModalSolutionsUseStories} onClose={handleToggleModalSolutionsUseStories} size={'max-w-5xl'}>
        {/* Modal content */}
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          {/* Modal header */}
          
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">

            <div className="">
              <span className="text-xs text-gray-500 mb-5">Instagram</span>
              <h2 className="text-3xl font-bold mb-10">
                Use Instagram Stories to Generate More Leads
              </h2>

              <p className="text-base font-semibold mb-3">Business Value</p>
              <p className="text-base mb-5">
                Are you tired of manually managing your Instagram marketing funnel? Automate the process of sending followers a DM message with a link to buy your products or register for your webinars or events. Simply post an Instagram Story with a call to action for followers to reply with a specific keyword, and automation will do the rest. Maximize your Instagram marketing potential and drive more leads through Instagram Stories!
              </p> 

              <p className="text-base font-semibold mb-3">How does it work?</p>

              <ul className="list-decimal pl-5 mb-10">
                <li>
                  Your Follower replies to a story with a specific word.
                </li>
                <li>
                  Follower gets the message in DM with your CTA link.
                </li>
              </ul>

              <button
                onClick={handleToggleModalSolutionsUseStories}
                type="button"
                className="text-white block ml-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Set Up Template
              </button>

            </div>
            <div className="bg-gray-50">
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
                <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                  <video className="_video_1xyi1_70" src="https://manychat-storage.s3.eu-central-1.amazonaws.com/manychat/ca/2023/04/28/9931ca83dc097e3f3675342cf1b21dc0/IG_Story_reply_template_instructions_new.mov" autoPlay loop></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isOpenModalSolutionsShowYourSite} onClose={handleToggleModalSolutionsShowYourSite} size={'max-w-5xl'}>
        {/* Modal content */}
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          {/* Modal header */}
          
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">

            <div className="">
              <span className="text-xs text-gray-500 mb-5">Instagram</span>
              <h2 className="text-3xl font-bold mb-10">
                Show off your site to new visitors
              </h2>

              <p className="text-base font-semibold mb-3">Business Value</p>
              <p className="text-base mb-5">
                Guide contacts to the products and answers they're looking for using various keywords and messaging options. Use targeted questions in your automated flows to qualify contacts and direct them to their specific interest or destination.
              </p> 

              <p className="text-base font-semibold mb-3">How does it work?</p>

              <ul className="list-decimal pl-5 mb-10">
                <li>
                  You create multiple Keywords such as "price", "quantity", "buy", etc.
                </li>
                <li>
                  Contact sends a message with one of the FAQ keywords.
                </li>
                <li>
                  Keyword triggers the flow and sends welcome message with buttons for New Collection, Sale, Shipping, etc.
                </li>
                <li>
                  New Collection button sends the Contact a product gallery with buttons leading to website.
                </li>
                <li>
                  Shipping and sale buttons sends Contact relevant links leading to website.
                </li>
                <li>
                  If they have other questions, Contact is sent to Text Input and enters their question.
                </li>
              </ul>

              <button
                onClick={handleToggleModalSolutionsShowYourSite}
                type="button"
                className="text-white block ml-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Set Up Template
              </button>

            </div>
            <div className="bg-gray-50">
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
                <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                  <video className="_video_1xyi1_70" src="https://manychat-storage.s3.eu-central-1.amazonaws.com/manychat/ca/2023/04/28/9931ca83dc097e3f3675342cf1b21dc0/IG_Story_reply_template_instructions_new.mov" autoPlay loop></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

    </>
  )
}
