import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsManualService {
  soluctionHome(): string {
    return 'Soluçao de Home';
  }
}
