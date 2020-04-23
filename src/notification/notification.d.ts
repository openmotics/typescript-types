import { NotificationBase } from './notification-api';
export interface NotificationModel extends NotificationBase {
    installationId: number;
    createdAt: number;
}
