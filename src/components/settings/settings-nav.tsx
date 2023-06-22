//Next
import Link from "next/link";
import { useRouter } from "next/router";
//Externals
import classNames from "classnames";

export const SettingsNav = () => {

  const router = useRouter();
  const activeRoute = router.pathname;

  return (
    <>
      <div className="js-sticky-sidebar">
        <aside className=" hidden md:block">
          <nav role="navigation">
            <div className=" last:mb-6 mb-12">
              <h5 className="mb-0 pb-2 text-sm font-bold dark:text-white">
                Main
              </h5>
              <ul className="flex flex-wrap flex-col pl-0 mb-0 list-none">
                <li className="mt-0 mr-0 mb-1 ml-0 relative">
                  <Link
                    href="general"
                    className={classNames("inline-block p-0 font-normal text-sm hover:text-blue-700 dark:text-white", {'text-blue-700': activeRoute == '/settings','text-slate-900': activeRoute != '/settings' })}
                  >
                    General
                  </Link>
                </li>
                <li className="mt-0 mr-0 mb-1 ml-0 relative">
                  <Link
                    href="/settings/notifications"
                    className={classNames("inline-block p-0 font-normal text-sm hover:text-blue-700 dark:text-white", {'text-blue-700': activeRoute == '/settings/notifications','text-slate-900': activeRoute != '/settings/notifications' })}
                  >
                    Notifications
                  </Link>
                </li>
                <li className="mt-0 mr-0 mb-1 ml-0 relative">
                  <Link
                    href="team-members"
                    className={classNames("inline-block p-0 font-normal text-sm hover:text-blue-700 dark:text-white", {'text-blue-700': activeRoute == '/settings/team-members','text-slate-900': activeRoute != '/settings/team-members' })}
                  >
                    Team Members
                  </Link>
                </li>
                <li
                  className="mt-2 pt-2 border-t relative"
                  role="separator"
                />
              </ul>
              <h5 className="mb-0 pb- text-sm font-bold dark:text-white">
                Channels
              </h5>
              <ul className="flex flex-wrap flex-col pl-0 mb-0 list-none">
                <li className="mt-0 mr-0 mb-1 ml-0 relative">
                  <Link
                    href="/settings/instagram"
                    className={classNames("inline-block p-0 font-normal text-sm hover:text-blue-700 dark:text-white", {'text-blue-700': activeRoute == '/settings/instagram','text-slate-900': activeRoute != '/settings/instagram' })}
                  >
                    Instagram
                  </Link>
                </li>
                <li className="mt-0 mr-0 mb-1 ml-0 relative">
                  <Link
                    href="/settings/messenger"
                    className={classNames("inline-block p-0 font-normal text-sm hover:text-blue-700 dark:text-white", {'text-blue-700': activeRoute == '/settings/messenger','text-slate-900': activeRoute != '/settings/messenger' })}
                  >
                    Messenger
                  </Link>
                </li>
                <li className="mt-0 mr-0 mb-1 ml-0 relative">
                  <Link
                    href="/settings/sms"
                    className={classNames("inline-block p-0 font-normal text-sm hover:text-blue-700 dark:text-white", {'text-blue-700': activeRoute == '/settings/sms','text-slate-900': activeRoute != '/settings/sms' })}
                  >
                    SMS
                  </Link>
                </li>
                <li className="mt-0 mr-0 mb-1 ml-0 relative">
                  <Link
                    href="/settings/whatsapp"
                    className={classNames("inline-block p-0 font-normal text-sm hover:text-blue-700 dark:text-white", {'text-blue-700': activeRoute == '/settings/whatsapp','text-slate-900': activeRoute != '/settings/whatsapp' })}
                  >
                    WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </>
  )
}