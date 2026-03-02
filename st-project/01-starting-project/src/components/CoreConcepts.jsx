import CoreConcept from './CoreConcept';

export default function CoreConcepts({ concepts }) {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {concepts.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
