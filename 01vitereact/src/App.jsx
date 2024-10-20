import Aman from "./Aman" //this also valid
// import Aman from "./Aman.jsx" // this is default 

function App() {
  const username = "chai aur code"

  return (
  //  <h1>Learning React with vite | AMAN</h1>
  <>  
  <Aman />
  <h1>React Series with {username}</h1>
  <p>testing paragraph</p>
  </>
  );
}
// {username} in react this is evealuted expression means final form of js

export default App

// <> </> this we call fragment closing so then we can write multiple tages in this and not need to write again and again for everthing
// this is bcz it can only return one element 

