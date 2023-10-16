//authorize the app
const { google } = require("googleapis");
const sheets = google.sheets("v4");
const credentials = require("./.gitignore/creds.json");

const auth = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

//express.js server for submissions
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    // Serve your HTML template
    res.sendFile(__dirname + "/contact.html");
  });

    // Handle form submissions
app.post("/submit-form", async (req, res) => {
  const { name, email } = req.body; // Assuming your form fields are named "name" and "email"

    //generate timestamp
    const timestamp = new Date().toLocaleString('en-US', { hour12: false }).replace(",", "");

    // Use the Google Sheets API to append the data to your Google Sheet
    await sheets.spreadsheets.values.append({
        auth,
        spreadsheetId: "1vGIiEAOWhAZF8y4hgQMb665qNUd5iGF4SPgSEvUFWHM",
        range: "TestSheet!B:C",
        valueInputOption: "RAW",
        resource: {
            values: [
                [timestamp, name, email]
            ]
        }
    });
    res.status(200).send("Form submitted successfully!");
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
