import React from "react";

export default function Dashboard() {
  return (
    <div className="p-4 font-body">
      <div className="flex justify-between items-end">
        <div className="flex flex-col text-dove-grey">
          <span className="text-xs">Wednesday</span>
          <span className="font-semibold">January 29th</span>
        </div>
        <button className="bg-blaze-orange text-white px-6 py-1 rounded">
          <span className="font-medium">+ Add client</span>
        </button>
      </div>
      <h1 className="text-xl font-semibold mt-4 border-b border-blaze-orange pb-1">
        Reminders
      </h1>
      <>
        <div className="flex flex-col relative p-2 bg-cornflower-blue rounded mt-3">
          <div className="flex items-center w-full">
            <div className="w-1/4 px-2">
              <img className="rounded" src="https://picsum.photos/200" alt="" />
            </div>
            <span className="w-1/4 px-2 font-semibold text-sm">Joe Smith</span>
            <span className="w-1/4 px-2 font-medium text-xs text-redish">
              5 days left
            </span>
            <div className="w-1/4 px-2 flex flex-col items-center">
              <button className="flex flex-col items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5556 15H4.44444V12L0 16L4.44444 20V17H17.7778V11H15.5556V15ZM4.44444 5H15.5556V8L20 4L15.5556 0V3H2.22222V9H4.44444V5Z"
                    fill="#BEBEBE"
                  />
                </svg>
                <span className="text-half">Repeat</span>
              </button>
              <button className="flex flex-col items-center mt-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 12H12V18H8V12H2V8H8V2H12V8H18V12Z"
                    fill="#BEBEBE"
                  />
                </svg>
                <span className="text-half">Add program</span>
              </button>
            </div>
          </div>
          <div className="text-xs px-2 mt-4 mb-6">
            <p className="mb-2">
              <span className="font-medium text-sm">Start:</span> 01/1/2020
            </p>
            <p className="mb-2">
              <span className="font-medium text-sm">Phase:</span> Strength
            </p>
            <p>
              <span className="font-medium text-sm">Program length:</span> 16
              days
            </p>
          </div>
          <svg
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 mb-2 self-center"
          >
            <path
              d="M11.4725 6.49243L6.5 2.47618L1.5275 6.49243L-4.76837e-07 5.24993L6.5 -6.62148e-05L13 5.24993L11.4725 6.49243Z"
              fill="#757575"
            />
          </svg>
        </div>
        <div className="flex flex-col relative p-2 bg-cornflower-blue rounded mt-3">
          <div className="flex items-center w-full">
            <div className="w-1/4 px-2">
              <img className="rounded" src="https://picsum.photos/200" alt="" />
            </div>
            <span className="w-1/4 px-2 font-semibold text-sm">Joe Smith</span>
            <span className="w-1/4 px-2 font-medium text-xs text-redish">
              5 days left
            </span>
            <div className="w-1/4 px-2 flex flex-col items-center">
              <button className="flex flex-col items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5556 15H4.44444V12L0 16L4.44444 20V17H17.7778V11H15.5556V15ZM4.44444 5H15.5556V8L20 4L15.5556 0V3H2.22222V9H4.44444V5Z"
                    fill="#BEBEBE"
                  />
                </svg>
                <span className="text-half">Repeat</span>
              </button>
              <button className="flex flex-col items-center mt-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 12H12V18H8V12H2V8H8V2H12V8H18V12Z"
                    fill="#BEBEBE"
                  />
                </svg>
                <span className="text-half">Add program</span>
              </button>
            </div>
          </div>
          <div className="text-xs px-2 mt-4 mb-6 hidden">
            <p className="mb-2">
              <span className="font-medium text-sm">Start:</span> 01/1/2020
            </p>
            <p className="mb-2">
              <span className="font-medium text-sm">Phase:</span> Strength
            </p>
            <p>
              <span className="font-medium text-sm">Program length:</span> 16
              days
            </p>
          </div>
          <svg
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 mb-2 self-center"
          >
            <path
              d="M1.5275 0.507568L6.5 4.52382L11.4725 0.507568L13 1.75007L6.5 7.00007L0 1.75007L1.5275 0.507568Z"
              fill="#757575"
            />
          </svg>
        </div>
        <div className="flex flex-col relative p-2 bg-cornflower-blue rounded mt-3">
          <div className="flex items-center w-full">
            <div className="w-1/4 px-2">
              <img className="rounded" src="https://picsum.photos/200" alt="" />
            </div>
            <span className="w-1/4 px-2 font-semibold text-sm">Joe Smith</span>
            <span className="w-1/4 px-2 font-medium text-xs text-redish">
              5 days left
            </span>
            <div className="w-1/4 px-2 flex flex-col items-center">
              <button className="flex flex-col items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5556 15H4.44444V12L0 16L4.44444 20V17H17.7778V11H15.5556V15ZM4.44444 5H15.5556V8L20 4L15.5556 0V3H2.22222V9H4.44444V5Z"
                    fill="#BEBEBE"
                  />
                </svg>
                <span className="text-half">Repeat</span>
              </button>
              <button className="flex flex-col items-center mt-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 12H12V18H8V12H2V8H8V2H12V8H18V12Z"
                    fill="#BEBEBE"
                  />
                </svg>
                <span className="text-half">Add program</span>
              </button>
            </div>
          </div>
          <div className="text-xs px-2 mt-4 mb-6 hidden">
            <p className="mb-2">
              <span className="font-medium text-sm">Start:</span> 01/1/2020
            </p>
            <p className="mb-2">
              <span className="font-medium text-sm">Phase:</span> Strength
            </p>
            <p>
              <span className="font-medium text-sm">Program length:</span> 16
              days
            </p>
          </div>
          <svg
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 mb-2 self-center"
          >
            <path
              d="M1.5275 0.507568L6.5 4.52382L11.4725 0.507568L13 1.75007L6.5 7.00007L0 1.75007L1.5275 0.507568Z"
              fill="#757575"
            />
          </svg>
        </div>
      </>
    </div>
  );
}
