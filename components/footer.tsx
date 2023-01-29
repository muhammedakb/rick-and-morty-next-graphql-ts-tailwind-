import Link from 'next/link';

const Footer = () => (
  <footer className='p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
    <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
      © 2023{' '}
      <a
        href='https://github.com/muhammedakb'
        className='hover:underline'
        target='_blank'
        rel='noreferrer'
      >
        MuhammetAkbulut™
      </a>
      . All Rights Reserved.
    </span>
    <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
      <li>
        <Link href='/' className='mr-4 hover:underline md:mr-6 '>
          Home
        </Link>
      </li>
      <li>
        <Link href='/about' className='mr-4 hover:underline md:mr-6 '>
          About
        </Link>
      </li>
      <li>
        <Link className='mr-4 hover:underline md:mr-6' href='/blog/hello-world'>
          Blog Post
        </Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
