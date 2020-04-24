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
