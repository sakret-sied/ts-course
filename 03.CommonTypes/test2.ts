// Faq request
const enum FaqStatus {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  DELETED = 'deleted',
}
interface FaqRequest {
  topicId: number;
  status?: FaqStatus;
}
const request: FaqRequest = {
  topicId: 5,
  status: FaqStatus.PUBLISHED, // "draft", "deleted"
};

// Faq response
interface FaqResponse {
  question: string;
  answer: string;
  tags: [...string[]];
  likes: number;
  status: FaqStatus;
}

const response: [FaqResponse] = [
  {
    question: 'Как осуществляется доставка?',
    answer: 'быстро!',
    tags: ['popular', 'new'],
    likes: 3,
    status: FaqStatus.PUBLISHED,
  },
];

async function getFaqs(req: FaqRequest): Promise<[FaqResponse]> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const data: [FaqResponse] = await res.json();
  return data;
}
