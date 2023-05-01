import { useId } from "react";
import Image from "next/image";
import Button from "../../global-components/Button";

export const SmallCard = ({ title, caption, img, dataFlow }) => {
  const id = useId();
  return (
    <div className="flex flex-col w-full rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:w-auto">
      <div className="relative h-48 w-full lg:h-56 lg:w-48">
        <Image
          src={img}
          className="h-full w-full rounded-t-lg object-cover"
          alt="Donation Img"
        />
      </div>
      <div className="flex flex-col p-4 leading-normal">
        <h3 className="text-lg font-bold">{title}</h3>
        <h4 className="mt-2 max-h-16 overflow-hidden overflow-ellipsis text-gray-500 lg:max-h-20 truncate">
          {caption}
        </h4>
      </div>
      <div className="my-6 flex w-full justify-center">
        <Button
          text="Let's Go!"
          type="primary"
          className="mt-auto w-full py-2"
        />
        <label
          className="mr-10 text-sm font-semibold text-gray-800
        hover:text-blue-600"
          htmlFor={id}
        >
          Delete
        </label>

        <input type="checkbox" id={id} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor={id}
              className="btn-sm btn absolute right-2 top-2 border-0 bg-white text-black hover:text-white"
            >
              x
            </label>
            <h3 className="mb-7 mt-2 text-center text-2xl font-bold">
              Are You Sure?
            </h3>
            <div className="flex justify-center">
              <Button
                text="Yes"
                type="primary"
                className="mt-auto w-full py-2"
              />
              <label
                className="mr-10 text-sm font-semibold text-gray-800
        hover:text-blue-600"
                htmlFor={id}
              >
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
