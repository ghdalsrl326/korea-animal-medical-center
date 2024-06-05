export type ResGetExamResult = {
  result: {
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    id: number;
  } & ExamResult;
  isFirstTime: boolean;
};

export type ExamResult = {
  generalComment: string;
};
