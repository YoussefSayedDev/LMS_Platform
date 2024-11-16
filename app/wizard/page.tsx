"use client";
import { Alert } from "@/components/ui/alert"; // ShadCN Alert component
import { Button } from "@/components/ui/button"; // ShadCN Button component
import { Card } from "@/components/ui/card"; // ShadCN Card component
import { Input } from "@/components/ui/input"; // ShadCN Input component
import { useState } from "react";

const OnboardingWizard = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleRoleSelection = (selectedRole: string) => {
    setRole(selectedRole);
    nextStep();
  };

  return (
    <div className="mx-auto flex h-screen max-w-2xl flex-col items-center justify-center p-5">
      {/* Progress Bar */}
      <div className="mb-8 w-full">
        <div className="relative pt-1">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-lg font-semibold text-primary">
              Step {step}/4
            </span>
          </div>
          <div className="mb-4 flex h-2">
            <div
              className={`h-full w-${(step / 4) * 100}% rounded bg-blue-500`}
              style={{ transition: "width 0.3s ease" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Step Content */}
      {step === 1 && (
        <Card className="w-full space-y-6 rounded-lg p-8 shadow-lg">
          <h3 className="text-center text-xl font-semibold">
            Step 1: Select Your Role
          </h3>
          <div className="flex flex-col items-center gap-6">
            <Button
              variant="outline"
              className="w-48"
              onClick={() => handleRoleSelection("student")}
            >
              Student
            </Button>
            <Button
              variant="outline"
              className="w-48"
              onClick={() => handleRoleSelection("teacher")}
            >
              Teacher
            </Button>
            <Button
              variant="outline"
              className="w-48"
              onClick={() => handleRoleSelection("parent")}
            >
              Parent
            </Button>
          </div>
        </Card>
      )}

      {step === 2 && (
        <Card className="w-full space-y-6 rounded-lg p-8 shadow-lg">
          <h3 className="text-center text-xl font-semibold">
            Step 2: Enter Your Information
          </h3>
          <Input
            className="w-full rounded-md p-4"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            className="w-full rounded-md p-4"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Card>
      )}

      {step === 3 && (
        <Card className="w-full space-y-6 rounded-lg p-8 shadow-lg">
          <h3 className="text-center text-xl font-semibold">
            Step 3: Confirm Your Information
          </h3>
          <Alert className="bg-yellow-100 text-yellow-700">
            Please confirm that the information you provided is correct.
          </Alert>
          <div className="rounded-md border bg-gray-100 p-6">
            <h4 className="text-lg font-medium">Role: {role}</h4>
            <h4 className="text-lg font-medium">Name: {name}</h4>
            <h4 className="text-lg font-medium">Email: {email}</h4>
          </div>
        </Card>
      )}

      {step === 4 && (
        <Card className="w-full space-y-6 rounded-lg p-8 shadow-lg">
          <h3 className="text-center text-xl font-semibold">
            Welcome, {name}!
          </h3>
          <p className="text-center">
            You&apos;re now all set up as a {role}. Redirecting you to your
            dashboard...
          </p>
        </Card>
      )}

      {/* Navigation Buttons */}
      <div className="mt-8 flex w-full justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={step === 1}
          className="w-32 py-2"
        >
          Previous
        </Button>
        <Button onClick={nextStep} className="w-32 py-2">
          {step === 4 ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingWizard;
