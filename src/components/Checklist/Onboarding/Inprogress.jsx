import React, { useState } from 'react';
import { HiChevronRight } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import Table from './Table';
import { BiCheck } from "react-icons/bi";
import { RiPencilLine } from "react-icons/ri";
import {Link} from 'react-router-dom';
import Img1 from '../../../Images/portrait-cheerful-attractive-young-woman-longsleeve-standing-with-arms-crossed-smiling.jpg';
import { IoInformationCircleOutline } from "react-icons/io5";

const Inprogress = () => {

  const [openTab, setOpenTab] = useState(1);
  const[show,setShow]=useState(true);

  const handleSubmit = e => {
    setOpenTab(e);
  }
    return (
        <div>
            <div className="w-full p-4 shadow-md pt-5 bg-white">

<div className="flex space-y-2">
<button onClick={handleSubmit}>

{openTab === 1 ? (
      <HiChevronRight className='hover:bg-gray-300 rounded-sm text-xl p-0.5 cursor-pointer' />
       ) : (
      <HiChevronDown onClick={()=>setShow(!show)} className='hover:bg-gray-300 rounded-sm text-xl p-0.5 cursor-pointer'  />     
)}
</button>
   
  <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className='flex flex-col pl-10 pr-10 tooltip' data-tip="Join Date">
              <h3>Oct,2022</h3>
              <h1 className='text-center'>11</h1>
  </div>
  <img
src={Img1}
alt="profile"
className="mask rounded-full w-12 h-12"
/>
       <Link className='flex pl-3 hover:underline'> Delphia Feil</Link>
       <div className="dropdown dropdown-center">
        <label tabIndex={1}><IoInformationCircleOutline className='text-xl text-zinc-400 mr-2 ml-3 cursor-pointer' /></label>
       <div tabIndex={1} className="mt-3 flex card card-compact dropdown-content w-80 bg-base-100 shadow">
<div className="card-body">
  <div className='flow-root'>
  <div className='float-left  w-2/5'>
<p className='pb-3 text-zinc-400'>Join Date</p>
<p className='pb-3 text-zinc-400'>Job Title</p>
<p className='pb-3 text-zinc-400'>Department</p>
<p className='pb-3 text-zinc-400'>HR-in-charge</p>
<p className='pb-3 text-zinc-400'>Office</p>
<p className='pb-3 text-zinc-400'>Template</p>
  </div>
  <div className='float-left  w-3/5'>
 <p className='pb-3'>08 Jan 2020</p>
 <p className='pb-3'>Admin</p>
 <p className='pb-3'>Operations</p>
 <p className='pb-3'>Sukanya B</p>
 <p className='pb-3'>Qurinom solutions</p>
 <p className='pb-3'>Onboarding</p>
  </div>
  </div>
  </div>
</div>
</div>
</div>
<div className="flex-none gap-5">
  <h2 className='justify-items-end'>0/14 Completed</h2>
<label htmlFor="completonboarding" className="flex modal-button bg-zinc-200 hover:bg-zinc-300 px-3 py-2 rounded-md cursor-pointer"><BiCheck className='text-lg mr-2 mt-1' />Complete Onboarding</label>
<input type="checkbox" id="completonboarding" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
<div className="modal-box">
<h3 className="font-bold text-lg">Complete onboarding?</h3>
<p className="py-4">In progress tasks will be marked as completed (if any). All information provided and files uploaded will also be synced to Faustino's profile.</p>
<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
<div class="rounded-md shadow">
 <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-3 py-2 text-base font-medium text-white hover:bg-green-500 md:py-3 md:px-5 text-sm">Ok</button>
</div>
<div class="mt-3 sm:mt-0 sm:ml-3">
 <button  class="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2 text-base font-medium text-current hover:bg-slate-400 md:py-3 md:px-5 text-lg"><label htmlFor="completonboarding" className="cursor-pointer">Cancel</label></button>
</div>
</div>
</div>
</div>

<label htmlFor="editchecklist" className="modal-button"><RiPencilLine className='bg-gray-300 rounded-sm text-xl p-0.5 cursor-pointer'/></label>

<input type="checkbox" id="editchecklist" className="modal-toggle" />
<div className="modal">
<div className="modal-box  w-11/12 max-w-3xl">
<label htmlFor="editchecklist" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
<h2 className="font-bold text-lg pb-3">Edit Checklist</h2><hr className='pb-5' />

<div class="flow-root pb-7 gap-3">
<p class="float-left w-2/5">
<h3 className='pb-5'>Matsudaira Teshima</h3>
          <p className='pb-3 font-bold'>Template *</p>
          <select className="select text-gray-500 w-full border-inherit">
                    <option>Onboarding</option>
           </select>
</p>

<p className="float-right w-2/5"> 
<h3 className='pb-5'>Last Working Date: 02 May 2021</h3>
              <p className='pb-3 font-bold'>HR in-charge *</p>
              <select className="select text-gray-500 w-full border-inherit">
                   <option>Sukanya B</option>
              </select>
</p>
</div>
<p>We will send reminders to employee about incomplete tasks.</p>
<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
<div className="rounded-md shadow">
 <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-3 py-2 text-base font-bold text-white hover:bg-green-500  md:px-5 text-sm">Save</button>
</div>
<div className="mt-3 sm:mt-0 sm:ml-3">
 <button id="completonboarding" className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2 text-base font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg">Cancel</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<hr />
{
 show ? null : <Table />
}

</div>
        </div>
    );
};

export default Inprogress;