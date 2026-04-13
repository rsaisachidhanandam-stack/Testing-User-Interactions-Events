import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Provide compatibility for jest.fn() calls
global.jest = vi;
