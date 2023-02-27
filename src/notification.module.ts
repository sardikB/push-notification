import { DynamicModule, Module, Provider } from '@nestjs/common';
import { NotificationService } from './notification.service';


@Module({})
export class NotificationModule {
    static forRoot(options): DynamicModule {
        const notification = new NotificationService(options)
        const providers:Provider = {
            provide: NotificationService,
            useValue: notification
        }

        return {
            module:NotificationModule,
            providers:[providers],
            exports:[providers],
            global:true
        }
    }
}
