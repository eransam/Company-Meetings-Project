class Config { }

class DevelopmentConfig extends Config {
    public groupsUrl = "http://localhost:3001/api/gruops/";
    public meetingPerGroup = "http://localhost:3001/api/meeting-per-gruop/";
    public addMeeting = "http://localhost:3001/api/meeting/";
}

class ProductionConfig extends Config {
    public groupsUrl = "https://c-meetings.herokuapp.com/api/gruops/";
    public meetingPerGroup = "https://c-meetings.herokuapp.com/api/meeting-per-gruop/";
    public addMeeting = "https://c-meetings.herokuapp.com/api/meeting/";
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
