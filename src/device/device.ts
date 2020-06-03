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

import { User } from "../user";

/**
 * 
 * A Device object represents device connecting to the API.
 * This might for example be a mobile app, or a webinterface.
 * 
 * @param deviceId - The device id
 * @param platformName - Name of the platform (e.g. ANDROID, IOS, CHROME, ...)
 * @param platformVersion - Platform version
 * @param appVersion - Version of the application itself
 * @param lastUpdated: When the device was updated
 * @param user: User object or null if unlinked {@link User}
 */
export interface Device {
  deviceId: number;
  platformName: string;
  platformVersion: string;
  appVersion: string;
  lastUpdated: number;
  user: User;
}
