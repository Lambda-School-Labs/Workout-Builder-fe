import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal';
import SuccessModal from './SuccessModal';
import ProgramsContainer from './ProgramsContainer';

const ClientProgramItem = ({ clientProgram }) => {
  const [repeating, setRepeating] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [assigning, setAssigning] = useState(false);

  const handleRepeat = () => setRepeating(true);
  const cancelRepeat = () => setRepeating(false);
  const toggleAssigning = () => setAssigning(!assigning);

  const confirmRepeat = () => {
    setConfirmed(true);
    setRepeating(false);
    setTimeout(() => {
      setConfirmed(false);
    }, 1500);
  };

  const full_name = `${clientProgram.first_name} ${clientProgram.last_name}`;

  return (
    <>
      {/* mobile view */}
      <li className="py-2 lg:hidden">
        <div className="flex relative">
          <div className="flex flex-grow">
            <img src="https://picsum.photos/70/78" alt="" className="rounded mr-2" />
            <div className="flex flex-col">
              <p className="font-bold text-sm flex-grow">{full_name}</p>
              <div className="grid grid-cols-2 font-medium text-xs text-boulder">
                <span>Program:</span>
                <span>{clientProgram.name}</span>
                <span>Phase:</span>
                <span>{clientProgram.phase}</span>
                <span>Start:</span>
                <span>{clientProgram.start_date}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between mr-2">
            <p className="font-bold text-sm text-blaze-orange text-right">
              {clientProgram.length} days left
            </p>
            <button className="font-semibold text-2xs underline" onClick={handleRepeat}>Repeat</button>
            <button className="font-semibold text-2xs underline" onClick={toggleAssigning}>Add program</button>
          </div>
        </div>
        {assigning && <ProgramsContainer closeProgramList={toggleAssigning} />}
      </li>
      {/* desktop view */}
      <li className="hidden lg:grid grid-cols-10 gap-3 items-center hover:bg-cornflower-blue">
        <div className="p-2">
          <img src="https://picsum.photos/110/100" alt="" className="rounded"/>
        </div>
        <span className="col-span-2 font-semibold text-xl">{full_name}</span>
        <span className="font-medium">{clientProgram.name}</span>
        <span className="font-medium">{clientProgram.phase}</span>
        <span className="font-medium">{clientProgram.start_date}</span>
        <span className="col-span-2 font-semibold text-blaze-orange">{clientProgram.length} days left</span>
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={handleRepeat}>
          <path d="M14 15H4V12L0 16L4 20V17H16V11H14V15ZM4 5H14V8L18 4L14 0V3H2V9H4V5Z" fill="#BEBEBE"/>
        </svg>
        <div className="relative">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onClick={toggleAssigning}>
            <path d="M16 10H9.99999V16H6V10H0V6H6V0H9.99999V6H16V10Z" fill="#BEBEBE"/>
          </svg>
          {assigning && <ProgramsContainer closeProgramList={toggleAssigning} />}
        </div>
      </li>
      {repeating ? (
        <ConfirmModal
          text="Repeat current program?"
          cancel={cancelRepeat}
          confirm={confirmRepeat}
        />
      ) : confirmed ? (
        <SuccessModal />
      ) : null}
    </>
  );
};

export default ClientProgramItem;
