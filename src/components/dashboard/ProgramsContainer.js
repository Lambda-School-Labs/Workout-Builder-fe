import React, { useState, useEffect } from 'react';
import ProgramSearch from './ProgramSearch';
import ProgramList from './ProgramList';
import ConfirmModal from './ConfirmModal';
import SuccessModal from './SuccessModal';
import serverHandshake from '../../utils/serverHandshake';
import { dummyPrograms } from './dummyData';

const ProgramsContainer = ({ closeProgramList }) => {
  const [query, setQuery] = useState('');
  const [programs, setPrograms] = useState(dummyPrograms);
  const [assignment, setAssignment] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await serverHandshake(true).get('/programs');
        if (response.status === 200 && response.data?.length) {
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
