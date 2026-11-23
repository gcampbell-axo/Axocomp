import React, { useState } from 'react';
import { Check, Copy, Printer } from 'lucide-react';
import { SectionHeader } from '../SectionHeader';

const SUMMARY_TEXT = `Axocomp Neurological Evaluation — Summary of Opinions (Sample)
Diagnosis: Left C6 radiculopathy due to a C5-C6 disc protrusion (M50.121), confirmed by EMG/NCS.
Causation: More likely than not, the January 12, 2027 work incident contributed more than 50% to the need for treatment.
Work status: Modified duty. No lifting over 15 lb with the left arm, no overhead work, no repetitive pushing or pulling.
MMI: Not at MMI. Expected in about 8 to 12 weeks if the patient improves with conservative care.
Next steps: Physical therapy (authorization requested), medication as below, follow-up in 4 weeks.`;

export function SampleReportView() {
  const [copied, setCopied] = useState(false);

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(SUMMARY_TEXT);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="flex-1 bg-[#F4F4F2] py-12 sm:py-24">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8">
        <div className="no-print flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <SectionHeader
            label="Sample report"
            title="The Axocomp report"
            lede="Every Axocomp evaluation is written to the same standard, so adjusters, case managers and attorneys find the answers in the same place every time. Reports are available within 24 hours of the visit. This sample uses a fictional patient, employer and claim."
            className="mb-0"
          />

          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-2 border border-[#13294B] bg-white text-[#13294B] hover:bg-[#13294B] hover:text-white font-semibold text-[14px] px-4 py-2.5 rounded-[4px] whitespace-nowrap cursor-pointer transition-colors duration-150"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" aria-hidden="true" />
                  <span>Summary copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" aria-hidden="true" />
                  <span>Copy summary</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 bg-[#E8590C] text-[#13294B] hover:bg-[#B5450A] hover:text-white font-semibold text-[14px] px-4 py-2.5 rounded-[4px] whitespace-nowrap cursor-pointer transition-colors duration-150"
            >
              <Printer className="w-4 h-4" aria-hidden="true" />
              <span>Print sample</span>
            </button>
          </div>
        </div>

        <article
          aria-label="Sample Axocomp neurological evaluation report"
          className="min-w-0 overflow-hidden bg-white text-black border border-black max-w-[860px] p-6 sm:p-12 grid gap-3 font-sans text-[15px] leading-[1.6]"
        >
          {/* Report Header */}
          <div className="-mt-6 sm:-mt-12 flex justify-between items-start gap-4 flex-wrap border-b-[3px] border-black pb-3.5">
            <div className="grid gap-4 text-[13px] font-semibold text-black">
              <span className="-ml-6 sm:-ml-12 justify-self-start bg-[#1C1C1C] text-white font-display font-extrabold text-[22px] tracking-[-0.04em] pt-2 pb-2 pr-4 pl-6 sm:pl-12">
                axocomp
              </span>
              <span>Workers&rsquo; Comp &amp; Personal Injury Neurology</span>
            </div>
            <div className="mt-6 sm:mt-12 border-2 border-black text-black font-bold text-[12px] tracking-[0.06em] uppercase px-2.5 py-1">
              Sample &middot; Fictional patient
            </div>
          </div>

          <h3 className="font-display font-extrabold text-[22px] sm:text-[26px] text-black mt-2">
            Neurological evaluation and causation report
          </h3>

          {/* Meta Table */}
          <div className="min-w-0 w-full overflow-x-auto">
            <table className="w-full border-collapse text-[14px] border border-black">
              <tbody>
                <tr className="border-b border-black">
                  <th className="text-left font-bold text-black px-2.5 py-1.5 whitespace-nowrap align-top">
                    Injured worker
                  </th>
                  <td className="px-2.5 py-1.5 align-top">Jordan Sample</td>
                  <th className="text-left font-bold text-black px-2.5 py-1.5 whitespace-nowrap align-top">
                    Date of evaluation
                  </th>
                  <td className="px-2.5 py-1.5 align-top tabular-nums">
                    February 9, 2027
                  </td>
                </tr>
                <tr className="border-b border-black">
                  <th className="text-left font-bold text-black px-2.5 py-1.5 whitespace-nowrap align-top">
                    Employer
                  </th>
                  <td className="px-2.5 py-1.5 align-top">
                    Example Distribution Co.
                  </td>
                  <th className="text-left font-bold text-black px-2.5 py-1.5 whitespace-nowrap align-top">
                    Date of injury
                  </th>
                  <td className="px-2.5 py-1.5 align-top tabular-nums">
                    January 12, 2027
                  </td>
                </tr>
                <tr className="border-b border-black">
                  <th className="text-left font-bold text-black px-2.5 py-1.5 whitespace-nowrap align-top">
                    Carrier / TPA
                  </th>
                  <td className="px-2.5 py-1.5 align-top">
                    Sample Mutual Insurance
                  </td>
                  <th className="text-left font-bold text-black px-2.5 py-1.5 whitespace-nowrap align-top">
                    Claim number
                  </th>
                  <td className="px-2.5 py-1.5 align-top tabular-nums">
                    WC-000000
                  </td>
                </tr>
                <tr className="border-b border-black">
                  <th className="text-left font-bold text-black px-2.5 py-1.5 whitespace-nowrap align-top">
                    Adjuster
                  </th>
                  <td className="px-2.5 py-1.5 align-top">A. Adjuster</td>
                  <th className="text-left font-bold text-black px-2.5 py-1.5 whitespace-nowrap align-top">
                    Axocomp role
                  </th>
                  <td className="px-2.5 py-1.5 align-top">
                    Authorized treating physician (selected from panel, Form
                    C-42)
                  </td>
                </tr>
                <tr>
                  <th className="text-left font-bold text-black px-2.5 py-1.5 whitespace-nowrap align-top">
                    Visit type
                  </th>
                  <td className="px-2.5 py-1.5 align-top">
                    Follow-up visit with EMG/NCS
                  </td>
                  <th className="text-left font-bold text-black px-2.5 py-1.5 whitespace-nowrap align-top">
                    Examining physician
                  </th>
                  <td className="px-2.5 py-1.5 align-top">
                    Axocomp neurologist
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Summary Box */}
          <div className="bg-white border-[3px] border-black p-4 mt-1.5">
            <h4 className="font-display font-extrabold text-[16px] uppercase tracking-[0.04em] text-black border-b border-black pb-1">
              Summary of opinions
            </h4>
            <dl className="mt-2.5 grid gap-2">
              <div className="grid grid-cols-1 sm:grid-cols-[115px_1fr] gap-1 sm:gap-3">
                <dt className="font-extrabold text-black">Diagnosis</dt>
                <dd>
                  Left C6 radiculopathy due to a C5-C6 disc protrusion
                  (M50.121), confirmed by EMG/NCS.
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[115px_1fr] gap-1 sm:gap-3">
                <dt className="font-extrabold text-black">Causation</dt>
                <dd>
                  More likely than not, the January 12, 2027 work incident
                  contributed more than 50% to the need for treatment.
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[115px_1fr] gap-1 sm:gap-3">
                <dt className="font-extrabold text-black">Work status</dt>
                <dd>
                  Modified duty. No lifting over 15 lb with the left arm, no
                  overhead work, no repetitive pushing or pulling.
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[115px_1fr] gap-1 sm:gap-3">
                <dt className="font-extrabold text-black">MMI</dt>
                <dd>
                  Not at MMI. Expected in about 8 to 12 weeks if the patient
                  improves with the plan below.
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[115px_1fr] gap-1 sm:gap-3">
                <dt className="font-extrabold text-black">Next steps</dt>
                <dd>
                  Physical therapy (authorization requested), medication as
                  below, follow-up in 4 weeks.
                </dd>
              </div>
            </dl>
          </div>

          <h4 className="mt-3.5 text-[15px] uppercase tracking-[0.04em] font-extrabold text-black border-b border-black pb-0.5">
            Diagnosis
          </h4>
          <p>Left C6 radiculopathy</p>

          <h4 className="mt-3.5 text-[15px] uppercase tracking-[0.04em] font-extrabold text-black border-b border-black pb-0.5">
            Job description
          </h4>
          <p>
            Full-time warehouse associate. Lifts and carries cartons of 20 to 60
            lb throughout the shift, with frequent reaching, overhead stacking
            and pallet jack use.
          </p>

          <h4 className="mt-3.5 text-[15px] uppercase tracking-[0.04em] font-extrabold text-black border-b border-black pb-0.5">
            History of injury
          </h4>
          <p>
            This is a 41-year-old right-handed male warehouse associate
            presenting for evaluation of a work-related injury sustained on
            01/12/2027. While lifting a 60 lb carton from a low shelf to a
            pallet, he experienced sudden sharp left-sided neck pain radiating
            into the left shoulder, lateral forearm, thumb and index finger. He
            reported the injury to his supervisor the same day. He continues to
            report numbness in the left thumb and index finger and weakness when
            lifting with the left arm. Denies prior neck injury, neck treatment,
            upper extremity symptoms or workers&rsquo; compensation claims.
            Non-smoker.
          </p>
          <p>
            <b>Frequency of symptoms:</b> Daily, with intermittent numbness and
            weakness exacerbated by lifting with the left arm.
          </p>
          <p>
            <b>Duration of symptoms:</b> Neck and arm pain lasting several hours
            daily; numbness lasting 30&ndash;60 minutes per episode.
          </p>

          <h4 className="mt-3.5 text-[15px] uppercase tracking-[0.04em] font-extrabold text-black border-b border-black pb-0.5">
            Records reviewed
          </h4>
          <div className="grid gap-2.5">
            <p>
              <b>01/12/2027 Employer first report of injury:</b> Left neck and
              arm pain while lifting a 60 lb carton from a low shelf. Injury
              reported to supervisor the same day.
            </p>
            <p>
              <b>01/12/2027 Urgent care evaluation:</b> Neck pain radiating into
              the left arm with tingling in the left thumb. Reduced cervical
              ROM; strength not formally assessed. Diagnosed with cervical
              strain. Ibuprofen and light duty prescribed. Employer physician
              panel provided.
            </p>
            <p>
              <b>01/12/2027 Cervical spine X-rays:</b> Normal alignment without
              fracture. Mild C5-C6 disc space narrowing.
            </p>
            <p>
              <b>01/13/2027 Form C-42:</b> Patient selected Axocomp Neurology as
              authorized treating physician from the employer panel.
            </p>
            <p>
              <b>01/15/2027 Axocomp initial evaluation:</b> Left biceps and
              wrist extensor weakness (4/5), diminished left biceps reflex and
              decreased sensation in the left thumb and index finger, documented
              as consistent with left C6 radiculopathy. Causation opinion
              documented. Modified duty assigned. Cervical MRI and EMG/NCS
              ordered.
            </p>
            <p>
              <b>02/03/2027 MRI cervical spine:</b> Left C5-C6 disc protrusion
              with moderate left foraminal narrowing contacting the exiting left
              C6 nerve root. Mild C5-C6 disc degeneration. No spinal cord
              compression.
            </p>
          </div>

          <h4 className="mt-3.5 text-[15px] uppercase tracking-[0.04em] font-extrabold text-black border-b border-black pb-0.5">
            Diagnostic testing performed at Axocomp
          </h4>
          <div className="grid gap-2.5">
            <p>
              <b>02/09/2027 EMG/NCS LUE:</b> Normal sensory and motor nerve
              conduction studies. Needle EMG demonstrated active denervation
              with fibrillations, positive sharp waves and reduced recruitment
              in the left biceps, brachioradialis, pronator teres and left C6
              paraspinal muscles. Impression: Electrodiagnostic evidence of left
              C6 radiculopathy without evidence of carpal tunnel syndrome or
              other nerve entrapment.
            </p>
            <p>
              <b>02/09/2027 MRI cervical spine image review:</b> Images from
              02/03/2027 personally reviewed. Left C5-C6 disc protrusion with
              left foraminal narrowing, documented as correlating with clinical
              and EMG findings. Mild C5-C6 disc degeneration without prior
              symptoms.
            </p>
          </div>

          <h4 className="mt-3.5 text-[15px] uppercase tracking-[0.04em] font-extrabold text-black border-b border-black pb-0.5">
            Current treatment
          </h4>
          <p>Ibuprofen as needed and light duty.</p>

          <h4 className="mt-3.5 text-[15px] uppercase tracking-[0.04em] font-extrabold text-black border-b border-black pb-0.5">
            Failed treatment
          </h4>
          <p>
            Rest, ibuprofen and light duty have not resolved the left thumb and
            index finger numbness or left arm weakness.
          </p>

          <h4 className="mt-3.5 text-[15px] uppercase tracking-[0.04em] font-extrabold text-black border-b border-black pb-0.5">
            Examination
          </h4>
          <p>
            <b>Mental status and cranial nerves:</b> Normal. <b>Motor:</b> Left
            biceps and wrist extensors 4/5; otherwise 5/5. <b>Reflexes:</b> Left
            biceps and brachioradialis 1+; otherwise 2+ and symmetric.{' '}
            <b>Sensation:</b> Decreased pinprick over the left thumb and index
            finger. <b>Cervical spine:</b> Reduced left rotation; Spurling&rsquo;s
            test positive on the left, reproducing left arm pain.{' '}
            <b>Effort:</b> Consistent, without non-physiologic findings.
          </p>

          <h4 className="mt-3.5 text-[15px] uppercase tracking-[0.04em] font-extrabold text-black border-b border-black pb-0.5">
            Causation
          </h4>
          <p>
            Considering all causes, it is my opinion, to a reasonable degree of
            medical certainty (more likely than not, as opposed to speculation or
            possibility), that the January 12, 2027 lifting incident contributed
            more than fifty percent (50%) in causing Mr. Sample&rsquo;s left C6
            radiculopathy and his need for medical treatment. This opinion is
            based on: a specific incident identifiable by time and place;
            immediate onset of symptoms matching the C6 nerve root; no prior
            neck or arm symptoms or treatment; and objective EMG and MRI
            findings consistent with the mechanism of injury. The mild
            degenerative change at C5-C6 was present without symptoms before the
            incident and does not account for the acute radiculopathy.
            Today&rsquo;s EMG and MRI findings confirm the causation opinion
            given at the initial visit on January 15, 2027.
          </p>

          <h4 className="mt-3.5 text-[15px] uppercase tracking-[0.04em] font-extrabold text-black border-b border-black pb-0.5">
            Work status
          </h4>
          <p>
            <b>Modified duty, effective today until the next visit.</b> No
            lifting over 15 lb with the left arm. No overhead work. No
            repetitive pushing or pulling. May use the right arm without
            restriction.
          </p>

          <h4 className="mt-3.5 text-[15px] uppercase tracking-[0.04em] font-extrabold text-black border-b border-black pb-0.5">
            Treatment plan and expected timeline
          </h4>
          <ul className="list-disc pl-5 grid gap-1">
            <li>
              Physical therapy, 2 to 3 times a week for 6 weeks (authorization
              requested)
            </li>
            <li>
              Short course of oral steroid, then a nerve pain medication as
              needed
            </li>
            <li>
              If not improving at follow-up: cervical epidural steroid injection
              referral
            </li>
            <li>If weakness progresses: spine surgery consultation</li>
            <li>Follow-up visit in 4 weeks with repeat strength testing</li>
            <li>
              As authorized treating physician, Axocomp will submit and
              coordinate these referrals with the adjuster
            </li>
          </ul>

          <h4 className="mt-3.5 text-[15px] uppercase tracking-[0.04em] font-extrabold text-black border-b border-black pb-0.5">
            Maximum medical improvement and impairment
          </h4>
          <p>
            Not at MMI. MMI is expected in about 8 to 12 weeks if the patient
            improves with conservative care. At MMI, a permanent impairment
            rating will be assigned using the AMA Guides, 6th Edition, and
            reported on Tennessee Form C-30A.
          </p>

          <div className="border-t border-black mt-4 pt-3.5 grid gap-2">
            <p>
              I examined this patient personally and reviewed the records listed
              above. The opinions in this report are my own.
            </p>
            <p>
              <b className="border-b border-dashed border-black">
                [Physician name], MD
              </b>
              <br />
              Board-certified neurologist, Axocomp Neurology
            </p>
          </div>
        </article>

        <p className="mt-5 text-[14px] text-[#555555]">
          This sample is for illustration only. It does not describe a real
          person, employer or claim.
        </p>
      </div>
    </section>
  );
}
