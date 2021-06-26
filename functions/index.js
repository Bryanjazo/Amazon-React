const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors')
const stripe = require("stripe")('sk_test_51J3RPVGzEGg3Lz1M6bPeCcqjN4AUnWJKBafB1ebZ9QKZIuR2YAEssdSjuD0nd4jAkvgvRBbRWKBwLbOqO1mK6KHy00OW795KDM')

const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("total:", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//<y endPoint
//http://localhost:5001/clone-927bb/us-central1/api