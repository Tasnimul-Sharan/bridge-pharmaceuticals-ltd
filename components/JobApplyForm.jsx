// "use client";

// import { useState } from "react";
// import { useRouter } from "next/router";

// export default function JobApplyForm({ slug }) {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [cvFile, setCvFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const toBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!cvFile) {
//       alert("Please upload your CV");
//       return;
//     }

//     setLoading(true);

//     try {
//       const base64File = await toBase64(cvFile);

//       const uploadRes = await fetch("/api/upload", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           file: base64File,
//         }),
//       });

//       const uploadData = await uploadRes.json();

//       if (!uploadData.url) {
//         throw new Error("Upload failed");
//       }

//       const applicationData = {
//         ...form,
//         cv_url: uploadData.url,
//         job_slug: slug,
//       };

//       console.log("Application:", applicationData);


//       alert("Application submitted successfully!");
//       router.push("/career");
//     } catch (error) {
//       alert("Something went wrong");
//       console.error(error);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="max-w-xl mx-auto bg-white border p-8">
//       <h1 className="text-2xl font-bold mb-6">Apply for {slug}</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Full Name"
//           required
//           className="w-full border p-3 rounded-lg"
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           required
//           className="w-full border p-3 rounded-lg"
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />

//         <input
//           type="text"
//           placeholder="Phone"
//           required
//           className="w-full border p-3 rounded-lg"
//           onChange={(e) => setForm({ ...form, phone: e.target.value })}
//         />

//         <textarea
//           placeholder="Cover Letter"
//           rows="4"
//           className="w-full border p-3 rounded-lg"
//           onChange={(e) => setForm({ ...form, message: e.target.value })}
//         />

//         <input
//           type="file"
//           accept=".pdf,.doc,.docx"
//           required
//           onChange={(e) => setCvFile(e.target.files[0])}
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-black text-white py-3 rounded-full"
//         >
//           {loading ? "Submitting..." : "Submit Application"}
//         </button>
//       </form>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { useRouter } from "next/router";

export default function JobApplyForm({ slug }) {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [cvFile, setCvFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cvFile) {
      alert("Please upload your CV");
      return;
    }

    setLoading(true);

    try {
      const base64File = await toBase64(cvFile);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ file: base64File }),
      });

      const uploadData = await uploadRes.json();

      if (!uploadData.url) {
        throw new Error("Upload failed");
      }

      const applicationData = {
        ...form,
        cv_url: uploadData.url,
        job_slug: slug,
      };

      console.log("Application:", applicationData);

      alert("Application submitted successfully!");
      router.push("/career");
    } catch (error) {
      alert("Something went wrong");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="w-full px-4 py-8">
      <div className="w-full max-w-2xl mx-auto bg-white border border-gray-200 shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Apply for {slug}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="text"
            placeholder="Phone"
            required
            className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <textarea
            placeholder="Cover Letter"
            rows="5"
            className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            required
            className="w-full"
            onChange={(e) => setCvFile(e.target.files[0])}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 text-lg font-semibold rounded-full hover:bg-gray-800 transition"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
