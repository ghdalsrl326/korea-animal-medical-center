export type ResGetBloodExam = {
  result: {
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    id: number;
  } & BloodExamWrapper;
  isFirstTime: boolean;
};

export type BloodExamWrapper = {
  vbgaResult: BloodExam;
};

export type BloodExam = {
  pH: number;
  pCO2: number;
  pO2: number;
  sodium: number;
  potassium: number;
  chloride: number;
  iCa: number;
  hct: number;
  glucose: number;
  lactate: number;
  anionGap: number;
  bicarbonate: number;
};

export type BloodExamAtom = {
  firstDate: string;
  secondDate: string;
  pHFirst: string;
  pHSecond: string;
  pCO2First: string;
  pCO2Second: string;
  pO2First: string;
  pO2Second: string;
  sodiumFirst: string;
  sodiumSecond: string;
  potassiumFirst: string;
  potassiumSecond: string;
  chlorideFirst: string;
  chlorideSecond: string;
  iCaFirst: string;
  iCaSecond: string;
  hctFirst: string;
  hctSecond: string;
  glucoseFirst: string;
  glucoseSecond: string;
  lactateFirst: string;
  lactateSecond: string;
  anionGapFirst: string;
  anionGapSecond: string;
  bicarbonateFirst: string;
  bicarbonateSecond: string;
};
