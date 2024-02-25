import React,{useState} from "react";
function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let newFullName = ""
    if(firstName && lastName){
      newFullName = `${firstName} ${lastName}`;
    }
    
    setFullName(newFullName);
  };


  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {fullName && (
        <div>
          <p>Full Name: {fullName}</p>
        </div>
      )}
    </div>
  )
}

export default App;
