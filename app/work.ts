export class Work {
  name: string;
  website: string;
  location: string;
  roles: [Role];
}

export class Role {
    title: string;
    startdate: string;
    enddate: string;
    details: string;
}