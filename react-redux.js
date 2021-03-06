import React from 'react';

const Context = React.createContext();

const ConnectedComponent = ({
  mapStateToProps,
  component
}) => {
  const store = React.useContext(Context);
  const state = getState();
  const props = mapStateToProps(state);
  return component(props);
};

export const Provider = ({ store, children }) => {
  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  );
};

export const connect = (mapStateToProps) => {
  return (Component) => {
    return () => (
      <ConnectedComponent
        mapStateToProps={mapStateToProps}
        component={Component}
      />
    );
  };
};