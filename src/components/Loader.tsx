
const Loader = () => {
    return (
        <div className="">
       <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
        <div className="p-4 bg-gradient-to-tr animate-spin from-green-500 to-blue-500 via-purple-500 rounded-full">
            <div className="bg-white rounded-full">
                <div className="w-24 h-24 rounded-full">

                </div>
            </div>
        </div>
        <p className="absolute py-12 pl-6 text-xl animate-bounce">Loading...</p>
    </div>
   
    </div>
    )
}
export default Loader;      