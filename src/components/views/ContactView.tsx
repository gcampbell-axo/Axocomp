import React, { useEffect, useState } from 'react';
import { CLINIC_INFO } from '../../data/axocompData';
import type { ContactPrefill } from '../../types/axocomp';
import { SectionHeader } from '../SectionHeader';

interface ContactViewProps {
  prefill?: ContactPrefill;
}

interface FormValues {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

export function ContactView({ prefill }: ContactViewProps) {
  const [values, setValues] = useState<FormValues>({
    name: '',
    title: '',
    company: '',
    email: '',
    phone: '',
    subject: prefill?.subject ?? '',
    message: '',
    website: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefill?.subject) {
      setValues((prev) => ({ ...prev, subject: prefill.subject ?? '' }));
    }
  }, [prefill]);

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage('');

    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = 'This field is required.';
    if (!values.company.trim()) nextErrors.company = 'This field is required.';
    if (!values.email.trim()) {
      nextErrors.email = 'This field is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!values.subject.trim()) nextErrors.subject = 'This field is required.';
    if (!values.message.trim()) nextErrors.message = 'This field is required.';

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatusMessage('Please fill in the required fields.');
      return;
    }

    if (values.website.trim()) {
      return;
    }

    setSubmitted(true);
    setStatusMessage(
      'Thank you. Your inquiry has been recorded. For immediate referrals and patient records, please send them to our referral fax.'
    );
    setValues({
      name: '',
      title: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      website: '',
    });
  };

  return (
    <section className="flex-1 bg-[#13294B] text-[#C9D2DF] py-[clamp(48px,8vw,112px)]">
      <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)]">
        <SectionHeader
          dark
          label="Refer a patient"
          title="Send us the claim. We'll take it from there."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="min-w-0 bg-white/[0.06] border border-white/12 rounded-[6px] p-[22px] grid gap-1.5 content-start">
            <span className="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#AEB9C9]">
              Phone
            </span>
            <a
              href="tel:6156230750"
              className="font-display font-bold text-[20px] text-white hover:text-[#F1D97B] transition-colors tabular-nums"
            >
              {CLINIC_INFO.phone}
            </a>
          </div>

          <div className="min-w-0 bg-white/[0.06] border border-white/12 rounded-[6px] p-[22px] grid gap-1.5 content-start">
            <span className="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#AEB9C9]">
              Referral fax
            </span>
            <span className="font-display font-bold text-[20px] text-white tabular-nums">
              {CLINIC_INFO.fax}
            </span>
          </div>

          <div className="min-w-0 bg-white/[0.06] border border-white/12 rounded-[6px] p-[22px] grid gap-1.5 content-start">
            <span className="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#AEB9C9]">
              Clinic and corporate office
            </span>
            <span className="font-display font-bold text-[20px] text-white leading-snug">
              {CLINIC_INFO.addressLine1}
              <br />
              {CLINIC_INFO.addressLine2}
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="relative overflow-hidden mt-10 bg-white text-[#2A3850] rounded-[6px] p-[clamp(22px,3vw,36px)] max-w-[880px] grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4"
        >
          <h3 className="sm:col-span-2 font-display font-extrabold text-[26px] text-[#13294B]">
            Send us a message
          </h3>
          <p className="sm:col-span-2 text-[15px] text-[#5E6B7E] -mt-1.5">
            For general questions, partnerships and careers. Please don&rsquo;t
            include patient health information. Send referrals and patient
            records to our referral fax.
          </p>

          <div className="grid gap-1.5">
            <label
              htmlFor="cf-name"
              className="text-[14px] font-semibold text-[#13294B]"
            >
              Name <span className="text-[#B5450A]" aria-hidden="true">*</span>
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={values.name}
              onChange={(e) => handleChange('name', e.target.value)}
              aria-invalid={errors.name ? 'true' : undefined}
              className={`bg-white rounded-[4px] px-3 py-[11px] text-[16px] text-[#2A3850] border ${
                errors.name
                  ? 'border-[#B42318] border-2'
                  : 'border-[#B9BDC4]'
              }`}
            />
            {errors.name && (
              <span className="text-[13px] text-[#B42318]">{errors.name}</span>
            )}
          </div>

          <div className="grid gap-1.5">
            <label
              htmlFor="cf-title"
              className="text-[14px] font-semibold text-[#13294B]"
            >
              Title
            </label>
            <input
              id="cf-title"
              name="title"
              type="text"
              autoComplete="organization-title"
              value={values.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="bg-white border border-[#B9BDC4] rounded-[4px] px-3 py-[11px] text-[16px] text-[#2A3850]"
            />
          </div>

          <div className="grid gap-1.5">
            <label
              htmlFor="cf-company"
              className="text-[14px] font-semibold text-[#13294B]"
            >
              Company{' '}
              <span className="text-[#B5450A]" aria-hidden="true">*</span>
            </label>
            <input
              id="cf-company"
              name="company"
              type="text"
              autoComplete="organization"
              required
              value={values.company}
              onChange={(e) => handleChange('company', e.target.value)}
              aria-invalid={errors.company ? 'true' : undefined}
              className={`bg-white rounded-[4px] px-3 py-[11px] text-[16px] text-[#2A3850] border ${
                errors.company
                  ? 'border-[#B42318] border-2'
                  : 'border-[#B9BDC4]'
              }`}
            />
            {errors.company && (
              <span className="text-[13px] text-[#B42318]">
                {errors.company}
              </span>
            )}
          </div>

          <div className="grid gap-1.5">
            <label
              htmlFor="cf-email"
              className="text-[14px] font-semibold text-[#13294B]"
            >
              Email{' '}
              <span className="text-[#B5450A]" aria-hidden="true">*</span>
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={(e) => handleChange('email', e.target.value)}
              aria-invalid={errors.email ? 'true' : undefined}
              className={`bg-white rounded-[4px] px-3 py-[11px] text-[16px] text-[#2A3850] border ${
                errors.email
                  ? 'border-[#B42318] border-2'
                  : 'border-[#B9BDC4]'
              }`}
            />
            {errors.email && (
              <span className="text-[13px] text-[#B42318]">{errors.email}</span>
            )}
          </div>

          <div className="grid gap-1.5">
            <label
              htmlFor="cf-phone"
              className="text-[14px] font-semibold text-[#13294B]"
            >
              Phone
            </label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="bg-white border border-[#B9BDC4] rounded-[4px] px-3 py-[11px] text-[16px] text-[#2A3850]"
            />
          </div>

          <div className="grid gap-1.5">
            <label
              htmlFor="cf-subject"
              className="text-[14px] font-semibold text-[#13294B]"
            >
              Subject{' '}
              <span className="text-[#B5450A]" aria-hidden="true">*</span>
            </label>
            <input
              id="cf-subject"
              name="subject"
              type="text"
              required
              value={values.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              aria-invalid={errors.subject ? 'true' : undefined}
              className={`bg-white rounded-[4px] px-3 py-[11px] text-[16px] text-[#2A3850] border ${
                errors.subject
                  ? 'border-[#B42318] border-2'
                  : 'border-[#B9BDC4]'
              }`}
            />
            {errors.subject && (
              <span className="text-[13px] text-[#B42318]">
                {errors.subject}
              </span>
            )}
          </div>

          <div className="sm:col-span-2 grid gap-1.5">
            <label
              htmlFor="cf-message"
              className="text-[14px] font-semibold text-[#13294B]"
            >
              Message{' '}
              <span className="text-[#B5450A]" aria-hidden="true">*</span>
            </label>
            <textarea
              id="cf-message"
              name="message"
              rows={5}
              required
              value={values.message}
              onChange={(e) => handleChange('message', e.target.value)}
              aria-invalid={errors.message ? 'true' : undefined}
              className={`bg-white rounded-[4px] px-3 py-[11px] text-[16px] text-[#2A3850] border ${
                errors.message
                  ? 'border-[#B42318] border-2'
                  : 'border-[#B9BDC4]'
              }`}
            />
            {errors.message && (
              <span className="text-[13px] text-[#B42318]">
                {errors.message}
              </span>
            )}
          </div>

          <div className="sr-only" aria-hidden="true">
            <label htmlFor="cf-website">Leave this field empty</label>
            <input
              id="cf-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={(e) => handleChange('website', e.target.value)}
            />
          </div>

          <div className="sm:col-span-2 grid gap-3 justify-items-start">
            <button
              type="submit"
              className="bg-[#E8590C] text-[#13294B] hover:bg-[#B5450A] hover:text-white font-semibold text-[15px] px-5 py-[13px] rounded-[4px] cursor-pointer transition-colors duration-150"
            >
              Send message
            </button>
            {statusMessage && (
              <p
                role="status"
                aria-live="polite"
                className={`text-[15px] font-medium ${
                  submitted ? 'text-[#13294B]' : 'text-[#B42318]'
                }`}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
