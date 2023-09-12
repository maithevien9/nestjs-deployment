import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongModule } from './song/song.module';

@Module({
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'mysql',
  //     host: 'sql6.freemysqlhosting.net',
  //     port: 3306,
  //     username: 'sql6641988',
  //     password: 'H7eZmi43Vs',
  //     database: 'sql6641988',
  //     autoLoadEntities: true,
  //   }),
  //   SongModule,
  // ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
