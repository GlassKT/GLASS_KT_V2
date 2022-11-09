// import { io } from "socket.io-client";

// export let socket = io("http://10.80.161.231:8080", {
//   transports: ["websocket"],
// });
// export const initSocketConnection = () => {
//   if (socket) return;

//   socket.connect();
// };

// export const sendSocketMessage = (cmd, body = null) => {
//   if (socket == null || socket.connected === false) {
//     initSocketConnection();
//   }
//   socket.emit("message", {
//     cmd: cmd,
//     body: body,
//   });
// };

// let cbMap = new Map();

// // 해당 이벤트를 받고 콜백 함수를 실행함
// export const socketInfoReceived = (cbType, cb) => {
//   cbMap.set(cbType, cb);

//   if (socket.hasListeners("message")) {
//     socket.off("message");
//   }

//   socket.on("message", (ret) => {
//     for (let [, cbValue] of cbMap) {
//       cbValue(null, ret);
//     }
//   });
// };

// // 소켓 연결을 끊음
// export const disconnectSocket = () => {
//   if (socket == null || socket.connected === false) {
//     return;
//   }
//   socket.disconnect();
//   socket = undefined;
// };

// // -----------------------------------

// useEffect(() => {
//   initSocketConnection();

//   return () => {
//     disconnectSocket();
//   };
// }, []);

// const socketData = (cmd, body) => {
//   sendSocketMessage(cmd, body);
//   socketInfoReceived(104, (err, ret) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     if (ret.cmd === 119) {
//       // do something...
//     }
//   });
// };

// useEffect(() => {
//   const body = { userIdx: messageList[messageList.length - 1] };
//   console.log(body);
//   socketData(118, body);

//   return () => {
//     sendSocketMessage(120, body);
//   };
// }, [messageList]);
