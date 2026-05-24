import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';

export default function NavigationMenu() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigationColumns = [
    [
      { label: 'HOME', path: '/' },
      { label: 'ABOUT US', path: '/about' },
      { label: 'COLLEGE TRAINING PROGRAMMES', path: '/college-programmes' },
      { label: 'SCHOOL TRAINING PROGRAMMES', path: '/school-programmes' },
      { label: 'HEALTH CAMPS', path: '/health-camps' },
    ],
    [
      { label: 'OTHER TRAINING PROGRAMMES', path: '/other-programmes' },
      { label: 'AGRICULTURE & ALLIED BUSINESS TRAINING', path: '/agriculture' },
      { label: 'WOMEN EMPOWERMENT', path: '/women-empowerment' },
      { label: 'ENVIRONMENTAL DRIVES', path: '/environmental' },
      { label: 'AWARDS & RECOGNITIONS', path: '/awards' },
    ],
    [
      { label: 'SUCCESS STORIES', path: '/success-stories' },
      { label: 'TESTIMONIALS', path: '/testimonials' },
      { label: 'JOIN US SOCIALLY', path: '/join-socially' },
      { label: 'GOVT. RESOLUTIONS (GRs)', path: '/govt-resolutions' },
      { label: 'PUBLICATIONS', path: '/publications' },
    ],
    [
      { label: 'PRESS NOTES', path: '/press-notes' },
      { label: 'VERIFY OUR CERTIFICATE', path: '/verify-certificate' },
      { label: 'EVENTS / COMPETITIONS', path: '/events' },
      { label: 'CSR & INSTITUTIONAL COLLABORATION', path: '/csr' },
      { label: 'CONTACT US', path: '/contact' },
    ],
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#07111f] text-white shadow-md" aria-label="Primary navigation">
      <div className="container mx-auto px-4 pb-4 lg:px-6">
        <div className="border-t border-white/10 pt-4">
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            className="flex w-full items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-xs font-bold uppercase tracking-normal text-white hover:border-white/20 hover:bg-white/[0.06]"
          >
            <span className="inline-flex items-center gap-2">
              <Menu className="h-4 w-4 stroke-[1.8]" aria-hidden="true" />
              Navigation
            </span>
            <ChevronDown
              className={`h-4 w-4 stroke-[1.8] transition-transform ${isOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>

          {isOpen && (
            <div className="mt-3 grid grid-cols-1 gap-x-8 gap-y-1 rounded-md border border-white/10 bg-[#0b1626] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.32)] sm:grid-cols-2 lg:grid-cols-4">
              {navigationColumns.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className="space-y-1 border-white/10 lg:border-l lg:pl-6 first:lg:border-l-0 first:lg:pl-0"
                >
                  {column.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-sm px-2 py-2 text-[11px] font-semibold uppercase leading-tight tracking-normal transition-colors ${
                        isActive(item.path)
                          ? 'bg-white/10 text-[#ffcf3f]'
                          : 'text-slate-200 hover:bg-white/5 hover:text-[#ffcf3f]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
