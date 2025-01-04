'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { FaRegListAlt } from 'react-icons/fa';
import { FiChevronsLeft } from 'react-icons/fi';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlinePostAdd } from 'react-icons/md';

import { cn } from '@/utils/cn';

const menuItems = [
  { id: 1, label: 'Home', icon: IoHomeOutline, link: '/dashboard' },
  {
    id: 2,
    label: 'Add a post',
    icon: MdOutlinePostAdd,
    link: '/dashboard/add-post',
  },
  {
    id: 3,
    label: 'Manage posts',
    icon: FaRegListAlt,
    link: '/dashboard/manage-posts',
  },
];

export default function AdminSidebar() {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const pathname = usePathname();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === pathname),
    [pathname]
  );

  const wrapperClasses = cn(
    ' px-4 pt-8 pb-4 bg-slate-200 flex justify-between flex-col ',
    {
      ['w-80']: !toggleCollapse,
      ['w-20']: toggleCollapse,
    }
  );

  const collapseIconClasses = cn('p-4 rounded bg-slate-100 absolute right-0', {
    'rotate-180': toggleCollapse,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getNavItemClasses = (menu: any) => {
    return cn(
      'flex items-center cursor-pointer hover:bg-slate-100 rounded w-full overflow-hidden whitespace-nowrap',
      {
        ['bg-slate-100']: activeMenu?.id === menu.id,
      }
    );
  };

  // Auto close menu when on mobile
  const handleResize = () => {
    if (window.innerWidth > 720) {
      setToggleCollapse(false);
    } else {
      setToggleCollapse(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: 'width 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
    >
      <div className='flex flex-col'>
        <div className='flex items-center justify-between relative'>
          <button className={collapseIconClasses} onClick={handleSidebarToggle}>
            <FiChevronsLeft />
          </button>
        </div>

        <div className='flex flex-col items-start mt-24'>
          {menuItems.map(({ icon: Icon, ...menu }, index) => {
            const classes = getNavItemClasses(menu);

            return (
              <div className={classes} key={index} title={menu.label}>
                <Link
                  href={menu.link}
                  className='flex py-4 px-3 items-center w-full h-full'
                >
                  <div style={{ width: '2.5rem' }}>
                    <Icon className='text-xl' />
                  </div>
                  {!toggleCollapse && (
                    <span className={cn('text-md font-medium text-text-light')}>
                      {menu.label}
                    </span>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
