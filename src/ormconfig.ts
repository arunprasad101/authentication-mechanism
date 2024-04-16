import { ConnectionOptions } from 'typeorm';
import { Job } from './entity/job.entity';
import { UserDetails } from './entity/userDetails.entity';
export default {
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: true,
    autoLoadEntities: false,
    entities: [Job,UserDetails],
    migrations: ["dist/src/database/migrations/*{.ts,.js}"],
    synchronize: false,
    cli: {
        entitiesDir: "src/entities",
        migrationsDir: "src/database/migrations",
    }
} as ConnectionOptions;