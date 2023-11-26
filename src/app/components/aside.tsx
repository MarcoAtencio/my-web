export default function Aside() {
  return (
    <aside className='flex flex-col items-center justify-center w-1/5 bg-gray-100'>
      <nav className='flex flex-col items-center justify-center w-full'>
        <a
          className='flex items-center justify-center w-full h-16 px-6 text-lg font-bold text-gray-800 hover:bg-gray-200'
          href='/contact-me'
        >
          Contact Me
        </a>
        <a
          className='flex items-center justify-center w-full h-16 px-6 text-lg font-bold text-gray-800 hover:bg-gray-200'
          href='/work'
        >
          Work
        </a>
        <a
          className='flex items-center justify-center w-full h-16 px-6 text-lg font-bold text-gray-800 hover:bg-gray-200'
          href='/skills'
        >
          Skills
        </a>
        <a
          className='flex items-center justify-center w-full h-16 px-6 text-lg font-bold text-gray-800 hover:bg-gray-200'
          href='/education'
        >
          Education
        </a>
      </nav>
    </aside>
  );
}
