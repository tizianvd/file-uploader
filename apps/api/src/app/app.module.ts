import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesModule } from '@file-uploader/files';
import { UsersController, UsersModule, AuthModule} from '@file-uploader/users'


@Module({
  imports: [FilesModule, UsersModule, AuthModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
