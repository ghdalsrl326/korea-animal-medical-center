export type ResGetAdminView = AdminView[];

export type AdminView = {
  createdAt: string;
  id: number;
  pet: {
    id: number;
    name: string;
    parentName: string;
    doctor: {
      name: string;
    };
  };
};
