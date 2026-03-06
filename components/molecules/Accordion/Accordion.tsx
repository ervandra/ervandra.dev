import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Accordion({ data, company, currentJob = false }) {
  const initialState = { activeAccordion: 0 };
  const [state, setMyState] = useState(initialState);
  const setState = newState => {
    setMyState(prevState => ({ ...prevState, ...newState }));
  };
  const { activeAccordion } = state;

  return (
    <div className="eh-accordion">
      {data.length &&
        data.map((work, index) => {
          const active = index === activeAccordion;
          return (
            <div className="workplace-content mb-8" key={work.year + index}>
              <div
                className={`eh-accordion__head cursor-pointer text-black ${
                  active ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                }`}
                onClick={() => setState({ activeAccordion: index })}>
                <h3 className="mb-0 text-xl leading-tight font-bold flex items-center flex-wrap">
                  {currentJob && index === 0 ? (
                    <span className="inline-block bg-orange-100 text-gray-900 rounded text-xs px-1 align-middle border border-orange-300 mr-2 uppercase">
                      Current
                    </span>
                  ) : (
                    <span className="inline-block bg-gray-100 text-gray-500 rounded text-xs px-1 align-middle border border-gray-300 mr-2 animate-pulse uppercase">
                      Past role
                    </span>
                  )}
                  {work.title} <span className="ml-1 text-grey-700 inline-block">@{company}</span>
                </h3>
                <h4 className="text-lg mb-4 text-gray-700">
                  <small>{work.year}</small>
                </h4>
              </div>

              <div className={`eh-accordion__content ${active ? 'active' : 'hidden'}`}>
                {active && (
                  <motion.div
                    className="job-desc"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {work.summary.map((sum, idx) => (
                      <motion.h6
                        className="font-light my-2 lg:text-lg flex"
                        key={sum + idx}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        <span className="text-warning text-red-900 mr-4">⌲</span>
                        <span>{sum}</span>
                      </motion.h6>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}
