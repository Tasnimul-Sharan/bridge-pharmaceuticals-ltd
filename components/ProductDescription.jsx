// export default function ProductDescription({ product }) {
//   return (
//     <div className="mt-12 bg-white border rounded-md p-8 text-sm space-y-6">
//       <section>
//         <h3 className="font-semibold mb-2">Description</h3>
//         <p>{product.description}</p>
//       </section>

//       <section>
//         <h3 className="font-semibold mb-2">Indications</h3>
//         <p>{product.indications}</p>
//       </section>

//       <section>
//         <h3 className="font-semibold mb-2">Dosage and Administration</h3>
//         <p>{product.dosage}</p>
//       </section>
//     </div>
//   );
// }

export default function ProductDescription({ product }) {
  const sections = [
    ["Description", product.description],
    ["Indications", product.indications],
    ["Dosage & Administration", product.dosage],
    ["Contraindications", product.contraindications],
    ["Side Effects", product.sideEffects],
    ["Precautions & Warnings", product.precautions],
    ["Drug Interaction", product.drugInteraction],
    ["Use in Pregnancy & Lactation", product.pregnancy],
    ["Storage Condition", product.storage],
    ["Packaging", product.packaging],
  ];

  return (
    <div className="mt-12 bg-white border rounded-md p-8 text-sm space-y-6">
      {/* {sections.map(
        ([title, content]) =>
          content && (
            <section key={title}>
              <h3 className="font-semibold mb-2 uppercase text-gray-800">
                {title}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {content}
              </pre>
            </section>
          ),
      )} */}
      {sections.map(
        ([title, content]) =>
          content && (
            <section key={title}>
              <h3 className="font-semibold mb-2 uppercase text-secondary">
                {title}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {content}
              </pre>
            </section>
          ),
      )}
    </div>
  );
}
