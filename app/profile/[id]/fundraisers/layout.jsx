export default function Page({ children }) {
    return (
        <div className="group grid place-items-center rounded-xl p-10 shadow-lg bg-white">
            <div className="w-full mb-4">
              <div className={"pb-4"}>
                <h1
                    className="text m-2 inline w-72 text-start text-3xl font-black tracking-tighter text-gray-800 lg:w-auto"          >
                    Fundraisers
                </h1>
            </div>
            </div>

            {children}
        </div>
    );
}
