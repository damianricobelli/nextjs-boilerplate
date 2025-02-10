"use client"

import * as React from "react"
import { Stepper } from "../components/stepper";
import { ContentContainer } from "../components/content-container";
import { usePathnameStep } from "../hooks/use-pathname-step";

export default function StepThreePage() {

  const { match } = Stepper.useStepper();

  const step = usePathnameStep()

  return (
    <ContentContainer>
      {match(step, {
        "step-3": () => "Step 3 content"
      })}
    </ContentContainer>
  )
}
