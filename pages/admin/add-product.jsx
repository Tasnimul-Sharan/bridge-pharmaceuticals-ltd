// // "use client";
// // import { supabase } from "@/lib/supabase";
// // import { useState } from "react";

// // export default function AddProduct() {
// //   const [form, setForm] = useState({
// //     slug: "",
// //     name: "",
// //     generic: "",
// //     images: "",
// //     description: "",
// //   });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const { error } = await supabase.from("products").insert([
// //       {
// //         ...form,
// //         images: form.images.split(","),
// //       },
// //     ]);

// //     if (error) alert(error.message);
// //     else alert("Product added!");
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-4">
// //       <input
// //         placeholder="Slug"
// //         onChange={(e) => setForm({ ...form, slug: e.target.value })}
// //       />
// //       <input
// //         placeholder="Name"
// //         onChange={(e) => setForm({ ...form, name: e.target.value })}
// //       />
// //       <input
// //         placeholder="Generic"
// //         onChange={(e) => setForm({ ...form, generic: e.target.value })}
// //       />
// //       <textarea
// //         placeholder="Images (comma separated)"
// //         onChange={(e) => setForm({ ...form, images: e.target.value })}
// //       />
// //       <textarea
// //         placeholder="Description"
// //         onChange={(e) => setForm({ ...form, description: e.target.value })}
// //       />
// //       <button type="submit">Save</button>
// //     </form>
// //   );
// // }

// import { useState } from "react";
// import { supabase } from "@/lib/supabase";

// export default function AddProductPage() {
//   const [form, setForm] = useState({
//     slug: "",
//     name: "",
//     generic: "",
//     images: "",
//     description: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { error } = await supabase.from("products").insert([
//       {
//         ...form,
//         images: form.images.split(","),
//       },
//     ]);

//     if (error) alert(error.message);
//     else alert("Product added!");
//   };

//   return (
//     <div className="p-10">
//       <h1 className="text-xl mb-4">Add Product</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           className="border p-2 w-full"
//           placeholder="Slug"
//           onChange={(e) => setForm({ ...form, slug: e.target.value })}
//         />

//         <input
//           className="border p-2 w-full"
//           placeholder="Name"
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//         />

//         <input
//           className="border p-2 w-full"
//           placeholder="Generic"
//           onChange={(e) => setForm({ ...form, generic: e.target.value })}
//         />

//         <textarea
//           className="border p-2 w-full"
//           placeholder="Images (comma separated)"
//           onChange={(e) => setForm({ ...form, images: e.target.value })}
//         />

//         <textarea
//           className="border p-2 w-full"
//           placeholder="Description"
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//         />

//         <button className="bg-black text-white px-4 py-2">Save</button>
//       </form>
//     </div>
//   );
// }
