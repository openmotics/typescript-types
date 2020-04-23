export interface NotificationBase {
    id: number;
    message: string;
    read: boolean;
    topic: string;
}
export interface NotificationApiModel extends NotificationBase {
    installation_id: number;
    created_at: number;
}
