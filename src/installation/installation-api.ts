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

import { Feature, InstallationUpdate } from "./installation";

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
  network?: {
    local_ip_address: string;
  },
  registration_key: string;
  user_role: {
    role: string;
    user_id: number;
  };
  version: string;
}
