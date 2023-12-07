interface IChecks {
  [check: string]: boolean;
}

const c: IChecks = {};
const d = c[''];
