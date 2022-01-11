import { useState } from 'react';
import { Nav } from './style';

export default function Menu() {
  const [open, isOpen] = useState(false);
  return (
    <Nav>
      <button
        onClick={() => isOpen(!open)}
        type="button"
      >
        <div className={`line ${open && 'open'}`} />
      </button>
    </Nav>
  );
}
