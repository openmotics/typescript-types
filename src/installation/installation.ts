/*
 * Copyright (C) 2020 OpenMotics BV
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

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
    updateAvailable: InstallationUpdate | null;
    unreadNotifications: number | null;
  };
  features: { [featureName: string]: Feature };
  gatewayFeatures: string[];
  gatewayModel: string;
  network?: {
    localIpAddress: string;
  };
  registrationKey: string;
  userRole: {
    role: string;
    userId: number;
  };
  version: string;
}
