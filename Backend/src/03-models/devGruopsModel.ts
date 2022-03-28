class DevGruopsModel {
    public groupId: number; // PK
    public groupName: string;

    public constructor(DevGruop: DevGruopsModel) {
        this.groupId = DevGruop.groupId;
        this.groupName = DevGruop.groupName;
    }
}

export default DevGruopsModel;

