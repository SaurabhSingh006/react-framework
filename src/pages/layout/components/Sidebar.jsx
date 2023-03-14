import React from 'react'
import { Link } from 'react-router-dom';
import useGlobalContext from '../../../hooks/useGlobalContex';

const sideLinks = [
  {
    title: 'Dashboard',
    route: '/home'
  },
  {
    title: 'Page3',
    children: [
      {
        title: 'Option 1',
        route: '/page3/option1'
      },
      {
        title: 'Option 2',
        route: '/page3/option2'
      }
    ]
  }
];

function renderSideMenuList() {
  return sideLinks.map((link, i) => {
    return <Link to={link.route} key={i} className='block'>{link.title}</Link>
  });
}

function Sidebar({ sidebarWidth = '500px', msidebarWidth = '260px', sidebarColor = 'white', navHeight = 'auto' }) {
  console.log("Sidenav renderev");
  const { sidebarStatus } = useGlobalContext();

  if(!sidebarStatus) {
    sidebarWidth = '0';
    msidebarWidth = '0';
  }
  const sidebarClasses = `z-40 h-screen overflow-y-auto transition-all ease-in-out delay-150 duration-150 w-[${sidebarWidth}] md:w-[${msidebarWidth}]overflow-x-hidden`;
 console.log(sidebarClasses);
  return (
    <div style={{ backgroundColor: `${sidebarColor}`, boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 20px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }} className={sidebarClasses}>
      <div>
        <h1 style={{ minHeight: `${navHeight}` }} className="text-2xl text-center p-3">Logo</h1>
        { sidebarStatus }
        <div>
          {renderSideMenuList()}
        </div>
      </div> 
    </div>
  )
}

export default Sidebar;
