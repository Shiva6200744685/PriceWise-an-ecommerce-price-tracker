
"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Correct import for Image

const Navbar = () => {
  // Define the navIcons array correctly
  const navIcons = [
    { src: '/assets/icons/bookmark.svg', alt: 'Icon 1' },
    { src: '/assets/icons/logo.svg', alt: 'Icon 2' },
    { src: '/assets/icons/search.svg', alt: 'Icon 3' }
  ];

  return (
    <nav className="nav flex justify-between items-center px-4 py-2">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/icons/logo.svg"
          width={27}
          height={27}
          alt="logo"
        />
        <p className="nav-logo text-lg font-bold">
          Price<span className="text-primary">Wise</span>
        </p>
      </Link>
      
      <div className="flex items-center gap-5">
        {navIcons.map((icon) => (
          <Image 
            key={icon.alt} // Use a unique key for each icon
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
};

export default Navbar;




// export default Navbar;

    
    
    // <nav className="nav">
    //   <Link href="/" className="flex items-center gap-1">
    //     <Image
    //       src="/assets/icons/logo.svg" // Path to your logo SVG
    //       width={27} // Width of the image
    //       height={27} // Height of the image
    //       alt="logo" // Alternative text for accessibility
    //     />
    //               <p className="nav-logo">
    //         Price<span className=' text-primary'>Wise</span>
    //       </p>
    //     </Link>
    //     <div className="flex items-center gap-5">
    //       {navIcons.map((icon) => (
    //         <Image 
    //           key={icon.alt}
    //           src={icon.src}
    //           alt={icon.alt}
    //           width={28}
    //           height={28}
    //           className="object-contain"
    //         />
    //       ))}
    //     </div>
    // </nav>
    


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