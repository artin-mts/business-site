'use client';

import { useState, FormEvent } from 'react';
import { CI_CONFIG, CI_FORM_OPTIONS } from '@/lib/creative-intelligence-config';

interface LeadFormProps {
  className?: string;
  compact?: boolean;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function LeadForm({ className = '', compact = false }: LeadFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [analyzingOwnBrand, setAnalyzingOwnBrand] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Honeypot check
    if (formData.get('website_url')) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
      return;
    }

    const data = {
      email: formData.get('email') as string,
      brand: formData.get('brand') as string,
      yourBrand: analyzingOwnBrand ? (formData.get('brand') as string) : (formData.get('your_brand') as string),
      spend: formData.get('spend') as string,
      role: formData.get('role') as string,
      notes: formData.get('notes') as string,
      timestamp: new Date().toISOString(),
      referrer: typeof window !== 'undefined' ? document.referrer : '',
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    // If form endpoint is configured, use it
    if (CI_CONFIG.formEndpoint) {
      try {
        const response = await fetch(CI_CONFIG.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setStatus('success');
          form.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch {
        setStatus('error');
        setErrorMessage('Something went wrong. Please email us directly.');
      }
    } else {
      // Fallback to mailto
      const subject = encodeURIComponent(`Ad Library Breakdown Request: ${data.brand}`);
      const body = encodeURIComponent(
        `Brand to analyze: ${data.brand}\n` +
        `Your brand/website: ${data.yourBrand}\n` +
        `Monthly Meta spend: ${data.spend}\n` +
        `Role: ${data.role}\n` +
        `Notes: ${data.notes || 'None'}\n` +
        `\n---\nSubmitted from: ${data.url}`
      );
      window.location.href = `mailto:${CI_CONFIG.leadEmail}?subject=${subject}&body=${body}`;
      setStatus('success');
    }
  };

  if (status === 'success') {
    return (
      <div className={`bg-ci-surface border border-ci-win/30 rounded-xl p-6 text-center ${className}`}>
        <div className="w-12 h-12 bg-ci-win/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-ci-win" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-ci-text font-semibold text-lg mb-2">Request received!</h3>
        <p className="text-ci-muted text-sm">
          You'll get your breakdown at this email within {CI_CONFIG.breakdownSLA}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url">Website URL</label>
        <input type="text" id="website_url" name="website_url" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="lead_email" className="block text-ci-text text-sm font-medium mb-1.5">
          Work email <span className="text-ci-loss">*</span>
        </label>
        <input
          type="email"
          id="lead_email"
          name="email"
          required
          placeholder="you@company.com"
          className="w-full bg-ci-surface-2 border border-ci-border rounded-lg px-4 py-2.5 text-ci-text placeholder:text-ci-subtle focus:outline-none focus:border-ci-brand-soft focus:ring-1 focus:ring-ci-brand-soft transition-colors"
        />
      </div>

      {/* Brand to analyze */}
      <div>
        <label htmlFor="lead_brand" className="block text-ci-text text-sm font-medium mb-1.5">
          Brand to analyze <span className="text-ci-loss">*</span>
        </label>
        <input
          type="text"
          id="lead_brand"
          name="brand"
          required
          placeholder="Brand name or Facebook page URL"
          className="w-full bg-ci-surface-2 border border-ci-border rounded-lg px-4 py-2.5 text-ci-text placeholder:text-ci-subtle focus:outline-none focus:border-ci-brand-soft focus:ring-1 focus:ring-ci-brand-soft transition-colors"
        />
      </div>

      {/* Analyzing own brand checkbox */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="own_brand"
          checked={analyzingOwnBrand}
          onChange={(e) => setAnalyzingOwnBrand(e.target.checked)}
          className="w-4 h-4 rounded border-ci-border bg-ci-surface-2 text-ci-signal focus:ring-ci-brand-soft"
        />
        <label htmlFor="own_brand" className="text-ci-muted text-sm">
          This is my brand (analyzing my own ads)
        </label>
      </div>

      {/* Your brand (if different) */}
      {!analyzingOwnBrand && (
        <div>
          <label htmlFor="lead_your_brand" className="block text-ci-text text-sm font-medium mb-1.5">
            Your brand / website <span className="text-ci-loss">*</span>
          </label>
          <input
            type="url"
            id="lead_your_brand"
            name="your_brand"
            required={!analyzingOwnBrand}
            placeholder="https://yourbrand.com"
            className="w-full bg-ci-surface-2 border border-ci-border rounded-lg px-4 py-2.5 text-ci-text placeholder:text-ci-subtle focus:outline-none focus:border-ci-brand-soft focus:ring-1 focus:ring-ci-brand-soft transition-colors"
          />
        </div>
      )}

      {/* Monthly Meta spend */}
      <div>
        <label htmlFor="lead_spend" className="block text-ci-text text-sm font-medium mb-1.5">
          Approx. monthly Meta spend <span className="text-ci-loss">*</span>
        </label>
        <select
          id="lead_spend"
          name="spend"
          required
          className="w-full bg-ci-surface-2 border border-ci-border rounded-lg px-4 py-2.5 text-ci-text focus:outline-none focus:border-ci-brand-soft focus:ring-1 focus:ring-ci-brand-soft transition-colors appearance-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239BA3B4'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
        >
          <option value="">Select range</option>
          {CI_FORM_OPTIONS.spendBuckets.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Role (optional) */}
      {!compact && (
        <div>
          <label htmlFor="lead_role" className="block text-ci-text text-sm font-medium mb-1.5">
            Your role <span className="text-ci-subtle">(optional)</span>
          </label>
          <select
            id="lead_role"
            name="role"
            className="w-full bg-ci-surface-2 border border-ci-border rounded-lg px-4 py-2.5 text-ci-text focus:outline-none focus:border-ci-brand-soft focus:ring-1 focus:ring-ci-brand-soft transition-colors appearance-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239BA3B4'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
          >
            <option value="">Select role</option>
            {CI_FORM_OPTIONS.roles.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      )}

      {/* Notes (optional) */}
      {!compact && (
        <div>
          <label htmlFor="lead_notes" className="block text-ci-text text-sm font-medium mb-1.5">
            Anything specific? <span className="text-ci-subtle">(optional)</span>
          </label>
          <textarea
            id="lead_notes"
            name="notes"
            rows={2}
            placeholder="e.g., Why is competitor X scaling so fast?"
            className="w-full bg-ci-surface-2 border border-ci-border rounded-lg px-4 py-2.5 text-ci-text placeholder:text-ci-subtle focus:outline-none focus:border-ci-brand-soft focus:ring-1 focus:ring-ci-brand-soft transition-colors resize-none"
          />
        </div>
      )}

      {/* Error message */}
      {status === 'error' && (
        <div className="text-ci-loss text-sm bg-ci-loss/10 border border-ci-loss/30 rounded-lg px-4 py-2" role="alert">
          {errorMessage || 'Something went wrong. Please try again.'}
          {' '}
          <a href={`mailto:${CI_CONFIG.leadEmail}`} className="underline hover:no-underline">
            Email us directly
          </a>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-ci-signal text-ci-bg py-3 px-4 rounded-lg font-semibold text-sm hover:brightness-110 hover:shadow-lg hover:shadow-ci-signal/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send me the breakdown →'}
      </button>

      {/* Fine print */}
      <p className="text-ci-subtle text-[11px] text-center">
        No ad account access needed. One email with your breakdown, plus occasional notes on creative strategy.{' '}
        Unsubscribe anytime.
      </p>
    </form>
  );
}
