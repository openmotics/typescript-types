import { Feature } from "./installation";
export interface InstallationUpdateApi {
    id: number;
    description: string;
    to_version: {
        version: string;
    };
}
export interface InstallationApi {
    id: number;
    name: string;
    _acl: {
        configure: {
            allowed: boolean;
        };
        control: {
            allowed: boolean;
        };
        view: {
            allowed: boolean;
        };
    };
    flags: {
        ONLINE: boolean | null;
        UNREAD_NOTIFICATIONS: number | null;
        UPDATE_AVAILABLE?: InstallationUpdateApi;
    };
    features: {
        [featureName: string]: Feature;
    };
    gateway_features: string[];
    gateway_model: string;
    network?: {
        local_ip_address: string;
    };
    registration_key: string;
    user_role: {
        role: string;
        user_id: number;
    };
    version: string;
}
