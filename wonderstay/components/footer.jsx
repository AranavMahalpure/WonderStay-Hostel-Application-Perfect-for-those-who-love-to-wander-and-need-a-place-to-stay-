const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className='py-6'>
        <div className=' px-4 '>
          <p className='text-center text-sm text-gray-600'>
            &copy; {currentYear} Bookit. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;