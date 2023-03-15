import React from 'react'
import { NavLink } from 'react-router-dom';
import useGlobalContext from '../../../hooks/useGlobalContex';
import classnames from 'classnames';
import Button from '../../../components/button/Button';

const sideLinks = [
  {
    title: 'Dashboard',
    route: '/home'
  },
  {
    title: 'Page3',
    route: '/home/page3',
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
    return <NavLink to={link.route} key={i} className='block'>{link.title}</NavLink>
  });
}

function Sidebar({ sidebarWidth = '500px', msidebarWidth = '260px', sidebarColor = 'white', navHeight = 'auto' }) {
  console.log("Sidenav renderev");
  const { sidebarStatus } = useGlobalContext();

  let hideSidebar = false;
  if(!sidebarStatus) hideSidebar = true;
  const sidebarClasses = classnames(
    'z-40 h-screen overflow-y-auto transition-all ease-in-out delay-150 duration-500 overflow-x-hidden',
    { 'md:w-[260px] w-[700px]': !hideSidebar},
    { 'md:w-[0px] w-[0px]': hideSidebar}
  );

 console.log(sidebarClasses);
  return (
    <div style={{ backgroundColor: `${sidebarColor}`, boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 20px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }} className={sidebarClasses}>
      <div>
        <h1 style={{ minHeight: `${navHeight}` }} className="text-2xl text-center p-3">Logo</h1>
        { sidebarStatus }
        <div>
          {renderSideMenuList()}
        </div>

        <Button classes='text-black bg-pink-500' />
      </div> 
    </div>
  )
}

export default Sidebar;



