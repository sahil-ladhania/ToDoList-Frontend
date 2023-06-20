// Import useState and useEffect From React.
import React, {useState, useEffect} from 'react'
// Import BiEdit and AiFillDelete From React.
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'

// Define a Functional Component By the name ToDoList.
const ToDoComponent = () => {

    // Creating States.
    // 1. For toggleButtonText.
    const [toggleButtonText, setToggleButtonText] = useState("Switch To Dark Mode"); // Default Value -> Switch to Dark Mode.

    // 2. For appTheme.
    const [appTheme, setAppTheme] = useState("light-theme"); // Default Value -> Light Theme.

    // 3. For inputToDo.
    const [inputToDo, setInputToDo] = useState(''); // Default Value -> Empty String.

    // 4. For addToDo.
    const [addToDo, setAddToDo] = useState([]); // Default Value -> Empty Array.

    // 5. For selectedToDo.
    const [selectedToDo, setSelectedToDo] = useState(null); // Default Value -> null.

    // 6. For isUpdating.
    const [isUpdating, setIsUpdating] = useState(false); // Default Value -> False.

    // 7. For userData.
    const [userData, setUserData] = useState({
        userName: '',
        currentDate: new Date().toLocaleDateString(),
    }) // Default Value -> Empty String and Current Date.

        // Creating Effects.
        // 1. For Theme of App.
        useEffect(() => {
            document.body.className = appTheme;
        },[appTheme]);

        // 2. For User Data Input.
        useEffect(() => {
            if (!userData.userName) {
                const name = window.prompt('Please Enter Your Name :-')
                setUserData(prevData => ({ ...prevData, userName: name }))
            }
        }, [userData]);

        // 3. For Fetching Data Using axios.
        useEffect(() => {
    
        },[]);

    // Define Event Handler Functions.

    // 1. Define Logic For handleToggle.
    const handleToggle = () => {
        appTheme === 'dark-theme'? setAppTheme('light-theme'): setAppTheme('dark-theme');
        toggleButtonText === 'Switch To Dark Mode'? setToggleButtonText('Switch To Light Mode'): setToggleButtonText('Switch To Dark Mode');
    };

    // 2. Define Logic For handleChange.
    const handleChange = (event) => {
        setInputToDo(event.target.value);
    };

    // 3. Define Logic For handleAdd.
    const handleAdd = (event) => {
        event.preventDefault(); 
        if (selectedToDo !== null && inputToDo !== '') {
            const newToDoList = [...addToDo];
            newToDoList[selectedToDo] = inputToDo;
            setAddToDo(newToDoList);
            setSelectedToDo(null);
            setInputToDo('');
        } else if (selectedToDo === null && inputToDo !== '') {
            setAddToDo([...addToDo, inputToDo]);
            setInputToDo('');
        }
    };

    // 4. Define Logic For handleUpdate.
    const handleUpdate = (index) => {
        setSelectedToDo(index);
        setInputToDo(addToDo[index]);
        setIsUpdating(true);
    };

    // 5. Define Logic For handleDelete.
    const handleDelete = (index) => {
        const newToDoList = [...addToDo];
        newToDoList.splice(index, 1);
        setAddToDo(newToDoList);
    };

    return (
        <div>
            <>
                {/* --------------------Navbar Part------------------ */}
                <div>
                    <nav className='Navbar'>
                        <ul className='List'>
                            <li className='TODOLIST'>TODOLIST</li>
                        </ul>
                        <button
                        className='Dark-Mode'
                        onClick={handleToggle}
                        >
                        {toggleButtonText}
                        </button>
                    </nav>
                </div>
                {/* --------------------Welcome Part------------------ */}
                <div className='Heading-Container'>
                    <h6 className='Welcome'>
                    Welcome {userData.userName ? `${userData.userName} ` : ''}👋, here's your list for {userData.currentDate}.
                    </h6>
                </div>
                {/* --------------------Textfeild Part------------------ */}
                <div className='Main-Container'>
                    <form className='ToDo-Form' action="ToDo">
                        <input 
                        className='Textfeild' 
                        type="text" 
                        placeholder="Enter Your ToDo's..."
                        value={inputToDo}
                        onChange={handleChange}
                        />
                        <button 
                        className='Add-ToDo'
                        onClick={handleAdd}
                        >
                        Add ToDo's
                        </button>
                    </form>
                </div>
                {/* --------------------ToDo's Part------------------ */}
                <div className='main-todo'>
                    {
                        addToDo.map((todo, index) => (
                            <div
                            className='todo'
                            key={index}
                            >
                            {selectedToDo === index ? (
                                <input
                                className={`text ${isUpdating ? 'updating' : ''}`}
                                type='text'
                                value={inputToDo}
                                onChange={handleChange}
                                />
                            ) : (
                                <div className='text'>{todo}</div>
                            )}
                                <div
                                className='icons'
                                >
                                    <BiEdit 
                                    className='icon'
                                    onClick= {() =>  handleUpdate(index)}
                                    />
                                    <AiFillDelete 
                                    className='icon'
                                    onClick={() => handleDelete(index)}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
        </div>
    )
}

export default ToDoComponent