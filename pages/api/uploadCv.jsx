import { v2 as cloudinary } from "cloudinary";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { file } = req.body;

    if (!file) {
      return res.status(400).json({ message: "No file provided" });
    }

    const upload = await cloudinary.uploader.upload(file, {
      folder: "cv",
      resource_type: "auto",
      public_id: `cv_${Date.now()}`,
    });

    res.status(200).json({
      url: upload.secure_url,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
