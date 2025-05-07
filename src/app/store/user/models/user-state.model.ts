export interface UserState {
    user: { id: string, name: string, role: string } | null;
    token: string;
}