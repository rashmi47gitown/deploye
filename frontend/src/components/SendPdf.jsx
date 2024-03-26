import React, { useState } from "react";
import axios from "axios";
function SendPdf() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [file, setFile] = useState("");
  const [messageStatus, setMessageStatus] = useState("");
  const [error, setError] = useState(false);
  const sendMessage = async () => {
    try {
      console.log("Sending request...");
      console.log(phoneNumber);
      console.log(pdfUrl);
      console.log(file);
      const response = await axios.post("http://localhost:4000/send-pdf", {
        phoneNumber: phoneNumber,
        pdfUrl: pdfUrl,
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
    <div
      className="flex justify-center items-center h-screen"
      // style={{
      //   backgroundImage: `url('https://www.yeahhub.com/wp-content/uploads/2021/12/image003-1024x595.jpg')`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      // }}
    >
      <div
        className="w-1/3 p-20 bg-white bg-opacity-90 shadow-md rounded-md"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        }}
      >
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Send Pdf</h1>
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
          <label className="block mb-2 font-serif" htmlFor="file">
            File name:
          </label>
          <input
            className="w-full px-3 py-1 text-black border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            placeholder="Enter file name"
            type="text"
            id="file"
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />
        </div>
        <div className="mb-4 text-blue-600">
          <label className="block mb-2 font-serif" htmlFor="pdfUrl">
            Pdf url:
          </label>
          <input
            className="w-full px-3 py-1 text-black border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            placeholder="pdf url"
            type="text"
            id="pdfUrl"
            value={pdfUrl}
            onChange={(e) => setPdfUrl(e.target.value)}
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
              error ? "text-red-500" : "text-green-500 font-semibold"
            }`}
          >
            {messageStatus}
          </p>
        )}
      </div>
    </div>
  );
}
export default SendPdf;
