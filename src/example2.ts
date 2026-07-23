interface DatabaseConfig {
    host: string;
    port: number;
    username: string;
    password: string;
}

interface Appconfig {
    appName: string;
    version: string;
    debug: boolean;
    port: number;
    database: DatabaseConfig;
    features: {
        registration: boolean;
        darkMode: boolean;
    };
}