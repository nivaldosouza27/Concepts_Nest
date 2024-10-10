import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessagesService) { }

  @Get('/list')
  findAll() {
    return this.messageService.findAll();
  }

  @Get('/list/:id')
  findById(@Param('id') id: string) {
    return this.messageService.findById(id);
  }

  @Post('/create')
  createMessage(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.createMessage(createMessageDto);
  }

  @Patch('/update/:id')
  updateMessage(
    @Param('id') id: string,
    @Body() updateMessageDto: UpdateMessageDto,
  ) {
    return this.messageService.updateMessage(id, updateMessageDto);
  }

  @Delete('/delete/:id')
  removeMessage(@Param('id') id: string) {
    return this.messageService.removeMessage(id);
  }
}
