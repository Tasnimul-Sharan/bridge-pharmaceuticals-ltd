// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { message } = req.body;

//     const token = process.env.WHATSAPP_TOKEN;
//     const phoneNumberId = process.env.PHONE_NUMBER_ID;
//     const autoReplyText = `আপনার মেসেজ পেয়েছি: "${message}" — ধন্যবাদ!`;

//     // Send auto reply to user via WhatsApp Cloud API
//     await fetch(`https://graph.facebook.com/v20.0/${phoneNumberId}/messages`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         messaging_product: "whatsapp",
//         to: "+8801920765030", // ইউজারের নাম্বার
//         text: { body: autoReplyText },
//       }),
//     });

//     return res.status(200).json({
//       status: "Message sent",
//       autoReply: autoReplyText,
//     });
//   }

//   // Webhook verification
//   if (req.method === "GET") {
//     const verifyToken = process.env.VERIFY_TOKEN;
//     const mode = req.query["hub.mode"];
//     const token = req.query["hub.verify_token"];
//     const challenge = req.query["hub.challenge"];

//     if (mode && token && mode === "subscribe" && token === verifyToken) {
//       res.status(200).send(challenge);
//     } else {
//       res.sendStatus(403);
//     }
//   }
// }

// pages/api/whatsapp-webhook.js

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     console.log("Incoming:", JSON.stringify(req.body, null, 2));

//     let incomingMessage = "";
//     try {
//       incomingMessage =
//         req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.text?.body ||
//         "";
//     } catch (e) {
//       console.error("Error parsing incoming message:", e);
//     }

//     // যদি ফ্রন্টএন্ড থেকে মেসেজ আসে
//     if (req.body.message) {
//       incomingMessage = req.body.message;
//     }

//     if (!incomingMessage) {
//       return res.status(400).json({ error: "No message text found" });
//     }

//     const token = process.env.WHATSAPP_TOKEN;
//     const phoneNumberId = process.env.PHONE_NUMBER_ID;

//     // Auto reply পাঠানো
//     await fetch(`https://graph.facebook.com/v20.0/${phoneNumberId}/messages`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         messaging_product: "whatsapp",
//         to: req.body.from || "+8801920765030", // default number
//         text: { body: `আপনার মেসেজ পেয়েছি: "${incomingMessage}" — ধন্যবাদ!` },
//       }),
//     });

//     return res
//       .status(200)
//       .json({
//         status: "Message sent",
//         autoReply: `আপনার মেসেজ পেয়েছি: "${incomingMessage}" — ধন্যবাদ!`,
//       });
//   }

//   // Webhook verification (Meta)
//   if (req.method === "GET") {
//     const verifyToken = process.env.VERIFY_TOKEN;
//     const mode = req.query["hub.mode"];
//     const token = req.query["hub.verify_token"];
//     const challenge = req.query["hub.challenge"];

//     if (mode && token && mode === "subscribe" && token === verifyToken) {
//       return res.status(200).send(challenge);
//     }
//     return res.sendStatus(403);
//   }
// }

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     console.log("Incoming:", JSON.stringify(req.body, null, 2));

//     let incomingMessage = "";
//     let from = "";

//     try {
//       const changes = req.body.entry?.[0]?.changes?.[0]?.value;
//       incomingMessage =
//         changes?.messages?.[0]?.text?.body || req.body.message || "";
//       from = changes?.messages?.[0]?.from || req.body.from || "";
//     } catch (e) {
//       console.error("Error parsing incoming message:", e);
//     }

//     if (!incomingMessage) {
//       return res.status(400).json({ error: "No message text found" });
//     }

//     const token = process.env.WHATSAPP_TOKEN;
//     const phoneNumberId = process.env.PHONE_NUMBER_ID;

//     // Auto reply
//     await fetch(`https://graph.facebook.com/v20.0/${phoneNumberId}/messages`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         messaging_product: "whatsapp",
//         to: from || "+8801920765030",
//         text: { body: `আপনার মেসেজ পেয়েছি: "${incomingMessage}" — ধন্যবাদ!` },
//       }),
//     });

//     return res.status(200).json({
//       status: "Message sent",
//       autoReply: `আপনার মেসেজ পেয়েছি: "${incomingMessage}" — ধন্যবাদ!`,
//     });
//   }

//   if (req.method === "GET") {
//     const verifyToken = process.env.VERIFY_TOKEN;
//     const mode = req.query["hub.mode"];
//     const token = req.query["hub.verify_token"];
//     const challenge = req.query["hub.challenge"];

//     if (mode && token && mode === "subscribe" && token === verifyToken) {
//       return res.status(200).send(challenge);
//     }
//     return res.sendStatus(403);
//   }
// }

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       console.log("Incoming:", JSON.stringify(req.body, null, 2));

//       const value = req.body.entry?.[0]?.changes?.[0]?.value || {};

//       // If this is a status update, just return 200
//       if (value.statuses) {
//         return res.status(200).json({ status: "status event ignored" });
//       }

//       const message = value.messages?.[0]?.text?.body || "";
//       const from = value.messages?.[0]?.from || "";

//       if (!message || !from) {
//         return res.status(200).json({ status: "no message found" }); // <-- no 400
//       }

//       // Send WhatsApp reply
//       const apiRes = await fetch(
//         `https://graph.facebook.com/v20.0/${process.env.PHONE_NUMBER_ID}/messages`,
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             messaging_product: "whatsapp",
//             to: from,
//             text: { body: `আপনার মেসেজ পেয়েছি: "${message}"\nধন্যবাদ!` },
//           }),
//         }
//       );

//       const apiData = await apiRes.json();
//       console.log("WhatsApp API Response:", apiData);

//       return res.status(200).json({ status: "reply sent" });
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ error: "Something went wrong" });
//     }
//   }

//   if (req.method === "GET") {
//     const verifyToken = process.env.VERIFY_TOKEN;
//     const mode = req.query["hub.mode"];
//     const token = req.query["hub.verify_token"];
//     const challenge = req.query["hub.challenge"];

//     if (mode && token && mode === "subscribe" && token === verifyToken) {
//       return res.status(200).send(challenge);
//     }
//     return res.sendStatus(403);
//   }
// }

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("Incoming:", JSON.stringify(req.body, null, 2));

    let message = "";
    let from = "";

    // Case 1: Local frontend test
    if (req.body.message) {
      message = req.body.message;
      from = "user_local_test";
    }

    // Case 2: WhatsApp webhook
    const value = req.body.entry?.[0]?.changes?.[0]?.value;
    if (value?.messages?.[0]) {
      message = value.messages[0].text?.body || "";
      from = value.messages[0].from || "";
    }

    // No message found → just return
    if (!message) {
      return res.status(200).json({ status: "no message found" });
    }

    console.log(`Got message: ${message} from: ${from}`);

    // Auto reply for local test
    if (from === "user_local_test") {
      return res
        .status(200)
        .json({ autoReply: `আপনার মেসেজ পেয়েছি: "${message}" — ধন্যবাদ!` });
    }

    // Send reply to actual WhatsApp user
    if (from && from !== "user_local_test") {
      await fetch(
        `https://graph.facebook.com/v20.0/${process.env.PHONE_NUMBER_ID}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: from,
            text: { body: `Got your message: "${message}"` },
          }),
        }
      );
    }

    return res.status(200).json({ status: "reply sent" });
  }

  return res.status(405).end();
}
