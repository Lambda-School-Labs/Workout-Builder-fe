import React, { useEffect, useState, useRef } from "react";
import serverHandshake from "../../utils/serverHandshake";

const dummyClientPrograms = [
  {
    "client_id": 1,
    "first_name": "Jonathan",
    "last_name": "Picazo",
    "start_date": "2020-2-17",
    "program_id": 1,
    "name": "Super Sets",
    "length": 21,
    "phase": "Strength"
  },
  {
    "client_id": 2,
    "first_name": "Justine",
    "last_name": "Gennaro",
    "start_date": "2020-2-17",
    "program_id": 9,
    "name": "Other Sets",
    "length": 14,
    "phase": "Endurance"
  }
];

const dummyPrograms = [
  {
    id: 1,
    name: "Program 1",
    description: "program1 description",
    coach_id: 1,
    length: 10,
    phase: "strength",
    workouts: [
      {
        id: 1,
        name: "push day",
        description: "push day arm workout",
        day: 1,
        exercises: [
          {exercise_id: 1, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 2, order: 2, exercise_details: "50lbs dumbbells - 5 sets of 5"},
          {exercise_id: 3, order: 3, exercise_details: "70lbs bar - 5 sets of 5"}
        ]
      },
      {
        id: 2,
        name: "pull day",
        description: "pull day arm and back workout",
        day: 2,
        exercises: [
          {exercise_id: 4, order: 1, exercise_details: "bodyweight - 5 sets of 5"},
          {exercise_id: 5, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 6, order: 3, exercise_details: "30lbs dumbbells - 5 sets of 5"}
        ]
      },
      {
        id: 3,
        name: "legs and core",
        description: "legs and core day workout",
        day: 3,
        exercises: [
          {exercise_id: 7, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 8, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 9, order: 3, exercise_details: "bodyweight - 5 sets of 5"},
        ]
      },
    ],
    assigned_clients: [1, 3, 5, 7, 9]
  },
  {
    id: 2,
    name: "Program 2",
    description: "Test program description",
    coach_id: 1,
    length: 22,
    phase: "strength",
    workouts: [
      {
        id: 4,
        name: "push day",
        description: "push day arm workout",
        day: 1,
        exercises: [
          {exercise_id: 1, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 2, order: 2, exercise_details: "50lbs dumbbells - 5 sets of 5"},
          {exercise_id: 3, order: 3, exercise_details: "70lbs bar - 5 sets of 5"}
        ]
      },
      {
        id: 5,
        name: "pull day",
        description: "pull day arm and back workout",
        day: 2,
        exercises: [
          {exercise_id: 4, order: 1, exercise_details: "bodyweight - 5 sets of 5"},
          {exercise_id: 5, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 6, order: 3, exercise_details: "30lbs dumbbells - 5 sets of 5"}
        ]
      },
      {
        id: 6,
        name: "legs and core",
        description: "legs and core day workout",
        day: 3,
        exercises: [
          {exercise_id: 7, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 8, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 9, order: 3, exercise_details: "bodyweight - 5 sets of 5"},
        ]
      },
    ],
    assigned_clients: [2, 4, 6]
  }
];

