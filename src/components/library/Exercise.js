import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from 'react-player';
import { updateExercise } from '../actions';
import EditModal from './EditModal';

const Wrapper = ({ children, editing }) => {
  return (
    <div className="bg-white h-full overflow-y-scroll lg:w-1/2 lg:h-120 lg:rounded">
      {editing ? (
        <form>{children}</form>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

const ExerciseLabel = ({ children, editing, id }) => {
  return editing ? (
    <label className="text-xs font-semibold text-silver" htmlFor={id}>
      {children}
    </label>
  ) : (
    <h2 className="text-xs font-semibold text-silver">
      {children}
    </h2>
  );
};

function Exercise({ id, navigate, location }){
  const coachExercise = useSelector(
    state => state.coach_exercises.find(c => c.id === Number(id))
  );

  const dispatch = useDispatch();

  const [editing, setEditing] = useState(location.pathname.endsWith('edit'));
  const [saving, setSaving] = useState(false);
  const [values, setValues] = useState(coachExercise);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleBack = () => {
    navigate('/library');
  };

  const handleEdit = () => {
    navigate(`/library/${id}/edit`);
  };

  const cancelEdit = () => {
    navigate(`/library/${id}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { id, ...exercise } = values;
      await dispatch(updateExercise(id, exercise));
      setSaving(true);
      setTimeout(() => {
        setSaving(false);
        setEditing(false);
        navigate('/library');
      }, 1500);
    } catch (error) {
      console.error(error.response);
    }
  };

  return(
    <div className="fixed top-0 left-0 w-full h-screen z-10 lg:flex lg:items-center lg:justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <Wrapper editing={editing}>
        <div className="flex flex-col px-4 py-5">
          {editing ? (
            <input
              type="text"
              name="name"
              className="text-2xl w-full border border-silver rounded p-1"
              value={values.name}
              onChange={handleChange}
              required
            />
          ) : (
            <h1 className="text-2xl font-medium">{values.name}</h1>
          )}
          <div className="py-2">
            <ExerciseLabel editing={editing} id="thumbnail_url">Link to thumbnail:</ExerciseLabel>
            {editing ? (
              <input
                type="text"
                name="thumbnail_url"
                id="thumbnail_url"
                className="w-full border border-silver rounded text-sm p-1"
                value={values.thumbnail_url}
                onChange={handleChange}
              />
            ) : values.thumbnail_url
              ? <p className="text-sm break-words">{values.video_url}</p>
              : <p className="text-red-600 text-sm">No thumbnail provided</p>
            }
            {values.thumbnail_url && <img src={values.thumbnail_url} className="py-1 max-w-full lg:w-64" alt="exercise thumbnail"/>}
          </div>
          <div className="py-2">
            <ExerciseLabel editing={editing} id="focal_points">Focal Points:</ExerciseLabel>
            {editing ? (
              <textarea
                name="focal_points"
                id="focal_points"
                className="w-full h-16 border border-silver rounded text-sm p-1"
                value={values.focal_points}
                onChange={handleChange}
              />
            ) : (
              <p className="text-sm break-words">{values.focal_points}</p>
            )}
          </div>
          <div className="py-2 flex-grow">
            <div className="flex items-center">
              <ExerciseLabel editing={editing} id="video_url">Link to video:</ExerciseLabel>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                <path d="M10.333 2.99992V1.66659C10.333 1.31296 10.1925 0.973825 9.94248 0.723776C9.69244 0.473728 9.3533 0.333252 8.99967 0.333252H1.66634C1.31272 0.333252 0.973581 0.473728 0.723532 0.723776C0.473484 0.973825 0.333008 1.31296 0.333008 1.66659V8.33325C0.333008 8.68688 0.473484 9.02602 0.723532 9.27606C0.973581 9.52611 1.31272 9.66659 1.66634 9.66659H8.99967C9.3533 9.66659 9.69244 9.52611 9.94248 9.27606C10.1925 9.02602 10.333 8.68688 10.333 8.33325V6.99992L13.6663 9.66659V0.333252L10.333 2.99992Z" fill="#666666"/>
              </svg>
              {editing && (
                <>
                  <span className="text-xs font-medium mx-2">OR</span>
                  <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5125 4.94841C14.0025 2.21716 11.73 0.166748 9 0.166748C6.8325 0.166748 4.95 1.46508 4.0125 3.36508C1.755 3.61841 0 5.63716 0 8.08341C0 9.34319 0.474106 10.5514 1.31802 11.4422C2.16193 12.333 3.30653 12.8334 4.5 12.8334H14.25C14.7425 12.8334 15.2301 12.731 15.6851 12.5321C16.14 12.3332 16.5534 12.0416 16.9016 11.674C17.2499 11.3065 17.5261 10.8701 17.7145 10.3899C17.903 9.90962 18 9.3949 18 8.87508C18 6.78508 16.4625 5.09091 14.5125 4.94841ZM14.25 11.2501H4.5C3.70435 11.2501 2.94129 10.9165 2.37868 10.3226C1.81607 9.72872 1.5 8.92327 1.5 8.08341C1.5 6.4605 2.6475 5.10675 4.17 4.9405L4.9725 4.85341L5.3475 4.10133C6.06 2.65258 7.455 1.75008 9 1.75008C10.965 1.75008 12.66 3.22258 13.0425 5.25716L13.2675 6.44466L14.415 6.53175C15.585 6.61091 16.5 7.648 16.5 8.87508C16.5 9.50497 16.2629 10.1091 15.841 10.5545C15.419 10.9999 14.8467 11.2501 14.25 11.2501ZM6 7.29175H7.9125V9.66675H10.0875V7.29175H12L9 4.12508L6 7.29175Z" fill="black"/>
                  </svg>
                </>
              )}
            </div>
            {editing ? (
              <input
                type="text"
                name="video_url"
                id="video_url"
                className="w-full border border-silver rounded text-sm p-1"
                value={values.video_url}
                onChange={handleChange}
              />
            ) : values.video_url
              ? (
                <p className="text-sm break-words">{values.video_url}</p>
              ) : (
                <p className="text-red-600 text-sm">No video provided</p>
              )}
            {values.video_url && (
              <div className="py-1 max-w-full w-84 h-48">
                <ReactPlayer
                  url={values.video_url}
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={editing ? cancelEdit : handleBack} className="py-3 w-5/12 rounded bg-white text-blaze-orange border border-blaze-orange">
              {editing ? 'Cancel' : 'Back'}
            </button>
            <button type="submit" onClick={editing ? handleSubmit : handleEdit} className="py-3 w-5/12 rounded bg-blaze-orange text-white" disabled={saving}>
              {editing ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </Wrapper>
      {saving && <EditModal />}
    </div>
  );
}

export default Exercise;