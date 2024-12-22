export const dtoMap = {
  contract: async () => await import('./contract.dto'),
  invoice: async () => await import('./invoice.dto'),
  key: async () => await import('./key.dto'),
  location: async () => await import('./location.dto'),
  paymentSchedule: async () => await import('./paymentSchedule.dto'),
  payment: async () => await import('./payment.dto'),
  paymentMethod: async () => await import('./paymentMethod.dto'),
  priceAdjustment: async () => await import('./priceAdjustment.dto'),
  user: async () => await import('./user.dto'),
};
