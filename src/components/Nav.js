/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Nav() {
  // react fragment '<></>' works like a placeholder div
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>
          MemeGenerator
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto'>
            <a className='nav-item nav-link active' href='/'>
              Create <span className='sr-only'>(current)</span>
            </a>
            <a className='nav-item nav-link' href='my-memes'>
              My Memes
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
