import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeRefactor1660713219613 } from 'src/migrations/1660713219613-CoffeRefactor';
import { SchemaSync1660714199003 } from 'src/migrations/1660714199003-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeRefactor1660713219613, SchemaSync1660714199003],
});
