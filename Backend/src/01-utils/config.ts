class Config {

}

class DevelopmentConfig extends Config {
    public isDevelopment = true;
    public mysql = { host: "localhost", user: "root", password: "", database: "company" };
}

class ProductionConfig extends Config {
    public isDevelopment = false;
    public mysql = { host: "eu-cdbr-west-02.cleardb.net", user: "b3396b06f575cc", password: "2ef1db13", database: "heroku_a7fa65c2ea15374" };
}

const config = process.env.NODE_ENV === "production" ? new ProductionConfig() : new DevelopmentConfig();

export default config;
