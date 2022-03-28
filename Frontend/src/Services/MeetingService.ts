import axios from "axios";
import GroupModel from "../Models/devGruopsModel";
import MeetingModel from "../Models/meetingModel";
import config from "../Utils/Config";

class MeethingService {

    public async getAllGroups(): Promise<GroupModel[]> {
        const response = await axios.get<GroupModel[]>(config.groupsUrl);
        return response.data;
    }

    public async getMeethingByGroup(groupId: number): Promise<MeetingModel[]> {
        const response = await axios.get<MeetingModel[]>(config.meetingPerGroup + groupId);
        return response.data;
    }

    public async addMeething(meething: MeetingModel): Promise<MeetingModel> {
        const response = await axios.post<MeetingModel>(config.addMeeting, meething);
        return response.data;
    }

    public async deleteMeething(meethingId: number): Promise<void> {
        await axios.delete(config.addMeeting + meethingId);
    }

}

const meethingService = new MeethingService();

export default meethingService;