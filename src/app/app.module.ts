import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceptsManualModule } from 'src/concetps-manual/concepts-manual.module';

@Module({
  imports: [ConceptsManualModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
