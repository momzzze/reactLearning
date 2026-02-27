import { useState } from 'react';
import { CoreConcept } from './components/CoreContent.jsx';
import { Header } from './components/Header.jsx';
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';

function App() {
  const [tabContent, setTabContent] = useState('');

  function handleClick(selectedTab) {
    setTabContent(selectedTab);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept
                key={concept.title}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onClick={() => handleClick('components')}
              isSelected={tabContent === 'components'}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => handleClick('jsx')}
              isSelected={tabContent === 'jsx'}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => handleClick('props')}
              isSelected={tabContent === 'props'}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => handleClick('state')}
              isSelected={tabContent === 'state'}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            {!tabContent ? (
              <p>Please select a topic</p>
            ) : (
              <>
                <h3>{EXAMPLES[tabContent].title}</h3>
                <p>{EXAMPLES[tabContent].description}</p>
                <pre>
                  <code>{EXAMPLES[tabContent].code}</code>
                </pre>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
