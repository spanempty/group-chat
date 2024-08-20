import { useEffect, useRef, useState } from "react";
import { db, auth } from "../../firebase/firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";

function ChatBubble(props: any) {
  const { message, photoUrl, user, uid } = props.message;

  const isItMe = uid === auth.currentUser?.uid ? true : false;

  return (
    <>
      {isItMe ? (
        <div className="flex justify-end items-end space-x-2 my-2 mr-1">
          <div className="flex flex-col shadow-sm rounded-lg overflow-hidden p-3 bg-gray-300 pl-5">
            <div className="text-sm font-medium text-right text-gray-500">
              {user}
            </div>
            <div className="text-black text-right">{message}</div>
          </div>
          <div className="flex">
            <img src={photoUrl} alt="" className="h-10 w-10 rounded-full" />
            <p>{}</p>
          </div>
        </div>
      ) : (
        <div className="flex items-end space-x-2 my-2 ml-1">
          <div className="flex">
            <img src={photoUrl} alt="" className="h-10 w-10 rounded-full" />
          </div>
          <div className="flex flex-col shadow-sm rounded-lg overflow-hidden p-3 bg-gray-100 pr-5">
            <div className="text-sm font-medium text-gray-500">{user}</div>
            <div className="text-black">{message}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Chat() {
  const [message, setMessage] = useState([{}]);

  const [formValue, setFormValue] = useState("");

  const footer = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    footer.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  const handleEnter = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && formValue !== "") {
      e.preventDefault();
      if (input.current) {
        input.current.value = ""; // Clear by setting value to an empty string
      }
      await addDoc(collection(db, "chat"), {
        user: auth.currentUser?.displayName,
        photoUrl: auth.currentUser?.photoURL,
        uid: auth.currentUser?.uid,
        createdAt: serverTimestamp(),
        message: formValue,
      });
      setFormValue("");
    }
  };

  const q = query(collection(db, "chat"), orderBy("createdAt"));
  useEffect(
    () =>
      onSnapshot(q, (snapshot) =>
        setMessage(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  return (
    <>
      <div className="flex h-a w-full flex-col">
        <main
          className="h-b dark:bg-slate-800 dark:text-gray-200 flex flex-nowrap overflow-x-hidden flex-col"
          style={{ flexGrow: 1 }}
        >
          {message &&
            message.map((item, index) => (
              <ChatBubble key={index} message={item} />
            ))}
          <div ref={footer}></div>
        </main>
        <input
          ref={input}
          onChange={(e) => {
            setFormValue(e.target.value);
          }}
          onKeyDown={handleEnter}
          placeholder="write any message here..."
          className="h-d w-a pl-3 mb-1 m-1 focus-visible:ring-white sm:text-sm sm:leading-6 bg-slate-300 dark:bg-slate-700 dark:text-gray-200"
        />
      </div>
    </>
  );
}
