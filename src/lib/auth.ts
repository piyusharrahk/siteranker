// Simple authentication system for admin access
export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
}

class AuthService {
  private currentUser: User | null = null;
  private readonly ADMIN_CREDENTIALS = {
    email: 'admin@siteranker.com',
    password: 'admin123'
  };

  constructor() {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('siteranker_user');
    if (savedUser) {
      try {
        this.currentUser = JSON.parse(savedUser);
      } catch (error) {
        // Clear invalid data
        localStorage.removeItem('siteranker_user');
        this.currentUser = null;
      }
    }
  }

  async login(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    // Add small delay to simulate real authentication
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Simple credential check
    if (email === this.ADMIN_CREDENTIALS.email && password === this.ADMIN_CREDENTIALS.password) {
      this.currentUser = {
        id: '1',
        email: email,
        role: 'admin'
      };
      localStorage.setItem('siteranker_user', JSON.stringify(this.currentUser));
      return { success: true };
    }
    
    return { success: false, error: 'Invalid credentials' };
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('siteranker_user');
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }
}

export const authService = new AuthService();