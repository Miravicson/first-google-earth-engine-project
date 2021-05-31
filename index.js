require('dotenv').config()

const EarthEngine = require('@google/earthengine');
const {Router}  = require('express');

const GOOGLE_CLIENT_ID = process.env.GOOGLE_EARTH_API_KEY;

const TIMESERIES_URL 'https://code.googleearthengine.com/time-sries';
const IMAGE_URL 'https://code.googleearthengine.com/images';


function runAnalytics() {
 // Do your main stuff here
}

function reportError(error) {
  console.error('Initialization error: ' + e);
}



function InitializeEGClient() {

  EarthEngine.initialize(null, null, runAnalytics, reportError)

}

function handleAuthenticationError(error) {
  console.error('Authentication error: ' + e);
}

function handleAuthenticateViaPopUp() {
  EarthEngine.data.authenticateViaPopup(InitializeEGClient)
}


EarthEngine.data.authenticateViaOauth(GOOGLE_CLIENT_ID, InitializeEGClient, handleAuthenticationError, null, handleAuthenticateViaPopUp);




