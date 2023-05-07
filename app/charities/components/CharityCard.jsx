export default function CharityCard() {
  return (
    <>
      <div className="w-full sm:w-96 h-auto sm:h-60 rounded-lg p-0.5 bg-gray-200">
        <div className="flex flex-col w-full h-full rounded-lg border-2 border-gray-400 p-2">
          <div className="flex flex-col sm:flex-row w-full h-auto sm:h-full">
            <div className="w-full sm:w-1/3 h-auto sm:h-full rounded-md border-2 border-gray-400 flex items-center justify-center">
              <h1>org logo</h1>
            </div>
            <div className="w-full sm:w-2/3 h-auto sm:h-full pl-0 sm:pl-2">
              <h1 className="text-lg font-bold mb-2">name</h1>
              <h1 className="text-sm mb-1">somedetail</h1>
              <h1 className="text-sm mb-1">somedetail</h1>
              <h1 className="text-sm mb-1">somedetail</h1>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-full h-auto sm:h-full mt-2">
            <div className="w-full sm:w-2/3 h-auto sm:h-full pl-0 sm:pl-2">
              <h1 className="text-sm mb-1">somedetail</h1>
              <h1 className="text-sm mb-1">somedetail</h1>
              <h1 className="text-sm mb-1">somedetail</h1>
              <h1 className="text-sm mb-1">somedetail</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
