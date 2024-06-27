import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons'
import {navLinks} from '../constant'
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="./">
                <img src={headerLogo} alt="logo"  width={130} height={29}
                padding/>
            </a>
           <ul className='flex-1 flex max-lg:hidden justify-center items-center gap-16'>
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href} className='text-[#030303] font-mono text-lg leading-normal'>
                            {item.label}
                        </a>
                    </li>
                ))}
           </ul>
           <div className='hidden max-lg:block'>
            <img src={hamburger} alt="ham"  width={25} height={25}/>
           </div>
        </nav> 
    </header>
  )
}

export default Nav
