export type ResGetHealthExam = {
  result: {
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    id: number;
  } & HealthExam;
  isFirstTime: boolean;
};

export type HealthExam = HealthExamSummary & HealthExamDetail;

export type HealthExamSummary = {
  vitalSigns: string;
  superficialLymphNodes: string;
  auscultationHeartLung: string;
  nasalPharyngealCervical: string;
  bcsNMCS: string;
  musculoskeletalSystem: string;
  reproductiveSystem: string;
  neutered: string;
};

export type HealthExamDetail = {
  skin: string;
  coat: string;
  leftEar: string;
  rightEar: string;
  // skinPictures: string[] | null;
  skinPicture1: string | null;
  skinPicture2: string | null;
  skinPicture3: string | null;

  rightFluoresceinStaining: string;
  rightFluoresceinStainingLevel: string;
  leftFluoresceinStaining: string;
  leftFluoresceinStainingLevel: string;
  rightTearProduction: string;
  rightTearProductionLevel: string;
  leftTearProduction: string;
  leftTearProductionLevel: string;
  rightIntraocularPressure: string;
  rightIntraocularPressureLevel: string;
  leftIntraocularPressure: string;
  leftIntraocularPressureLevel: string;
  slirInpection: string;
  slirInpectionLevel: string;
  externalAppearance: string;
  externalAppearanceLevel: string;
  // eyesPictures: string[] | null;
  eyesPicture1: string | null;
  eyesPicture2: string | null;
  eyesPicture3: string | null;

  malocclusion: string;
  missingTeeth: string;
  brokenTeeth: string;
  retainedDeciduousTeeth: string;
  tartarPeriodontalDisease: string;
  // teethPictures: string[] | null;
  teethPicture1: string | null;
  teethPicture2: string | null;
  teethPicture3: string | null;
};
