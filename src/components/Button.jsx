import React from 'react'

const Buttonopt = ({onGetQuoteClick}) => {
  return (
    <button
        className="lg:block hidden bg-[#0090d2] text-white font-[Poppins] py-2 px-6 text-nowrap rounded hover:bg-[#87d9ff] cursor-pointer duration-500"onClick={onGetQuoteClick}>
        Get a quote
    </button>
  )
}

export default Buttonopt