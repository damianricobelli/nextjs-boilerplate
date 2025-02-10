"use client"

import { defineStepper } from "@stepperize/react"
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { usePathnameStep } from "../hooks/use-pathname-step";

export const Stepper = defineStepper(
  { id: "step-1", title: "First" },
  { id: "step-2", title: "Second" },
  { id: "step-3", title: "Last" }
);

export function StepperProvider({children}: {children: React.ReactNode}) {
  const step = usePathnameStep()
  
  return (
    <Stepper.Scoped initialStep={step}>
      <div className="space-y-4 max-w-72">
        <StepperSteps/>
        {children}
        <StepperNavigation />
      </div>
    </Stepper.Scoped>
  )
}

function StepperSteps() {
  const stepper = Stepper.useStepper()
  return (
    <div className="flex gap-2 items-center">
      {Stepper.steps.map(step => {
        return (
          <span 
            key={step.id}
            data-current={stepper.current.id === step.id} 
            className="data-[current=true]:text-green-500">
              {step.id}
          </span>
        )
      })}
    </div>
  )
}

function StepperNavigation() {
  const stepper = Stepper.useStepper()
  const router = useRouter()

  return (
    <div className="flex justify-between">
    {!stepper.isLast ? (
      <>
        <button
          onClick={() => {
            stepper.beforePrev(async () => {
              const prevStep = Stepper.utils.getPrev(stepper.current.id)
              router.push(`/${prevStep.id}`)
              return true
            })
          }}
          disabled={stepper.isFirst}
        >
          Previous
        </button>

        <button 
          onClick={() => {
            stepper.beforeNext(() => {
              const nextStep = Stepper.utils.getNext(stepper.current.id)
              router.push(`/${nextStep.id}`)
              return true
            })
          }}
        >
          {stepper.when(
            "step-3",
            () => "Finish",
            () => "Next"
          )}
        </button>
      </>
    ) : (
      <button 
        onClick={() => {
          const firstStep = Stepper.utils.getFirst()
          router.push(`/${firstStep.id}`)
          stepper.goTo(firstStep.id)
        }}
      >
        Reset
      </button>
    )}
  </div>
  )
}

export type Step = typeof Stepper.steps[number]["id"]
  