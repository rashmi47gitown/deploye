import React, { useState } from "react";
import axios from "axios";

function VisitorRequest() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [visitor, setVisitor] = useState("");
  const [messageStatus, setMessageStatus] = useState("");
  const [error, setError] = useState(false);

  const sendMessage = async () => {
    try {
      console.log("Sending request...");
      console.log(phoneNumber);
      const response = await axios.post(
        "http://localhost:4000/visitor-request",
        {
          phoneNumber: phoneNumber,
          visitor: visitor,
        }
      );
      console.log("Response:", response);
      console.log(response.data);
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
    <div
      className="flex justify-center items-center h-screen"
      // style={{
      //   backgroundImage: `url('https://img.freepik.com/premium-vector/reception-service-receptionist-customer-hotel-lobby-hall-people-travelling-business-office-flat-vector-concept_176411-625.jpg?w=900')`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      // }}
    >
      <div
        className="w-1/4 p-4 bg-white bg-opacity-65 shadow-md rounded-md"
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <h1 className="text-2xl  font-semibold mb-4 text-blue-600">
          Visitor Request
        </h1>
        <div className="mb-4 mt-10">
          <label
            className="block mb-2 text-blue-600 font-semibold"
            htmlFor="phoneNumber"
          >
            Phone Number:
          </label>
          <input
            className="w-full px-3 py-1 text-black border rounded-md focus:outline-none focus:ring focus:border-green-300"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            placeholder="Enter phone number"
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-4 text-black">
          <label
            className="block mb-2 text-blue-600 font-semibold"
            htmlFor="visitor"
          >
            Visitor Name:
          </label>
          <textarea
            className="w-full px-3 py-1 text-blackborder rounded-md focus:outline-none focus:ring focus:border-green-300"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            placeholder="Enter visitor name"
            id="visitor"
            value={visitor}
            onChange={(e) => setVisitor(e.target.value)}
          ></textarea>
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-1 px-4 rounded-full focus:outline-5px focus:shadow-outline shadow-blue-500"
          onClick={sendMessage}
        >
          Send
        </button>
        {messageStatus && (
          <p className={`mt-2 ${error ? "text-red-500" : "text-green-500"}`}>
            {messageStatus}
          </p>
        )}
      </div>
    </div>
  );
}

export default VisitorRequest;
