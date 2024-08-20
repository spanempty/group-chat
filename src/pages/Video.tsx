// import firebase from "firebase/compat/app";
// import { collection, snapshotEqual } from "firebase/firestore";
// import { useEffect, useRef, useState } from "react";
// import app from "../../firebase/firebase";

// const firestore = firebase.firestore(app);

// const configuration = {
//   iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
// };

// const peerConnection = new RTCPeerConnection(configuration);

// async function playVideoFromCamera() {
//   try {
//     const constraints = { video: true, audio: true };
//     const remoteStream = new MediaStream();
//     const localStream = await navigator.mediaDevices.getUserMedia(constraints);

//     localStream.getTracks().forEach((track) => {
//       peerConnection.addTrack(track, localStream);
//     });

//     peerConnection.ontrack = (e) => {
//       e.streams[0].getTracks().forEach((track) => {
//         remoteStream.addTrack(track);
//       });
//     };

//     const videoElement =
//       document.querySelector<HTMLVideoElement>("video#video");
//     const videoElementTwo =
//       document.querySelector<HTMLVideoElement>("video#video-2");
//     videoElementTwo!.srcObject = remoteStream;
//     videoElement!.srcObject = localStream;
//   } catch (error) {
//     console.error("Error opening video camera.", error);
//   }
// }

// export default function Video() {
// const id = useRef<HTMLHeadingElement>(null);

//   const answerFun = () => {
//     peerConnection.onicecandidate = (e) =>
//       console.log(peerConnection.localDescription);
//     peerConnection.ondatachannel = e => {
//       e.channel.on
//     }
//   }
//   useEffect(() => {
//     playVideoFromCamera();
//   });
//   const handleClick = async () => {
//     const callDoc = firestore.collection("calls").doc();
//     const offerCandidates = firestore.collection("offerCandidates");
//     const answerCandidates = firebase
//       .firestore()
//       .collection("answerCandidates");

//     id.current!.ariaValueNow = "hii";

//     const offerDescription = await peerConnection.createOffer();
//     await peerConnection.setLocalDescription(offerDescription);

//     await callDoc.set({
//       sdp: offerDescription.sdp,
//       type: offerDescription.type,
//     });

//     callDoc.onSnapshot((snapshot) => {
//       const data = snapshot.data();
//       if (!peerConnection.currentRemoteDescription && data?.answer) {
//         const answerDescription = new RTCSessionDescription(data.answer);
//         peerConnection.setRemoteDescription(answerDescription);
//       }
//     });

//     answerCandidates.onSnapshot((snapshot) => {
//       snapshot.docChanges().forEach((change) => {
//         if (change.type === "added") {
//           const candidate = new RTCIceCandidate(change.doc.data());
//           peerConnection.addIceCandidate(candidate);
//         }
//       });
//     });
//   };

//   return (
//     <>
//       <div className="grid grid-cols-2 grid-flow-row  ">
//         <div id="video-player" className="bg-slate-500">
//           <video id="video" className="h-cx w-cy" autoPlay playsInline></video>
//         </div>
//         <div id="video-player" className=" bg-slate-500">
//           <video id="video-2" className="h-cx w-c" autoPlay playsInline></video>
//         </div>
//       </div>

//       <input className="ring-2 ring-black" ref={ice} />
//       <button
//         className="p-3 ml-5 ring-1 bg-gray-300 m-1"
//         ref={answer}
//         onClick={answerFun}
//       >
//         answer
//       </button>
//       <button
//         className="p-3 ring-1 bg-gray-300 m-1"
//         ref={call}
//         onClick={callFun}
//       >
//         call
//       </button>

//       <input type="text" onChange={(e) => setId(e.target.value)} />
//       <h1 ref={id} id="id"></h1>
//       <button
//         className="bg-gray-500 ring-black-2 mt-10 p-10"
//         onClick={handleClick}
//       >
//         call
//       </button>
//     </>
//   );
// }

export default function Video() {
  return (
    <div className="p-10">
      This website is currently under construction. Please check back soon.
    </div>
  );
}
