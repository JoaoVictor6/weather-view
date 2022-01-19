import { useEffect, useState } from 'react';
import SearchAddress from '../SearchAddress';
import SideMenu from '../SideMenu';
import { Nav } from './style';

type MenuProps = {
  title: {
    region?: string
    city?: string
  }
}
export default function Menu({ title }: MenuProps) {
  const [open, isOpen] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (search) {
      isOpen(() => !search);
    }
  }, [search]);

  useEffect(() => {
    if (open) {
      setSearch(() => !open);
    }
  }, [open]);

  return (
    <Nav>
      <button
        className="hamburger-menu"
        onClick={() => isOpen(!open)}
        type="button"
      >
        <div className={`line ${open && 'open'}`} />
      </button>
      <SideMenu isOpen={open} />
      <h1>
        {title.city ? `${title.city}, ${title.region}` : 'Not found'}
      </h1>
      <button
        type="button"
        onClick={() => setSearch(!search)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28">
          <path fill="#fff" fillRule="evenodd" d="M11.2 5.6a5.6 5.6 0 100 11.2 5.6 5.6 0 000-11.2zm-8.4 5.6a8.4 8.4 0 1115.246 4.866l6.744 6.744a1.4 1.4 0 01-1.98 1.98l-6.742-6.743A8.4 8.4 0 012.8 11.2z" clipRule="evenodd" />
        </svg>
      </button>
      <SearchAddress
        onSearch={() => {
          setSearch(false);
        }}
        appear={search}
      />
    </Nav>
  );
}
