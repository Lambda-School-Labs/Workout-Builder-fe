import React, { useState, useRef } from "react";

export default function Dashboard(props) {
  console.log(props);
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

  const [programs, setPrograms] = useState({});
  const [repeating, setRepeating] = useState();

  return (
    <div className="font-body">
      <div className="lg:hidden h-screen p-4 flex flex-col">
        <div className="border-b border-blaze-orange pb-1">
          <h2 className="font-semibold text-xl text-dark-grey">Program due:</h2>
          <p className="text-xs text-dove-grey">Wednesday January 29th</p>
        </div>
        <div className="overflow-y-scroll flex-grow my-2">
          <div className="flex flex-col py-2 border-b border-light-grey">
            <div className="flex justify-between items-center">
              <div className="flex">
                <img
                  src="https://picsum.photos/70"
                  alt=""
                  className="rounded"
                />
                <div className="ml-2">
                  <h3 className="font-bold" style={{ fontSize: 15 }}>
                    Joe Smith
                  </h3>
                  <p className="text-xs">Program: Olympic Lifting</p>
                  <p className="text-xs">Phase: Strength</p>
                  <p className="text-xs">Start: 2/13/20</p>
                </div>
              </div>
              <p className="font-extrabold text-xs text-blaze-orange">
                2 days left
              </p>
            </div>
            <div className="relative">
              <div className="text-right text-2xs text-blaze-orange">
                <button className="font-semibold" onClick={confirmRepeat(1)}>
                  Repeat
                </button>
                <button
                  className="font-semibold ml-5"
                  onClick={toggleProgram(1)}
                >
                  Add program
                </button>
              </div>
              {programs[1] && <ProgramList />}
            </div>
          </div>
          <div className="flex flex-col py-2 border-b border-light-grey">
            <div className="flex justify-between items-center">
              <div className="flex">
                <img
                  src="https://picsum.photos/70"
                  alt=""
                  className="rounded"
                />
                <div className="ml-2">
                  <h3 className="font-bold" style={{ fontSize: 15 }}>
                    Joe Smith
                  </h3>
                  <p className="text-xs">Program: Olympic Lifting</p>
                  <p className="text-xs">Phase: Strength</p>
                  <p className="text-xs">Start: 2/13/20</p>
                </div>
              </div>
              <p className="font-extrabold text-xs text-blaze-orange">
                2 days left
              </p>
            </div>
            <div className="relative">
              <div className="text-right text-2xs text-blaze-orange">
                <button className="font-semibold" onClick={confirmRepeat(1)}>
                  Repeat
                </button>
                <button
                  className="font-semibold ml-5"
                  onClick={toggleProgram(1)}
                >
                  Add program
                </button>
              </div>
              {programs[1] && <ProgramList />}
            </div>
          </div>
          <div className="flex flex-col py-2 border-b border-light-grey">
            <div className="flex justify-between items-center">
              <div className="flex">
                <img
                  src="https://picsum.photos/70"
                  alt=""
                  className="rounded"
                />
                <div className="ml-2">
                  <h3 className="font-bold" style={{ fontSize: 15 }}>
                    Joe Smith
                  </h3>
                  <p className="text-xs">Program: Olympic Lifting</p>
                  <p className="text-xs">Phase: Strength</p>
                  <p className="text-xs">Start: 2/13/20</p>
                </div>
              </div>
              <p className="font-extrabold text-xs text-blaze-orange">
                2 days left
              </p>
            </div>
            <div className="relative">
              <div className="text-right text-2xs text-blaze-orange">
                <button className="font-semibold" onClick={confirmRepeat(1)}>
                  Repeat
                </button>
                <button
                  className="font-semibold ml-5"
                  onClick={toggleProgram(1)}
                >
                  Add program
                </button>
              </div>
              {programs[1] && <ProgramList />}
            </div>
          </div>
          <div className="flex flex-col py-2 border-b border-light-grey">
            <div className="flex justify-between items-center">
              <div className="flex">
                <img
                  src="https://picsum.photos/70"
                  alt=""
                  className="rounded"
                />
                <div className="ml-2">
                  <h3 className="font-bold" style={{ fontSize: 15 }}>
                    Joe Smith
                  </h3>
                  <p className="text-xs">Program: Olympic Lifting</p>
                  <p className="text-xs">Phase: Strength</p>
                  <p className="text-xs">Start: 2/13/20</p>
                </div>
              </div>
              <p className="font-extrabold text-xs text-blaze-orange">
                2 days left
              </p>
            </div>
            <div className="relative">
              <div className="text-right text-2xs text-blaze-orange">
                <button className="font-semibold" onClick={confirmRepeat(1)}>
                  Repeat
                </button>
                <button
                  className="font-semibold ml-5"
                  onClick={toggleProgram(1)}
                >
                  Add program
                </button>
              </div>
              {programs[1] && <ProgramList />}
            </div>
          </div>
          <div className="flex flex-col py-2 border-b border-light-grey">
            <div className="flex justify-between items-center">
              <div className="flex">
                <img
                  src="https://picsum.photos/70"
                  alt=""
                  className="rounded"
                />
                <div className="ml-2">
                  <h3 className="font-bold" style={{ fontSize: 15 }}>
                    Joe Smith
                  </h3>
                  <p className="text-xs">Program: Olympic Lifting</p>
                  <p className="text-xs">Phase: Strength</p>
                  <p className="text-xs">Start: 2/13/20</p>
                </div>
              </div>
              <p className="font-extrabold text-xs text-blaze-orange">
                2 days left
              </p>
            </div>
            <div className="relative">
              <div className="text-right text-2xs text-blaze-orange">
                <button className="font-semibold" onClick={confirmRepeat(1)}>
                  Repeat
                </button>
                <button
                  className="font-semibold ml-5"
                  onClick={toggleProgram(1)}
                >
                  Add program
                </button>
              </div>
              {programs[1] && <ProgramList />}
            </div>
          </div>
          <div className="flex flex-col py-2 border-b border-light-grey">
            <div className="flex justify-between items-center">
              <div className="flex">
                <img
                  src="https://picsum.photos/70"
                  alt=""
                  className="rounded"
                />
                <div className="ml-2">
                  <h3 className="font-bold" style={{ fontSize: 15 }}>
                    Joe Smith
                  </h3>
                  <p className="text-xs">Program: Olympic Lifting</p>
                  <p className="text-xs">Phase: Strength</p>
                  <p className="text-xs">Start: 2/13/20</p>
                </div>
              </div>
              <p className="font-extrabold text-xs text-blaze-orange">
                2 days left
              </p>
            </div>
            <div className="relative">
              <div className="text-right text-2xs text-blaze-orange">
                <button className="font-semibold" onClick={confirmRepeat(1)}>
                  Repeat
                </button>
                <button
                  className="font-semibold ml-5"
                  onClick={toggleProgram(1)}
                >
                  Add program
                </button>
              </div>
              {programs[1] && <ProgramList />}
            </div>
          </div>
        </div>
        <button className="bg-blaze-orange rounded text-white font-semibold text-sm w-full py-3">
          + Add new client
        </button>
      </div>
      <div className="mt-12 hidden lg:block flex justify-center items-center">
        <div className="grid grid-cols-10 gap-4 items-center text-medium-grey bg-cornflower-blue font-semibold text-xs py-3 rounded">
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
            onClick={confirmRepeat(1)}
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
            {programs[1] && <ProgramList />}
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
            onClick={confirmRepeat(2)}
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
            {programs[2] && <ProgramList />}
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
            onClick={confirmRepeat(3)}
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
            {programs[3] && <ProgramList />}
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
            onClick={confirmRepeat(4)}
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
    <div className="absolute top-0 right-0 mt-6 mr-2 lg:mt-8 bg-white shadow w-72 lg:w-84 z-10">
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
