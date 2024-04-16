import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from 'src/entity/job.entity';
import { UserDetails } from 'src/entity/userDetails.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '',
      port: 5432,
      username: '',
      password: '',
      database: '',
      entities: [Job, UserDetails],
      synchronize: true, // Auto-create tables based on entities (for development only)
      ssl: true,
      autoLoadEntities: false,
    }),
  ],
})
export class DatabaseModule {}
