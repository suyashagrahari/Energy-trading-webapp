import React from 'react'
import Navbar from '../components/Navbar'
import "../index.css"
const Marketplace = () => {
  return (
   <>
          
<div className="bg-purple-900 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 flex flex-col gap-10 items-center bottom-0 leading-5 h-[100vh] w-full overflow-hidden">
          {/* <!-- component --> */}
          <div className='text-white text-4xl mt-[10rem] font-bold'>
            Market Place
          </div>
          <div className='w-[50%]'>
            
          <form>   
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
                  <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
          </form>

          </div>
<div class="md:px-32 py-8 w-full">
  <div class="shadow overflow-hidden  rounded-2xl border-b border-gray-200">
    <table class="min-w-full bg-white">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">Wallet Address</th>
          <th class="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">Pincode</th>
          <th class="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">Max Unit (kwh) </th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Buy</th>
        </tr>
      </thead>
    <tbody class="text-gray-700">
      <tr>
        <td class="w-1/4 text-left py-3 px-4">Lian</td>
        <td class="w-1/4 text-left py-3 px-4">272189</td>
        <td class="w-1/4 text-left py-3 px-4">Smith</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td>
        <a
        class="inline-block rounded border border-current px-6 py-2 text-sm font-medium text-green-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500 hover:bg-green-500 hover:text-white"
        href="/download"
      >
        Buy
      </a>
        </td>
      </tr>
      <tr class="bg-gray-100">
        <td class="w-1/4 text-left py-3 px-4">Emma</td>
        <td class="w-1/4 text-left py-3 px-4">272189</td>
        <td class="w-1/4 text-left py-3 px-4">Johnson</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td>
        <a
        class="inline-block rounded border border-current px-6 py-2 text-sm font-medium text-green-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500 hover:bg-green-500 hover:text-white"
        href="/download"
      >
        Buy
      </a>
        </td>
      </tr>
      <tr>
        <td class="w-1/4 text-left py-3 px-4">Oliver</td>
        <td class="w-1/4 text-left py-3 px-4">272189</td>
        <td class="w-1/4 text-left py-3 px-4">Williams</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td>
        <a
        class="inline-block rounded border border-current px-6 py-2 text-sm font-medium text-green-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500 hover:bg-green-500 hover:text-white"
        href="/download"
      >
        Buy
      </a>
        </td>
      </tr>
      <tr class="bg-gray-100">
        <td class="w-1/4 text-left py-3 px-4">Isabella</td>
        <td class="w-1/4 text-left py-3 px-4">272189</td>
        <td class="w-1/4 text-left py-3 px-4">Brown</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td>
        <a
        class="inline-block rounded border border-current px-6 py-2 text-sm font-medium text-green-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500 hover:bg-green-500 hover:text-white"
        href="/download"
      >
        Buy
      </a>
        </td>
      </tr>
    </tbody>
    </table>
  </div>
</div>
</div>


   </>
  )
}

export default Marketplace;