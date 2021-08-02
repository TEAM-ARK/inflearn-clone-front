class CommonState {
  loading: boolean;

  data: any;

  error?: string | null;

  constructor() {
    this.loading = false;
    this.data = null;
    this.error = null;
  }

  request() {
    this.loading = true;
    this.data = null;
    this.error = null;

    return {
      loading: this.loading,
      data: this.data,
      error: this.error,
    };
  }

  success(setData?: any) {
    this.loading = false;
    this.data = setData;
    this.error = null;

    return {
      loading: this.loading,
      data: this.data,
      error: this.error,
    };
  }

  failure(setError?: string) {
    this.loading = false;
    this.data = null;
    this.error = setError;

    return {
      loading: this.loading,
      data: this.data,
      error: this.error,
    };
  }
}

export default CommonState;
