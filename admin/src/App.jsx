import TopBar from "./components/topBar/TopBar";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Movie from "./pages/movie/Movie";
import MovieList from "./pages/movieList/MovieList";
import NewMovie from "./pages/newMovie/NewMovie";

// 107
import ListList from "./pages/listList/ListList";

// 112
import List from "./pages/list/List";

// 116
import NewList from "./pages/newList/NewList";

// 63
import Login from "./pages/login/Login";

// 67
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react"; 

function App() {
  // 68
  const { user } = useContext(AuthContext); 

  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/"></Redirect> : <Login></Login>}</Route>
        {/* 70 */}
        {user && 
        <>
        <TopBar></TopBar>
        <div style={{display: "flex", marginTop: "10px"}}>
          <Sidebar></Sidebar>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/users">
              <UserList></UserList>
            </Route>  
            <Route path="/user/:userId">
              <User></User>
            </Route>
            <Route path="/newUser">
              <NewUser></NewUser>
            </Route>
            <Route path="/movies">
              <MovieList></MovieList>
            </Route>
            <Route path="/movie/:movieId">
              <Movie></Movie>
            </Route>
            <Route path="/newMovie">
              <NewMovie></NewMovie>
            </Route>
            {/* 108 */}
            <Route path="/lists">
              <ListList></ListList>
            </Route>
            <Route path="/list/:listId">
              <List></List>
            </Route>
            <Route path="/newList">
              <NewList></NewList>
            </Route>
      </div></>}
      </Switch>
      </Router>
    </div>
  );
}

export default App;
