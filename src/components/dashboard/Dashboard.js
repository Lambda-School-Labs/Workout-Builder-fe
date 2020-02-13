import React, { useState, useRef } from "react";

export default function Dashboard() {
  const toggleInfo = id => () => {
    setInfo({ ...info, [id]: !info[id] });
  };

  const toggleProgram = id => () => {
    setPrograms({ ...programs, [id]: !programs[id] });
  };

  const cancelEvent = event => {
    if (event.target === repeatRef.current) {
      cancelRepeat();
    }
  };

  const confirmRepeat = id => () => {
    setRepeating(id);
    document.addEventListener("click", cancelEvent);
  };

  const cancelRepeat = () => {
    setRepeating(false);
    document.removeEventListener("click", cancelEvent);
  };

  const repeatRef = useRef();

  const [info, setInfo] = useState({});
  const [programs, setPrograms] = useState({});
  const [repeating, setRepeating] = useState();

  return (
    <div className="p-4 font-body lg:p-8">
      <div className="flex flex-wrap items-end lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col text-dove-grey flex-grow lg:flex-grow-0 lg:flex-row lg:items-center">
          <span className="text-xs">Wednesday</span>
          <span className="mr-2 hidden lg:inline">,</span>
          <span className="font-semibold">January 29th</span>
        </div>
        <button className="bg-blaze-orange text-white px-6 py-1 rounded">
          <span className="font-medium">+ Add new client</span>
        </button>
        <h1 className="flex items-center w-full mt-4 border-b border-blaze-orange pb-1 lg:order-first lg:border-none lg:pb-0 lg:mt-0 lg:w-auto">
          <span className="text-xl font-semibold lg:mr-2">Reminders</span>
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:inline"
          >
            <path
              d="M12.2222 19.8C12.2222 20.3835 11.9881 20.9431 11.5713 21.3556C11.1546 21.7682 10.5894 22 10 22C9.41063 22 8.8454 21.7682 8.42865 21.3556C8.0119 20.9431 7.77778 20.3835 7.77778 19.8H12.2222ZM10 0C10.2947 0 10.5773 0.115892 10.7857 0.322183C10.994 0.528472 11.1111 0.808262 11.1111 1.1V2.288C14.2667 2.816 16.6667 5.533 16.6667 8.8V15.4L20 18.7H0L3.33333 15.4V8.8C3.33333 5.533 5.73333 2.816 8.88889 2.288V1.1C8.88889 0.808262 9.00595 0.528472 9.21433 0.322183C9.4227 0.115892 9.70532 0 10 0Z"
              fill="#FD6A02"
            />
          </svg>
        </h1>
      </div>
      <div className="lg:hidden">
        <div className="flex flex-col relative p-2 bg-cornflower-blue rounded mt-3">
          <div className="flex items-center w-full">
            <div className="flex-1 px-2">
              <img className="rounded" src="https://picsum.photos/70" alt="" />
            </div>
            <span className="flex-1 px-2 font-semibold text-sm">Joe Smith</span>
            <span className="flex-1 px-2 font-medium text-xs text-red">
              5 days left
            </span>
            <div className="flex-1 px-2 flex flex-col items-center">
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
          {info["1"] && (
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
          )}
          <svg
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute bottom-0 mb-2 self-center transform ${
              info["1"] ? "rotate-180" : ""
            }`}
            onClick={toggleInfo("1")}
          >
            <path
              d="M1.5275 0.507568L6.5 4.52382L11.4725 0.507568L13 1.75007L6.5 7.00007L0 1.75007L1.5275 0.507568Z"
              fill="#757575"
            />
          </svg>
        </div>
        <div className="flex flex-col relative p-2 bg-cornflower-blue rounded mt-3">
          <div className="flex items-center w-full">
            <div className="flex-1 px-2">
              <img className="rounded" src="https://picsum.photos/70" alt="" />
            </div>
            <span className="flex-1 px-2 font-semibold text-sm">Joe Smith</span>
            <span className="flex-1 px-2 font-medium text-xs text-red">
              5 days left
            </span>
            <div className="flex-1 px-2 flex flex-col items-center">
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
          {info["2"] && (
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
          )}
          <svg
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute bottom-0 mb-2 self-center transform ${
              info["2"] ? "rotate-180" : ""
            }`}
            onClick={toggleInfo("2")}
          >
            <path
              d="M1.5275 0.507568L6.5 4.52382L11.4725 0.507568L13 1.75007L6.5 7.00007L0 1.75007L1.5275 0.507568Z"
              fill="#757575"
            />
          </svg>
        </div>
        <div className="flex flex-col relative p-2 bg-cornflower-blue rounded mt-3">
          <div className="flex items-center w-full">
            <div className="flex-1 px-2">
              <img className="rounded" src="https://picsum.photos/70" alt="" />
            </div>
            <span className="flex-1 px-2 font-semibold text-sm">Joe Smith</span>
            <span className="flex-1 px-2 font-medium text-xs text-red">
              5 days left
            </span>
            <div className="flex-1 px-2 flex flex-col items-center">
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
          {info["3"] && (
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
          )}
          <svg
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute bottom-0 mb-2 self-center transform ${
              info["3"] ? "rotate-180" : ""
            }`}
            onClick={toggleInfo("3")}
          >
            <path
              d="M1.5275 0.507568L6.5 4.52382L11.4725 0.507568L13 1.75007L6.5 7.00007L0 1.75007L1.5275 0.507568Z"
              fill="#757575"
            />
          </svg>
        </div>
        <div className="flex flex-col relative p-2 bg-cornflower-blue rounded mt-3">
          <div className="flex items-center w-full">
            <div className="flex-1 px-2">
              <img className="rounded" src="https://picsum.photos/70" alt="" />
            </div>
            <span className="flex-1 px-2 font-semibold text-sm">Joe Smith</span>
            <span className="flex-1 px-2 font-medium text-xs text-red">
              5 days left
            </span>
            <div className="flex-1 px-2 flex flex-col items-center">
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
          {info["4"] && (
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
          )}
          <svg
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute bottom-0 mb-2 self-center transform ${
              info["4"] ? "rotate-180" : ""
            }`}
            onClick={toggleInfo("4")}
          >
            <path
              d="M1.5275 0.507568L6.5 4.52382L11.4725 0.507568L13 1.75007L6.5 7.00007L0 1.75007L1.5275 0.507568Z"
              fill="#757575"
            />
          </svg>
        </div>
      </div>
      <div className="mt-12 hidden lg:block">
        <div className="grid grid-cols-10 gap-4 items-center text-dark-grey bg-cornflower-blue font-semibold text-xs py-3 rounded">
          <span className="col-start-2 col-span-2">Name</span>
          <span className="col-start-4">Program start</span>
          <span>Program length</span>
          <span>Program phase</span>
          <span>Program end</span>
          <span className="col-start-9" style={{ justifySelf: "center" }}>
            Repeat
            <br />
            workout
          </span>
          <span>
            Add
            <br />
            program
          </span>
        </div>
        <div className="mt-2 grid grid-cols-10 gap-4 bg-cornflower-blue items-center">
          <div className="p-2">
            <img className="rounded" src="https://picsum.photos/110" alt="" />
          </div>
          <span className="font-semibold text-lg col-span-2">
            Justine Gennaro
          </span>
          <span className="text-sm font-medium col-start-4">1/1/2020</span>
          <span className="text-sm font-medium">4 weeks</span>
          <span className="text-sm font-medium">Strength</span>
          <span className="text-red font-medium">5 days left</span>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="col-start-9"
            style={{ justifySelf: "center" }}
          >
            <path
              d="M16.4199 15H4.73071V12L0.0550537 16L4.73071 20V17H18.7577V11H16.4199V15ZM4.73071 5H16.4199V8L21.0955 4L16.4199 0V3H2.39288V9H4.73071V5Z"
              fill="#BEBEBE"
            />
          </svg>
          <div className="relative">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleProgram(1)}
            >
              <path
                d="M19.3212 10H12.3078V16H7.63212V10H0.618652V6H7.63212V0H12.3078V6H19.3212V10Z"
                fill="#BEBEBE"
              />
            </svg>
            {programs[1] && (
              <div className="absolute top-0 right-0 mt-8 bg-white shadow w-84 z-10">
                <input
                  type="text"
                  placeholder="Search programs"
                  className="py-4 px-8 border-b placeholder-grey68 text-sm font-medium w-full"
                />
                <div className="overflow-y-scroll h-64 mb-4 px-8">
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">
                      System A glute emphasis
                    </span>
                    <span className="text-xs font-medium text-grey68">
                      2 day split
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">Program 1</span>
                    <span className="text-xs font-medium text-grey68">
                      2 weeks
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">Program 2</span>
                    <span className="text-xs font-medium text-grey68">
                      6 weeks
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">Program 3</span>
                    <span className="text-xs font-medium text-grey68">
                      4 weeks
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">Program 4</span>
                    <span className="text-xs font-medium text-grey68">
                      3 weeks
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">Program 5</span>
                    <span className="text-xs font-medium text-grey68">
                      1 week
                    </span>
                  </div>
                </div>
                <div className="bg-grey98 p-3 text-center text-blaze-orange font-semibold text-sm">
                  <span>Create new program</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-2 grid grid-cols-10 gap-4 bg-cornflower-blue items-center">
          <div className="p-2">
            <img className="rounded" src="https://picsum.photos/110" alt="" />
          </div>
          <span className="font-semibold text-lg col-span-2">
            Lisa Arcangel
          </span>
          <span className="text-sm font-medium col-start-4">1/1/2020</span>
          <span className="text-sm font-medium">4 weeks</span>
          <span className="text-sm font-medium">Strength</span>
          <span className="text-red font-medium">5 days left</span>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="col-start-9"
            style={{ justifySelf: "center" }}
          >
            <path
              d="M16.4199 15H4.73071V12L0.0550537 16L4.73071 20V17H18.7577V11H16.4199V15ZM4.73071 5H16.4199V8L21.0955 4L16.4199 0V3H2.39288V9H4.73071V5Z"
              fill="#BEBEBE"
            />
          </svg>
          <div className="relative">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleProgram(2)}
            >
              <path
                d="M19.3212 10H12.3078V16H7.63212V10H0.618652V6H7.63212V0H12.3078V6H19.3212V10Z"
                fill="#BEBEBE"
              />
            </svg>
            {programs[2] && (
              <div className="absolute top-0 right-0 mt-8 bg-white shadow w-84 z-10">
                <input
                  type="text"
                  placeholder="Search programs"
                  className="py-4 px-8 border-b placeholder-grey68 text-sm font-medium w-full"
                />
                <div className="overflow-y-scroll h-64 mb-4 px-8">
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">
                      System A glute emphasis
                    </span>
                    <span className="text-xs font-medium text-grey68">
                      2 day split
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">Program 1</span>
                    <span className="text-xs font-medium text-grey68">
                      2 weeks
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">Program 2</span>
                    <span className="text-xs font-medium text-grey68">
                      6 weeks
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">Program 3</span>
                    <span className="text-xs font-medium text-grey68">
                      4 weeks
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">Program 4</span>
                    <span className="text-xs font-medium text-grey68">
                      3 weeks
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">Program 5</span>
                    <span className="text-xs font-medium text-grey68">
                      1 week
                    </span>
                  </div>
                </div>
                <div className="bg-grey98 p-3 text-center text-blaze-orange font-semibold text-sm">
                  <span>Create new program</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-2 grid grid-cols-10 gap-4 bg-cornflower-blue items-center">
          <div className="p-2">
            <img className="rounded" src="https://picsum.photos/110" alt="" />
          </div>
          <span className="font-semibold text-lg col-span-2">
            Jonathan Picazo
          </span>
          <span className="text-sm font-medium col-start-4">1/1/2020</span>
          <span className="text-sm font-medium">4 weeks</span>
          <span className="text-sm font-medium">Strength</span>
          <span className="text-red font-medium">5 days left</span>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="col-start-9"
            style={{ justifySelf: "center" }}
          >
            <path
              d="M16.4199 15H4.73071V12L0.0550537 16L4.73071 20V17H18.7577V11H16.4199V15ZM4.73071 5H16.4199V8L21.0955 4L16.4199 0V3H2.39288V9H4.73071V5Z"
              fill="#BEBEBE"
            />
          </svg>
          <div className="relative">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleProgram(3)}
            >
              <path
                d="M19.3212 10H12.3078V16H7.63212V10H0.618652V6H7.63212V0H12.3078V6H19.3212V10Z"
                fill="#BEBEBE"
              />
            </svg>
            {programs[3] && (
              <div className="absolute top-0 right-0 mt-8 bg-white shadow w-84 z-10">
                <input
                  type="text"
                  placeholder="Search programs"
                  className="py-4 px-8 border-b placeholder-grey68 text-sm font-medium w-full"
                />
                <div className="overflow-y-scroll h-64 mb-4 px-8">
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">
                      System A glute emphasis
                    </span>
                    <span className="text-xs font-medium text-grey68">
                      2 day split
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">Program 1</span>
                    <span className="text-xs font-medium text-grey68">
                      2 weeks
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">Program 2</span>
                    <span className="text-xs font-medium text-grey68">
                      6 weeks
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">Program 3</span>
                    <span className="text-xs font-medium text-grey68">
                      4 weeks
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">Program 4</span>
                    <span className="text-xs font-medium text-grey68">
                      3 weeks
                    </span>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-sm font-medium">Program 5</span>
                    <span className="text-xs font-medium text-grey68">
                      1 week
                    </span>
                  </div>
                </div>
                <div className="bg-grey98 p-3 text-center text-blaze-orange font-semibold text-sm">
                  <span>Create new program</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-2 grid grid-cols-10 gap-4 bg-cornflower-blue items-center">
          <div className="p-2">
            <img className="rounded" src="https://picsum.photos/110" alt="" />
          </div>
          <span className="font-semibold text-lg col-span-2">Joe Smith</span>
          <span className="text-sm font-medium col-start-4">1/1/2020</span>
          <span className="text-sm font-medium">4 weeks</span>
          <span className="text-sm font-medium">Strength</span>
          <span className="text-red font-medium">5 days left</span>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="col-start-9"
            style={{ justifySelf: "center" }}
          >
            <path
              d="M16.4199 15H4.73071V12L0.0550537 16L4.73071 20V17H18.7577V11H16.4199V15ZM4.73071 5H16.4199V8L21.0955 4L16.4199 0V3H2.39288V9H4.73071V5Z"
              fill="#BEBEBE"
            />
          </svg>
          <div className="relative">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleProgram(4)}
            >
              <path
                d="M19.3212 10H12.3078V16H7.63212V10H0.618652V6H7.63212V0H12.3078V6H19.3212V10Z"
                fill="#BEBEBE"
              />
            </svg>
            {programs[4] && <ProgramList />}
          </div>
        </div>
      </div>
      {repeating && (
        <div
          ref={repeatRef}
          className="flex justify-center items-center h-full left-0 overflow-auto fixed top-0 w-full z-10"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <div className="flex justify-center items-center bg-white w-4/5 lg:w-120 h-72 lg:h-96 p-12 rounded">
            <div className="flex flex-col items-center">
              <p className="font-medium text-xl lg:text-2xl text-center">
                Are you sure you want to repeat this program?
              </p>
              <div className="flex flex-col w-2/3 mt-6">
                <button className="bg-blaze-orange text-white py-2 lg:py-4 rounded uppercase">
                  yes
                </button>
                <button
                  className="mt-4 border border-blaze-orange text-blaze-orange py-2 lg:py-4 rounded uppercase"
                  onClick={cancelRepeat}
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProgramList() {
  return (
    <div className="absolute top-0 right-0 mt-14 lg:mt-8 bg-white shadow w-72 lg:w-84 z-10">
      <input
        type="text"
        placeholder="Search programs"
        className="py-4 px-8 border-b placeholder-grey68 text-sm font-medium w-full"
      />
      <div className="overflow-y-scroll h-64 mb-4 px-8">
        <div className="flex flex-col mt-4">
          <span className="text-sm font-medium">System A glute emphasis</span>
          <span className="text-xs font-medium text-grey68">2 day split</span>
        </div>
        <div className="flex flex-col mt-4">
          <span className="text-sm font-medium">Program 1</span>
          <span className="text-xs font-medium text-grey68">2 weeks</span>
        </div>
        <div className="flex flex-col mt-4">
          <span className="text-sm font-medium">Program 2</span>
          <span className="text-xs font-medium text-grey68">6 weeks</span>
        </div>
        <div className="flex flex-col mt-4">
          <span className="text-sm font-medium">Program 3</span>
          <span className="text-xs font-medium text-grey68">4 weeks</span>
        </div>
        <div className="flex flex-col mt-4">
          <span className="text-sm font-medium">Program 4</span>
          <span className="text-xs font-medium text-grey68">3 weeks</span>
        </div>
        <div className="flex flex-col mt-4">
          <span className="text-sm font-medium">Program 5</span>
          <span className="text-xs font-medium text-grey68">1 week</span>
        </div>
      </div>
      <div className="bg-grey98 p-3 text-center text-blaze-orange font-semibold text-sm">
        <span>Create new program</span>
      </div>
    </div>
  );
}
