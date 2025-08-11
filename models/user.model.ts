export interface User {
  id: string;
  name: string;
  email: string;
  role: 'doctor' | 'patient' | 'admin';
}
