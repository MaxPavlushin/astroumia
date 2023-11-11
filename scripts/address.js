$("#address").suggestions({
  // Замените на свой API-ключ
  token: "3b6f30e690f5d10d04ca75b0a2a73d644c927d9a",
  type: "ADDRESS",
  geoLocation: false,
  enrichmentEnabled: false,
  constraints: {
    locations: { country: "*" }
  }
});
