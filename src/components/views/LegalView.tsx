import React from 'react';
import { CLINIC_INFO } from '../../data/axocompData';
import type { ViewId } from '../../types/axocomp';

interface LegalViewProps {
  mode: 'privacy' | 'terms' | 'accessibility';
  onNavigate: (view: ViewId) => void;
}

export function LegalView({ mode, onNavigate }: LegalViewProps) {
  const goContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate('contact');
  };

  return (
    <section className="bg-white py-[clamp(64px,8vw,112px)]">
      <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)]">
        <div className="max-w-[820px] grid gap-3.5 text-[17px] leading-[1.6] text-[#2A3850]">
          <span className="inline-flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.06em] uppercase text-[#5E6B7E]">
            <span
              aria-hidden="true"
              className="w-[18px] h-[3px] bg-[#E8590C]"
            />
            Legal
          </span>

          {mode === 'privacy' && (
            <>
              <h2 className="font-display font-extrabold text-[clamp(32px,4vw,48px)] text-[#13294B] mt-1">
                Privacy policy
              </h2>
              <p className="text-[14px] text-[#5E6B7E]">
                Last updated: November 16, 2026
              </p>
              <p>
                This privacy policy explains how Axocomp, PLLC (doing business
                as Axocomp Neurology) and Axocomp Management Services, LLC
                (collectively, &ldquo;Axocomp,&rdquo; &ldquo;we&rdquo; or
                &ldquo;us&rdquo;) collect, use and protect information through
                this website, axocomp.com. It applies only to this website.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Your health information
              </h3>
              <p>
                Information about your medical care is protected by the Health
                Insurance Portability and Accountability Act (HIPAA) and is
                governed by our Notice of Privacy Practices, which you receive
                as a patient and may request at any time. This website is not
                intended for sending health information. Please don&rsquo;t
                submit medical details through email or any form on this site
                unless the form is identified as secure.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Information we collect
              </h3>
              <ul className="list-disc pl-5 grid gap-1.5">
                <li>
                  <b>Information you give us,</b> such as your name,
                  organization, email address, phone number and message when you
                  contact us, apply for a job or ask about partnering.
                </li>
                <li>
                  <b>Information collected automatically,</b> such as your
                  browser type, device, pages visited, the site that referred
                  you and the date and time of your visit. We may collect this
                  through cookies and similar technologies.
                </li>
              </ul>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                How we use information
              </h3>
              <ul className="list-disc pl-5 grid gap-1.5">
                <li>
                  To respond to your questions, referrals, applications and
                  partnership inquiries
                </li>
                <li>To operate, secure and improve this website</li>
                <li>To understand how visitors use the site, in aggregate</li>
                <li>To comply with law and protect our rights</li>
              </ul>
              <p>
                We do not sell personal information, and we do not use
                information from this website for third-party advertising.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                How we share information
              </h3>
              <p>
                We share information only with service providers who help us run
                the website and our business (such as hosting, email and
                analytics providers), who must protect it and use it only for
                the services they provide to us; when required by law or legal
                process; or in connection with a merger, acquisition or sale of
                assets, in which case this policy continues to apply to the
                information transferred.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Cookies
              </h3>
              <p>
                Cookies are small files stored on your device. You can set your
                browser to refuse cookies or to alert you when cookies are sent.
                Some parts of the site may not work properly without them.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Data security
              </h3>
              <p>
                We use reasonable administrative, technical and physical
                safeguards to protect information. No method of transmission
                over the internet is completely secure, so we cannot guarantee
                absolute security.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Children
              </h3>
              <p>
                This website is not directed to children under 13, and we do not
                knowingly collect information from them through the site.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Links to other websites
              </h3>
              <p>
                Our site may link to other websites, such as the Tennessee
                Bureau of Workers&rsquo; Compensation. Their privacy practices
                are their own, and we encourage you to review their policies.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Changes to this policy
              </h3>
              <p>
                We may update this policy from time to time. The date at the top
                shows when it last changed.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Contact us
              </h3>
              <p>
                Questions about this policy can be sent through the{' '}
                <a
                  href="#contact"
                  onClick={goContact}
                  className="font-semibold text-[#B5450A] hover:underline"
                >
                  contact form
                </a>{' '}
                on this site or by mail to Axocomp, {CLINIC_INFO.fullAddress}.
              </p>
            </>
          )}

          {mode === 'terms' && (
            <>
              <h2 className="font-display font-extrabold text-[clamp(32px,4vw,48px)] text-[#13294B] mt-1">
                Terms of use
              </h2>
              <p className="text-[14px] text-[#5E6B7E]">
                Last updated: November 16, 2026
              </p>
              <p>
                These terms govern your use of axocomp.com, operated by Axocomp,
                PLLC (doing business as Axocomp Neurology) and Axocomp
                Management Services, LLC (collectively, &ldquo;Axocomp&rdquo;).
                By using the site, you agree to these terms. If you do not
                agree, please don&rsquo;t use the site.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                No medical advice
              </h3>
              <p>
                The content on this site, including our guide to Tennessee
                workers&rsquo; compensation, is general information. It is not
                medical advice, legal advice or a substitute for care from a
                qualified professional. Using this site does not create a
                physician-patient relationship. If you have a medical emergency,
                call 911.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                No legal advice
              </h3>
              <p>
                Information about workers&rsquo; compensation is a general
                summary and may not apply to your claim. For questions about
                your rights or benefits, contact the Tennessee Bureau of
                Workers&rsquo; Compensation or an attorney.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Use of the site
              </h3>
              <p>
                You agree to use the site only for lawful purposes. You may not
                attempt to gain unauthorized access to the site or its systems,
                interfere with its operation, or use it to send unsolicited
                messages or harmful code.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Intellectual property
              </h3>
              <p>
                The Axocomp name, logo, badge, tagline and site content are
                owned by Axocomp and protected by law. You may view and print
                pages for personal or internal business use. Any other use
                requires our written permission.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Communications
              </h3>
              <p>
                Email and website messages are not secure channels for health
                information. Sending us a message does not create a patient or
                client relationship, and we cannot guarantee a response to
                unsolicited messages.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Links to other websites
              </h3>
              <p>
                Links to outside websites are provided for convenience. We are
                not responsible for their content or practices.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Disclaimer of warranties
              </h3>
              <p>
                The site is provided &ldquo;as is.&rdquo; We work to keep
                information accurate and current but make no warranties about
                its completeness, accuracy or availability.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Limitation of liability
              </h3>
              <p>
                To the fullest extent permitted by law, Axocomp is not liable
                for any indirect, incidental or consequential damages arising
                from your use of the site.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Governing law
              </h3>
              <p>
                These terms are governed by the laws of the State of Tennessee,
                without regard to its conflict-of-law rules.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Changes to these terms
              </h3>
              <p>
                We may update these terms from time to time. Continued use of
                the site after a change means you accept the updated terms.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Contact us
              </h3>
              <p>
                Questions about these terms can be sent through the{' '}
                <a
                  href="#contact"
                  onClick={goContact}
                  className="font-semibold text-[#B5450A] hover:underline"
                >
                  contact form
                </a>{' '}
                on this site.
              </p>
            </>
          )}

          {mode === 'accessibility' && (
            <>
              <h2 className="font-display font-extrabold text-[clamp(32px,4vw,48px)] text-[#13294B] mt-1">
                Accessibility statement
              </h2>
              <p className="text-[14px] text-[#5E6B7E]">
                Last updated: November 16, 2026
              </p>
              <p>
                Axocomp is committed to making this website usable by everyone,
                including people with disabilities. Many of the people we serve
                are recovering from injuries that affect how they see, read,
                move or use a computer, and we design with that in mind.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Our standard
              </h3>
              <p>
                We aim to meet the Web Content Accessibility Guidelines (WCAG)
                2.1, Level AA. That standard covers text contrast, keyboard
                navigation, screen reader support, readable text sizes and
                clear structure.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                What we&rsquo;ve done
              </h3>
              <ul className="list-disc pl-5 grid gap-1.5">
                <li>
                  Text and background colors chosen for strong contrast
                </li>
                <li>
                  Pages that can be navigated with a keyboard, with visible
                  focus indicators
                </li>
                <li>Headings and labels that work with screen readers</li>
                <li>
                  Layouts that adjust to phones, tablets and enlarged text
                </li>
                <li>
                  Plain-language content, especially in our guide for injured
                  workers
                </li>
              </ul>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Ongoing work
              </h3>
              <p>
                Accessibility is an ongoing effort. We review the site as we add
                content, and we welcome feedback on anything that makes it
                harder to use.
              </p>
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B] mt-[18px]">
                Need help or found a problem?
              </h3>
              <p>
                If you have trouble using any part of this site, or need
                information in another format, contact us through the{' '}
                <a
                  href="#contact"
                  onClick={goContact}
                  className="font-semibold text-[#B5450A] hover:underline"
                >
                  contact form
                </a>{' '}
                or call{' '}
                <a
                  href="tel:6156230750"
                  className="font-semibold text-[#B5450A] hover:underline tabular-nums"
                >
                  {CLINIC_INFO.phone}
                </a>
                . Tell us the page and the problem, and we will work to provide
                the information you need.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
