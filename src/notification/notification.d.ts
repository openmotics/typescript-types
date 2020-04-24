import { NotificationBase } from './notification-api';
export interface Notification extends NotificationBase {
    installationId: number;
    createdAt: number;
}
