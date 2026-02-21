export interface RegisterRequest {
    fullName: string;
    email: string;
    password: string;
    role: string;
    phone?: string;
    birthDate?: string;
}
