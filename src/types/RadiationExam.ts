export type ResGetRadiationExam = {
  result: {
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    id: number;
  } & RadiationExam;
  isFirstTime: boolean;
};

export type RadiationExam = {
  radiographyImage1: string | null;
  radiographyImage2: string | null;
  radiographyImage3: string | null;
  radiographyImage4: string | null;
  radiographyImage5: string | null;

  thoraxAbdomenRadiologyResult: string;
  radiologyComment: string;
};
