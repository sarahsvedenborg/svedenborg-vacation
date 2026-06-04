"use client";

import { useActionState } from "react";
import {
  submitRestaurant,
  type SubmitRestaurantState,
} from "@/app/actions/submit-restaurant";

const initialState: SubmitRestaurantState = { status: "idle" };

export function RestaurantSubmissionForm() {
  const [state, formAction, isPending] = useActionState(submitRestaurant, initialState);

  return (
    <section className="space-y-4 border border-border bg-surface p-6">
      <p className="text-body text-muted">
        Forslag publiseres med en gang og vises på mat-siden som et klikkbart kort.
      </p>

      <form action={formAction} className="space-y-4">
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="space-y-2">
          <label htmlFor="restaurant-title" className="text-sm font-semibold uppercase tracking-[0.1em]">
            Navn
          </label>
          <input
            id="restaurant-title"
            name="title"
            type="text"
            required
            minLength={2}
            maxLength={120}
            disabled={isPending}
            placeholder="F.eks. Bridge Inn"
            className="w-full border border-border bg-white px-4 py-3 text-base outline-none focus:border-foreground"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="restaurant-url" className="text-sm font-semibold uppercase tracking-[0.1em]">
            URL
          </label>
          <input
            id="restaurant-url"
            name="url"
            type="url"
            required
            disabled={isPending}
            placeholder="https://..."
            className="w-full border border-border bg-white px-4 py-3 text-base outline-none focus:border-foreground"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Sender inn …" : "Send inn forslag"}
        </button>

        {state.status === "error" && state.message ? (
          <p role="alert" className="text-sm text-red-700">
            {state.message}
          </p>
        ) : null}
      </form>
    </section>
  );
}
