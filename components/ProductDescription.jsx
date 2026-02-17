export default function ProductDescription({ product }) {
  const sections = [
    ["Description", product.description],
    ["Composition", product.composition],
    ["Indication", product.indication],
    ["Dosage & Administration", product.dosage],
    ["Contraindication", product.contraindication],
    ["Side Effects", product.sideeffect],
    ["Precautions & Warnings", product.precaution],
    ["Drug Interaction", product.interaction],
    ["Withdrawal Period", product.withdrawal],
    ["Storage Condition", product.storage],
    ["Packing", product.packing],
  ];

  return (
    <div className="mt-12 bg-white border rounded-md p-8 text-sm space-y-6">
      {sections.map(
        ([title, content]) =>
          content && (
            <section key={title}>
              <h3 className="font-semibold mb-2 text-secondary">{title}</h3>
              <pre className="whitespace-pre-wrap text-gray-700 text-base leading-relaxed">
                {content}
              </pre>
            </section>
          ),
      )}
    </div>
  );
}
