export type ResGetHealthExam = {
  result: {
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    id: number;
  } & HealthExam;
  isFirstTime: boolean;
};

export type HealthExam = {
  vitalSigns: string;
  superficialLymphNodes: string;
  auscultationHeartLung: string;
  nasalPharyngealCervical: string;
  bcsNMCS: string;
  musculoskeletalSystem: string;
  reproductiveSystem: string;
  neutered: string;

  skin: string;
  coat: string;
  leftEar: string;
  rightEar: string;
  skinPictures: string[] | null;

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
  eyesPictures: string[] | null;

  malocclusion: string;
  missingTeeth: string;
  brokenTeeth: string;
  retainedDeciduousTeeth: string;
  tartarPeriodontalDisease: string;
  teethPictures: string[] | null;
};
