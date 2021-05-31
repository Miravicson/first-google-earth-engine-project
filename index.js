require("dotenv").config();

const EarthEngine = require("@google/earthengine");
const { Router } = require("express");
const privateKey = require("./private-key.json");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_EARTH_API_KEY;


function runAnalytics() {
  // Do your main stuff here

  const image = new EarthEngine.Image("srtm90_v4");
  image.getMap({ min: 0, max: 1000 }, function (map) {
    console.log(map);
  });

  console.log("I am running analysis...");
}

function reportError(error) {
  console.error("Initialization error: " + error);
}

function InitializeEGClient() {
  EarthEngine.initialize(null, null, runAnalytics, reportError);
}

function handleAuthenticationError(error) {
  console.error("Authentication error: " + error);
}

function handleAuthenticateViaPopUp() {
  EarthEngine.data.authenticateViaPopup(InitializeEGClient);
}

EarthEngine.data.authenticateViaPrivateKey(
  privateKey,
  InitializeEGClient,
  handleAuthenticationError
);
