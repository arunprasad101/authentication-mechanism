// job/job.controller.ts
import { Controller, Post, Get, Param, Body, NotFoundException, Res, HttpStatus, Req } from '@nestjs/common';
import { JobService } from '../service/job.service';
import { Job } from 'src/entity/job.entity';
import { UserService } from 'src/service/auth.service';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService,
    private readonly authService: UserService

  ) { }

  @Post()
  async submitJob(@Res() res: any, @Body() jobDto: Job, @Req() req: Request) {
    const contentLengthBytes = parseInt(req.headers['content-length'], 10); // Get the size of the request body in bytes
    const contentLengthKB = (contentLengthBytes / 1024).toString();
    console.log("contentLength",contentLengthKB)
    let result = await this.jobService.submitJob(jobDto,contentLengthKB);
    if (!result) return null;
    return res.status(HttpStatus.CREATED).json(result);
  }

  @Get(':id/status')
  async getJobStatus(@Res() res, @Param('id') jobId: number) {
    let result = await this.jobService.getJobStatus(jobId);
    if (result) return res.status(HttpStatus.OK).json(result);
    return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'User is not authorized' });
  }
}