export default function Dashboard() {
  const repeatRef = useRef();
  const [clientPrograms, setClientPrograms] = useState(dummyClientPrograms);
  const [openProgram, setOpenProgram] = useState();
  const [repeating, setRepeating] = useState();
  const [confirmed, setConfirmed] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await serverHandshake(true).get(
          "/clients-programs/dashboard"
        );
        if (response.status === 200 && response.data.length) setClientPrograms(response.data);
      } catch (error) {
        setError(error?.response?.data?.message ?? 'Something went wrong.');
      }
    })();
  }, []);

  const toggleProgram = id => () => {
    setOpenProgram(!openProgram ? id : null);
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

  const acceptRepeat = () => {
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
      setRepeating(false);
    }, 3000);
  };

  const cancelRepeat = () => {
    setRepeating(false);
    document.removeEventListener("click", cancelEvent);
  };

  return (
    <>
      <div
        className="lg:hidden p-4 pb-2 flex flex-col"
        style={{ height: "calc(100vh - 4.375rem)" }}
      >
        <div className="border-b border-blaze-orange pb-1">
          <h2 className="font-semibold text-xl text-dark-grey">Program due:</h2>
          <p className="text-xs text-dove-grey">Wednesday January 29th</p>
        </div>
        <div className="overflow-y-scroll flex-grow my-2">
          {clientPrograms.length ? (
            clientPrograms.map(program => (
              <ProgramCardMobile
                key={program.program_id}
                confirmRepeat={confirmRepeat}
                toggleProgram={toggleProgram}
                openProgram={openProgram}
                program={program}
              />
            ))
          ) : (
            <p>You have not assigned any programs yet.</p>
          )}
        </div>
        <button className="bg-blaze-orange rounded text-white font-semibold text-sm w-full py-3 focus:outline-none">
          + Add new client
        </button>
      </div>
      <div className="hidden lg:block flex justify-center items-center p-8">
        <div className="flex justify-between my-4">
          <div className="flex items-center">
            <h2 className="text-x text-2xxl font-bold mr-2 text-dove-grey">
              Programs due
            </h2>
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2222 19.8C12.2222 20.3835 11.9881 20.9431 11.5713 21.3556C11.1546 21.7682 10.5894 22 10 22C9.41063 22 8.8454 21.7682 8.42865 21.3556C8.0119 20.9431 7.77778 20.3835 7.77778 19.8H12.2222ZM10 0C10.2947 0 10.5773 0.115892 10.7857 0.322183C10.994 0.528472 11.1111 0.808262 11.1111 1.1V2.288C14.2667 2.816 16.6667 5.533 16.6667 8.8V15.4L20 18.7H0L3.33333 15.4V8.8C3.33333 5.533 5.73333 2.816 8.88889 2.288V1.1C8.88889 0.808262 9.00595 0.528472 9.21433 0.322183C9.4227 0.115892 9.70532 0 10 0Z"
                fill="#FD6A02"
              />
            </svg>
          </div>
          <div>
            <span className="font-medium text-nobel mr-2">Wednesday,</span>
            <span className="font-medium text-xxl text-dove-grey">
              January 23rd
            </span>
          </div>
        </div>
        <div className="grid grid-cols-9 gap-4 items-center text-medium-grey border-b font-semibold text-xs py-3 rounded">
          <span className="col-start-2 col-span-2">Name</span>
          <span className="col-start-4">Program start</span>
          <span>Program phase</span>
          <span className="col-span-2">Program end</span>
          <span className="col-start-8" style={{ justifySelf: "center" }}>
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
        {clientPrograms.length ? (
          clientPrograms.map(program => (
            <ProgramCardDesktop
              key={program.program_id}
              confirmRepeat={confirmRepeat}
              toggleProgram={toggleProgram}
              openProgram={openProgram}
              program={program}
            />
          ))
        ) : (
          <p className="mt-4">You have not assigned any programs yet.</p>
        )}
      </div>
      {repeating && (
        <ConfirmModal
          repeatRef={repeatRef}
          acceptRepeat={acceptRepeat}
          cancelRepeat={cancelRepeat}
          confirmed={confirmed}
        />
      )}
    </>
  );
}

