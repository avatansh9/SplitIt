

export function Button({label,value ,onClick }) {
    return(

        <button onClick={onClick} value={value} className="rounded-3xl cursor-pointer bg-gradient-to-tr from-pink-800 to-slate-700 py-3 px-13 border border-transparent text-center text-md font-bold text-slate-200 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
       {label}
      </button>
    )
}