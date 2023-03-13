import React from 'react'
import { Link } from 'react-router-dom';
import useGlobalContext from '../../../hooks/useGlobalContex';

const sideLinks = [
  {
    title: 'Page2',
    route: '/page2'
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
    return <Link key={i} className='block'>{link.title}</Link>
  });
}

function Sidebar({ sidebarWidth = '200px', sidebarColor = 'white', navHeight = 'auto' }) {
  console.log("Sidenav renderev");
  const { sidebarStatus } = useGlobalContext();

  if(!sidebarStatus) sidebarWidth = '0px';

  return (
    <div style={{ width: `${sidebarWidth}`, backgroundColor: `${sidebarColor}`, boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 20px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }} className={`z-40 h-screen bg-black overflow-y-auto transition-all ease-in-out delay-150 duration-150`}>
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
