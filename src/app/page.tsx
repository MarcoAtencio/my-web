import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center mx-auto w-4/5 md:w-5/6'>
      <div className='grid grid-cols-1 lg:grid-cols-2  items-center'>
        <div className='text-center lg:text-left lg:mr-20'>
          <p className='text-6xl font-bold mb-2 text-emerald-600'>Hi,</p>
          <p className='text-6xl font-bold mb-2 text-emerald-600'>
            I&apos;m Marco
          </p>
          <p className='text-lg text-gray-600 mb-4'>Full Stack Developer</p>
        </div>

        <Image
          src='/images/me.png'
          alt='my photo'
          className='rounded-full'
          height={300}
          width={300}
        />
      </div>
    </main>
  );
}
