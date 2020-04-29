declare module 'openmotics-types/notification' {
  export interface Notification extends NotificationBase {
    installationId: number;
    createdAt: number;
  }

  export interface NotificationBase {
    id: number;
    message: string;
    read: boolean;
    topic: string;
  }

  export interface NotificationApi extends NotificationBase {
    installation_id: number;
    created_at: number;
  }
}
