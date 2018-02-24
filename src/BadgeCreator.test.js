import React from 'react';
import { percentOfGoal, badgeCreator } from './badgeCreator';

describe("BadgeCreator", () => {
  it("the percent of goal function should get the percentage of two numbers", () => {
    const results = percentOfGoal(5,10);
    expect(results).toEqual(50);
  })

  it("the badgeCreator should create jsx badges", () => {
    const results = badgeCreator(5, 10, "ride", "miles", "mtn")
    expect(typeof results).toEqual("object")
  })
})