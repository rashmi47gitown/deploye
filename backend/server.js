const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

console.log(process.env.ACCESS_TOKEN);

const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.send("backend!");
});

app.get("/send-message", (req, res) => {
  res.send("message");
});

app.get("/visitor-request", (req, res) => {
  res.send("visitor");
});

app.get("/visit-approve", (req, res) => {
  res.send("message");
});

app.get("/visit-in", (req, res) => {
  res.send("in time of visitor");
});

app.get("/visit-out", (req, res) => {
  res.send("visitor out time");
});

app.post("/send-message", async (req, res) => {
  try {
    debugger;
    const { phoneNumber, message } = req.body;
    console.log(req.body.phoneNumber);
    console.log(req.body.message);

    const accessToken = process.env.ACCESS_TOKEN;
    console.log(process.env.ACCESS_TOKEN);
    let data = JSON.stringify(
      {
        messaging_product: "whatsapp",
        to: phoneNumber, // to: req.body.phoneNumber,
        type: "template",
        template: {
          name: "send_text",
          language: {
            code: "en_US",
          },

          components: [
            {
              type: "body",
              parameters: [
                {
                  type: "text",
                  text: message,
                },
              ],
            },
          ],
        },
      }

      // {
      //   messaging_product: "whatsapp",
      //   recipient_type: "individual",
      //   to: phoneNumber,
      //   type: "text",
      //   text: {
      //     preview_url: false,
      //     body: message,
      //   },
      // }
    );
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://graph.facebook.com/v18.0/248127141708785/messages",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    if (response.status === 200) {
      res.status(200).json({ message: "Message sent successfully." });
    } else {
      res.status(500).json({ error: "Failed to send message." });
    }
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.post("/send-pdf", async (req, res) => {
  try {
    debugger;
    const { phoneNumber, file, pdfUrl } = req.body;
    console.log(req.body.phoneNumber);
    console.log(req.body.pdfUrl);

    const accessToken = process.env.ACCESS_TOKEN;
    console.log(process.env.ACCESS_TOKEN);
    let data = JSON.stringify({
      messaging_product: "whatsapp",
      to: phoneNumber,
      type: "template",
      template: {
        name: "send_pdf",
        language: {
          code: "en_US",
        },
        components: [
          {
            type: "header",
            parameters: [
              {
                type: "document",
                document: {
                  filename: file,
                  link: pdfUrl,
                  // link: "https://pwdpunjab.gov.in/UploadDocs/Standard%20Bidding%20Document/Standard%20Bidding%20Document.pdf",
                },
              },
            ],
          },
        ],
      },
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://graph.facebook.com/v18.0/248127141708785/messages",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      data: data,
    };
    const response = await axios.request(config);
    if (response.status === 200) {
      res.status(200).json({ message: "Message sent successfully." });
    } else {
      res.status(500).json({ error: "Failed to send message." });
    }
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.post("/send-image", async (req, res) => {
  try {
    debugger;
    const { phoneNumber, imageUrl } = req.body;
    console.log(req.body.phoneNumber);

    const accessToken = process.env.ACCESS_TOKEN;
    console.log(process.env.ACCESS_TOKEN);
    let data = JSON.stringify({
      messaging_product: "whatsapp",
      to: phoneNumber, // to: req.body.phoneNumber,
      type: "template",
      template: {
        name: "punchimg",
        language: {
          code: "en_US",
        },

        components: [
          {
            type: "header",
            parameters: [
              {
                type: "image",
                image: {
                  link: imageUrl,
                },
              },
            ],
          },
        ],
      },
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://graph.facebook.com/v18.0/248127141708785/messages",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    if (response.status === 200) {
      res.status(200).json({ message: "Message sent successfully." });
    } else {
      res.status(500).json({ error: "Failed to send message." });
    }
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.post("/visitor-request", async (req, res) => {
  try {
    debugger;
    const { phoneNumber, visitor } = req.body;
    console.log(req.body.phoneNumber);
    const accessToken = process.env.ACCESS_TOKEN;
    console.log(process.env.ACCESS_TOKEN);
    let data = JSON.stringify({
      messaging_product: "whatsapp",
      to: phoneNumber,
      type: "template",
      template: {
        name: "visitor_request",
        language: {
          code: "en_US",
        },

        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: visitor,
              },
            ],
          },
        ],
      },
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://graph.facebook.com/v18.0/248127141708785/messages",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    if (response.status === 200) {
      res.status(200).json({ message: "Message sent successfully." });
    } else {
      res.status(500).json({ error: "Failed to send message." });
    }
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.post("/visitor-in", async (req, res) => {
  try {
    debugger;
    const { phoneNumber, visitorName, time } = req.body;
    console.log(req.body.phoneNumber);
    console.log(req.body.visitorName);
    const accessToken = process.env.ACCESS_TOKEN;
    console.log(process.env.ACCESS_TOKEN);
    let data = JSON.stringify({
      messaging_product: "whatsapp",
      to: phoneNumber,
      type: "template",
      template: {
        name: "visitor_in",
        language: {
          code: "en_US",
        },
        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: visitorName,
              },
              {
                type: "text",
                text: time,
              },
            ],
          },
        ],
      },
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://graph.facebook.com/v18.0/248127141708785/messages",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      data: data,
    };
    const response = await axios.request(config);
    if (response.status === 200) {
      res.status(200).json({ message: "Message sent successfully." });
    } else {
      res.status(500).json({ error: "Failed to send message." });
    }
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.post("/visitor-out", async (req, res) => {
  try {
    debugger;
    const { phoneNumber, visitorName, time } = req.body;
    console.log(req.body.phoneNumber);
    console.log(req.body.visitorName);
    const accessToken = process.env.ACCESS_TOKEN;
    console.log(process.env.ACCESS_TOKEN);
    let data = JSON.stringify({
      messaging_product: "whatsapp",
      to: phoneNumber, // to: req.body.phoneNumber,
      type: "template",
      template: {
        name: "visitor_out",
        language: {
          code: "en_US",
        },
        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: visitorName,
              },
              {
                type: "text",
                text: time,
              },
            ],
          },
        ],
      },
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://graph.facebook.com/v18.0/248127141708785/messages",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      data: data,
    };
    const response = await axios.request(config);
    if (response.status === 200) {
      res.status(200).json({ message: "Message sent successfully." });
    } else {
      res.status(500).json({ error: "Failed to send message." });
    }
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.post("/visitor-approved", async (req, res) => {
  try {
    debugger;
    const { phoneNumber, employeeName, company } = req.body;
    console.log(req.body.phoneNumber);
    console.log(req.body.employeeName);
    console.log(req.body.company);
    const accessToken = process.env.ACCESS_TOKEN;
    console.log(process.env.ACCESS_TOKEN);
    let data = JSON.stringify({
      messaging_product: "whatsapp",
      to: phoneNumber, // to: req.body.phoneNumber,
      type: "template",
      template: {
        name: "visitor_request_approved",
        language: {
          code: "en_US",
        },
        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: employeeName,
              },
              {
                type: "text",
                text: company,
              },
            ],
          },
        ],
      },
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://graph.facebook.com/v18.0/248127141708785/messages",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      data: data,
    };
    const response = await axios.request(config);
    if (response.status === 200) {
      res.status(200).json({ message: "Message sent successfully." });
    } else {
      res.status(500).json({ error: "Failed to send message." });
    }
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.post("/visitor-rejected", async (req, res) => {
  try {
    debugger;
    const { phoneNumber, employeeName, company } = req.body;
    console.log(req.body.phoneNumber);
    console.log(req.body.employeeName);
    console.log(req.body.company);
    const accessToken = process.env.ACCESS_TOKEN;
    console.log(process.env.ACCESS_TOKEN);
    let data = JSON.stringify({
      messaging_product: "whatsapp",
      to: phoneNumber, // to: req.body.phoneNumber,
      type: "template",
      template: {
        name: "visitor_request_reject",
        language: {
          code: "en_US",
        },
        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: employeeName,
              },
              {
                type: "text",
                text: company,
              },
            ],
          },
        ],
      },
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://graph.facebook.com/v18.0/248127141708785/messages",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      data: data,
    };
    const response = await axios.request(config);
    if (response.status === 200) {
      res.status(200).json({ message: "Message sent successfully." });
    } else {
      res.status(500).json({ error: "Failed to send message." });
    }
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
