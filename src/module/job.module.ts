import { Module } from '@nestjs/common';
import { JobController } from '../controller/job.controller';
import { JobService } from '../service/job.service';
import { JobRepository } from '../repository/job.repository';
import { Job } from '../entity/job.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDetails } from 'src/entity/userDetails.entity';
import { UserService } from 'src/service/auth.service';
import { UserRepository } from 'src/repository/userDetails.repository';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Job]),
    TypeOrmModule.forFeature([UserDetails])
  ],
  controllers: [JobController],
  providers: [JobService, JobRepository, UserService, UserRepository, JwtService],
})
export class JobModule {}