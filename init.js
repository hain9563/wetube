import app from "./app";

const PORT = 4000;

const handelListening = () => console.log("Listening on : 4000");

app.listen(PORT, handelListening);
