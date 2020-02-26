import React from 'react';

const Library = props => {
  return (
    <div>
      <form className="w-full h-screen p-4 border-2 border-red rounded">
        <button className="mt-2 hidden py-2 w-full bg-blaze-orange rounded font-semibold text-white text-xl">Create exercise</button>
        <div className="flex flex-col py-6">
          <input
            placeholder="Search"
            className="border border-light-grey rounded p-2"
          />
        </div>
        <div className="flex my-2">
          <div className="mr-4">Exercises</div>
          <div className="ml-4">Warmups</div>
        </div>
        <div className="border-gray-400 h-auto border-2">

          <div className="flex border-orange-500 border-2 mt-8 mb-2 ml-10 mr-8">
            <div className="text-sm border-blue-500 border-2 mr-1 w-2/4">Title</div>
            <div className="text-sm border-blue-500 border-2 ml-1 w-2/4">Type</div>
          </div>

          <div className="flex border-orange-500 border-2 m-1">
            <input type="checkbox" />
            <p className="font-bold border-blue-500 border-2">Back Squat</p>
            <p className="border-blue-500 border-2">Strength</p>
          </div>

          <div className="flex border-orange-500 border-2 m-1">
            <input type="checkbox" />
            <p className="font-bold border-blue-500 border-2">Bench Press</p>
            <p className="border-blue-500 border-2">Strength</p>
          </div>

          <div className="flex border-orange-500 border-2 m-1">
            <input type="checkbox" />
            <p className="font-bold border-blue-500 border-2">Box Jumps</p>
            <p className="border-blue-500 border-2">Strength</p>
          </div>

          <div className="flex border-orange-500 border-2 m-1">
            <input type="checkbox" />
            <p className="font-bold border-blue-500 border-2">500m row</p>
            <p className="border-blue-500 border-2">Strength</p>
          </div>

          <div className="flex border-orange-500 border-2 m-1">
            <input type="checkbox" />
            <p className="font-bold border-blue-500 border-2">1k row</p>
            <p className="border-blue-500 border-2">Strength</p>
          </div>

          <div className="flex border-orange-500 border-2 m-1">
            <input type="checkbox" />
            <p className="font-bold border-blue-500 border-2">Power clean</p>
            <p className="border-blue-500 border-2">Strength</p>
          </div>

        </div>
        <button className="mt-2 py-2 w-full bg-blaze-orange rounded font-semibold text-white text-xl">Create exercise</button>
      </form>
    </div>
  );
};

export default Library;