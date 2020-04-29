declare module 'openmotics-types/installation' {
  export interface InstallationApi {
    id: number;
    name: string;
    _acl: {
      configure: {
        allowed: boolean;
      },
      control: {
        allowed: boolean;
      },
      view: {
        allowed: boolean;
      }
    };
    flags: {
      ONLINE: boolean | null;
      UNREAD_NOTIFICATIONS: number | null;
      UPDATE_AVAILABLE?: InstallationUpdate;
    };
    features: { [featureName: string]: Feature };
    gateway_features: string[];
    gateway_model: string;
    network: {
      local_ip_address: string;
    },
    registration_key: string;
    user_role: {
      role: string;
      user_id: number;
    };
    version: string;
  }

  export interface Feature {
    available: boolean;
    metadata: any;
    used: boolean;
  }

  export interface InstallationUpdate {
    id: number;
    description: string;
    to_version: {
      version: string;
    };
  }

  export interface Installation {
    id: number;
    name: string;
    flags: {
      ONLINE: boolean | null;
      updateAvaliable: InstallationUpdate | null;
      unreadNotifications: number | null;
    };
    features: { [featureName: string]: Feature };
    gatewayFeatures: string[];
    gatewayModel: string;
    network: {
      localIpAddress: string;
    };
    registrationKey: string;
    userRole: {
      role: string;
      userId: number;
    };
    version: string;
  }
}