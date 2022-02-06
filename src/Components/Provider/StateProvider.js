import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { TaskReducer } from "../Reducer/TaskReducer";

const GlobalState = createContext();

export const StateProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [Darkmode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const darkMode = () => {
    setDarkMode(!Darkmode);
  };

  //getting data from the server
  //to use reducer in an fetch api put dispatch data after response to change the initial value when the value returns
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`http://localhost:3500/tasks`);
      const json = await data.json();

      if (json) {
        dispatch({
          type: "UpdateTask",
          payload: json,
        });
      }
    };
    getData();
  }, []);

  const [state, dispatch] = useReducer(TaskReducer, {
    task: [],
  });

  //delete item
  const deleteItem = async (id) => {
    //delete item in the server
    await fetch(`http://localhost:3500/tasks/${id}`, {
      method: "DELETE",
    });

    //then remove the item to our state
    dispatch({
      type: "REMOVE_TASK",
      payload: id,
    });
  };

  //check item
  const checkedItem = async (data) => {
    dispatch({
      type: "CHECK_TOGGLE",
      payload: data,
    });

    await fetch(`http://localhost:3500/tasks/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: data.task,
        isCompleted: !data.isCompleted,
        category: data.category,
        id: data.id,
      }),
    });
  };

  //add item
  const addTask = async (task) => {
    dispatch({
      type: "ADDTASK",
      payload: task,
    });

    await fetch(`http://localhost:3500/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...task,
      }),
    });
  };



  return (
    <GlobalState.Provider
      value={{
        tasks: state.task[0],
        modal,
        setModal,
        deleteItem,
        checkedItem,
        addTask,
        toggleMenu,
        menuActive,
        darkMode,
        Darkmode,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export const UseProvider = () => {
  return useContext(GlobalState);
};
