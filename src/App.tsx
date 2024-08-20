import { Route, Routes } from "react-router-dom";
import app from "../firebase/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Chat from "./pages/Chat";
import MyComponent from "./pages/test";
import Video from "./pages/Video";

const auth = getAuth(app);

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="flex-col h-100 mx-auto bg-slate-200 dark:bg-slate-800 dark:text-gray-200 dark:border-gray-100">
        {user ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/test" element={<MyComponent />} />
              <Route path="/video" element={<Video />} />
            </Routes>
          </>
        ) : (
          <SignIn />
        )}
      </div>
    </>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex w-full min-h-full justify-center items-center">
        <button className="bg-blue-500" onClick={signInWithGoogle}>
          sign in with google
        </button>
      </div>
    </>
  );
}

export default App;
