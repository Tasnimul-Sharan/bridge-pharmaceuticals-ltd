export const productDetailsData = [
  {
    slug: "aceten",
    name: "Aceten",
    generic: "Acetylcysteine",
    therapeuticClass: "Respiratory Care",
    images: [
      "/products/aceten/main.png",
      "/products/aceten/1.png",
      "/products/aceten/2.png",
      "/products/aceten/3.png",
    ],

    prescribingPdf: "/pdfs/aceten-prescribing.pdf",

    description: `Aceten is a preparation of Acetylcysteine. Acetylcysteine is an antidote for the treatment of acetaminophen overdose. It is the N-acetyl derivative of the naturally occurring amino acid cysteine.`,

    indications: `Indicated for pulmonary conditions requiring viscosity reduction of bronchial secretions such as bronchitis, emphysema and mucoviscidosis.`,

    dosage: `Adults: 600 mg once daily. Children: As directed by physician.`,

    drugInteraction: null, // 🔥 ADD THIS
    contraindications: "None",
    sideEffects: "Generally well tolerated.",
    precautions: "Use with caution in patients with asthma.",
    pregnancy: "Consult physician before use.",
    storage: "Store below 30°C. Protect from light and moisture.",
    packaging: "Effervescent tablets.",
  },

  {
    slug: "abecelib",
    name: "Abeclib™",
    generic: "Abemaciclib",
    therapeuticClass: "Oncology",

    images: ["/products/abecelib/main.png", "/products/abecelib/1.png"],

    prescribingPdf: "/pdfs/abecelib-prescribing.pdf",

    description: `Abeclib™ is a preparation of Abemaciclib. Abemaciclib is an inhibitor of cyclin-dependent kinases 4 and 6 (CDK4 and CDK6)...`,

    indications: `
• In combination with endocrine therapy for HR-positive, HER2-negative early breast cancer.
• In combination with aromatase inhibitor for advanced or metastatic breast cancer.
• As monotherapy after disease progression.
    `,

    dosage: `
• Combination therapy: 150 mg twice daily.
• Monotherapy: 200 mg twice daily.
• Dose modification may be required.
    `,

    contraindications: "None",

    sideEffects: `
• Diarrhea, nausea, vomiting
• Neutropenia, anemia
• Fatigue, headache
    `,

    precautions: `
• Diarrhea management required
• Monitor CBC, LFT
• Risk of ILD / Pneumonitis
• Hepatotoxicity monitoring
• Risk of thromboembolism
• Embryo-fetal toxicity
    `,

    drugInteraction: `
• Avoid strong CYP3A inhibitors (e.g. ketoconazole)
• Avoid strong CYP3A inducers
    `,

    pregnancy: `
Not recommended during pregnancy or lactation.
Breastfeeding should be discontinued.
    `,

    storage: `
Store below 30°C.
Keep away from light and moisture.
    `,

    packaging: `
Abeclib™ 150 mg: 3×10 tablets
Abeclib™ 200 mg: 2×7 tablets
    `,
  },
];
