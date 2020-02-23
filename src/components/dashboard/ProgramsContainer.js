import React, { useState, useEffect } from 'react';
import ProgramSearch from './ProgramSearch';
import ProgramList from './ProgramList';
import ConfirmModal from './ConfirmModal';
import SuccessModal from './SuccessModal';
import serverHandshake from '../../utils/serverHandshake';

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

const ProgramsContainer = ({ closeProgramList }) => {
  const [query, setQuery] = useState('');
  const [programs, setPrograms] = useState(dummyPrograms);
  const [assignment, setAssignment] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await serverHandshake().get('/programs');
        if (response.status === 200) {
          setPrograms(response.data);
        }
      } catch (error) {
        console.error(error?.response?.data.message ?? 'Something went wrong!');
      }
    })();
  }, []);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleAssignment = (p) => setAssignment(p);
  const cancelAssignment = () => setAssignment(false);

  const confirmAssignment = () => {
    setConfirmed(true);
    setAssignment(false);
    setTimeout(() => {
      setConfirmed(false);
      closeProgramList();
    }, 1500);
  };

  return (
    <>
      <div className="flex flex-col shadow-md absolute right-0 mr-4 mt-2 bg-white z-10 h-72 w-48">
        <ProgramSearch query={query} handleQueryChange={handleQueryChange} />
        <ProgramList programs={programs} query={query} handleAssignment={handleAssignment} />
        <button className="font-semibold text-blaze-orange py-2">
          Create new program
        </button>
      </div>
      {assignment ? (
        <ConfirmModal
          text={`Are you sure you want to assign ${assignment.name}?`}
          cancel={cancelAssignment}
          confirm={confirmAssignment}
        />
      ) : confirmed ? (
        <SuccessModal />
      ) : null}

    </>
  );
};

export default ProgramsContainer;
