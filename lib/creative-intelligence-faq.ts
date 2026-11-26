export interface FAQItem {
  question: string;
  answer: string;
}

export const ciFaqItems: FAQItem[] = [
  {
    question: 'Do you need access to our ad account for the free breakdown?',
    answer: "No. The breakdown uses Meta's public Ad Library, so we can run it on your brand or any competitor without logins or ad account access.",
  },
  {
    question: "How do you know what's \"working\" for competitors if the Ad Library doesn't show spend?",
    answer: "We infer it from signals brands can't fake for long: how many days an ad has been running, how many near-duplicate variants of a concept launch together (a sign it's being scaled), and whether a concept spreads across several brands. These are signals, not spend figures, and the brief labels them that way.",
  },
  {
    question: 'How is this different from Motion, Atria, or Foreplay?',
    answer: "Those are great tools, and the agent can work alongside them. The difference: we join every ad to your actual orders and margin, build the concept taxonomy around your brand, and run it in infrastructure you own, with no per-seat pricing.",
  },
  {
    question: 'What do you need from us for the pilot?',
    answer: 'Read access to Meta Ads and Shopify (or your warehouse), a list of up to 5 competitors, and a 30-minute kickoff call. Most of the setup is on us.',
  },
  {
    question: 'Will the agent change our ads automatically?',
    answer: 'Not unless you want it to. By default it recommends; your team decides what to act on.',
  },
  {
    question: 'Where does our data live? Is it secure?',
    answer: 'In your own cloud warehouse (or one we set up in your account). We use read-only access and least-privilege credentials. Your data never leaves your infrastructure.',
  },
  {
    question: 'What if our data is a mess?',
    answer: "That's our core expertise. If the foundation isn't ready, we fix the ads-to-orders join first as part of the build, or as a separate Data Foundation project.",
  },
  {
    question: 'Do you make the ads too?',
    answer: 'No. We tell your team or agency what to make and why. Production stays with the people who are great at it.',
  },
];

export function getCIFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ciFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
