import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mockAxios = new MockAdapter(axios);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Async Actions', () => {
  it('fetches all data', () => {
    mockAxios.onGet('/clients').replyOnce(200, [ { name: 'clients' } ]);
    mockAxios.onGet('/exercises').replyOnce(200, [ { name: 'exercises' } ]);
    mockAxios.onGet('/programs').replyOnce(200, [ { name: 'programs' } ]);

    const store = mockStore({});

    return store.dispatch(actions.fetchAllData()).then(() => {
      expect(store.getActions()).toEqual([
        { type: "SET_CLIENT_DATA", payload: [ { name: "clients" } ] },
        { type: "SET_EXERCISE_DATA", payload: [ { name: "exercises" } ] },
        { type: "SET_PROGRAM_DATA", payload: [ { name: "programs" } ] }
      ]);
    });
  });

  it('updates an exercise', () => {
    const mockResponse = {
      "id": 1,
      "name": "exercise",
      "type": "strength",
      "focal_points": "a focal point",
      "video_url":  "a url",
      "thumbnail_url": "a url",
      "coach_id": 1
    };

    mockAxios.onPut('/exercises/1').replyOnce(200, mockResponse);

    const store = mockStore({});

    return store.dispatch(actions.updateExercise(1, {})).then(() => {
      expect(store.getActions()).toEqual([
        { type: "EDIT_EXERCISE", payload: mockResponse }
      ]);
    });
  });

  it('deletes an exercise', () => {
    const store = mockStore({});
    mockAxios.onDelete('/exercises/1').replyOnce(204, 1);
    return store.dispatch(actions.deleteExercise(1)).then(() => {
      expect(store.getActions()).toEqual([
        { type: 'DELETE_EXERCISE', payload: 1 }
      ]);
    });
  });

  it('duplicates an exercise', () => {
    const store = mockStore({});
    const mockPayload = {};
    mockAxios.onPost('/exercises').replyOnce(201, mockPayload);
    return store.dispatch(actions.duplicateExercise(mockPayload)).then(() => {
      expect(store.getActions()).toEqual([
        { type: 'DUPLICATE_EXERCISE', payload: mockPayload }
      ]);
    });
  });
});