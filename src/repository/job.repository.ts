import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Job } from "src/entity/job.entity";

@Injectable()
export class JobRepository {
    constructor(
        @InjectRepository(Job)
        private jobRepository: Repository<Job>,
    ) { }

    persist(item: Job) {
        return this.jobRepository.save(item);
    }

     async getId(id: number): Promise<Job> {
        return this.jobRepository.findOne({ where: { id } })
    }

}