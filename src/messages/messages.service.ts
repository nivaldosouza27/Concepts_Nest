import { Body, Injectable, NotFoundException, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessageEntity } from './entities/message.entity';

@Injectable()
export class MessagesService {
  private lastid = 1;
  private message: MessageEntity[] = [
    {
      id: 1,
      message: 'Esta é a primeira Mensagem',
      sender: 'Nivaldo de Souza Martins',
      recipient: 'João da Silva Pereira',
      createdAt: new Date(),
      isRead: false,
    },
  ];

  findAll() {
    return this.message;
  }

  findById(id: string) {
    const message = this.message.find(item => item.id === +id);
    if (!message)
      throw new NotFoundException('Nao existe nenhuma mensagem com este id');
    return message;
  }

  createMessage(createMessageDto: CreateMessageDto) {
    this.lastid++;
    const id = this.lastid;
    const newMessage = {
      id,
      ...createMessageDto,
      isRead: false,
      createdAt: new Date(),
    };
    this.message.push(newMessage);

    return newMessage;
  }

  updateMessage(
    @Param('id') id: string,
    @Body() updateMessageDto: UpdateMessageDto,
  ) {
    const messageExistsIndex = this.message.findIndex(item => item.id === +id);

    if (messageExistsIndex < 0) {
      throw new NotFoundException('Mensagem nao encontrada');
    }

    const existsMessage = this.message[messageExistsIndex];

    this.message[messageExistsIndex] = {
      ...existsMessage,
      ...updateMessageDto,
    };

    return this.message[messageExistsIndex];
  }

  removeMessage(@Param('id') id: string) {
    const existsMessage = this.message.findIndex(item => item.id === +id);

    if (existsMessage >= 0) {
      this.message.splice(existsMessage, 1);
    }
  }
}
