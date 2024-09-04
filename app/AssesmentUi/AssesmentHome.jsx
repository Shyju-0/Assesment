import React from 'react';
import { Menu, Search, SlidersHorizontal } from 'lucide-react';

export default function HomePage() {
  const statsData = [
    { value: "850+", label: "Property Listings" },
    { value: "110+", label: "Esteemed Agents" },
    { value: "958+", label: "Regular Clients" },
  ];

  return (
    <div className=" relative container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <p className="text-3xl ml-20">
          <span className="text-red-500 font-bold">TECH</span>
          <span className="text-black"> REALTORS</span>
        </p>
        <nav className='flex items-center gap-10'>
          <ul className="flex space-x-8">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Agents</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Properties</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
          </ul>
          <div className='mr-10 w-12 h-12 text-white bg-red-500 flex items-center justify-center'>
            <Menu />
          </div>
        </nav>
      </header>

      <div className="relative flex items-start -mx-4">
        {/* Image Section */}
        <div className='w-full flex justify-end mt-5'>
            <img src='assesment-img-1.jpg' className="w-8/12 h-[604px] object-cover mr-16" />
        </div>
        {/* Text Section */}
        <div className="absolute left-16 top-36 md:w-1/3 px-4 mt-5">
          <div className="flex space-x-8 mb-8">
            {statsData.map((item, index) => (
              <div key={index}>
                <h2 className="text-4xl font-bold text-red-500">{item.value}</h2>
                <p className="text-gray-600">
                  {item.label.split(" ").map((word, i) => (
                    <span key={i}>{word}<br /></span>))}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white p-8 rounded-tr-[50px] pb-28">
            <h2 className="text-3xl font-bold mb-4">CREATING BLISSFUL <br /> PROPERTY SEARCH <br />IS OUR SPECIALITY</h2>
            <p className="mb-6">With a lot of experience we will help you shortlist the properties you want.</p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="flex absolute left-28 bottom-16 p-3 bg-white w-2/5 border-2 rounded-md mt-10">
        <Search className="mt-3 mr-2 text-black" />
        <input
          type="text"
          placeholder="Search by project, street name, area"
          className="flex-grow p-3 rounded-l-lg text-gray-900"
        />
        <SlidersHorizontal className='text-black mt-3 mx-5' />
        <button className="bg-red-500 text-white p-3 px-7 rounded-lg flex items-center">
          Search
        </button>
      </div>
    </div>
  );
};
