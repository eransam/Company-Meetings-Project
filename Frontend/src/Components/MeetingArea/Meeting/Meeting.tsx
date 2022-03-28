import { SyntheticEvent, useEffect, useState } from "react";
import devGruopsModelModel from "../../../Models/devGruopsModel";
import meetingModel from "../../../Models/meetingModel";
import meetingService from "../../../Services/MeetingService";
import MeetingCard from "../MeetingCard/MeetingCard";
import "./Meeting.css";

function Meeting(): JSX.Element {

    const [gruops, setgruops] = useState<devGruopsModelModel[]>([]);
    const [meeting, setmeeting] = useState<meetingModel[]>([]);

    useEffect(() => {
        meetingService.getAllGroups()
            .then(groups => setgruops(groups))
            .catch(err => alert(err.message));
    }, []);

    async function handleChange(args: SyntheticEvent) {
        try {
            const groupId = +(args.target as HTMLSelectElement).value;
            const meething = await meetingService.getMeethingByGroup(groupId);
            setmeeting(meething);
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    async function deleteMeething(meetingsId: number) {
        try {
            await meetingService.deleteMeething(meetingsId);
            alert("meeting has been deleted");
            const newMeeting = [...meeting];
            const indexToDelete = newMeeting.findIndex(m => m.meetingsId === meetingsId);
            newMeeting.splice(indexToDelete, 1);
            setmeeting(newMeeting);
        }
        catch (err: any) {
            alert(err.message);
     }
    }

    return (
        <div className="Meething">

            <select defaultValue="" onChange={handleChange}>
                <option disabled value="">Select Group</option>
                {gruops.map(c => <option key={c.groupId} value={c.groupId}>{c.groupName}</option>)}
            </select>

            <br />

            <div className="container">
                {meeting.map(m => <MeetingCard key={m.meetingsId} meeting={m} deleteMeething={deleteMeething} />)}
            </div>

        </div>
    );
}

export default Meeting;
