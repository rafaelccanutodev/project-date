export function calculateEventMessage(
  startDate: Date,
  endDate: Date,
  eventName: string
): string {
  const diffTime = endDate.getTime() - startDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return `O evento "${eventName}" já passou.`;
  }

  if (diffDays === 0) {
    return `Hoje é o dia de ${eventName}! 🎉`;
  }

  return `Faltam ${diffDays} dias para ${eventName}.`;
}
