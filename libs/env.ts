// Environment variable validation and type safety

interface EnvConfig {
  NEXT_PUBLIC_KE_USERNAME: string;
  NEXT_PUBLIC_KE_TOKEN: string;
  NEXT_PUBLIC_CORS_WORKER: string;
  NEXT_PUBLIC_KE_API: string;
  NEXT_PUBLIC_KE_LIST_ID: string;
  NEXT_PUBLIC_GTMID: string;
}

class EnvValidator {
  private static instance: EnvValidator;
  private config: Partial<EnvConfig> = {};
  private validated = false;

  private constructor() {
    this.validate();
  }

  static getInstance(): EnvValidator {
    if (!EnvValidator.instance) {
      EnvValidator.instance = new EnvValidator();
    }
    return EnvValidator.instance;
  }

  private validate(): void {
    const required: (keyof EnvConfig)[] = [
      'NEXT_PUBLIC_KE_USERNAME',
      'NEXT_PUBLIC_KE_TOKEN',
      'NEXT_PUBLIC_CORS_WORKER',
      'NEXT_PUBLIC_KE_API',
      'NEXT_PUBLIC_KE_LIST_ID',
    ];

    const missing: string[] = [];
    
    required.forEach(key => {
      const value = process.env[key];
      if (!value) {
        missing.push(key);
      } else {
        (this.config as any)[key] = value;
      }
    });

    // Optional variables
    const optional: (keyof EnvConfig)[] = ['NEXT_PUBLIC_GTMID'];
    optional.forEach(key => {
      const value = process.env[key];
      if (value) {
        (this.config as any)[key] = value;
      }
    });

    if (missing.length > 0) {
      console.warn(`Missing required environment variables: ${missing.join(', ')}`);
      console.warn('Some features may not work correctly.');
    }

    this.validated = true;
  }

  get(key: keyof EnvConfig): string | undefined {
    if (!this.validated) {
      this.validate();
    }
    return this.config[key];
  }

  getRequired(key: keyof EnvConfig): string {
    const value = this.get(key);
    if (!value) {
      throw new Error(`Required environment variable ${key} is not set`);
    }
    return value;
  }

  isValid(): boolean {
    return this.validated && Object.keys(this.config).length > 0;
  }
}

// Export singleton instance
export const env = EnvValidator.getInstance();

// Export type-safe getter functions
export const getEnv = (key: keyof EnvConfig): string | undefined => env.get(key);
export const getRequiredEnv = (key: keyof EnvConfig): string => env.getRequired(key);