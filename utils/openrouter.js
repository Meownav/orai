import axios from "axios";

export const sendChatMessage = (messages) => {
  return axios
    .post("/api/chat", { messages })
    .then(res => res.data)
    .catch(err => {
      console.error("Local API error:", err.response?.data || err.message);
      throw err;
    });
};
