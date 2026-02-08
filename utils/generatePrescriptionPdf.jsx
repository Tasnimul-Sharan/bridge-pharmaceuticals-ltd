// import jsPDF from "jspdf";

// export const generatePrescriptionPdf = (product) => {
//   const doc = new jsPDF();

//   let y = 20; // starting vertical position

//   const addField = (label, value) => {
//     if (!value) return;
//     doc.setFontSize(14);
//     doc.text(`${label}:`, 20, y);
//     y += 6;
//     doc.setFontSize(12);
//     doc.text(value, 25, y, { maxWidth: 160 });
//     y += 12;
//     if (y > 280) {
//       doc.addPage();
//       y = 20;
//     }
//   };

//   // Add all fields
//   addField("Category", product.category);
//   addField("Type", product.type);
//   addField("Name", product.name);
//   addField("Generic", product.generic);
//   addField("Composition", product.composition);
//   addField("Description", product.description);
//   addField("Indication", product.indication);
//   addField("Contraindication", product.contraindication);
//   addField("Dosage", product.dosage);
//   addField("Drug Interaction", product.interaction);
//   addField("Side Effects", product.sideeffect);
//   addField("Precautions", product.precaution);
//   addField("Withdrawal Period", product.withdrawal);
//   addField("Storage Condition", product.storage);
//   addField("Packing", product.packing);

//   doc.save(`${product.slug || "product"}-prescription.pdf`);
// };

// import jsPDF from "jspdf";

// export const generatePrescriptionPdf = (product) => {
//   const doc = new jsPDF("p", "mm", "a4");

//   let y = 25;

//   /* ---------- Header ---------- */
//   doc.setFillColor(22, 163, 165); // teal
//   doc.rect(0, 0, 210, 18, "F");

//   doc.setTextColor(255);
//   doc.setFontSize(16);
//   doc.setFont("helvetica", "bold");
//   doc.text("PRODUCT PRESCRIPTION", 105, 12, { align: "center" });

//   doc.setTextColor(0);

//   /* ---------- Helpers ---------- */
//   const addDivider = () => {
//     doc.setDrawColor(220);
//     doc.line(20, y, 190, y);
//     y += 6;
//   };

//   const addField = (label, value) => {
//     if (!value) return;

//     if (y > 270) {
//       doc.addPage();
//       y = 25;
//     }

//     doc.setFontSize(11);
//     doc.setFont("helvetica", "bold");
//     doc.text(label, 20, y);

//     y += 5;

//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(11);
//     doc.text(value, 25, y, { maxWidth: 160 });

//     y += 10;
//   };

//   /* ---------- Product Info ---------- */
//   doc.setFontSize(14);
//   doc.setFont("helvetica", "bold");
//   doc.text(product.name || "Product Name", 20, y);
//   y += 8;

//   doc.setFontSize(11);
//   doc.setFont("helvetica", "italic");
//   doc.text(product.generic || "", 20, y);
//   y += 8;

//   addDivider();

//   /* ---------- Sections ---------- */
//   addField("Category", product.category);
//   addField("Type", product.type);
//   addField("Composition", product.composition);
//   addField("Description", product.description);

//   addDivider();

//   addField("Indication", product.indication);
//   addField("Contraindication", product.contraindication);
//   addField("Dosage & Administration", product.dosage);
//   addField("Drug Interaction", product.interaction);
//   addField("Side Effects", product.sideeffect);
//   addField("Precautions", product.precaution);

//   addDivider();

//   addField("Withdrawal Period", product.withdrawal);
//   addField("Storage Condition", product.storage);
//   addField("Packing", product.packing);

//   /* ---------- Footer ---------- */
//   doc.setFontSize(9);
//   doc.setTextColor(120);
//   doc.text("Generated automatically • For professional use only", 105, 290, {
//     align: "center",
//   });

//   doc.save(`${product.slug || "product"}-prescription.pdf`);
// };


import jsPDF from "jspdf";

export const generatePrescriptionPdf = (product) => {
  const doc = new jsPDF("p", "mm", "a4");

  let y = 28;

  /* ---------- Utilities ---------- */
  const pageCheck = (space = 18) => {
    if (y + space > 275) {
      doc.addPage();
      y = 28;
      drawAccent();
    }
  };

  const drawAccent = () => {
    doc.setDrawColor(180, 150, 90); // muted gold
    doc.setLineWidth(0.8);
    doc.line(20, 18, 190, 18);
  };

  const section = (title) => {
    pageCheck(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(title.toUpperCase(), 20, y);
    y += 4;

    doc.setDrawColor(220);
    doc.setLineWidth(0.3);
    doc.line(20, y, 190, y);
    y += 10;
  };

  const field = (label, value) => {
    if (!value) return;
    pageCheck(22);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(label, 20, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(value, 20, y + 6, { maxWidth: 170 });

    y += 16;
  };

  /* ---------- Header ---------- */
  drawAccent();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(product.name || "Product Name", 20, y);
  y += 8;

  doc.setFont("helvetica", "italic");
  doc.setFontSize(12);
  doc.setTextColor(90);
  doc.text(product.generic || "", 20, y);
  y += 14;

  doc.setTextColor(0);

  /* ---------- Content ---------- */
  section("Product Overview");
  field("Category", product.category);
  field("Product Type", product.type);
  field("Composition", product.composition);
  field("Description", product.description);

  section("Clinical Information");
  field("Indication", product.indication);
  field("Contraindication", product.contraindication);
  field("Dosage & Administration", product.dosage);
  field("Drug Interaction", product.interaction);
  field("Side Effects", product.sideeffect);
  field("Precautions", product.precaution);

  section("Handling & Storage");
  field("Withdrawal Period", product.withdrawal);
  field("Storage Condition", product.storage);
  field("Packing", product.packing);

  /* ---------- Footer ---------- */
  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.text(
    "Confidential pharmaceutical information • Generated digitally",
    105,
    290,
    { align: "center" },
  );

  doc.save(`${product.slug || "product"}-premium.pdf`);
};
