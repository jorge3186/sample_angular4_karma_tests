import { TestingUtils } from "../testing.utils";
import { TestComponent } from "../../src/components/test.component";

import { DebugElement } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

describe("Test Component", () => {

    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {

        TestingUtils.initEnv({
            components: [TestComponent]
        })

        fixture = TestingUtils.component(TestComponent);
    });

    it("should display original title", () => {

        let element = fixture.debugElement.query(By.css('h1'));
        fixture.detectChanges();

        expect(element.nativeElement.textContent).toEqual("Hi There");
    });

    it("shold have a new title", () => {

        let element = fixture.debugElement.query(By.css('h1'));
        fixture.componentInstance.title = 'Changed Title';
        fixture.detectChanges();

        expect(element.nativeElement.textContent).toEqual('Changed Title');
    });

});