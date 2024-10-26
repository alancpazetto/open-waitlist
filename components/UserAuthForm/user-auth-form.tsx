"use client";

import * as m from "@/paraglide/messages";
import { Loader } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onSubmit =
    (type: "login" | "register") => async (event: React.SyntheticEvent) => {
      console.log({ type });
      event.preventDefault();
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {m.loginOrCreateAccount()}
        </h1>
        <p className="text-sm text-muted-foreground">
          {m.loginFillEmailToLogin()}
        </p>
      </div>
      <form onSubmit={onSubmit("login")}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              {m.email()}
            </Label>
            <Input
              id="email"
              placeholder={m.loginEmailPlaceholder()}
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            {m.loginEnter()}
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {m.loginOrCreateAnAccount()}
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {m.loginCreateAccount()}
        </h1>
        <p className="text-sm text-muted-foreground">
          {m.loginFillEmailToCreateAccount()}
        </p>
      </div>
      <form onSubmit={onSubmit("register")}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              {m.email()}
            </Label>
            <Input
              id="email"
              placeholder={m.loginEmailPlaceholder()}
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            {m.loginCreateAccountButton()}
          </Button>
        </div>
      </form>
    </div>
  );
}
