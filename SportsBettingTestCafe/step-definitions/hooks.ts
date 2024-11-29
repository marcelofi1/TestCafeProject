import { Before } from "@cucumber/cucumber";
import { t } from "testcafe";

let startTime: Date;

Before(async () => {
  startTime = new Date();
  await t.maximizeWindow();
});
