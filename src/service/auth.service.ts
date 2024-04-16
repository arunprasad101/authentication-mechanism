// job/job.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/repository/userDetails.repository';

@Injectable()
export class UserService {
    constructor(
      private readonly UserDetailsRepo: UserRepository,
      private readonly jwtService: JwtService,
    ) {}
    
     async getUserStatus(id: number) {
      let result = await this.UserDetailsRepo.getUserId(id)
      return result;
    }

    async generateJwtToken(): Promise<string> {
      const data = await this.getUserStatus(1);
      const privateKey = process.env.PRIVATE_KEY;
      const clientId = process.env.client_id;
      const aud = process.env.aud_id;
      const payload = { sub: data.tenentId, username:data.email, clientId: clientId, aud: aud };
      let genToken = this.jwtService.sign(payload, { privateKey: privateKey });
      return genToken;
    }

  }