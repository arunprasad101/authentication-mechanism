import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserDetails } from "src/entity/userDetails.entity";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserDetails)
        private jobRepository: Repository<UserDetails>,
    ) { }

    persist(item: UserDetails) {
        return this.jobRepository.save(item);
    }

     async getUserId(id: number): Promise<UserDetails> {
        return this.jobRepository.findOne({ where: { id } })
    }

}