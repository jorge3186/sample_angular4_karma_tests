import { TestingUtils } from "../testing.utils";
import { Test2Component } from "../../src/components/test2.component";

import { ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

describe("Testing Component 2", () => {

	let fixture: ComponentFixture<Test2Component>;

	beforeEach(() => {

		TestingUtils.initEnv({
			components: [Test2Component]
		})

		fixture = TestingUtils.component(Test2Component);

	});

	it("Reading title", () => {

		let element = fixture.debugElement.query(By.css('h2'));
		fixture.detectChanges();

		expect(element.nativeElement.innerHTML).toEqual('This is component #2');
	});

});