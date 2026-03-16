/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {TestrayBuildsCases} from '.';
import Rest from '../../core/Rest';
import SearchBuilder from '../../core/SearchBuilder';
import {CategoryOptions} from '../../pages/Project/Routines/Builds/BuildForm/Stack/RunsList';
import yupSchema from '../../schema/yup';
import {CaseResultStatuses} from '../../util/statuses';
import fetcher from '../fetcher';
import {testrayCaseResultImpl} from './TestrayCaseResult';
import {testrayFactorRest} from './TestrayFactor';
import {testrayRunImpl} from './TestrayRun';

import type {
	APIResponse,
	TestrayBuild
} from './types';

class TestrayBuildSummaryImpl {
	
	public updateBuildSummary(testrayTeamIds: string) {
		return fetcher.patch(`/testray-build-summary/${testrayTeamIds}`, null);
	}

	
}

export const testrayBuildSummaryImpl = new TestrayBuildSummaryImpl();
