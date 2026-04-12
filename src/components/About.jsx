import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';

const About = () => {
  return (
    <section id="about" className="section bg-bg-surface/30">
      <div className="container">
        <h2 className="section-title">About</h2>

        <div className="mx-auto max-w-3xl">
          <p className="border-l-2 border-accent pl-5 text-lg leading-relaxed text-text-primary">
            Backend engineer at{' '}
            <span className="font-semibold text-text-primary">TCS</span> (Assistant Systems Engineer). I ship APIs,
            cloud-backed services, and automation that turns messy operational work into reliable systems.
          </p>

          <p className="mt-6 leading-relaxed text-text-muted">
            Earlier, I was a Backend AI intern at{' '}
            <span className="font-medium text-text-primary">Anervea.ai</span>, working in{' '}
            <span className="text-text-primary">FastAPI</span> and <span className="text-text-primary">MongoDB</span>{' '}
            on data-heavy features end to end.
          </p>

          <p className="mt-6 text-sm leading-relaxed text-text-muted">
            Outside day-to-day engineering: robotics competition (1st @ SGBAU), open source, green technology, and
            reading on automation and systems.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-bg-card px-4 py-4">
            <div className="font-mono text-2xl font-bold tabular-nums text-accent">50+</div>
            <div className="mt-1 text-sm font-medium text-text-primary">Freelance clients</div>
            <div className="mt-0.5 text-xs text-text-muted">Remote delivery, multiple regions</div>
          </div>
          <div className="rounded-xl border border-border bg-bg-card px-4 py-4">
            <div className="font-mono text-2xl font-bold tabular-nums text-accent">5.0</div>
            <div className="mt-1 text-sm font-medium text-text-primary">Fiverr rating</div>
            <div className="mt-0.5 text-xs text-text-muted">ashawin01</div>
          </div>
          <div className="rounded-xl border border-border bg-bg-card px-4 py-4 sm:col-span-1">
            <div className="text-sm font-medium leading-snug text-text-primary">Led a green-tech hackathon</div>
            <div className="mt-1 text-xs text-text-muted">Team leadership &amp; delivery</div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center">
          <a
            href="https://www.fiverr.com/ashawin01"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-sm font-medium text-accent underline-offset-4 transition-opacity hover:opacity-90 hover:underline"
          >
            Fiverr profile
            <HiOutlineExternalLink className="transition-transform group-hover:translate-x-0.5" aria-hidden />
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
