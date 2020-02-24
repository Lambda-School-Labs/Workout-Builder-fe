import React, { useEffect, useState } from 'react';
import ClientProgramItem from './ClientProgramItem';
import serverHandshake from '../../utils/serverHandshake';
import { dummyClientPrograms } from './dummyData';

const ClientProgramList = () => {
  const [clientPrograms, setClientPrograms] = useState(dummyClientPrograms);

  useEffect(() => {
    (async () => {
      try {
        const response = await serverHandshake('/clients-programs/dashboard');
        if (response.status === 200) {
          setClientPrograms(response.data);
        }
      } catch (error) {
        console.error(error?.response?.data.message ?? 'Something went wrong!');
      }
    })();
  }, []);

  return (
    <>
      {/* desktop-only header */}
      <div className="hidden lg:grid grid-cols-10 items-center gap-3 font-medium text-sm text-boulder mt-4 border-b border-cornflower-blue">
        <span className="col-start-2 col-span-2">Name</span>
        <span>Program name</span>
        <span>Program phase</span>
        <span>Program start</span>
        <span className="col-span-2">Program end</span>
        <span>Repeat<br />Program</span>
        <span>Add<br />program</span>
      </div>
      <ul className="overflow-y-scroll flex-grow my-2">
        {clientPrograms.map(cp => (
          <ClientProgramItem key={cp.program_id} clientProgram={cp} />
        ))}
      </ul>
    </>
  );
};

export default ClientProgramList;
