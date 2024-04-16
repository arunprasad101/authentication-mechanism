// job/job.service.ts
import { Injectable } from '@nestjs/common';
import { Job } from '../entity/job.entity';
import { JobRepository } from 'src/repository/job.repository';
import { UserService } from './auth.service';
import { verify } from 'jsonwebtoken';

@Injectable()
export class JobService {
  constructor(
    private readonly JobRepo: JobRepository,
    private readonly authService: UserService,
  ) {
  }

  async submitJob(image: Job, contentLength: string): Promise<any> {
    const token = await this.validate();
    image.tenentId = token.sub;
    image.clientId = token.clientId;
    image.payloadSize = contentLength + ' kb'
    image.email = token.username;
    await this.JobRepo.persist(image);
    return "Job created.";
  }

  async getJobStatus(id: number): Promise<any> {
    let data = await this.JobRepo.getId(id)
    const token = await this.validate();
    if (token['username'] === data.email) {
      return {Status: data.status};
    }
  }

  async validate(): Promise<any> {
    const privateKey = process.env.PRIVATE_KEY;
    const token = await this.authService.generateJwtToken()
    const decodedToken = verify(token, privateKey);
    return decodedToken
  }
}