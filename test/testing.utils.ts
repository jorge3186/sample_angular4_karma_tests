import "core-js";
import "zone.js/dist/zone";
import "zone.js/dist/long-stack-trace-zone";
import "zone.js/dist/proxy";
import "zone.js/dist/sync-test";
import "zone.js/dist/jasmine-patch";
import "zone.js/dist/async-test";
import "zone.js/dist/fake-async-test";

import { TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

export interface TestEnvConfig {

	services?: any[];
	components?: any[];
	imports?: any[];

}

export class TestingUtils {

	private static initialized: boolean;

	static initEnv(config: TestEnvConfig): void {

		if (!this.initialized) {
			TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
			this.initialized = true;
		}
		
		TestBed.configureTestingModule({
			providers: config.services,
			declarations: config.components,
			imports: config.imports
		});
	}

	static component(component:any): any {
		return TestBed.createComponent(component);
	}

}