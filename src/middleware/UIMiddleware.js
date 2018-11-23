

let dispatch;

const UIMiddleware = ({
  dispatch: storeDispatch,
}) => {
  dispatch = storeDispatch;

  return next => (action) => {
    switch (action.type) {
    default:
      break;
    }
    return next(action);
  };
};

export default UIMiddleware;
