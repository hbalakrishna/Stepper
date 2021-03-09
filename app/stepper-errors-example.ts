import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { MatStepper } from "@angular/material";

/**
 * @title Stepper that displays errors in the steps
 */
@Component({
  selector: "stepper-errors-example",
  templateUrl: "stepper-errors-example.html",
  styleUrls: ["stepper-errors-example.css"],
  providers: []
})
export class StepperErrorsExample implements OnInit {
  tracks = [
    {
      id: "welcome",
      stepName: "Get Started",
      completed: false,
      skipable: false
    },
    {
      id: "bank",
      stepName: "Link a bank account",
      completed: false,
      editable: false
    },
    {
      id: "payment",
      stepName: "Schedule a payment",
      completed: false,
      editable: false
    },
        {
      id: "sync",
      stepName: "Sync accounting software",
      completed: false,
      editable: false
    }
  ];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  @ViewChild("stepper") stepper: MatStepper;

  constructor() {}

  ngOnInit() {}

  skipHandler(index) {
    this.tracks[index].completed = false;
    this.tracks[index].editable = true;
    this.stepper.selectedIndex = index + 1;
  }

  completeHandler(index) {
    this.tracks[index].editable = false;
    this.tracks[index].completed = true;
    console.log(this.tracks[index].completed);
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
