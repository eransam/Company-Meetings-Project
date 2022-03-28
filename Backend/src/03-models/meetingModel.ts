class DevGruopsModel {
    public meetingsId: number; // PK
    public groupId: number;
    public startTime: string;
    public endTime: string;
    public meetingDescription: string;
    public meetingRoom: string;


    public constructor(DevGruop: DevGruopsModel) {
        this.meetingsId = DevGruop.meetingsId;
        this.groupId = DevGruop.groupId;
        this.startTime = DevGruop.startTime;
        this.endTime = DevGruop.endTime;
        this.meetingDescription = DevGruop.meetingDescription;
        this.meetingRoom = DevGruop.meetingRoom;

    }
}

export default DevGruopsModel;

