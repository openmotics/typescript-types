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

import { UserApi } from "../user";

/**
 * 
 * A Device object represents device connecting to the API.
 * This might for example be a mobile app, or a webinterface.
 * 
 * @param device_id - The device id
 * @param platform_name - Name of the platform (e.g. ANDROID, IOS, CHROME, ...)
 * @param platform_version - Platform version
 * @param app_version - Version of the application itself
 * @param last_updated: When the device was updated
 * @param user: User object or null if unlinked {@link UserApi}
 */
export interface DeviceApi {
  device_id: number;
  platform_name: string;
  platform_version: string;
  app_version: string;
  last_updated: number;
  user: UserApi | null;
}
