import jsPDF from "jspdf";

export const generatePrescriptionPdf = (product) => {
  const doc = new jsPDF("p", "mm", "a4");

  let y = 25;
  const pageWidth = 210;
  const margin = 20;
  const contentWidth = 170;

  /* ---------- Page Control ---------- */
  const pageCheck = (space = 20) => {
    if (y + space > 270) {
      doc.addPage();
      y = 25;
      drawHeaderBand(false);
    }
  };

  /* ---------- Header Band ---------- */
  const drawHeaderBand = (firstPage = true) => {
    doc.setFillColor(18, 45, 85); // deep corporate navy
    doc.rect(0, 0, pageWidth, 35, "F");

    doc.setTextColor(255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(product.name || "Product Name", margin, 18);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(product.generic || "", margin, 26);

    doc.setTextColor(0);

    if (!firstPage) y = 45;
    else y = 50;
  };

  /* ---------- Section Title ---------- */
  const section = (title) => {
    pageCheck(20);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(18, 45, 85);
    doc.text(title.toUpperCase(), margin, y);

    y += 4;

    doc.setDrawColor(200);
    doc.setLineWidth(0.4);
    doc.line(margin, y, pageWidth - margin, y);

    y += 10;
    doc.setTextColor(0);
  };

  /* ---------- Field ---------- */
  const field = (label, value) => {
    if (!value) return;

    pageCheck(30);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(label, margin, y);
    y += 6;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    const lines = doc.splitTextToSize(value, contentWidth);

    doc.text(lines, margin, y);
    const lineHeight = 5.5;
    y += lines.length * lineHeight + 8;

    // y += lines.length * 6 + 6; // dynamic height based on lines
  };

  /* ---------- Start Document ---------- */
  drawHeaderBand(true);

  /* ---------- Overview Section ---------- */
  section("Product Overview");
  field("Category", product.category);
  field("Product Type", product.type);
  field("Composition", product.composition);
  field("Description", product.description);

  /* ---------- Clinical Section ---------- */
  section("Clinical Information");
  field("Indication", product.indication);
  field("Contraindication", product.contraindication);
  field("Dosage & Administration", product.dosage);
  field("Drug Interaction", product.interaction);
  field("Side Effects", product.sideeffect);
  field("Precautions", product.precaution);

  /* ---------- Storage Section ---------- */
  section("Handling & Storage");
  field("Withdrawal Period", product.withdrawal);
  field("Storage Condition", product.storage);
  field("Packing", product.packing);

  /* ---------- Footer ---------- */
  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.line(margin, 282, pageWidth - margin, 282);

  doc.text(
    "Bridge Pharmaceuticals Ltd. • Confidential Medical Document",
    pageWidth / 2,
    288,
    { align: "center" },
  );

  doc.save(`${product.slug || "product"}-professional.pdf`);
};
