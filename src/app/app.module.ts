import { Module } from '@nestjs/common';
// import { StatusMonitorModule } from 'nest-status-monitor';
import { AppController } from './controller/app.controller';
import { HealthController } from './controller/health.controller';
import { AppService } from './service/app.service';

// const portNumber = parseInt(process.env.PORT) || 3000;
// const statusMonitorConfig = {
//   pageTitle: 'Nest.js Status Monitor', // Default title
//   path: '/status',
//   port: 443,
//   spans: [
//     {
//       interval: 1, // Every second
//       retention: 60, // Keep 60 datapoints in memory
//     },
//     {
//       interval: 5, // Every 5 seconds
//       retention: 60,
//     },
//     {
//       interval: 15, // Every 15 seconds
//       retention: 60,
//     },
//   ],
//   healthChecks: [
//     {
//       protocol: 'http',
//       host: 'localhost',
//       path: '/health/alive',
//       port: portNumber,
//     },
//     {
//       protocol: 'http',
//       host: 'localhost',
//       path: '/health/dead',
//       port: portNumber,
//     },
//   ],
//   chartVisibility: {
//     cpu: true,
//     mem: true,
//     load: true,
//     responseTime: true,
//     rps: true,
//     statusCodes: true,
//   },
//   ignoreStartsWith: '/health/alive',
// };

@Module({
  // imports: [StatusMonitorModule.setUp(statusMonitorConfig)],
  controllers: [AppController, HealthController],
  providers: [AppService],
})

export class MainAppModule {}
