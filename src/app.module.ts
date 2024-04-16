import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobModule } from './module/job.module';
import { DatabaseModule } from './module/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './entity/job.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt/jwt.strategy';
import { UserDetails } from './entity/userDetails.entity';
import { UserRepository } from './repository/userDetails.repository';
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'anshul_secret', // Replace with your JWT secret key
      signOptions: { expiresIn: '1h' }, // Example expiration time
    }),
    TypeOrmModule.forFeature([Job, UserDetails]),
    DatabaseModule,
    JobModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy, UserRepository],
})
export class AppModule {}
