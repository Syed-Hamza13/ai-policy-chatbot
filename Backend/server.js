const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(cors());

/* Storage Config */

const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {

    const uniqueName =
      Date.now() + "-" + file.originalname;

    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

/* Upload Route */

app.post(
  "/upload",
  upload.array("files"),
  (req, res) => {

    res.json({
      success: true,
      files: req.files,
    });
  }
);

app.listen(7578, () => {

  console.log(
    "Server running on port 7578"
  );
});