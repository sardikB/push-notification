import * as firebase from 'firebase-admin';
import * as path from 'path';

export class NotificationService {
   constructor(
        configurationPath:string
        ) {
       firebase.initializeApp({
            credential: firebase.credential.cert(
                path.join(configurationPath),
            ),
        });
    }

    async sendNotification(
        NotificationTokens: string[],
        title: string,
        body: string,
    ) {
        return firebase.messaging().sendMulticast({
            notification: { title, body},
            tokens: NotificationTokens,
            android: { priority: 'high' },
        });
    }

    async notifyOneDevice(
        NotificationTokens: string,
        title: string,
        body: string,
    ) {
        return firebase.messaging().send({
            notification: { title, body },
            token: NotificationTokens,
            android: { priority: 'high' },
        });
    }
}
