import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import Logo from '../../images/logo/InvntzLogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faHome,
  faBeer,
  faComments,
  faBars,
  faPlus,
  faTable,
  faCog,
  faChartBar,
  faTachometerAlt,
  faChartPie,
  faCloud,
  faShoppingCart,
  faStore,
} from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-20 flex-col overflow-y-hidden bg-blue-950 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between gap-2 p-2 lg:py-6.5">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <FontAwesomeIcon icon={faBars} className="text-current" />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/dashboard"
                  className={`mb-5 group relative flex flex-col items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('calendar') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <FontAwesomeIcon icon={faHome} className="fa-2x" />
                  <span className="text-sm mt-1">Dashboard</span>{' '}
                  {/* Added this line */}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/home"
                  className={`mb-5 group relative flex flex-col items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('calendar') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faStore}
                    className="text-current fa-2x"
                  />
                  <span className="text-sm mt-1">Market</span>{' '}
                  {/* Added this line */}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Statics"
                  className={`mb-5 group relative flex flex-col items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('calendar') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faChartPie}
                    className="text-current fa-2x"
                  />
                  <span className="text-sm mt-1">Statics</span>{' '}
                  {/* Added this line */}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/upload"
                  className={`mb-5 group relative flex flex-col items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('calendar') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faChartPie}
                    className="text-current fa-2x"
                  />
                  <span className="text-sm mt-1">Statics</span>{' '}
                  {/* Added this line */}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Statics"
                  className={`mb-5 group relative flex flex-col items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('calendar') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faCloud}
                    className="text-current fa-2x"
                  />
                  <span className="text-sm mt-1">Upload</span>{' '}
                  {/* Added this line */}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
