import express, { NextFunction, Request, Response } from "express";
import meetingModel from "../03-models/meetingModel";
import devGruopsModel from "../03-models/devGruopsModel";
import logic from "../05-logic/logic";

const router = express.Router();

router.get("/gruops", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const gruops = await logic.getAllDevGruops();
        response.json(gruops);
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/meeting-per-gruop/:gruopId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const gruopId = +request.params.gruopId;
        const meetings = await logic.getMeetingByGroup(gruopId);
        response.json(meetings);
    }
    catch (err: any) {
        next(err);
    }
});

router.post("/meeting", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const meeting = new meetingModel(request.body);
        const addedmeeting = await logic.addMeeting(meeting);
        response.status(201).json(addedmeeting);
    }
    catch (err: any) {
        next(err);
    }
});

router.delete("/meeting/:meetingId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const meetingId = +request.params.meetingId;
        await logic.deleteMeeting(meetingId);
        response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
});



export default router;