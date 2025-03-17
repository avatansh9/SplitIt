export function InputBox({ label, placeholder, onchange }) {
    return (
      
        <div className="flex flex-col md:flex-row justify-around px-6 md:px-20 lg:px-32 items-center mt-10">

            <div className="text-lg md:text-xl text-black-300 font-semibold mb-2 md:mb-0">
            {label}
            </div>
           
            <div className="w-full md:w-1/2">
            <input placeholder={placeholder} onChange={onchange}
              className="w-100 pl-4 py-2 border cursor-pointer  rounded-3xl border-gray-700 focus:border-yellow-800 focus:ring-pink-700 outline-red-300 transiton-all duration-300"
            />
            </div>
            
        </div>
    );
  }
  

