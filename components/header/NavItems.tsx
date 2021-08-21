import React from 'react';
import MobileNavItems from 'components/header/navItems/MobileNavItems';
import DesktopNavItems from 'components/header/navItems/DesktopNavItems';

function NavItems() {
  return (
    <>
      {/* Mobile */}
      <MobileNavItems />
      {/* Desktop */}
      <DesktopNavItems />
    </>
  );
}

export default NavItems