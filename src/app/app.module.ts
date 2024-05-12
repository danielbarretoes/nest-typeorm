import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-steep-snow-a2lijdwn-pooler.eu-central-1.aws.neon.tech',
      port: 5432,
      username: 'default',
      password: 'kh6K4yVBnIaL',
      database: 'verceldb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Only dev.
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
