import { DataSource, DataSourceOptions} from 'typeorm'
import {config} from "dotenv";
import { SeederOptions } from 'typeorm-extension';
config();

export const dataSourceOptions:DataSourceOptions & SeederOptions = {
    type:"postgres",
    host:process.env.DB_HOST,
    port:Number(process.env.DB_PORT),
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    entities:['dist/**/*.entity{.ts,.js}'],
    migrations:['dist/db/migrations/*{.ts,.js}'],
    seeds: ['dist/db/seeds/**/*{.ts,.js}'],
    logging:false,
    synchronize:false,
}

const dataSource = new DataSource(dataSourceOptions);
 export default dataSource;  