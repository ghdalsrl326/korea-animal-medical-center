export type ResGetMyInfo = {
  id: string;
  email: string;
  signature: string;
  isAdmin: boolean;
  name: string;
};

export type ResGetMyPets = {
  id: string;
  email: string;
  isAdmin: boolean;
  signature: string;
  pet: {
    id: string;
    createdAt: string;
    name: string;
    breed: string;
    parentName: string;
    age: string;
    questionnaire: {
      createdAt: string;
      updatedAt?: string;
      id: number;
    }[];
  }[];
};
