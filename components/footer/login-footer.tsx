import { APP_COPYRIGHT, APP_NAME } from '@/lib/constants';
import React from 'react';

export default function LoginFooter() {
  return (
    <footer className='w-full px-10'>
      <div className='border-t border-black py-10'>
        <h6 className='text-md font-medium font-nexon'>{APP_NAME}</h6>
        <p className='text-xs mt-1 text-slate-600 font-light'>
          {APP_COPYRIGHT}
        </p>
      </div>
    </footer>
  );
}
