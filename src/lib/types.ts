export type AccountType =
  | 'Guest'
  | 'Free'
  | 'Premium Home'
  | 'Premium Pro'
  | 'Enterprise';

export type User = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  accountType: AccountType;
};
