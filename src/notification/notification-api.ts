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
