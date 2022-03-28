
import dotenv from "dotenv";
dotenv.config(); 
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import config from "./01-utils/config";
import errorsHandler from "./02-middleware/errors-handler";
import ErrorModel from "./03-models/error-model";
import controller from "./06-controllers/controllers";
import path from "path";

const server = express();

if (config.isDevelopment) server.use(cors());
server.use(express.json());

const fronendDir = path.join(__dirname, "07 - fronted");
server.use(express.static(fronendDir));

server.use("/api", controller);

server.use("*", (request: Request, response: Response, next: NextFunction) => {
   if(config.isDevelopment){
    next(new ErrorModel(404, "Route not found."));
   }
   else{
       const indexHtmlFile = path.join(__dirname, "07 - fronted" , "index.html");
       response.sendFile(indexHtmlFile);
   }
});

server.use(errorsHandler);

server.listen(process.env.PORT, () => console.log("Listening..."));
