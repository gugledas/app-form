async function test() {
  const L = self.getFieldInForms(
    "les_dimensions_de_vos_combles",
    "longueur"
  ).value;
  const l = self.getFieldInForms(
    "les_dimensions_de_vos_combles",
    "largeur"
  ).value;
  const h = self.getFieldInForms(
    "les_dimensions_de_vos_combles",
    "hauteur"
  ).value;
  const s = L * l;
  const PG = (L * l) / 2;
  const RP = Math.sqrt(h * h + (L / 2) * (L / 2)) * h;
  const mitoyen = self.getFieldInForms("mitoyennet", "un_seul_choix").value;
  const priceAide = await self.getPriceForField(
    field,
    false,
    0,
    "aide_financiere"
  );
  console.log("priceAide : ", priceAide);
  if (mitoyen === "non_mitoyen") {
    return (PG * 2 + RP * 2 + s) * "aide_financiere";
  }
}
test();
