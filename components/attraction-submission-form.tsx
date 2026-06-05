"use client";

import { useActionState } from "react";
import {
  submitAttraction,
  type SubmitAttractionState,
} from "@/app/actions/submit-attraction";

const initialState: SubmitAttractionState = { status: "idle" };

export function AttractionSubmissionForm() {
  const [state, formAction, isPending] = useActionState(submitAttraction, initialState);

  return (
    <section className="info-panel">
      <p className="text-body text-muted">
        Forslag regsitreres ved innsending og blir synlige på opplevelser-siden. Det kan ta noen minutter.
      </p>

      <form action={formAction} className="space-y-4">
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="space-y-2">
          <label htmlFor="attraction-title" className="text-sm font-semibold uppercase tracking-[0.1em]">
            Tittel
          </label>
          <input
            id="attraction-title"
            name="title"
            type="text"
            required
            minLength={2}
            maxLength={120}
            disabled={isPending}
            placeholder="F.eks. Llangollen Railway"
            className="w-full border border-border bg-white px-4 py-3 text-base outline-none focus:border-foreground"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="attraction-url" className="text-sm font-semibold uppercase tracking-[0.1em]">
            URL
          </label>
          <input
            id="attraction-url"
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
