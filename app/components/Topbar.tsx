import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Topbar = () => {
    const nav = [{
        name: "Features",
        link: "/features"
    }, {
        name: "Resources",
        link: "/resources"
    },{
        name: "Contact us",
        link: "/contact"
    }]
  return (
    <div className='flex items-center justify-between '>
        <Image src={"/LOGO.svg"} alt='Logo' width={160} height={0} className='' />
        <nav className='flex gap-14 text-white font-primary'>
            {nav.map((item, i) => (
                <Link key={i} href={item.link}>{item.name}</Link>
            ))}
        </nav>
        <div className='w-11 h-full '></div>
    </div>
  )
}

export default Topbar