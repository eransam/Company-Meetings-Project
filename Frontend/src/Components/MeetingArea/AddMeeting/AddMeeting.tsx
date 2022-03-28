import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import GroupModel from "../../../Models/devGruopsModel";
import MeethingModel from "../../../Models/meetingModel";
import meethingService from "../../../Services/MeetingService";
import "./AddMeeting.css";

function AddMovie(): JSX.Element {

    const [groups, setgroups] = useState<GroupModel[]>([]);

    const { register, handleSubmit, formState } = useForm<MeethingModel>()

    const navigate = useNavigate();

    useEffect(() => {
        meethingService.getAllGroups()
            .then(groups => setgroups(groups))
            .catch(err => alert(err.message));
    }, []);

    async function submit(meething: MeethingModel): Promise<void> {
        try {
            const addedMeething = await meethingService.addMeething(meething);
            alert("meething added! ID: " + addedMeething.meetingsId);
            navigate("/meething");
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="Addmeething">

            <form onSubmit={handleSubmit(submit)}>


                <label>group: </label> <br/>
                <select defaultValue="" {...register("groupId", { required: { value: true, message: "Missing group" } })}>
                    <option disabled value="">Select Group</option>
                    {groups.map(c => <option key={c.groupId} value={c.groupId}>{c.groupName}</option>)}
                </select>
                <span>{formState.errors?.groupId?.message}</span>
                <br/> 


                <label>startTime: </label>
                <input type="datetime-local" {...register("startTime", { required: { value: true, message: "Missing startTime" } })} />
                <span>{formState.errors?.startTime?.message}</span>
                
                <label>endTime: </label>
                <input type="datetime-local" {...register("endTime", { required: { value: true, message: "Missing endTime" } })} />
                <span>{formState.errors?.endTime?.message}</span>

                <label>meetingDescription: </label>
                <input type="string" min="5" max="500" {...register("meetingDescription", { required: { value: true, message: "Missing meetingDescription" } })} />
                <span>{formState.errors?.meetingDescription?.message}</span>

                <label>meetingRoom: </label>
                <input type="string" min="1" max="500" {...register("meetingRoom", { required: { value: true, message: "Missing meetingRoom" } })} />
                <span>{formState.errors?.meetingDescription?.message}</span>

                <button>Add</button>

            </form>

        </div>
    );
}

export default AddMovie;
