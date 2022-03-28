import { OkPacket } from "mysql";
import devGruopsModel from "../03-models/devGruopsModel";
import ErrorModel from "../03-models/error-model";
import meetingModel from "../03-models/meetingModel";
import dal from "../04-dal/dal";

async function getAllDevGruops(): Promise<devGruopsModel[]> {
    const sql = "SELECT * FROM developmentgroups";
    const cinemas = await dal.execute(sql);
    return cinemas;
}

async function getMeetingByGroup(GroupId: number): Promise<meetingModel[]> {

     const sql = `SELECT developmentgroups.groupName, meetings.*
                 FROM developmentgroups JOIN meetings
                 ON developmentgroups.groupId = meetings.groupId
                 WHERE meetings.groupId = ?`;

    const movies = await dal.execute(sql, [GroupId]);
    return movies;
}

async function addMeeting(Meeting: meetingModel): Promise<meetingModel> {

    const sql = "INSERT INTO meetings VALUES(DEFAULT, ?, ?, ? ,? ,?)";

    const info: OkPacket = await dal.execute(sql, [Meeting.groupId, Meeting.startTime, Meeting.endTime, Meeting.meetingDescription, Meeting.meetingRoom]);

    Meeting.meetingsId = info.insertId;

    return Meeting;
}


async function deleteMeeting(movieId: number): Promise<void> {
    const sql = "DELETE FROM meetings WHERE meetingsId = ?";
    await dal.execute(sql, [movieId]);
}


export default {
    getAllDevGruops,
    getMeetingByGroup,
    addMeeting,
    deleteMeeting
};

