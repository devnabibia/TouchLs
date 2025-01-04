import Contact from './contact-form';

function Engagement() {
  return (
    <div className='container mt-10 mx-auto'>
      <div className='border-b-2'></div>
      <div className='py-24 px-4'>
        <h2 className='text-4xl font-bold'>Ways To Engage With Us</h2>
        <h5 className='text-xl pt-4'>
          Or fill the form below / email us at{' '}
          <a
            href='mailto:info@microcis.net'
            className='text-blue-600 underline'
          >
            nangendodennis@gmail.com
          </a>{' '}
          or give us a call at{' '}
          <a href='tel:0093799708760' className='text-blue-600 underline'>
            0742692485
          </a>{' '}
          (8:00 am to 5:00 pm EAT)
        </h5>
      </div>
      <Contact />
    </div>
  );
}

export default Engagement;
