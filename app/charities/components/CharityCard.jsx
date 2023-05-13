import Image from "next/image";
import Link from "next/link";

export default function CharityCard({ name, phone, email, description, logo, website }) {
  
  return (
    <>
      <Link href={website}>
        <div
          className="w-full sm:w-96 h-72 rounded-lg p-0.5 bg-gradient-to-r from-slate-200 to-slate-300 hover:scale-105 transition-all ease-in-out">
          <div className="flex flex-col w-full h-full rounded-lg border-2 border-gray-400 p-2">
            <div className="flex flex-col sm:flex-row w-full h-auto sm:h-full">
              <div className="w-1/3 rounded-md border-2 border-gray-400 flex items-center justify-center">
                <Image src={logo} alt="Logo-here" width={120} height={30} />
              </div>
              <div className="w-full sm:w-2/3 h-auto sm:h-full pl-0 sm:pl-2">
                <h1 className="text-lg font-bold mb-2">{name}</h1>
                <h1 className="text-sm mb-1">{phone}</h1>
                <h1 className="text-sm mb-1">{email}</h1>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full h-auto sm:h-full mt-2">
              <div className="w-full sm:w-full h-auto sm:h-full pl-0 sm:pl-2">
                <h1 className="text-sm mb-1">{description}</h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
