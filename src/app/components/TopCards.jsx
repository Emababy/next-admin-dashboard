function TopCards() {
    return (
        <div className="grid lg:grid-cols-5 gap-4 p-4 ml-20">

            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className="text-2xl font-bold">$10,288</p>
                    <p className="text-gray-600 sm:text-md text-sm">Daily Revenue</p>
                </div>
                <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                    <span className="text-green-700 text-md">+18%</span>
                </p>
            </div>

            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className="text-2xl font-bold">$7,288</p>
                    <p className="text-gray-600 sm:text-md text-sm">Total Sales</p>
                </div>
                <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                    <span className="text-green-700 text-md">+30%</span>
                </p>
            </div>

            <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className="text-2xl font-bold">11,100</p>
                    <p className="text-gray-600 sm:text-md text-sm">Customers</p>
                </div>
                <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                    <span className="text-green-700 text-md">+20%</span>
                </p>
            </div>

        </div>
    )
}


export default TopCards;