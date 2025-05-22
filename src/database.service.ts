import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(private datasource: DataSource) {}
  async onModuleInit() {
    try {
      if (!this.datasource.isInitialized) {
        await this.datasource.initialize();
      }
      if (this.datasource.isInitialized) {
        console.log('✅ Database connected successfully');
      } else {
        console.log(' Database is not connected but no error was thrown');
      }
    } catch (error) {
      console.log(`❌ Database connection failed due to certain errors: ${error}`);
    }
  }
}
