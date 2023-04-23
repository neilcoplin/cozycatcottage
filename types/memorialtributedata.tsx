export type MemorialContact = {
    name: string|null;
    street: string|null;
    city: string|null;
    state: string|null;
    zip: string|null;
    phone: string|null;
    email: string|null;
}

export type MemorialTributeData = {
  type: string;
  name: string;
  amount: string;
  donationMethod: string;
  from: MemorialContact;
  to: MemorialContact;
  personalizedMessage: string;
  signatureText: string;
}