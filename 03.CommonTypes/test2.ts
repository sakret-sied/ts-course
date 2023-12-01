// Faq request
const enum FaqStatus {
  DELETED = 'deleted',
  DRAFT = 'draft',
  PUBLISHED = 'published',
}
type FaqRequest = {
  topicId: number;
  status?: FaqStatus;
};
const request: FaqRequest = {
  topicId: 5,
  status: FaqStatus.PUBLISHED,
};

// Faq response
type FaqResponse = [
  {
    question: string;
    answer: string;
    tags: [...string[]];
    likes: number;
    status: FaqStatus;
  }
];

const response: FaqResponse = [
  {
    question: 'How is delivery carried out?',
    answer: 'Fast!',
    tags: ['popular', 'new'],
    likes: 3,
    status: FaqStatus.PUBLISHED,
  },
];

async function getFaqs(req: FaqRequest): Promise<FaqResponse> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const data: FaqResponse = await res.json();
  return data;
}
