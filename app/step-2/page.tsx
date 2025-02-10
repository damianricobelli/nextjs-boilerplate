"use client"

import * as React from "react"
import { Stepper } from "../components/stepper";
import { ContentContainer } from "../components/content-container";
import { usePathnameStep } from "../hooks/use-pathname-step";

export default function StepTwoPage() {

  const { match } = Stepper.useStepper();

  const step = usePathnameStep()

  return (
    <ContentContainer>
      {match(step, {
        "step-2": () => "Step 2 content"
      })}
    </ContentContainer>
  )
}
