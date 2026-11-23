'use client';

import { motion } from 'framer-motion';
import SpecularSurface from '@/components/reactbits/SpecularSurface';
import type { FunFact } from '@/types';

function FactIcon({ icon }: { icon: FunFact['icon'] }) {
  const common = {
    className: 'w-6 h-6',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24',
    'aria-hidden': true,
  } as const;

  switch (icon) {
    case 'sport':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
          <path strokeWidth={1.5} strokeLinejoin="round" d="M12 7l4 3-1.5 4.5h-5L8 10z M12 7V3 M16 10l4.5-1.5 M14.5 14.5l2.5 4 M9.5 14.5l-2.5 4 M8 10L3.5 8.5" />
        </svg>
      );
    case 'book':
      return (
        <svg {...common}>
          <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 6.25C10.4 5 8.2 4.5 4 4.5v13c4.2 0 6.4.5 8 1.75 1.6-1.25 3.8-1.75 8-1.75v-13c-4.2 0-6.4.5-8 1.75zm0 0v13" />
        </svg>
      );
    case 'game':
      return (
        <svg {...common}>
          <path strokeWidth={1.5} strokeLinejoin="round" d="M7 8h10a4 4 0 014 4v1.5a3.5 3.5 0 01-6.3 2.1L14 15h-4l-.7.6A3.5 3.5 0 013 13.5V12a4 4 0 014-4z" />
          <path strokeWidth={1.5} strokeLinecap="round" d="M8 11v3M6.5 12.5h3" />
          <circle cx="15.5" cy="11.5" r="0.75" fill="currentColor" />
          <circle cx="17" cy="13.5" r="0.75" fill="currentColor" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
          <path strokeWidth={1.5} d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z" />
        </svg>
      );
    default:
      return null;
  }
}

export function FunFacts({ facts }: { facts: FunFact[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {facts.map((fact, i) => (
        <motion.li
          key={fact.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
          whileHover={{ y: -4 }}
          className="h-full"
        >
          <SpecularSurface
            radius={16}
            tintOpacity={0.05}
            blur={8}
            lineColor="#a5f3fc"
            baseColor="#3f3f56"
            className="h-full"
          >
            <div className="p-5">
              <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan mb-3">
                <FactIcon icon={fact.icon} />
              </span>
              <h3 className="text-white font-semibold mb-1">{fact.title}</h3>
              <p className="text-gray-400 text-sm">{fact.text}</p>
            </div>
          </SpecularSurface>
        </motion.li>
      ))}
    </ul>
  );
}
