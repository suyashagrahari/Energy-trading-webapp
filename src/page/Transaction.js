import React from 'react'

const Auction = () => {
  return (
    <>
        <div className="bg-purple-900 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 flex flex-col gap-10 items-center bottom-0 leading-5 h-[100vh] w-full overflow-hidden">
          {/* <!-- component --> */}
          <div className='text-white text-4xl mt-[10rem] font-bold'>
            Transaction History
          </div>
        
<div className="md:px-32 py-8 w-full">
  <div className="shadow overflow-hidden  rounded-2xl border-b border-gray-200">
    <table className="min-w-full bg-white">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">Buyer</th>
          <th className=" w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">Seller</th>
          <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">Total amount </th>
          <th className=" w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">Pincode</th>
        </tr>
      </thead>
    <tbody className="text-gray-700">
      <tr>
        <td className="w-1/4 text-left py-3 px-4">Lian</td>
        <td className="w-1/4 text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td className=" text-left py-3 px-4">Smith</td>
        
        <td>

        
         <div className=" text-left py-3 px-4"> 325908</div>

        </td>
      </tr>
      <tr className="bg-gray-100">
        <td className="w-1/4 text-left py-3 px-4">Emma</td>
        <td className="w-1/4 text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td className=" text-left py-3 px-4">Johnson</td>
        
        <td>
        
        <div className=" text-left py-3 px-4"> 325908</div>
 
   
        </td>
      </tr>
      <tr>
        <td className="w-1/4 text-left py-3 px-4">Oliver</td>
        <td className="w-1/4 text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td className=" text-left py-3 px-4">Williams</td>
        
        <td>
        <div className=" text-left py-3 px-4"> 325908</div>

        </td>
      </tr>
      <tr className="bg-gray-100">
        <td className="w-1/4 text-left py-3 px-4">Isabella</td>
        <td className="w-1/4 text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td className=" text-left py-3 px-4">Brown</td>
        
        <td>
        <div className=" text-left py-3 px-4"> 325908</div>

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

export default Auction