let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET':
    let player = state.filter((record, idx) => idx === payload);
    return player;

    case 'POST':
      return [...state, payload];

    case 'PUT':
      return [...state, payload];

    case 'PATCH':
      return [...state, payload];

    case 'DELETE':
      return state.filter((record, idx) => idx !== payload);

    default:
      return state;
  }
};
