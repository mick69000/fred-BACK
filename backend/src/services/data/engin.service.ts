import { Engin } from '../../models/data/engin.model';
import { AppDataSource } from '../../config/database';

export class EnginService {
  private enginRepository = AppDataSource.getRepository(Engin);

  async getEngins(type: string) {
    return await this.enginRepository.find();
  }

  async getAllEngins() {
    return await this.enginRepository.find();
  }

  async deleteEngin(numero: string) {
    await this.enginRepository.delete(numero);
  }

  async addEngin(type: string, numero: string) {
    const newEngin = this.enginRepository.create({ type, numero });
    return await this.enginRepository.save(newEngin);
  }
}
