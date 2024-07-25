import './Header.css';
import Logo from '../assets/images/logo/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const menu = [
    {
      name: 'Home',
      link: '/',
      submenu: [
        { name: 'Main Demo', link: '/main-demo' },
        { name: 'Main Demo Dark', link: '/dark-main-demo' },
        { name: 'Creative Agency', link: '/creative-agency' },
        { name: 'Creative One Page', link: '/creative-landing' },
        { name: 'Creative Portfolio', link: '/creative-portfolio' }
      ],
    },
    { name: 'About', link: '/about', submenu: [] },
    {
      name: 'Services',
      link: '/service',
      submenu: [
        { name: 'Service', link: '/service' },
        { name: 'Service Details', link: '/service-details' },
      ],
    },
    { name: 'Contact', link: '/contact', submenu: [] },
  ];

  return (
    <header className='header flex justify-between items-center bg-blue-900 px-10 custom-bg pt-8'>
      <Link to='/' className='header-logo cursor-pointer'>
        <img src={Logo} alt='logo' />
      </Link>
      <nav>
        <ul className='menu flex justify-between items-center gap-16'>
          {menu.map((menuItem, index) => (
            <li key={index} className='menu-item relative group py-5'>
              <Link to={menuItem.link || '#'} className='block'>
                {menuItem.name}
              </Link>
              {menuItem.submenu.length > 0 && (
                <ul className='sub-menu absolute left-0 hidden group-hover:block'>
                  {menuItem.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.link}
                        className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <div className='header-btn'>
            <Link to='/contact' className='rn-btn'>
              <span>buy now</span>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
