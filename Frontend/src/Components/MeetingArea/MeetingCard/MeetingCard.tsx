import { SyntheticEvent } from "react";
import meetingModel from "../../../Models/meetingModel";
import meetingService from "../../../Services/MeetingService";
import "./MeetingCard.css";

interface MeethingCardProps {
    meeting: meetingModel;
    deleteMeething: (meetingId: number) => void; // (movieId: number) => void  --> is a function type getting a number, returning void
}

function meetingCard(props: MeethingCardProps): JSX.Element {

    function formatDateTime(dateTime: string): string {
        const d = new Date(dateTime);
        return d.toLocaleString();
    }

    // // First way (for table display) 
    // async function deleteMovie(movieId: number) {
    //     alert(movieId);
    // }

    // // Second way (for cards):
    // async function deleteMovie() {
    //     try {
    //         await moviesService.deleteMovie(props.movie.movieId);
    //         alert("Movie has been deleted");
    //     }
    //     catch (err: any) {
    //         alert(err.message);
    //     }
    // }

    return (
        <div className="meethingCard">


            <button className="delete" onClick={() => props.deleteMeething(props.meeting.meetingsId)}>❌</button>

            <span>meetingsId: {props.meeting.meetingsId}</span>
            <br />
            <span>groupId: {props.meeting.groupId}</span>
            <br />
            <span>meetingDescription: {props.meeting.meetingDescription}</span>
            <br />
            <span>meetingRoom: {props.meeting.meetingRoom}</span>
            <br />
            <span>startTime: {formatDateTime(props.meeting.startTime)}</span>
            <br />
            <span>endTime: {formatDateTime(props.meeting.endTime)}</span>
            

        </div>
    );
}

export default meetingCard;
