import Link from 'next/link';

export default function Aside() {
  return (
    <div className='flex flex-col items-center justify-center w-1/5 md:w-1/6 bg-emerald-500 text-slate-50'>
      <p className='text-2xl font-bold mb-4'>Marco Atencio</p>
      <nav className='flex flex-col items-center w-full'>
        <NavItem href='/' label='Home' />
        <NavItem href='/skills' label='My Skills' />
        <NavItem href='/work' label='Work' />
        <NavItem href='/education' label='Education' />
        <NavItem href='/contact-me' label='Contact Me' />
      </nav>
    </div>
  );
}

type NavItemProps = {
  href: string;
  label: string;
};

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className='w-full h-16 my-3 text-xl flex items-center justify-center transition duration-300 hover:bg-gray-200 hover:text-emerald-500'
    >
      {label}
    </Link>
  );
};
