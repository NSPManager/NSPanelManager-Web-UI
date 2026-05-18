export const LightType = {
  TABLE: 1,
  CEILING: 2,
} as const;

// This line allows you to use 'LightType' as a type in your function arguments
export type LightType = (typeof LightType)[keyof typeof LightType];