function ConfirmModal({ repeatRef, acceptRepeat, cancelRepeat, confirmed }) {
  return (
    <div
      ref={repeatRef}
      className="flex justify-center items-center h-full left-0 overflow-auto fixed top-0 w-full z-10"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
    >
      <div className="flex justify-center items-center bg-white w-4/5 lg:w-120 h-72 lg:h-96 p-12 rounded">
        <div className="flex flex-col items-center">
          {confirmed ? (
            <>
              <svg
                width="102"
                height="74"
                viewBox="0 0 102 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.2382 74L0 38.8525L7.42907 31.4425L35.2382 59.1801L94.5709 0L102 7.40995"
                  fill="#27CF2D"
                />
              </svg>
              <p className="mt-10 font-medium text-xl">
                Program successfully repeated
              </p>
            </>
          ) : (
            <>
              <p className="font-medium text-xl lg:text-2xl text-center">
                Are you sure you want to repeat this program?
              </p>
              <div className="flex flex-col w-2/3 mt-6">
                <button
                  className="bg-blaze-orange text-white py-2 lg:py-4 rounded uppercase focus:outline-none"
                  onClick={acceptRepeat}
                >
                  yes
                </button>
                <button
                  className="mt-2 border border-blaze-orange text-blaze-orange py-2 lg:py-4 rounded uppercase focus:outline-none"
                  onClick={cancelRepeat}
                >
                  cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ProgramCardMobile({ confirmRepeat, toggleProgram, openProgram, program }) {
  return (
    <div className="flex flex-col py-2 border-b border-light-grey">
      <div className="flex justify-between items-center">
        <div className="flex">
          <img src="https://picsum.photos/70" alt="" className="rounded" />
          <div className="ml-2">
            <h3 className="font-bold text-mine-shaft" style={{ fontSize: 15 }}>
              {program.first_name} {program.last_name}
            </h3>
            <p className="text-xs">Program: {program.name}</p>
            <p className="text-xs">Phase: {program.phase}</p>
            <p className="text-xs">Start: {program.start_date}</p>
          </div>
        </div>
        <p className="font-extrabold text-xs text-blaze-orange">{program.length} day{program.length > 1 ? 's' : ''} left</p>
      </div>
      <div className="relative">
        <div className="text-right text-2xs text-blaze-orange">
          <button
            className="font-semibold focus:outline-none"
            onClick={confirmRepeat(program.program_id)}
          >
            Repeat
          </button>
          <button
            className="font-semibold ml-5 focus:outline-none"
            onClick={toggleProgram(program.program_id)}
          >
            Add program
          </button>
        </div>
        {openProgram === program.program_id && <ProgramList />}
      </div>
    </div>
  );
}

function ProgramCardDesktop({ confirmRepeat, toggleProgram, openProgram, program }) {
  return (
    <div className="grid grid-cols-9 gap-4 border-b items-center rounded hover:bg-cornflower-blue">
      <div className="p-2">
        <img className="rounded" src="https://picsum.photos/110" alt="" />
      </div>
      <span className="font-semibold text-lg col-span-2">{program.first_name} {program.last_name}</span>
      <span className="text-sm font-medium col-start-4">{program.start_date}</span>
      <span className="text-sm font-medium">{program.phase}</span>
      <span className="text-blaze-orange font-medium col-span-2">
        {program.length} day{program.length > 1 ? 's' : ''} left
      </span>
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="col-start-8 cursor-pointer"
        style={{ justifySelf: "center" }}
        onClick={confirmRepeat(program.program_id)}
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
          className="cursor-pointer"
          onClick={toggleProgram(program.program_id)}
        >
          <path
            d="M19.3212 10H12.3078V16H7.63212V10H0.618652V6H7.63212V0H12.3078V6H19.3212V10Z"
            fill="#BEBEBE"
          />
        </svg>
        {openProgram === program.program_id && <ProgramList />}
      </div>
    </div>
  );
}

function ProgramList() {
  const [programs, setPrograms] = useState(dummyPrograms);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await serverHandshake(true).get('/programs');
        if (response.status === 200 && response.data.length) setPrograms(response.data);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return (
    <div className="absolute top-0 right-0 mt-6 mr-2 lg:mt-8 bg-white shadow w-72 lg:w-84 z-10">
      <input
        type="text"
        placeholder="Search programs"
        className="py-4 px-8 border-b placeholder-grey68 text-sm font-medium w-full focus:outline-none"
      />
      <div className="overflow-y-scroll h-64 py-2">
        {programs.length ? (
          programs.map(program => (
            <div key={program.id} className="flex flex-col py-2 px-8 lg:hover:bg-cornflower-blue lg:cursor-pointer">
              <span className="text-sm font-medium">{program.name}</span>
              <span className="text-xs font-medium text-grey68">{program.length} day{program.length > 1 ? 's' : ''}</span>
            </div>
          ))
        ) : (
          <p>There are no programs to assign.</p>
        )}
      </div>
      <div className="bg-grey98 p-3 text-center text-blaze-orange font-semibold text-sm">
        <span>Create new program</span>
      </div>
    </div>
  );
}
