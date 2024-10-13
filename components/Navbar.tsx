
"use client";
import React from 'react'
import link from 'next/link'
 // Ensures the component is rendered on the client side

import Link from 'next/link'; // Import Link from next/link
import Image from 'next/image'; // Import Image from next/image
const navIcons= [{
    src:'/assets/icons/search.svg',alt:"search"},
    {src:'/assets/icons/black-heart.svg',alt:"heart"},
    {src:'/assets/icons/user.svg',alt:"user"}
]


export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/icons/logo.svg" // Path to your logo SVG
          width={27} // Width of the image
          height={27} // Height of the image
          alt="logo" // Alternative text for accessibility
        />
                  <p className="nav-logo">
            Price<span className=' text-primary'>Wise</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image 
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div>
    </nav>
    
  );
}


// const Navbar = () => {
//   return (
//     <header className="w-full">
//         <nav className="nav">
            
//             <Link href='/' className="flex items-center gap-1">
//             <Image 
//                 src="/assets/icons/logo.svg"
//                 width={27}
//                 height={27}
//                 alt="logo"
            
            
//             />
//             </Link>
//          </nav>
//         </header>
//   )
// }

// export default Navbar