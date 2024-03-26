import React, { useState } from "react";
import axios from "axios";
function SendImage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [messageStatus, setMessageStatus] = useState("");
  const [error, setError] = useState(false);
  const sendMessage = async () => {
    try {
      console.log("Sending request...");
      const response = await axios.post("http://localhost:4000/send-image", {
        phoneNumber: phoneNumber,
        imageUrl: imageUrl,
      });

      console.log("Response:", response);
      console.log("Response Data:", response.data);

      if (response.status === 200) {
        setMessageStatus("Message sent successfully!");
        setError(false);
      } else {
        setMessageStatus("Failed to send message.");
        setError(true);
      }
    } catch (error) {
      setMessageStatus("Internal server error.");
      setError(true);
      console.error("Error sending message:", error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="w-1/3 p-8 bg-white bg-opacity-85 shadow-md rounded-md"
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Send Image</h1>
        <div className="mb-4 mt-6 text-blue-700">
          <label className="block mb-2 font-serif" htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input
            className="w-full px-3 py-1 border rounded-md text-black focus:outline-none focus:ring focus:border-blue-400"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            placeholder="Enter phone number"
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-4 text-blue-600">
          <label className="block mb-2 font-serif" htmlFor="imageUrl">
            Image url:
          </label>
          <input
            className="w-full px-3 py-1 text-black border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            placeholder="image url"
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-1 px-4 rounded-full focus:outline-5px focus:shadow-outline shadow-blue-500"
          onClick={sendMessage}
        >
          Send
        </button>
        {messageStatus && (
          <p
            className={`mt-2 ${
              error
                ? "text-red-600 font-semibold"
                : "text-green-500 font-semibold"
            }`}
          >
            {messageStatus}
          </p>
        )}
      </div>
    </div>
  );
}
export default SendImage;
