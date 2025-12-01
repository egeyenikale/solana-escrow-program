export const project = {
  slug: "solana-escrow-program",
  title: "Solana Escrow Program",
  description: "Escrow smart contract built with Anchor.",
  features: [
  "Escrow initialization",
  "Deposit flow",
  "Release flow",
  "Cancel flow",
  "Program tests",
  "Client examples"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
